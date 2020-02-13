let knex;

class Base {
    constructor(thang) {
        Object.assign(this, thang)
    }

    

    static establishConnection(connection) {
        knex = connection
    }

    static get tableName() {
        return this.name.toLowerCase();
    }

    // find by id
    static async find(id) {
        const [thang] = await knex(this.tableName + 's').where({ id: id });
        return new this(thang);
    }

    static async where(attributes){
        return (await knex(this.tableName + 's').where(attributes).map( record => new this(record)))
    }

    static async findBy(attributes){
        let results = await this.where(attributes)
        return results[0]
    }

    // => self.all
    static async all() {
        const arr = await knex(this.tableName + 's');
        return arr.map(thing => new this(thing));
    }

    // takes an obj and creates a new record in db
    static async create(obj) {
        const [recordId] = await knex(this.tableName + 's').insert(obj)
        const [record] = await knex(this.tableName + 's').where({ id: recordId })
        return new this(record);
    }

    // INSTANCE method that take obj and updates that record
    async update(obj) {
        await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id }).update(obj);
        const [record] = await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id })
        return new this.constructor(record);
    }

    async delete() {
        await knex(this.constructor.name.toLowerCase() + 's').where({ id: this.id }).del();
    }

    static belongsTo(Class) {
        let name = Class.tableName
        this.prototype[name] = async function () {
            const [record] = await knex(name.toLowerCase() + 's').where({ id: this[`${name}_id`] });
            return new Class(record);
        }
    }

    // static hasMany(name) {
    //     this.prototype[name] = async function () {
    //         const arr = await knex(name).where({ [`${this.constructor.tableName}_id`]: this.id });
    //         return arr;
    //     }
    // }

    static hasMany(Class, opts = {}) {
        const name = Class.tableName + 's'
        if (opts.through) {
            this.prototype[name] = async function() {
                try {
                    const arr = await knex(name)
                            .innerJoin(opts.through, `${name}.id`, `${opts.through}.${name.substr(0, name.length -1)}_id`)
                            .where({ [`${opts.through}.${this.constructor.tableName}_id`]: this.id })
                            .select(`${name}.*`)
                            .groupBy(`${name}.id`)
                        return arr.map( item => new Class(item))
                } catch(err) {
                    console.error('oh no', err);
                }
                
            }
            return 'ayy lmao';
        }

        this.prototype[name] = async function() {
            const arr = await knex(name).where({ [`${this.constructor.tableName}_id`]: this.id});
            return arr.map( item => new Class(item))
        }
    }

}

module.exports = Base
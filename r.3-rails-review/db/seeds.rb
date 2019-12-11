Car.destroy_all
Owner.destroy_all

nathan = Owner.create({
    name: 'Nathan'
})
vivian = Owner.create({
    name: 'Vivian'
})
joe = Owner.create({
    name: 'Joe'
})
alex = Owner.create({
    name: 'Alex'
})

Car.create({
    brand: 'Bugatti',
    model: 'Chrion',
    price: 25000,
    color: 'Black',
    owner_id: nathan.id
})

Car.create({
    brand: 'Nissan',
    model: 'Rogue',
    price: 25,
    color: 'Midnight Blue',
    owner_id: vivian.id
})

Car.create({
    brand: 'Porsche',
    model: 'GT3',
    price: 35,
    color: 'Red',
    owner_id: alex.id
})

Car.create({
    brand: 'Tesla',
    model: 'Cybertruck',
    price: 50,
    color: 'Silver',
    owner_id: joe.id
})
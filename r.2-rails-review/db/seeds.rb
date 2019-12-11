Car.destroy_all
User.destroy_all

david = User.create({
    name: 'David'
})

mubarak = User.create({
    name: 'Mubarak'
})

george = User.create({
    name: 'George'
})

Car.create({
    make: 'Lamborghini',
    model: 'Aventador',
    year: '2020',
    user_id: mubarak.id
})

Car.create({
    make: 'Kia',
    model: 'Stinger',
    year: '2020',
    user_id: david.id
})

Car.create({
    make: 'Ford',
    model: 'Mustang',
    year: '2020',
    user_id: george.id
})
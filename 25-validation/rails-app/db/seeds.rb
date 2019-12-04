Pet.destroy_all
Owner.destroy_all

eli = Owner.create({ first_name: 'Eli', last_name: 'L' })
david = Owner.create({ first_name: 'David', last_name: 'J' })

# We directly make the relationship
Pet.create({ owner_id: eli.id, name: 'Sunday', noise: 'Arf' })

# ActiveRecord makes the relationship
# Pet.create({ owner: eli, name: 'Sunday', noise: 'Arf' })
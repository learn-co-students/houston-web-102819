Pet.destroy_all
Owner.destroy_all

eli = Owner.create({ name: 'Eli' })
david = Owner.create({ name: 'David' })

# We directly make the relationship
Pet.create({ owner_id: eli.id, name: 'Sunday', noise: 'Arf' })

# ActiveRecord makes the relationship
# Pet.create({ owner: eli, name: 'Sunday', noise: 'Arf' })
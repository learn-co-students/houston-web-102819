# SELECT * FROM owners 
# JOIN dogs ON owners.id = dogs.owner_id
# JOIN breeds ON breeds.id = dog.breed_id
# WHERE owner.id = 1

class Owner

    def breeds
        Dog.all.each do | dog |
            if(dog.owner == self)
                results.push(dog.breed)
            end
        end 
    end

end
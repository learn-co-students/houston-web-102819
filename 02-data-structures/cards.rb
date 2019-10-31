cards = [
    {
        number: 6, 
    },
    {
        number: 5, 
    },
    {
        number: 10,
    },
    {
        number: 4, 
    }
]

def find_highest_numbered_card(x)
    highest_numbered_card = x[0] # { number: 0 } 
    x.each do | card |
        if highest_numbered_card[:number] < card[:number]
            highest_numbered_card = card
        # else 
        #     highest_numbered_card = highest_numbered_card
        end
    end
    return highest_numbered_card
end

new_array = [ 
    {
        number: 5
    } 
]

highest_card = find_highest_numbered_card(new_array)

p "The highest Card Number is: #{highest_card[:number]}"
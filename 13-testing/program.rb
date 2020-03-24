require_relative './config/environment.rb'

prompt = TTY::Prompt.new

ActiveRecord::Base.logger = nil

owner = Owner.first

while true

    user_input = prompt.select('What would you like to do?', [
        "Check Youngest Dog",
        "Check all Dogs"
    ])

    if(user_input == "Check Youngest Dog")
        puts "#{owner.youngest_dog.name} is fine"
    end

    if(user_input == "Check all Dogs")
        puts "Tess, Rizzo, Pip are fine"
    end
end
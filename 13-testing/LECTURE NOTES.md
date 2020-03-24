`rspec --init`



> Spec_helper.rb

```
ENV['ACTIVE_RECORD_ENV'] = 'test'

require_relative('../config/environment.rb')

require_relative('../db/schema.rb')
```



> environment.rb

```
if(ENV["ACTIVE_RECORD_ENV"] == "test")
  ActiveRecord::Base.logger = nil
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: ":memory:"
  )
else
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: "db/development.sqlite"
  )
end
```











### Learning Goals

- Define different software testing approaches 
- Write a unit test using RSpec
- Identify test cases to help us write better code

 

## Vocabulary
* Development Testing (what we're talking about to day)
    * Test Driven Development
      - Writing tests that describe how your could _should_ work
    - Unit Testing
      - Test a specific thing ( or _unit_)  in your code (like a class or function) 
    - Integration Testing
      - Test how multiple units work _together_
    - Regression Testing
      - Running any test that has worked previously to ensure that a change to the code has not broken an existing feature
* Alpha Testing

    - Testing an application before it reaches end users
* Beta Testing

    - Initial testing after an application reaches end users

```ruby 

require_relative '../app/hero.rb'

describe Hero do
  thor = Hero.new([
    {
      name: 'Super Strength',
      coolness: 3
    },
    {
      name:'Flight',
      coolness: 5
    },
    {
      name: 'Lightning Blast',
      coolness: 10
    }
    ])

  it "hero abilities function gives back an array" do

    expect(thor.abilities).to(eq([
        {
            name: 'Super Strength',
            coolness: 3
        },
        {
            name:'Flight',
            coolness: 5
        },
        {
            name: 'Lightning Blast',
            coolness: 10
        }
    ]))
  end

  it "hero's function add_ability takes in a Hash and adds it to the hero's abilities" do
    expect(thor.add_ability({
      name: "Summon Hammer",
      coolness: 10
    })).to(include({
        name: "Summon Hammer",
        coolness: 10
      }))
  end

  it "malformed input data for add_ability does not add it to all abilities" do
    expect(thor.add_ability(2)).not_to(include(2))
  end
end
```
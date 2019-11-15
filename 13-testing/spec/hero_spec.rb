
describe(Hero) do

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
    

    it("should have a coolest ability method") do 

        expect(thor.coolest_ability).to eq ({
            name: 'Lightning Blast',
            coolness: 10
        })

    end

end


describe("Math") do 

    it('should be able to add numbers') do 

        expect(5 + 5).to eq 10

    end

    # it('should be able to add numbers re') do 

    #     expect(5 + 5).to eq 10

    # end

end
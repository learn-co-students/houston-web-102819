class Airline
  
    def initialize(name)
      @name = name
        @passengers = []
    end
    
    def purchase_ticket(passenger_name)
      @passengers.push(passenger_name)
      return "Thank you for flying #{@name}, #{passenger_name}"
    end
    
  end
  
  united = Airline.new("United")

  puts united.purchase_ticket("Alan")
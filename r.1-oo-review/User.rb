class User

    @@all = []

    attr_accessor(:name)

    def initialize(name)
        @name = name
        @@all.push(self)
    end

    def purchase(item)
        Purchase.new(self, item)
    end

    # def items
    #     result = []
    #     # Purchase.all => [ (josh, grapes) ] 
    #     Purchase.all.each do | purchase | # (josh, grapes)
    #         # purchase.user => josh 
    #         # self  => josh
    #         if(purchase.user == self)
    #             # purchase.item => grapes
    #             result.push(purchase.item)
    #         end
    #     end
    #     return result # => [ grapes ]
    # end


    def items
        purchases = Purchase.all.select do | purchase |
            purchase.user == self
        end
        return purchases.map do | purchase |
            purchase.item
        end
    end


    # def self.find_by_name(name_string) # => "George"
    #     # User.all => [#<User:0x00007fe74a9280e0 @name="Josh">, #<User:0x00007fe74a928068 @name="George">, #<User:0x00007fe74a928018 @name="Nathan">]
    #     User.all.each do | user | # user => #<User:0x00007fe74a928068 @name="George">
    #         # user.name => "George"
    #         if(user.name == name_string) 
    #             return user # #<User:0x00007fe74a928068 @name="George">
    #         end
    #     end
    #     return nil
    # end

    def self.find_by_name(name_string) # => "George"
        return User.all.find do | user |
            user.name == name_string
        end
    end

    def self.all
        return @@all
    end

end
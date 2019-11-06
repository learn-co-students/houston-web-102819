class Item

    @@all = []

    attr_accessor(:name)

    def initialize(name)
        @name = name
        @@all.push(self)
    end

    def users
        result = []
        # Purchase.all => [ (george, grapes) ] 
        Purchase.all.each do | purchase | # (george, grapes)
            # purchase.item => grapes 
            # self  => grapes
            if(purchase.item == self)
                # purchase.user => george
                result.push(purchase.user)
            end
        end
        return result # => [ george ]
    end

    def self.all
        return @@all
    end

end
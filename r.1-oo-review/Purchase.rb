class Purchase

    @@all = []

    attr_accessor(:user, :item)

    def initialize(user, item)
        @user = user
        @item = item
        @@all.push(self)
    end

    def self.all
        return @@all
    end

end
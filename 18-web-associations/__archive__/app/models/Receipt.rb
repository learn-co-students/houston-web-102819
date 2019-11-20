class Receipt < ActiveRecord::Base
    belongs_to(:restaurant)
    belongs_to(:customer)

    # Short cut for something like:
    # def restaurant
    #     self.query("
    #         SELECT * restaurants
    #         WHERE restaurants.id = #{self.restaurant_id}
    #     ")
    # end
end
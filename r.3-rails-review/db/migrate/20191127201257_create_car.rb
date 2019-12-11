class CreateCar < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |table|
      table.string(:brand)
      table.string(:model)
      table.float(:price)
      table.string(:color)
      table.integer(:owner_id)
    end
  end
end

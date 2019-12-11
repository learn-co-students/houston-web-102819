class CreateCar < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |table|
      table.string(:model)
      table.string(:make)
      table.string(:year)
      table.integer(:user_id)
    end
  end
end

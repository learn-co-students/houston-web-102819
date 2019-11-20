class Pantry < ActiveRecord::Migration[5.2]
  def change
    create_table(:pantry_items) do | table |
      table.string(:name)
      table.string(:category)
      table.integer(:quantity)
      table.date(:date_expires)
    end
  end
end

# pantry
#   food
#   spice

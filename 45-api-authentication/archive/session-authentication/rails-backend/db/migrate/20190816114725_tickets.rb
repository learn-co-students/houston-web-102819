class Tickets < ActiveRecord::Migration[5.2]
  def change
    create_table(:tickets) do | table | 
      table.integer(:passenger_id)
      table.integer(:airline_id)
    end
  end
end

class CreateTicketsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:tickets) do | table |
      table.string(:location)
      table.integer(:seat_number)
      table.float(:cost)
      table.integer(:passenger_id)
      table.integer(:airline_id)
    end
  end
end

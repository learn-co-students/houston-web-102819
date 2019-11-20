class CreatePassengerTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:passengers) do | table | 
      table.string(:name)
    end
  end
end

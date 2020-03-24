class CreateDogsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:dogs) do | table |
      table.string(:name)
      table.integer(:breed_id)
      table.integer(:owner_id)
    end
  end
end

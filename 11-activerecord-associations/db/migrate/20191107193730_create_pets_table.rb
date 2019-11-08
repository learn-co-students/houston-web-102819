class CreatePetsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:pets) do | table |
      # table.integer(:id) <-- happens automatically
      table.string(:name)
      table.string(:noise)
    end
  end
end

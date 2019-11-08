class CreateBreedTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:breeds) do | table |
      table.string(:name)
      # table.name(:string)
    end
  end
end

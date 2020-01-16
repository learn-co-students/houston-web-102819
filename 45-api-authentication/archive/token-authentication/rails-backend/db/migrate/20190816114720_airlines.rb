class Airlines < ActiveRecord::Migration[5.2]
  def change
    create_table(:airlines) do | table |
      table.string(:name)
      table.integer(:established)
    end
  end
end

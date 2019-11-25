class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table(:restaurants) do | table |
      table.string(:name)
      table.string(:established)
    end
    create_table(:customers) do | table |
      table.string(:name)
      table.string(:age)
    end
    create_table(:receipts) do | table |
      table.integer(:amount)
      table.integer(:customer_id)
      table.integer(:restaurant_id)
    end
  end
end

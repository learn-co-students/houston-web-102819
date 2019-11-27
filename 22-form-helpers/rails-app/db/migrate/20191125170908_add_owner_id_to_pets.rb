class AddOwnerIdToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :owner_id, :integer
  end
end

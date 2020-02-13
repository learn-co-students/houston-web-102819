class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.string(:destination)
      t.string(:seat_number)
      t.float(:price)
      t.integer(:airline_id)
      t.integer(:user_id)
    end
  end
end

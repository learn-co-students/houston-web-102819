class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :airline_id #, foreign_key: true
      t.integer :traveler_id #, foreign_key: true
      t.timestamps
    end
  end
end

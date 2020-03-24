class CreateBreedsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:breeds) do | breed |
      breed.string(:name)
      breed.float(:average_height)
      # breed.name(:string)
    end
  end
end

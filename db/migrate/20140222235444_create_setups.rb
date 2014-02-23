class CreateSetups < ActiveRecord::Migration
  def change
    create_table :setups do |t|
      t.integer :instrument_id
      t.integer :kit_id
      t.integer :row
    end
  end
end

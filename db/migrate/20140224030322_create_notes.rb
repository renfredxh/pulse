class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :pattern_id
      t.integer :position
      t.integer :volume
      t.boolean :active

      t.timestamps
    end
  end
end

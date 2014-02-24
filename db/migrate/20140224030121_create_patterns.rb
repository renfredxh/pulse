class CreatePatterns < ActiveRecord::Migration
  def change
    create_table :patterns do |t|
      t.integer :rhythm_id
      t.integer :row

      t.timestamps
    end
  end
end

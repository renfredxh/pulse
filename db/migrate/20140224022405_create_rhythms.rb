class CreateRhythms < ActiveRecord::Migration
  def change
    create_table :rhythms do |t|
      t.string :name

      t.timestamps
    end
  end
end

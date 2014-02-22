class CreateKits < ActiveRecord::Migration
  def change
    create_table :kits do |t|
      t.string :name

      t.timestamps
    end
  end
end

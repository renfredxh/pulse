class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|
      t.string :path

      t.timestamps
    end
  end
end

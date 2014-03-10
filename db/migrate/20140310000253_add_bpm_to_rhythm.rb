class AddBpmToRhythm < ActiveRecord::Migration
  def change
    add_column :rhythms, :bpm, :integer
  end
end

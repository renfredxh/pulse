class AddInstrumentToSample < ActiveRecord::Migration
  def change
    add_column :samples, :instrument_id, :integer
  end
end

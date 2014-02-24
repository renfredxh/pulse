class AddSampleToInstruments < ActiveRecord::Migration
  def change
    add_column :instruments, :sample, :string
  end
end

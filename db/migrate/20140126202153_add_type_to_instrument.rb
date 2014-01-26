class AddTypeToInstrument < ActiveRecord::Migration
  def change
    add_column :instruments, :type, :string
  end
end

class AddCategoryToInstrument < ActiveRecord::Migration
  def change
    add_column :instruments, :category, :string
  end
end

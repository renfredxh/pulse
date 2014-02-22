class CreateJoinTableKitInstrument < ActiveRecord::Migration
  def change
    create_join_table :kits, :instruments do |t|
      # t.index [:kit_id, :instrument_id]
      # t.index [:instrument_id, :kit_id]
    end
  end
end

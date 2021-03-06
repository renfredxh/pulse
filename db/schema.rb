# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140310000253) do

  create_table "DrumSets_Instruments", id: false, force: true do |t|
    t.integer "instrument_id", null: false
    t.integer "drum_set_id",   null: false
  end

  add_index "DrumSets_Instruments", ["drum_set_id", "instrument_id"], name: "index_DrumSets_Instruments_on_drum_set_id_and_instrument_id"

  create_table "drum_sets", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "instruments", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "type"
    t.string   "category"
    t.string   "sample"
  end

  create_table "kits", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notes", force: true do |t|
    t.integer  "pattern_id"
    t.integer  "position"
    t.integer  "volume"
    t.boolean  "active"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patterns", force: true do |t|
    t.integer  "rhythm_id"
    t.integer  "row"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rhythms", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "bpm"
  end

  create_table "samples", force: true do |t|
    t.string   "path"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "instrument_id"
  end

  create_table "setups", force: true do |t|
    t.integer "instrument_id"
    t.integer "kit_id"
    t.integer "row"
  end

end

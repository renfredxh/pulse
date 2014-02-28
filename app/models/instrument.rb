class Instrument < ActiveRecord::Base
    has_many :setups
    has_many :kits, through: :setups
end

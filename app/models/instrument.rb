class Instrument < ActiveRecord::Base
    has_many :samples, dependent: :destroy
    has_many :setups
    has_many :kits, through: :setups
end

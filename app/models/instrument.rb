class Instrument < ActiveRecord::Base
    has_many :samples, dependent: :destroy
    has_and_belongs_to_many :kits
end

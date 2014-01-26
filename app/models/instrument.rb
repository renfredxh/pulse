class Instrument < ActiveRecord::Base
    has_many :samples, dependent: :destroy
end

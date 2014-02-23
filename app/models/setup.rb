class Setup < ActiveRecord::Base
  belongs_to :kit
  belongs_to :instrument
end

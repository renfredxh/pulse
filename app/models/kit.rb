class Kit < ActiveRecord::Base
  has_many :setups
  has_many :instruments, through: :setups
end

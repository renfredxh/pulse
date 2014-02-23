class Kit < ActiveRecord::Base
  has_many :setups, order: "row"
  has_many :instruments, through: :setups
end

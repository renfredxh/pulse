class Pattern < ActiveRecord::Base
  belongs_to :rhythm
  has_many :notes, dependent: :destroy
end

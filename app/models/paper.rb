class Paper < ApplicationRecord
  belongs_to :user
  has_many :sections ,dependent: :destroy
  has_many :citations, through: :sections, dependent: :destroy
end

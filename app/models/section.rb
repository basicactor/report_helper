class Section < ApplicationRecord
  belongs_to :paper
  has_many :citations, dependent: :destroy
end

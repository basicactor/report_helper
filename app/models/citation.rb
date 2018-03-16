class Citation < ApplicationRecord
  belongs_to :paper
  belongs_to :section
end

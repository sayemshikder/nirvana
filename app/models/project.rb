class Project < ApplicationRecord
  validates :name, :team_id, presence: true

  has_many :tasks

  belongs_to :team

  has_many :members,
    through: :team
end

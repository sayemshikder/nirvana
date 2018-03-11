class Team < ApplicationRecord
  validates :name, :leader_id, presence: true

  has_many :team_memberships

  has_many :projects

  has_many :members,
    through: :team_memberships,
    source: :user

  belongs_to :leader,
    class_name: "User"

  has_many :tasks,
    through: :projects
end

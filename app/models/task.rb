class Task < ApplicationRecord
  validates :creator, :project_id, presence: true
  validates :completed, inclusion: [true, false]

  belongs_to :project

  has_one :team,
    through: :project

  belongs_to :creator,
    class_name: 'User'

  belongs_to :assignee,
    class_name: 'User'
end

class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token
  before_save :set_empty_avatar_url_to_random_value

  has_many :team_memberships

  has_many :teams,
           through: :team_memberships

  has_many :projects,
           through: :teams

  has_many :assigned_tasks,
           class_name: "Task",
           foreign_key: :assignee_id # TODO: migrate assignee to assignee_id

  has_many :created_tasks,
           class_name: "Task",
           foreign_key: :creator_id

  has_many :led_teams,
           foreign_key: :leader_id,
           class_name: "Team"

  has_many :teammates,
           -> { distinct },
           through: :teams,
           source: :members

  has_attached_file :avatar, styles: {
    big: "180x180>",
    small: "30x30#"
  }

  validates_attachment_content_type(
    :avatar,
    content_type: /\Aimage\/.*\Z/
  )

  AVATAR_THEMES = ["sugarsweets", "heatwave", "daisygarden", "seascape",
                   "summerwarmth", "bythepool", "duskfalling", "frogideas",
                   "berrypie"].freeze

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user if user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= reset_session_token!
  end

  def set_empty_avatar_url_to_random_value
    if self.avatar.url == "/avatars/original/missing.png"
      self.avatar = URI.parse(
        "http://tinygraphs.com/isogrids/" +
        "#{self.email}?theme=#{AVATAR_THEMES.sample}&numcolors=4&size=180&fmt=svg"
      )
    end
  end
end

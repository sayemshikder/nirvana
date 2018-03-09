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

  has_many :led_teams,
    foreign_key: :leader_id,
    class_name: "Team"

  has_many :teammates,
    -> { distinct },
    through: :teams,
    source: :members

  AVATAR_THEMES = ["sugarsweets", "heatwave", "daisygarden", "seascape",
            "summerwarmth", "bythepool", "duskfalling", "frogideas",
            "berrypie"]

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
    if self.avatar_url.nil? || self.avatar_url.empty?
      self.avatar_url = "http://tinygraphs.com/labs/isogrids/hexa/" +
          "#{self.email}?theme=#{AVATAR_THEMES.sample}&numcolors=4&size=180&fmt=svg"
    end
  end
end

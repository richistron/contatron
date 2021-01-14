class ResetPassword < ApplicationRecord
  belongs_to :user
  has_secure_token
  before_create :set_expiration_date
  validates_presence_of :user

  private
  def set_expiration_date
    self.expires = timestamp
  end

  def timestamp
    date = DateTime.now + 30.minutes
    date.to_s
  end
end

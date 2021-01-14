require "test_helper"

class ResetPasswordTest < ActiveSupport::TestCase
  test "valid ResetPasswordTest" do
    reset = ResetPassword.create! user: User.first
    assert reset.valid?
  end

  test "30 minutes expiration time" do
    reset = ResetPassword.create! user: User.first
    plus_minutes = DateTime.now + 29.minutes
    assert DateTime.parse(reset.expires.to_s) > plus_minutes
  end
end

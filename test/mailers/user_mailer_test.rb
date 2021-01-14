require "test_helper"

class UserMailerTest < ActionMailer::TestCase
  test "password_reset" do
    user = User.first
    token = ResetPassword.create! user: user
    mail = UserMailer.password_reset User.first, token.token
    assert_equal "Password reset", mail.subject
    assert_equal [user.email], mail.to
    assert_equal [ENV['MAILER_ADDRESS']], mail.from
    # assert_match "Hi", mail.body.encoded
  end
end

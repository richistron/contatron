class UserMailer < ApplicationMailer
  def password_reset(user, token)
    @url = "#{set_new_password_url}?token=#{token}"
    mail to: user.email
  end
end

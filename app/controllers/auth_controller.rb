class AuthController < ApplicationController
  def login
  end

  def authenticate
    user = User.where(email: login_params[:email]).first
    if user.nil? || !user.authenticate(login_params[:password])
      flash[:error] = 'Invalid email/password combination'
      redirect_to login_url
    else
      session[:user_id] = user.id
      redirect_to root_url, notice: 'Login success'
    end
  end

  def logout
    reset_session
    redirect_to root_url, notice: 'Logout success'
  end

  private

  def login_params
    params.permit :email, :password
  end
end

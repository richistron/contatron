class AuthController < ApplicationController
  def login
    @email = login_params[:email]
    @password = login_params[:password]

    authenticate if @email && @password
  end

  def logout
    reset_session
    redirect_to root_path, notice: 'Logout success'
  end

  private

  def login_params
    params.permit :email, :password, :commit, :authenticity_token
  end

  def authenticate
    user = User.where(email: login_params[:email]).first
    if user.nil? || !user.authenticate(login_params[:password])
      flash[:error] = 'Invalid email/password combination'
    else
      session[:user_id] = user.id
      redirect_to root_path, notice: 'Login success'
    end
  end
end

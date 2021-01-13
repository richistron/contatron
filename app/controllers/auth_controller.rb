class AuthController < ApplicationController
  def login
    @email = login_params[:email]
    @password = login_params[:password]

    if @email && @password
      respond_to do |format|
        format.json { login_json_response }
        format.html { login_html_response }
      end
    end
  end

  def logout
    reset_session
    redirect_to root_path, notice: 'Logout success'
  end

  private

  def login_params
    params.permit :email, :password, :commit, :authenticity_token, :auth
  end

  def is_session_valid?
    user = User.where(email: login_params[:email]).first
    valid_password = user && user.authenticate(login_params[:password])

    if valid_password
      session[:user_id] = user.id
      yield user
    else
      yield
    end
  end

  def login_html_response
    is_session_valid? do |user|
      if user
        redirect_to root_path, notice: 'Login success'
      else
        flash[:error] = 'Invalid email/password combination'
      end
    end
  end

  def login_json_response
    is_session_valid? do |user|
      if user
        render json: { user: user_response(user) }, status: :created
      else
        render json: { error: 'Invalid email/password combination' }, status: :unauthorized
      end
    end
  end

  def user_response(user)
    {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    }
  end
end

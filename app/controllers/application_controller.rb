class ApplicationController < ActionController::Base
  private

  def current_user_id
    @current_user_id = session[:user_id] || nil
  end

  def authenticated_only
    redirect_to login_url unless current_user_id
  end
end

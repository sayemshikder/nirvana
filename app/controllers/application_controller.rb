class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    current_session_token = session[:session_token]
    return nil unless current_session_token
    @current_user ||= User.find_by(session_token: current_session_token)
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    unless logged_in?
      render json: { base: ["Must be logged in"] }, status: 401
    end
  end
end

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)

      @team_ids = if @user.teams then @user.teams.pluck(:id) else [] end
      @project_ids = if @user.projects then @user.projects.pluck(:id) else [] end

      render "api/users/show"
    else
      render json: ["Incorrect email or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No active session found, unable to logout"], status: 404
    end
  end
end

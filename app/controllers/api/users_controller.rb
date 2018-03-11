class Api::UsersController < ApplicationController
  def index
    @user = current_user

    if @user
      @teammates = @user.teammates
      render "/api/users/index" # TODO: refactor to only return teammates
    else
      render json: ["User does not exist"], status: 422
    end
  end

  def create
    @user = User.create(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :password, :avatar_url)
  end
end

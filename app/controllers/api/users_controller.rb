class Api::UsersController < ApplicationController
  # TODO: Not sure if best practice
  def index
    user = current_user

    if user
      @teammates = user.teammates
      render "/api/users/index"
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

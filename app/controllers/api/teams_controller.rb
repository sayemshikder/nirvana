class Api::TeamsController < ApplicationController
  def index
    @teams = current_user.teams
  end

  def show
    @team = Team.find(params[:id])
  end

  private

  def team_params
    params.require(:team).permit(:name, :leader_id)
  end
end

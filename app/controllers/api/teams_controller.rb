class Api::TeamsController < ApplicationController
  def index
    @teams = current_user.teams
  end

  private

  def team_params
    params.require(:team).permit(:name, :leader_id)
  end
end

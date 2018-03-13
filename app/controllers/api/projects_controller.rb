class Api::ProjectsController < ApplicationController
  def index
    team_id = params[:team_id]
    team = Team.find(team_id)

    if team
      @projects = team.projects
      render "/api/projects/index"
    else
      render json: ["Team not found"], status: 404
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :team_id)
  end
end

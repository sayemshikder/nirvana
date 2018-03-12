class Api::ProjectsController < ApplicationController
  def show
    @project = Project.find(params[:id])
    @project_members = @project.members
    render "/api/projects/show"
  end

  private

  def team_params
    params.require(:team).permit(:name, :leader_id)
  end
end

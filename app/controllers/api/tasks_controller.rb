class Api::TasksController < ApplicationController
  def index
    user_id = params[:user_id]
    project_id = params[:project_id]
    team_id = params[:team_id]

    @tasks
    if user_id && team_id
      @tasks = Team.find(team_id).tasks.where(assignee_id: user_id)
    elsif user_id
      @tasks = User.find(user_id).assigned_tasks
    elsif project_id
      @tasks = Project.find(project_id).tasks
    elsif team_id
      @tasks = Team.find(team_id).tasks
    end

    render "/api/tasks/index"
  end

  private

  def team_params
    params.require(:task).permit(:name, :description, :due_date, :creator_id,
                                 :assignee, :completed)
  end
end

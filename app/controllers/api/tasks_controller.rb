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
    elsif team_id
      @tasks = Team.find(team_id).tasks
    elsif project_id
      @tasks = Project.find(project_id).tasks
    end

    render "/api/tasks/index"
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(team_params)

    if @task.save!
      render "/api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(team_params)
      render "/api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:task).permit(:name, :description, :due_date, :creator_id,
                                 :assignee_id, :completed, :project_id)
  end
end

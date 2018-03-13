class Api::TasksController < ApplicationController
  def index
    user_id = params[:user_id]
    project_id = params[:project_id]

    @tasks
    if user_id
      @tasks = User.find(user_id).assigned_tasks
    else
      @tasks = Project.find(project_id).tasks
    end

    render "/api/tasks/index"
  end

  private

  def team_params
    params.require(:task).permit(:name, :description, :due_date, :creator_id,
                                 :assignee, :completed)
  end
end


#t.string "name"
# t.string "description"
# t.datetime "due_date"
# t.integer "creator_id", null: false
# t.integer "assignee"
# t.boolean "completed", default: false, null: false

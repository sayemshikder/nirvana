class DropProjectTasks < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :project_id, :integer
    drop_table :project_tasks
  end
end

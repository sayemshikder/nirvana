class RenameAssigneeToAssigneeId < ActiveRecord::Migration[5.1]
  def change
    rename_column :tasks, :assignee, :assignee_id
  end
end

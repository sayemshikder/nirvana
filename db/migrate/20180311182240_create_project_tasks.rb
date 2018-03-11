class CreateProjectTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :project_tasks do |t|
      t.integer :project_id, null: false
      t.integer :task_id, null: false

      t.timestamps
    end
  end
end

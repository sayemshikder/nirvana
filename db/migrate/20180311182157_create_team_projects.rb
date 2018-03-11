class CreateTeamProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :team_projects do |t|
      t.integer :team_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
  end
end

class AddTeamIdToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :team_id, :integer
    drop_table :team_projects
  end
end

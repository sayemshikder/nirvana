class AddNullFalseToTeamMembershipsAndTeams < ActiveRecord::Migration[5.1]
  def change
    change_column :team_memberships, :user_id, :integer, null: false
    change_column :team_memberships, :team_id, :integer, null: false

    change_column :teams, :name, :string, null: false
    change_column :teams, :leader_id, :integer, null: false
  end
end

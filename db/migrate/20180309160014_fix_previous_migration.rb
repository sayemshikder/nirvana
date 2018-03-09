class FixPreviousMigration < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :avatar_url, :string, null: false
  end
end

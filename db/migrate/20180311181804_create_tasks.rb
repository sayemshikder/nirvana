class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.datetime :due_date
      t.integer :creator_id, null: false
      t.integer :assignee
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
  end
end

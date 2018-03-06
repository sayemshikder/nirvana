class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :role
      t.string :dept
      t.text :about_me
      t.string :avatar_url

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end

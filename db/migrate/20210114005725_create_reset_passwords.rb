class CreateResetPasswords < ActiveRecord::Migration[6.1]
  def change
    create_table :reset_passwords do |t|
      t.references :user, null: false, foreign_key: true
      t.string :token
      t.datetime :expires

      t.timestamps
    end
    add_index :reset_passwords, :token, unique: true
  end
end

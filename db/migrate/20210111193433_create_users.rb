class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :password_digest
      t.string :username
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end

class User < ApplicationRecord
  has_secure_password
  validates_presence_of :email
  validates_presence_of :phone
  validates_presence_of :username
  validates_presence_of :password_digest
end

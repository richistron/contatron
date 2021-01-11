require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "the truth" do
    user = User.create! email: 'john@acme.com', phone: '1234567890', username: 'john', password: 'secret'
    assert user.valid?
  end
end

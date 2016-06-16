require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get welcome" do
    get :welcome
    assert_response :success
  end

  test "should get admin for admin" do
    sign_in users(:al)
    get :admin
    assert_response :success
  end
end

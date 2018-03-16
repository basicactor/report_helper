require 'test_helper'

class CitationsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get citations_create_url
    assert_response :success
  end

  test "should get update" do
    get citations_update_url
    assert_response :success
  end

  test "should get destroy" do
    get citations_destroy_url
    assert_response :success
  end

end

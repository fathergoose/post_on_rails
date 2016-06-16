require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  setup do
    @published_post = posts(:published)
    @unpublished_post = posts(:unpublished)
    @post_params = {
      title: 'learn about rails',
      content: 'rails new; rake; now fix those tests'
    }
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:posts)
  end

  test "should get new for admin" do
    sign_in users(:al)
    get :new
    assert_response :success
  end

  test "should not get new for guest" do
    get :new
    assert_redirected_to controller: "devise/sessions", action: "new"
  end

  test "should not create post for guest" do
    assert_no_difference('Post.count') do
      post :create, post: @post_params
    end

    assert_redirected_to controller: "devise/sessions", action: "new"
  end

  test "should create post for admin" do
    assert_difference('Post.count') do
      sign_in users(:al)
      post :create, post: @post_params
    end

    assert_redirected_to post_path(assigns(:post))
  end

  test "should show published post" do
    get :show, id: @published_post
    assert_response :success
  end

  test "should show unpublished post for admin" do
    sign_in users(:al)
    get :show, id: @unpublished_post
    assert_response :success
  end

  test "should not show unpublished post for guest" do
    get :show, id: @unpublished_post
    assert_response :missing
  end
  
  test "should get edit for admin" do
    sign_in users(:al)
    get :edit, id: @published_post
    assert_response :success
  end

  test "should not get edit for guest" do
    get :edit, id: @published_post
    assert_redirected_to controller: "devise/sessions", action: "new"
  end

  test "should update post for admin" do
    sign_in users(:al)
    patch :update, id: @published_post, post: @post_params
    assert_redirected_to post_path(assigns(:post))
  end

  test "should not update post for guest" do
    sign_in users(:al)
    patch :update, id: @published_post, post: @post_params
    assert_redirected_to post_path(assigns(:post))
  end

  test "should destroy post for admin" do
    sign_in users(:al)
    assert_difference('Post.count', -1) do
      delete :destroy, id: @published_post
    end

    assert_redirected_to controller: 'pages', action: 'admin'
  end

  test "should not destroy post for guest" do
    assert_no_difference('Post.count') do
      post :create, post: @post_params
    end

    assert_redirected_to controller: "devise/sessions", action: "new"
  end
end

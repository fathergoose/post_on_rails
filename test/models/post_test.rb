require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test "should not save post without title" do
    post_without_title = Post.new(body: "this is a post")
    assert_not post_without_title.save
  end

  test "should not save post without body" do
    post_without_body = Post.new(title: "hello")
    assert_not post_without_body.save
  end

  test ".last_published returns most recently published post" do
    latest_post = Post.last_published
    assert_equal latest_post, posts(:last_published),
    "failed to return the most recently published post"
  end

  test "#preview_body takes an argument for the minimum length of preview" do
    post = posts(:published)
    max_length = 10
    preview = post.preview_body(max_length)
    assert preview.length <= max_length 
  end

  test "#preview_body adds an elipsis to the end" do
    post = posts(:published)
    preview = post.preview_body
    assert_equal preview[-3, 3], '...'
  end

end

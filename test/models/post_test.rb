require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test ".last_published returns most recently published post" do
    latest_post = Post.last_published
    assert_equal latest_post, posts(:last_published),
    "failed to return the most recently published post"
  end

  test "#preview_body takes the first 400 chars" do
    skip
  end

  test "#preview_body adds an elipsis to the end" do
    skip
  end

  test "#preview_body takes an argument for length of preview" do
    skip
  end
end

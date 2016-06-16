require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test ".last_published returns most recently published post" do
    latest_post = Post.last_published
    assert_equal latest_post, posts(:last_published),
    "failed to return the most recently published post"
  end
end

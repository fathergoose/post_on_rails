require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  include ApplicationHelper

  test "should change markdown to HTML" do
    md_head = "# Hello"

    assert_match /^<h1>Hello<\/h1>*\s/, markdown(md_head)
  end

  test "should highlight code blocks" do
    md_code_block = "# Awesome code\n```ruby\nputs 'hello'\n```\n"

    assert_match /<div class=\"CodeRay\">/, markdown(md_code_block)
  end

end

class PagesController < ApplicationController
  before_action :authenticate_admin!, only: [:admin]

  # GET /
  # Displays the most reciently published post
  def welcome
    @post = Post.last_published
  end

  # GET /admin
  # Shows all posts on an admin pannel
  # Only allowed for users where admin == true
  def admin
    @posts = Post.all
  end
end

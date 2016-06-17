class PagesController < ApplicationController
  before_action :authenticate_admin!, only: [:admin]

  def welcome
    @post = Post.last_published
  end

  def admin
    @posts = Post.all
  end
end

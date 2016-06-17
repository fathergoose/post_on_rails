class PagesController < ApplicationController
  before_action :authenticate_admin!, only: [:admin]

  def welcome
    #@post = Post.where(published: true).order(created_at: :desc).limit(2).first
    @post = Post.last_published
  end

  def admin
    @posts = Post.all
  end

  private

  def authenticate_admin!
    unless user_signed_in? && current_user.admin
      redirect_to root_path
    end
  end
end

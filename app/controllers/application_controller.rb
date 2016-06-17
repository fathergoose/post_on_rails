class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

    # First checks that the a user is signed in and
    # then verifies the current user is an admin
    # unless both conditions pass, the user is redirected
    # to the homepage
    def authenticate_admin!
      authenticate_user! && current_user.admin
    end

end

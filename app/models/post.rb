class Post < ActiveRecord::Base
  def preview_post
    body[0..139].gsub(/\s\w+\s*$/,'...') # give the first chars and carefully append with ...
  end 
end  
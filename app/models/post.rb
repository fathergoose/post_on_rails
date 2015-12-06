class Post < ActiveRecord::Base
  def preview_body
    body[0..239].gsub(/\s\w+\s*$/,'...') # give the first chars and carefully append with ...
  end 
end  
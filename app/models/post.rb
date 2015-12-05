class Post < ActiveRecord::Base
  def preview
    body[0..139].gsub(/\s\w+\s*$/,'...') # give 140 char preview and replace 
  end                                    # up to next to last whitespace with ...
end  
class Post < ActiveRecord::Base
  def preview_body
    body[0..400].gsub(/\s\w+\s*$/,'...') # give the first chars and carefully append with ...
  end 

  def publishd_timestamp!
    time = Time.now 
    update( published_at: time )
  end

  def date_published
    created_at.strftime("%b %d, %Y")
  end

  def date_updated
    updated_at.strftime("%b %d, %Y")
  end

end  

class Post < ActiveRecord::Base
  def self.last_published
    where(published: true)
    .order(created_at: :desc)
    .limit(1)
    .first
  end

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

  def front_page
    where(published: true).order(created_at: :desc).limit(1).first
  end

end  

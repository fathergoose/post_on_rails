class Post < ActiveRecord::Base
  def self.last_published
    where(published: true)
    .order(created_at: :desc)
    .limit(1)
    .first
  end

  # take the first 400 chars and carefully append with '...'
  def preview_body(preview_length=400)
    body[0..preview_length].gsub(/\s\w+\s*$/,'...')
  end 

  def publish_timestamp!
    update published_at: Time.now 
  end

  def date_published
    created_at.strftime("%b %d, %Y")
  end

  def date_updated
    updated_at.strftime("%b %d, %Y")
  end
end  

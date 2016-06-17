class Post < ActiveRecord::Base
  validates :title, :body, presence: true

  def self.last_published
    where(published: true)
    .order(created_at: :desc)
    .limit(1)
    .first
  end

  # take the first 400 chars and carefully append with '...'
  def preview_body(max_length=400)
    max_length -= 3 # Account for three dots
    body[0..max_length].gsub(/\s\w+\s*$/,'...')
  end 

  def date_published
    created_at.strftime("%b %d, %Y")
  end

  def date_updated
    updated_at.strftime("%b %d, %Y")
  end
end  

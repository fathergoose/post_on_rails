class Post < ActiveRecord::Base
  validates :title, :body, presence: true

  # Returns the most reciently published post using
  #   'SELECT "posts".*
  #    FROM "posts"
  #    WHERE "posts"."published" = \'t\'
  #    ORDER BY "posts"."created_at"
  #    DESC LIMIT 1'
  # ...or at least whatever AciveRecord cooks up
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

  # Human friendly timestamp reflecting the date
  # the post was first saved with the format
  #   mmm dd, yyyy
  #   Apr 26, 2016
  def date_published
    created_at.strftime("%b %d, %Y")
  end

  # Human friendly timestamp reflecting the date
  # the post was last edited with the format
  #   mmm dd, yyyy
  #   Apr 26, 2016
  def date_updated
    updated_at.strftime("%b %d, %Y")
  end
end  

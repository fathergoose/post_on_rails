class Image < ActiveRecord::Base
  mount_uploader :source, SourceUploader
end

class AddPretextToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :pretext, :text
  end
end

class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.string :location
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end

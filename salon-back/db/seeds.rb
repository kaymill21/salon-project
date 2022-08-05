puts 'seeding...'

u1 = User.create(username: "joe", phoneNum: "1234567890", email: "example@gmail.com", password_digest: "password")  # 1

p1 = Post.create(content: "Highlights", location: "Denver", image_url:"/images/highlights.jpg")
p2 = Post.create(content: "Mens Short Cut", location: "Denver", image_url:"/images/mensshortcut.jpg" )
p3 = Post.create(content: "Lowlights", location: "Denver", image_url:"/images/lowligths.jpg" )
p4 = Post.create(content: "Long Womens Cut", location: "Denver", image_url:"/images/longwomencut.jpg" )
p5 = Post.create(content: "Short womens Cut", location: "Denver", image_url:"/images/shortwomencut.jpg")
p6 = Post.create(content: "Mens Business Cut", location: "Denver", image_url:"/images/menbusinesscut.jpg")
 
puts 'seeding done.'

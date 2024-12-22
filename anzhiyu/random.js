var posts=["2024/08/08/hello-world/","2024/12/20/模电/","2024/12/22/公式test/","2024/08/09/anaconda/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
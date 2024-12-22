var posts=["2024/08/09/anaconda/","2024/08/08/hello-world/","2024/12/20/模电/","2024/12/22/模电1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
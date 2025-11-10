var posts=["1970/01/01/anaconda/","1970/01/01/hello-world/","2024/12/27/linear-algebra/","2024/12/22/公式test/","1970/01/01/模电/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
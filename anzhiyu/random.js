var posts=["2024/08/08/hello-world/","2024/08/09/anaconda/","2024/12/27/linear-algebra/","2024/12/22/公式test/","2024/12/20/模电/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
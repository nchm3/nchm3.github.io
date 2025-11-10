var posts=["2025/01/22/hello-world/","2024/12/27/linear-algebra/","2024/08/22/anaconda/","2024/12/22/公式test/","2025/01/27/模电/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
    { title: "Post Three", body: "This is post three" }
  ];
  
  const listPosts = () => {
    posts.map(p => {
      console.log(p.title);
    });
  };
  
  const addPost = (newPost, callback) => {
    posts.push(newPost);
    callback();
  };
  
  addPost({ title: "Post Four", body: "This is post four" }, listPosts);
  
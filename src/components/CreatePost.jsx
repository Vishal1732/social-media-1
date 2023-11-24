import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost=()=>{
      const {addPost}=useContext(PostList);
  const userIdElement=useRef();
  const postTittleElement=useRef();
  const  postBodyElement=useRef();
  const reactionsElement=useRef();

 const handleSubmit=(event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTittle = postTittleElement.current.value;
    const postBoby = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;

    userIdElement.current.value="";
    postTittleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
     tittle: postTittle,
     body: postBoby,
     reactions: reactions,
     userId: userId,

      },
      )
    })
    .then(res => res.json())
    .then(post => addPost(post))

 }

  return <form className="create-post" onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="userId" className="htmlForm-label">UserId</label>
    <input type="text" ref={userIdElement} className="htmlForm-control" id="userId" placeholder="Enter your user Id"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tittle" className="htmlForm-label">Post tittle</label>
    <input type="text" ref={postTittleElement} className="htmlForm-control" id="tittle" placeholder="How are you feeling today..."/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="htmlForm-label">Post content</label>
    <textarea type="text" rows={4} ref={postBodyElement} className="htmlForm-control" id="body" placeholder="tell us more about it"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="htmlForm-label">Numbers of reactions</label>
    <input type="text" ref={reactionsElement} className="htmlForm-control" id="reactions" placeholder="How many people reacted to this post."/>
  </div>

  <button type="submit" className="btn btn-primary">post</button>

</form>

}

export default CreatePost;
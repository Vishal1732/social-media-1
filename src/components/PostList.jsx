import React, { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMassage from "./WelcomeMassage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetched } = useContext(PostListData);

  return (
    <>
      {fetched && <LoadingSpinner />}
      {!fetched && postList.length === 0 && <WelcomeMassage />}

      {!fetched &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;

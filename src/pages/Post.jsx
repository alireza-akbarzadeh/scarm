import React from "react";
import usePostId from "../Hook/usePostId";
import queryClient from "../queryClient";
const Post = ({ id, setPostId }) => {
  const { isLoading, data } = usePostId(id);

  const cathPost = queryClient.getQueryData(["post", 1]);

  console.log(cathPost, "wtf");
  return (
    <div>
      <a href="" onClick={() => setPostId(null)}>
        Back
      </a>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default Post;

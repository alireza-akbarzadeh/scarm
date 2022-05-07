import { useQuery } from "react-query";
import axios from "axios";
const fetchPost = (postId) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.data);

const usePostId = (postId) => {
  return useQuery(["posts", postId], () => fetchPost(postId));
};
export default usePostId;

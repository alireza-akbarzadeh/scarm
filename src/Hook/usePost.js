import { useQuery } from "react-query";
import axios from "axios";
const usePost = () => {
  return useQuery("posts", () =>
    axios
      .get(" https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  );
};

export default usePost;

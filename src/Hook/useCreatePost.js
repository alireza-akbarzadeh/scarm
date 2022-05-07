import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const useCreatePost = (postTodo) => {
  const queryClient = useQueryClient();
  return useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useCreatePost;

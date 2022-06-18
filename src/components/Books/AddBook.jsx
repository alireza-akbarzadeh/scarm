import BookForm from "./BookForm";
import { useMutation, useQueryClient } from "react-query";
import { addNewBook } from "../../apis/bookApi";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation("books", addNewBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });
  const onFormSubmit = async (data) => {
    mutation.mutateAsync({ ...data });
    navigate(`/books`);
  };
  return (
    <BookForm onFormSubmit={onFormSubmit} isLoading={mutation.isLoading} />
  );
};

export default AddBook;

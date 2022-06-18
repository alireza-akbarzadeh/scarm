import { getSingleBook } from "../../apis/bookApi";
import { useQuery } from "react-query";
const useSingleBook = ({ id }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["books", { id }],
    getSingleBook
  );
  return { data, error, isLoading, isError };
};

export default useSingleBook;

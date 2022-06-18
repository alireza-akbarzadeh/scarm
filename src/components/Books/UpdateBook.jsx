import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBook, updateBook } from "../../apis/bookApi";
import Container from "../Container";
import { ThreeDots } from "react-loader-spinner";
import BookForm from "./BookForm";
const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError } = useQuery(
    ["books", { id }],
    getSingleBook
  );
  const mutation = useMutation("books", updateBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });
  const onFormSubmit = async (data) => {
    mutation.mutateAsync({ ...data, id });
    navigate(`/books`);
  };
  return (
    <Container center maxWidth='md'>
      {isLoading ? (
        <ThreeDots height={30} color='#ccc' />
      ) : isError ? (
        <span>Error :{error.message}</span>
      ) : (
        <BookForm
          defaultValues={data}
          isLoading={mutation.isLoading}
          onFormSubmit={onFormSubmit}
        />
      )}
    </Container>
  );
};

export default UpdateBook;

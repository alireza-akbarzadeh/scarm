import React from "react";
// @React-query
import { useQuery } from "react-query";
// @apis
import { getAllBooks } from "../../apis/bookApi";
// @components
import Container from "../Container";

// @ThirdParty
import { ThreeDots } from "react-loader-spinner";
import BookItem from "./BookItem";
// @JSX
const BookList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);
  return (
    <Container center maxWidth='md'>
      {isLoading ? (
        <ThreeDots height={30} color='#ccc' />
      ) : isError ? (
        <span>{error.message}</span>
      ) : (
        data.map(({ id, title, author }) => (
          <BookItem key={id} id={id} title={title} author={author} />
        ))
      )}
    </Container>
  );
};

export default BookList;

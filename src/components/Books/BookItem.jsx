import React from "react";
// @components
import Typography from "../Typography";
import Button from "../button/Button";
import Row from "../Row";
// @react-icons
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
// @react-router-dom
import { useNavigate } from "react-router-dom";
// @react-query
import { useMutation, useQueryClient } from "react-query";
// @apis
import { deleteBook } from "../../apis/bookApi";
const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutate = useMutation("books", deleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  return (
    <>
      <Row
        key={id}
        rounded={"10px"}
        alignItems='center'
        justify={"space-between"}
        className='mt-15'
      >
        <div>
          <Typography as='h3'>{title}</Typography>
          <Typography className='mt-5' as='p'>
            {author}
          </Typography>
        </div>
        <Row direction='row' rounded={"10px"} alignItems='center' space='10px'>
          <Button
            txtColor='#fff'
            startIcon={<FaPlus />}
            txt={"Add"}
            rounded={"10px"}
            variant='contained'
            color='secondary'
            onClick={() => navigate(`/new-books`)}
          />
          <Button
            onClick={() => navigate(`/books/${id}`)}
            txtColor='#fff'
            startIcon={<FaEdit />}
            rounded={"10px"}
            txt={"Update"}
            variant='contained'
            color='info'
          />
          <Button
            onClick={() => mutate.mutate({ id })}
            loading={mutate.isLoading}
            txtColor='#fff'
            startIcon={<FaTrash />}
            txt={"Remove"}
            rounded={"10px"}
            color='error'
            variant='contained'
          />
        </Row>
      </Row>
      {mutate.isError && <div>An error occurred: {mutate.error.message}</div>}
      {mutate.isSuccess && <div>Books was Deleted</div>}
    </>
  );
};

export default BookItem;

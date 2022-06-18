import React from "react";
import Container from "../Container";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });
  return (
    <Container center maxWidth='md'>
      <form onSubmit={onSubmit}>
        <div className='form_control'>
          <label htmlFor='title'>Title</label>
          <input
            {...register("title", { required: true })}
            label='title'
            className='mt-10'
            placeholder='title'
            id='title'
            type='text'
          />
        </div>
        <div className='form_control mt-15 mb-15'>
          <label htmlFor='author'>Author</label>
          <input
            {...register("author", { required: true })}
            placeholder='author'
            className='mt-10'
            label='author'
            id='author'
            name='author'
            type='text'
          />
        </div>
        <Button
          fullWidth
          txtColor={"#fff"}
          rounded={"30px"}
          txt='Submit'
          variant='contained'
          color='info'
          loading={isLoading}
        />
      </form>
    </Container>
  );
};

export default BookForm;

import axios from "axios";

const bookApi = axios.create({
  baseURL: "http://localhost:3006/",
});

const getAllBooks = async () => {
  const response = await bookApi.get("books");
  return response.data;
};
const getSingleBook = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await bookApi.get(`books/${id}`);
  return response.data;
};
const updateBook = async ({ id, ...data }) => {
  const response = await bookApi.put(`books/${id}`, data);
  return response.data;
};
const deleteBook = async ({ id }) => {
  const response = await bookApi.delete(`books/${id}`);
  return response.data;
};
const addNewBook = async ({ ...data }) => {
  const response = await bookApi.post("books", data);
  return response.data;
};

export { addNewBook, deleteBook, getAllBooks, updateBook, getSingleBook };

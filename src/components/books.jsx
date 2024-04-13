import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './body.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    // Fetch list of books when the component mounts
    axios.get('https://6610feda0640280f219de579.mockapi.io/api/v1/Library')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error During Fetching:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6610feda0640280f219de579.mockapi.io/api/v1/Library/${id}`);
      // Update state to remove the deleted book from the list
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error During Deleting:', error);
    }
  };

  const handleEdit = (id) => {
    const book = books.find(book => book.id === id);
    setEditBook(book);
    setShowEditForm(true);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    ISBN: Yup.string().required('ISBN is required'),
    publication_date: Yup.string().required('Publication Date is required'),
  });

  const handleSubmit = async (values) => {
    try {
      // Update book data in the API using PUT request
      await axios.put(`https://6610feda0640280f219de579.mockapi.io/api/v1/Library/${editBook.id}`, values);
      // Fetch updated list of books after edit
      const response = await axios.get('https://6610feda0640280f219de579.mockapi.io/api/v1/Library');
      setBooks(response.data);
      setEditBook(null);
      setShowEditForm(false);
    } catch (error) {
      console.error('Error During Update:', error);
    }
  };

  return (
    <div className="container">
      <div className="books" style={{ color: 'steelblue' }}>
        <h2>List of Books</h2>
        <ul>
          {books.map((book,index) => (
            <li key={index}>
              <strong>Title:</strong> {book.title}<br />
              <strong>Author:</strong> {book.author}<br />
              <strong>ISBN:</strong> {book.ISBN}<br />
              <strong>Publication Date:</strong> {book.publication_date}<br />
              <button className="btn btn-warning" onClick={() => handleEdit(book.id)}>Edit</button>&nbsp;
              <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {showEditForm && (
        <div className="EditForm">
          <h2>Edit Book</h2>
          <Formik
            initialValues={{
              title: editBook.title,
              author: editBook.author,
              ISBN: editBook.ISBN,
              publication_date: editBook.publication_date
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="title">Title:</label>
                <Field type="text" className="form-control" id="title" name="title" />
                <ErrorMessage name="title" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="author">Author:</label>
                <Field type="text" className="form-control" id="author" name="author" />
                <ErrorMessage name="author" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="ISBN">ISBN:</label>
                <Field type="text" className="form-control" id="ISBN" name="ISBN" />
                <ErrorMessage name="ISBN" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="publication_date">Publication Date:</label>
                <Field type="text" className="form-control" id="publication_date" name="publication_date" />
                <ErrorMessage name="publication_date" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary mx-1">Update</button>
              <button type="button" className="btn btn-secondary mx-2" onClick={() => setShowEditForm(false)}>Cancel</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Books;

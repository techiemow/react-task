import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editAuthor, setEditAuthor] = useState(null);

  useEffect(() => {
    // Fetch list of authors when the component mounts
    axios.get('https://6610feda0640280f219de579.mockapi.io/api/v1/Authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('Error during fetching authors:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6610feda0640280f219de579.mockapi.io/api/v1/Authors/${id}`);
      // Update state to remove the deleted author from the list
      setAuthors(authors.filter(author => author.id !== id));
    } catch (error) {
      console.error('Error during deleting author:', error);
    }
  };

  const handleEdit = (id) => {
    const author = authors.find(author => author.id === id);
    setEditAuthor(author);
    setShowEditForm(true);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birth_date: Yup.string().required('Birth date is required'),
    biography: Yup.string().required('Biography is required').min(40, 'Biography must be at least 40 characters'),
  });

  const handleSubmit = async (values) => {
    try {
      // Update author data in the API using PUT request
      await axios.put(`https://6610feda0640280f219de579.mockapi.io/api/v1/Authors/${editAuthor.id}`, values);
      // Fetch updated list of authors after edit
      const response = await axios.get('https://6610feda0640280f219de579.mockapi.io/api/v1/Authors');
      setAuthors(response.data);
      setEditAuthor(null);
      setShowEditForm(false);
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  return (
    <div className="container">
      <div className="books" style={{ color: 'steelblue' }}>
        <h2>List of Authors</h2>
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              <strong>Name:</strong> {author.name}<br />
              <strong>Birth Date:</strong> {author.birth_date}<br />
              <strong>Short Bio:</strong> {author.biography}<br />
              <button className="btn btn-warning" onClick={() => handleEdit(author.id)}>Edit</button>&nbsp;
              <button className="btn btn-danger" onClick={() => handleDelete(author.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {showEditForm && (
        <div className="EditForm">
          <h2>Edit Author</h2>
          <Formik
            initialValues={{
              name: editAuthor.name,
              birth_date: editAuthor.birth_date,
              biography: editAuthor.biography,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <Field type="text" className="form-control" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="birth_date">Birth Date:</label>
                <Field type="text" className="form-control" id="birth_date" name="birth_date" />
                <ErrorMessage name="birth_date" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="biography">Biography:</label>
                <Field as="textarea" className="form-control" id="biography" name="biography" />
                <ErrorMessage name="biography" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Author;

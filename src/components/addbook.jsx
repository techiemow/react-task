import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./addbook.css"

const Addbook = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const initialValues = {
    title: "",
    author: "", // Corrected field name from 'Author' to 'author'
    ISBN: "",
    publication_date: ""
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    ISBN: Yup.string().required("ISBN is required"), // Changed to string validation for ISBN
    publication_date: Yup.string().required("Publication date is required")
  });

  const handleAddbook = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://6610feda0640280f219de579.mockapi.io/api/v1/Library",
        values
      );
      setSuccessMsg('Book added successfully!');
      resetForm(); 
    } catch (error) {
      setErrorMsg('Something went wrong!');
    }
  };

  return (
    <div className="addbook-container">
     <div className="form-container" style={{ width: "250%" }}>
      <h2>Add Book</h2>
      <Formik 
        className="d-flex justify-content-center align-items-center"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddbook}
      >
        {({ errors, touched }) => (
          <Form >
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                className="form-control large-input"
                id="title"
                name="title"
                placeholder="Enter the Book title"
              />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="author">Author</label>
              <Field
                type="text"
                className="form-control large-input"
                id="author"
                name="author"
                placeholder="Enter the Author of the book"
              />
              <ErrorMessage name="author" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="ISBN">ISBN</label>
              <Field
                type="text"
                className="form-control large-input"
                id="ISBN"
                name="ISBN"
                placeholder="Enter the ISBN no of the book"
              />
              <ErrorMessage name="ISBN" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="publication_date">Publication Date</label>
              <Field
                type="text"
                className="form-control large-input"
                id="publication_date"
                name="publication_date"
                placeholder="Enter the Publication Date of the book"
              />
              <ErrorMessage
                name="publication_date"
                component="div"
                className="text-danger"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
            {successMsg && <p className="text-success">{successMsg}</p>}
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Addbook;

import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./addauthor.css"

const Addauthor = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const initialValues = {
    name: "",
    birth_date: "",
    biography: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Author name is required"),
    birth_date: Yup.string().required("Author's birthdate is mandatory"),
    biography: Yup.string()
      .required("Short bio is mandatory")
      .min(70, "Biography should be at least 70 characters")
  });

  const handleAddAuthor = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://6610feda0640280f219de579.mockapi.io/api/v1/Authors",
        values
      );
      setSuccessMsg("Author added successfully!");
      resetForm(); // Reset form fields after successful submission
    } catch (error) {
      setErrorMsg("Something went wrong!");
    }
  };

  return (
    <div className="addauthor">
      <div className="formauthor" style={{ width: "250%" }}>
        <h2>Add Author</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleAddAuthor}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  placeholder="Enter the author's name"
                />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="birth_date">Birth Date:</label>
                <Field
                  type="text"
                  className="form-control form-control-lg"
                  id="birth_date"
                  name="birth_date"
                  placeholder="Enter the birthdate of the Author"
                />
                <ErrorMessage
                  name="birth_date"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="biography">Biography:</label>
                <Field
                  as="textarea"
                  className="form-control form-control-lg"
                  id="biography"
                  name="biography"
                  placeholder="Give a short bio about the author (at least 70 characters)"
                  rows="5" // Adjust the number of rows for the textarea
                />
                <ErrorMessage
                  name="biography"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Add Author
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

export default Addauthor;

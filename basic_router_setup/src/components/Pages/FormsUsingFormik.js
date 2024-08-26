import React from "react";
import { useFormik } from "formik";
import { singupSchema } from "../../schemas";
/// useformink is basically a custom hook for managing state and handling event

/// after we have to validation schema using up library
// validation schema is basically a conditions that we check for form validation

// password must contain one capital letter,one small letter , number & special character

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
const FormsUsingFormik = () => {
  //   const formik = useFormik({
  //         initialValues,
  //         onSubmit:(values)=>{
  //             console.log(values);
  //         }
  //     })
  //     // console.log(formik);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: singupSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  console.log(errors);

  return (
    <div className="app">
      <form className="signup_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.name && touched.name && (
            <p className="form_error">{errors.name}</p>
          )}
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.email && touched.email && (
            <p className="form_error">{errors.email}</p>
          )}
        </div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.password && touched.password && (
            <p className="form_error">{errors.password}</p>
          )}
        </div>
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          value={values.cpassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.cpassword && touched.cpassword && (
            <p className="form_error">{errors.cpassword}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormsUsingFormik;

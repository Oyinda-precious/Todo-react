import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Loginform = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateYupSchema: yup.object({
      email: yup.string().trim().email().required("Email is required"),
      password: yup
        .string()
        .matches(
          `^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`,
          "password must have at least one uppercase, a special character and an integer"
        )
        .required("password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const { data: existUsers } = await axios.get(
          "http://localhost:5678/users"
        );
        const exist = existUsers.find((user) => user.email === values.email);
        if (exist) {
          alert("details have been logged in");
        } else {
          const response = await axios.post(
            "http://localhost:5678/users",
            values
          );
          console.log(response.data);
          alert("login successful");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while processing your request.");
      }
    },
  });
  console.log(formik.touched);

  return (
    <div>
      <form
        action=""
        className="w-50 mx-auto px-3 py-3 shadow"
        onSubmit={formik.handleSubmit}
      >
        <h1>Login</h1>
        <div>
          <label htmlFor="">email</label>
          <input
            type="text"
            onBlur={formik.handleBlur}
            name="email"
            onChange={formik.handleChange}
            className="form-control"
          />
        </div>
        <small className="text-danger">
          {formik.touched.email ? formik.errors.email : ""}
        </small>
        <div>
          <label htmlFor="">password</label>
          <input
            type="text"
            onBlur={formik.handleBlur}
            name="password"
            onChange={formik.handleChange}
            className="form-control"
          />
          <small className="text-danger">
            {formik.touched.password ? formik.errors.password : ""}
          </small>
        </div>
        <button className="btn btn-dark" type="submit">
          Clickme
        </button>
      </form>
    </div>
  );
};

export default Loginform;

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Formik = () => {
  const Formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      username: yup
        .string()
        .trim()
        .min(5, "username is too short")
        .required("username is required"),
      email: yup.string().trim().email().required("Email is required"),
      password: yup
        .string()
        .matches(
          `^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`,
          "password must have at least one uppercase, a special character and an integer"
        )
        .required("password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:4567/details", values)
        .then((res) => {
          console.log(res.data);
          Formik.setValues({
            username: "",
            email: "",
            password: "",
          });
          toast.success("signup successful");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
      // const userExist = existingUsers.find(
      //   (details) => details.email === values.email
      // );
      // if (userExist) {
      //   alert("already a signed-up user");
      // } else {
      //   axios.post("http://localhost:4567/details", values).then((res) => {
      //     console.log(res);
      //     alert("user registered successfully");
      //     Formik.resetForm();
      //   });
      // }
    },
    // onSubmit: async (values) => {
    //   try {
    //     const { data: existingUsers } = await axios.get(
    //       "http://localhost:4567/details"
    //     );
    //     const userExist = existingUsers.find(
    //       (user) => user.email === values.email
    //     );
    //     if (userExist) {
    //       alert("Already a signed-up user");
    //     } else {
    //       const response = await axios.post(
    //         "http://localhost:4567/details",
    //         values
    //       );
    //       console.log(response.data);
    //       alert("User registered successfully");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An error occurred while processing your request.");
    //   }
    // },
  });
  console.log(Formik.touched);

  return (
    <div>
      <form
        className="w-50 mx-auto px-3 py-3 shadow"
        onSubmit={Formik.handleSubmit}
        action=""
      >
        <h1>Sign Up</h1>
        <div className="form-group mt-3">
          <label htmlFor="">Username</label>
          <input
            values={Formik.values.username}
            onBlur={Formik.handleBlur}
            name="username"
            onChange={Formik.handleChange}
            type="text"
            className="form-control"
          />
          <small className="text-danger">
            {Formik.touched.username ? Formik.errors.username : ""}
          </small>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">email</label>
          <input
            name="email"
            onChange={Formik.handleChange}
            type="text"
            className="form-control"
          />
          <small className="text-danger">
            {Formik.touched.email ? Formik.errors.email : ""}
          </small>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">password</label>
          <input
            name="password"
            onChange={Formik.handleChange}
            type="text"
            className="form-control"
          />
          <small className="text-danger">
            {Formik.touched.password ? Formik.errors.password : ""}
          </small>
        </div>
        <button className="btn btn-dark" type="submit">
          Submitme
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Formik;

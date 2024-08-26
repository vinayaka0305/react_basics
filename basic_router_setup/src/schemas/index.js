import * as Yup from "yup";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
export const singupSchema = Yup.object({
  name: Yup.string().min(3).required("please enter your name"),
  email: Yup.string()
    .email("please enter a valid email")
    .required("please enter your email"),
  password: Yup.string()
    .matches(passwordRegex, "please enter valid password")
    .required("please enter your password"),
  cpassword: Yup.string()
    .oneOf(([Yup.ref("password")]), "password do NOT match! ")
    .required("please enter confirm password"),
});

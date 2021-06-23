import { Formik } from "formik";
import { Button, TextField } from "@material-ui/core";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await fetch("/api/send-login-email", {
          body: JSON.stringify({
            email: values.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const result = await res.json();

        console.log(result);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        ...theRest
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            type="email"
            label="login email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;

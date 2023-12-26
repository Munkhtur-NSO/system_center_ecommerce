import Slider from "@/components/slider";
import BaseLayout from "@/layout/baseLayout";
import { Roboto } from "next/font/google";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("zaaval"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function About() {
  return (
    <>
      <div className="container text-center">
        <div className="row mt-3">
          <BaseLayout></BaseLayout>
        </div>
        <div className="row">Login</div>
      </div>

      <div>
        <h1>Displaying Error Messages</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="username" />
              {/* If this field has been touched, and it contains an error, display it
               */}
              {touched.username && errors.username && (
                <div>{errors.username}</div>
              )}
              <br></br>
              <Field name="email" />
              {/* If this field has been touched, and it contains an error, display
           it */}
              {touched.email && errors.email && <div>{errors.email}</div>}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

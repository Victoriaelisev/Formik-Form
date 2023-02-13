import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email:'',
      password:''
    }
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values=> {
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.emailField) errors.emailField='Username should be an email';
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit = {formik.handleSubmit}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color: 'red'}}> {formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color: 'red'}}> {formik.errors.pswField}</div>: null}
        <button type="submit">SubmitBtn</button>
      </form>
    </div>
  );
}

export default App;

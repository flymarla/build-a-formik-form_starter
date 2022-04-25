import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      alert('Login Successful')
      console.log('form: ', values);
    },
    validate: values =>{
      let errors = {};
      if(!values.emailField) {
        errors.emailField = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)){
        errors.emailField = 'Username should be an email';
      }
      if(!values.pswField) errors.pswField = 'Field required';
      return errors
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" name="emailField" id="emailField" onChange={formik.handleChange} value={formik.values.emailField}></input>
        {formik.errors.emailField ? <div id="emailError" style={{color: 'red'}}>{formik.errors.emailField}</div> : null}
        <div>Password</div>
        <input type="text" id="pswField" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}></input>
        {formik.errors.pswField ? <div id="pswError" style={{color: 'red'}}>{formik.errors.pswField}</div> : null}
        <br></br>
        <button id="submitBtn" name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

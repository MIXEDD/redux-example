import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

let ContactForm = ({handleSubmit}) => {

  const submit = ({firstName = '', lastName = '', email = ''}) => {

    let error = {};
    let isError = false;
    
    if(!firstName.trim()) {
        error.firstName = 'Required';
        isError = true;
    }

    if(!lastName.trim()) {
        error.lastName = 'Required';
        isError = true;
    }

    if(!email.trim()) {
        error.email = 'Required';
        isError = true;
    }

    if(isError) {
        throw new SubmissionError(error);
    } else {
        // submit form to server
        console.log('valid submission');
    }
  };  

  // {type, label, input, meta: {touched, error}
  const renderField = (field) => {
   //   console.log(field);
    return(
        <div className="input-row">
         <label>{field.label}</label>   
         <input {...field.input} type={field.type} />   
        {field.meta.touched && field.meta.error && 
        <span className="error">{field.meta.error}</span>}
    </div>
    );
  };
 
 return (
    <form onSubmit={handleSubmit(submit)}>
    <div>
      <Field name="firstName" label='First tname' component={renderField} type="text" />
    </div>
    <div>
      <Field name="lastName" label='Last tname' component={renderField} type="text" />
    </div>
    <div>
      <Field name="email" label='Email' component={renderField} type="email" />
    </div>
    <button type="submit">Submit</button>
  </form>
 );
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
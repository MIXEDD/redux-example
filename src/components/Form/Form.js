import React, {useState} from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

let ContactForm = ({handleSubmit}) => {

  const [countries, setCountries] = useState(['LT','EN','RU']);

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

  const createRenderer = render => (field) => (
    <div className={['input-row', field.meta.error ? 'error' : ''].join(' ')}>
        <label>{field.label}</label>   
        {render(field)}
        {field.meta.touched && field.meta.error ? <span className="error">{field.meta.error}</span> : null}
    </div>
  );

  const RenderInput = createRenderer((field) => (
    <input {...field.input}/>
  ));

  const RenderSelect = createRenderer((field) => (
    <select {...field.input}>
        {field.children}
    </select>
  ));
 
 return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="firstName" label='First tname' component={RenderInput} type="text"/>
      <Field name="lastName" label='Last tname' component={RenderInput} type="text"/>
      <Field name="email" label='Email' component={RenderInput} type="email"/>
      <Field name="countries" component={RenderSelect}>
          {
              countries.map((val, index) => {
                return <option key={index} value={val}>{val}</option>
              })
          }
      </Field>
    <button type="submit">Submit</button>
  </form>
 );
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
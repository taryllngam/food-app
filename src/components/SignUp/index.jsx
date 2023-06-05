import { Formik } from 'formik';
import React, { useState } from 'react';


const SignUp = () => {    
return (
  <div >
    <h1>Signup And Take Control Of Your Menu!</h1>
    <Formik 
      initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            localStorage.setItem('userInfo', JSON.stringify(values));
            alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <span>FirstName</span>
            <input 
            type="firstName"  
            name="firstName"  
            onChange={handleChange}
            value={values.firstName}/>


            <span>lastName</span>
            <input 
            type="lastName"
            name="lastName"  
            onChange={handleChange}
            value={values.lastName}/>

            <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <input type="checkbox" name='isAdmin' value={values.isAdmin} onChange={handleChange} />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
)
};

export default SignUp;
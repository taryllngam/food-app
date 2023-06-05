import { Formik } from 'formik';
import React from 'react'

export default function Admin() {
    const isAdmin = localStorage.getItem('userInfo');
    console.log('::', isAdmin);
    // validate={values => {
    //   const errors = {};
    //   if (!values.e) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.)
    //   ) 
    //   return errors;
    // }}
  return (
    <div>
       <Formik 
      initialValues={{ Image: '', Name: '', Price: '', Description: '' }}
  
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            localStorage.setItem('Admin', JSON.stringify(values));
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
          <span>IMAGE</span>
            <input 
            type="file"  
            name="file"  
            onChange={handleChange}
            value={values.file}/>


            <span>Name</span>
            <input 
            type="name"
            name="Name"  
            onChange={handleChange}
            value={values.Name}/>

            <span>PRICE</span>
          <input
            type="price"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Price}
          />
          {errors.email && touched.email && errors.email}
          <span>DESCRIPTION</span>
          <input
            type="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Description}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>
  )
}

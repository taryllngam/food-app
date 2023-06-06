// import { Formik } from 'formik';
// import React from 'react'
// import { useContext } from 'react';
// import { FoodContext } from '../../context/FoodContext';
// import "../Admin/style.css"

// export default function Admin() {
//     // const isAdmin = localStorage.getItem('userInfo');
//     // validate={values => {
//     //   const errors = {};
//     //   if (!values.e) {
//     //     errors.email = 'Required';
//     //   } else if (
//     //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.)
//     //   ) 
//     //   return errors;
//     // }}
//     const { foodStorage, setFoodStorage } = useContext(FoodContext);

//     const handleSubmit = () => {}
//   return (
//     <div className='big-container'>
//       <div className='usersInfo'>user dashboard</div>
//       <div className='inputInfo'>
//        <Formik 
//       initialValues={{ Image: '', Name: '', Price: '', Description: '' }}
  
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//             localStorage.setItem('Admin', JSON.stringify(values));
//             alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <div className='display2'>
//           <span>IMAGE</span>
//             <input 
//             type="file"  
//             name="file"  
//             onChange={handleChange}
//             value={values.file}/>
//             </div>

//             <div className='display2'>
//             <span>Name</span>
//             <input 
//             type="name"
//             name="Name"  
//             onChange={handleChange}
//             value={values.Name}/>
// </div>
// <div className='display2'>
//             <span>PRICE</span>
//           <input
//             type="price"
//             name="Price"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.Price}
//           />
//           </div>
//           <div className='display2'>
//           <span>DESCRIPTION</span>
//           <input
//             type="description"
//             name="description"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.Description}
//           />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//     </div>
//     </div>
//   )
// }



import React from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { Navigate, useNavigate } from "react-router";

export default function Admin() {
  const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("foodStorage")));
  const navigate = useNavigate
  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [foodStorage, setfoodStorage] = useState({
    id: +1,
    name: "",
    price: "",
    image: "",
    detials: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setfoodStorage((prevfoodStorage) => ({
      ...prevfoodStorage,
      [name]: value,
    }));
  };

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convert2base64(file);
    console.log(base64);

    setfoodStorage((prev) => ({ ...prev, image: base64 }));
  };

  const handleDelete = (id)=>{
    const removeItem = localData.filter((item)=>{
      return item.id !== id
    })
    setfoodStorage(removeItem)
    console.log(localData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const localData = JSON.parse(localStorage.getItem("foodStorage")) || [];

    localStorage.setItem(
      "foodStorage",
      JSON.stringify([...localData, foodStorage])
    );
  };




  return (
    <div className="admin-dashboard">
      <div className="profile-section">
        <div>
          <img
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            alt=""
            className="avatar"
          />
          <h2>NGAM TARYLL</h2>
          <p>taryllngam@gmail.com</p>
        </div>
        <button
          className="profileBtn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          Edit Profile
        </button>

        {showForm && (
          <form className="updateForm" action="submit">
            <input type="text" name="name" placeholder="User Name" />

            <input type="email" name="email" placeholder="change email" />

            <input type="file" name="picture" />
            <div>
              <button className="profileBtn">Update</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowForm((prev) => !prev);
                }}
              >
                {" "}
                <GiCancel />{" "}
              </button>
            </div>
          </form>
        )}
      </div>

      <div >
        <div>
          <div>
            <h1>Dashboard</h1>

            <button
              className="addBtn"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              Add Product
            </button>
          </div>
        </div>

        {showAddForm && (
          <form action="" className="addProductForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={foodStorage.name}
              onChange={handleChange}
              placeholder="Product Name"
            />

            <input
              type="number"
              id="price"
              name="price"
              value={foodStorage.price}
              onChange={handleChange}
              placeholder="Price"
            />

            <input
              type="file"
              id="image"
              name="image"
              className="fileupload"
              onChange={(e) => uploadImage(e)}
              placeholder="Product Image"
            />

            <textarea
              name="detials"
              id="details"
              value={foodStorage.detials}
              onChange={handleChange}
              cols="60"
              rows="5"
            >
              Product details...
            </textarea>
            <div className="fBtn flex justify-between">
              <button className="addBt" type="submit">
                Add
              </button>

              <button
                className="addBt"
                onClick={() => setShowAddForm(!showAddForm)
                }
              >
                cancel
              </button>
            </div>
          </form>
        )}
 <>
    <div className="foodCards ">
      {localData?.map((foodStorage) => {

        // handle click navigation to product detail page.
        // const handDitails = () =>{(onClick) => {
        //   Navigate(`/details/${foodStorage.id}`)}}

        return (
          <div key={foodStorage.name} className="foodStorage border border-yellow-700  h-1/4 p-2 text-center rounded justify-center items-center object-scale-down"  >
            <img src={foodStorage.image} alt={foodStorage.name} className="card h-24 items-center mx-auto" />
            <h3 className="fItern text-yellow-600"><span>NAME: </span>{foodStorage.name}</h3>
            <p><span>PRICE: </span>${foodStorage.price}</p>
            <p><span>DESCRIPTION: </span>{foodStorage.detials}</p>
            <div className="flex  justify-between">
              <button className="cardBtn" onClick={handleDelete}>Delete</button>

            </div>
          </div>
        )
      })}
    </div>
    </>
      </div>
    </div>
  );
};

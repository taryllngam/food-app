import React, { useContext } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import '../Payment/style.css'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcJcb, FaCcDiscover } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";


export default function Payment() {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
  let { id } = useParams();
  const navigate = useNavigate();
	const {foodItems} = useContext(FoodContext)
  const food = foodItems.find((ele) => ele.id == id);

  return (
    <div className='dets'>
    <div className='details'>
        <div className='cards'>
        <h1>ENTER CARD DETAILS</h1>
        <div className='pays'>
        <FaCcVisa/>
        <FaCcMastercard/>
        <FaCcAmex/>
        <FaCcJcb />
        <FaCcDiscover />
        </div>
        </div>
        <div className='card-dets'>
        <span>CARD NUMBER</span>
      <input {...getCardNumberProps({  })}/>
      </div>
      <div className='card-dets'>
        <span>EXPIRY DATE</span>
      <input {...getExpiryDateProps({ })}  />
      </div>
      <div className='card-dets'>
      <span>CV</span> 
      <input {...getCVCProps({  })}  />
      </div>
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
      <button      onClick={() => {
              navigate(`/billing/${id}`);
            }}>Submit</button>
    </div>
    </div>
  );
}
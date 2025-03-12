import React from 'react'
import { BsBank } from "react-icons/bs";
import '../css/registration.css'
export default function Regestration() {
  return (
    <div className='Regestration'>
      <div className="main_Regestration">
        <div className="regestration_header">
          <h5>Bank Account Registration</h5>
          <p><BsBank /> AMAN BANK</p>
        </div>
        <div className="regestration_body">
          <div className="personal_info">
            <p>Personal Information</p>
            <div className="input_section">
              <div className="image">
                <div className="image_main">

                </div>
                <div className="uploadimg">
                  <div className="main_upload_img">
                    <label htmlFor="">Upload passport size photo</label>
                    <input type="file"  />
                  </div>
                  <div className="fullname">
                    <label htmlFor="">Full Name</label>
                    <input type="text" />
                  </div>
                  <div className="mothername">
                    <label htmlFor="">Mother's Name</label>
                    <input type="text" />
                  </div>
                </div>
              
              </div>
              <div className="number">
                <div className="main_number">
                  <label htmlFor="">Phone Number</label>
                  <input type="number" />
                </div>
                <div className="email">
                  <label htmlFor="">Email Address</label>
                  <input type="email" placeholder='' />
                </div>

              </div>
              <div className="fathername">
                <div className="father_n">
                  <label htmlFor="">Father's Name</label>
                  <input type="text" />
                </div>
                <div className="dob">
                  <label htmlFor="">Date of Birth</label>
                  <input type='date' />
                </div>
              </div>
              <div className="address">
                <label htmlFor="">Address</label>

                <input type="text" />
              </div>
                </div>
          </div>

          <div className="Account_Info">
            <p>Account Information</p>
            <div className="account_input">
              <div className="select_One">
                <p>Account Type</p>
              
               <input type="radio" id="css" name="fav_language" value="CSS"/>
                 <label for="css">CSS</label>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                 <label for="javascript">JavaScript</label>
              </div>
              <div className="branch_name">
                <label htmlFor="">Branch Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="uploadsign">
              <div className="sign">
                <label htmlFor="">Upload Sign</label>
                <input type="file" />
              </div>
              <div className="addhar">
                <label htmlFor="">Addhar Card Img</label>
                <input type="file" />
                </div>
            </div>
          </div>

          <div className="notes">
            <input type="checkbox" />
            <p>I herely confirm that the information provided in account  accurate to the best of my knowledge. I also agree to abide by the bank's terms and conditions.
            </p>
          </div>

          <div className="button">
            <button> Registration
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

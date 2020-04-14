// import React from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBModalFooter,
//   MDBIcon,
//   MDBCardHeader,
//   MDBBtn
// } from "mdbreact";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

// const LoginPage = () => {
// return (
// <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <MDBCardHeader className="form-header warm-flame-gradient rounded">
//                 <h3 className="my-3">
//                   <MDBIcon icon="lock" /> Login:
//                 </h3>
//               </MDBCardHeader>
//               <label
//                 htmlFor="defaultFormEmailEx"
//                 className="grey-text font-weight-light"
//               >
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 id="defaultFormEmailEx"
//                 className="form-control"
//               />

//               <label
//                 htmlFor="defaultFormPasswordEx"
//                 className="grey-text font-weight-light"
//               >
//                 Your password
//               </label>
//               <input
//                 type="password"
//                 id="defaultFormPasswordEx"
//                 className="form-control"
//               />

//               <div className="text-center mt-4">
//                 <MDBBtn color="deep-orange" className="mb-3" type="submit">
//                   Login
//                 </MDBBtn>
//               </div>

//               <MDBModalFooter>
//                 <div className="font-weight-light">
//                   <p>Not a member? Sign Up</p>
//                   <p>Forgot Password?</p>
//                 </div>
//               </MDBModalFooter>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
// );
// };

// export default LoginPage;


import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

const LoginPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/s960x960/82731648_1200598410135844_4989587451929427968_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_eui2=AeGScM3vZqnr5s_cdtBOlxCUqk_je24USRCqT-N7bhRJEG8eR7BgeK04nHAaKORTdGr8i_u3sZuwnzP95JxdKD6A&_nc_oc=AQlEXgq1x5yPZRJ7E0VZ_JjGRAkSySuwPGGvvXFMOzzVp-2_hjWRfZ9QTdGm_k980DQ&_nc_ht=scontent.fbkk1-3.fna&_nc_tp=7&oh=8aff3c32cb67af53e65dfa7a7bd060ee&oe=5EB9C6EE)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <div className='md-form pb-3'>
                <MDBInput
                  label={
                    <>
                      Accept the&nbsp;
                      <a href='#!' className='green-text font-weight-bold'>
                        Terms and Conditions
                      </a>
                    </>
                  }
                  type='checkbox'
                  id='checkbox1'
                  labelClass='white-text'
                />
              </div>
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;
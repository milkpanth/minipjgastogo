import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import './Login.css';
import config from "../firebase/config";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)

  const login = e => {
      e.preventDefault();
      config.auth().signInWithEmailAndPassword(email, password).then((u) =>{
          console.log(u)
      }).catch((err) => {
          console.log(err)
      })
  }

  const signup = e => {
      e.preventDefault()
      config.auth().createUserWithEmailAndPassword(email, password).then((u) => {
          console.log(u)
      }).catch((err) => {
          console.log(err)
      })
    }


  return (
    <MDBContainer className="LoginForm">
      <MDBRow>
        <MDBCol md='8'>
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
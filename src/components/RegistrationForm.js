import React from "react";
import { useContext, useEffect } from "react";
import ShopContext from "../context/ShopContext";
import { Container } from "react-bootstrap";
require("dotenv").config({ path: "../../.env" });

const RegistrationForm = () => {
  const {
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    pass,
    setPass,
    phoneNumOne,
    setPhoneNumOne,
    phoneNumTwo,
    setPhoneNumTwo,
    phoneNum,
    setPhoneNum,
    errorFname,
    setErrorFname,
    errorLname,
    setErrorLname,
    errorEmail,
    setErrorEmail,
    errorPass,
    setErrorPass,
    errorPhoneNum,
    setErrorPhoneNum,
    formData,
    setFormData,
  } = useContext(ShopContext);
  const onCreateAccount = (evt) => {
    evt.preventDefault();
    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/customers/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName: fname,
        lName: lname,
        email: email,
        password: pass,
        phoneNum: phoneNum,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        alert(`Customer created:
        ${json.data.fName} ${json.data.lName} `);
        setFname("");
        setLname("");
        setEmail("");
        setPass("");
        setPhoneNumOne("");
        setPhoneNumTwo("");
        setPhoneNum([]);
      })
      .catch((err) => {
        console.log({ fname, lname, email, pass, phoneNum });
        alert(`Error ${err}`);
      });
  };

  const validateForm = () => {
    let isValid = true;
    if (fname === "") {
      setErrorFname("Please Enter First Name");
      isValid = false;
    } else {
      setErrorFname("");
    }
    if (lname === "") {
      setErrorLname("Please Enter Last Name");
      isValid = false;
    } else {
      setErrorLname("");
    }
    if (email === "") {
      setErrorEmail("Please Enter your Email");
      isValid = false;
    } else {
      if (/^\w+(\.?\w)*@\w+\.[A-Za-z]{2,3}$/.test(email)) {
        setErrorEmail("");
      } else {
        setErrorEmail("Please enter an appropriate email format");
        isValid = false;
      }
    }
    if (pass === "") {
      setErrorPass("Please Enter your password");
      isValid = false;
    } else {
      setErrorPass("");
    }
    if (phoneNumOne === "" && phoneNumTwo === "") {
      setErrorPhoneNum("Please Enter your phone number");
      isValid = false;
    } else {
      setErrorPhoneNum("");
    }
    return isValid;
  };

  return (
    <>
      <h3 className="mt-5 mx-auto text-center regHead">
        Create an Account Today!
      </h3>
      <Container className="mt-3 col-lg-4 col-md-6 col-sm-12">
        <form>
          <div className="form-control-container">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={fname}
                  onChange={(event) => {
                    setFname(event.target.value);
                  }}
                  id="fname"
                ></input>
                <span className="error">
                  <small>{errorFname}</small>
                </span>
              </div>
              <div className="d-flex flex-column col-lg-1 col-md-2"></div>
              <div className="d-flex flex-column">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={lname}
                  onChange={(event) => {
                    setLname(event.target.value);
                  }}
                  id="lname"
                ></input>
                <span className="error">
                  <small>{errorLname}</small>
                </span>
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              id="email"
            ></input>
            <span className="error mb-1">
              <small>{errorEmail}</small>
            </span>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                value={pass}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
                id="password"
              ></input>
              <span className="error">
                <small>{errorPass}</small>
              </span>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column">
                <label htmlFor="phone"> Phone Number</label>
                <input
                  className="form-control"
                  type="phone"
                  value={phoneNumOne}
                  onChange={(event) => {
                    setPhoneNumOne(event.target.value);
                    setPhoneNum([phoneNumOne, phoneNumTwo]);
                  }}
                  id="phoneNumOne"
                ></input>
                <span className="error">
                  <small>{errorPhoneNum}</small>
                </span>
              </div>
              <div className="d-flex flex-column col-lg-1 col-md-2"></div>
              <div className="d-flex flex-column">
                <label htmlFor="phone">Cell Phone Number</label>
                <input
                  className="form-control"
                  type="phone"
                  value={phoneNumTwo}
                  onChange={(event) => {
                    setPhoneNumTwo(event.target.value);
                    setPhoneNum([phoneNumOne, phoneNumTwo]);
                  }}
                  id="phoneNumTwo"
                ></input>
                <span className="error">
                  <small>{errorPhoneNum}</small>
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mt-4 justify-content-between  ">
            <button
              className="btn pt-2 pb-2 mx-auto btnReg"
              onClick={(event) => {
                event.preventDefault();
                if (validateForm()) {
                  console.log(fname);
                  onCreateAccount(event);
                } else {
                  alert("There are errors");
                }
              }}
            >
              Create Account
            </button>
            <button type="button " className="btn pt-2 pb-2 btnG mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              Google
            </button>

            <button type="button" className="btn pt-2 pb-2 mx-auto btnF ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              Facebook
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default RegistrationForm;

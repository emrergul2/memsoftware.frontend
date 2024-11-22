"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { all_routes } from "../../Router/all_routes.jsx";


const Signin = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const route = all_routes;
  return (
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper bg-img">
            <div className="login-content">
              <form action="index">
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <Image src="/assets/img/logo.png" alt="img" width={100} height={100} />
                  </div>
                  <Link href={route.dashboard} className="login-logo logo-white">
                    <Image src="/assets/img/logo-white.png" alt="img" width={100} height={100} />
                  </Link>
                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4>
                      Access the Dreamspos panel using your email and passcode.
                    </h4>
                  </div>
                  <div className="form-login mb-3">
                    <label className="form-label">Email Address</label>
                    <div className="form-addons">
                      <input type="text" className="form-control" />
                      <Image src="/assets/img/icons/mail.svg" alt="img" width={20} height={20} />
                    </div>
                  </div>
                  <div className="form-login mb-3">
                    <label className="form-label">Password</label>
                    <div className="pass-group">
                      <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="pass-input form-control"
                      />
                      <span
                          className={`fas toggle-password ${
                              isPasswordVisible ? "fa-eye" : "fa-eye-slash"
                          }`}
                          onClick={togglePasswordVisibility}
                      ></span>
                    </div>
                  </div>
                  <div className="form-login authentication-check">
                    <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                            <input type="checkbox" className="form-control" />
                            <span className="checkmarks" />
                            Remember me
                          </label>
                        </div>
                        <div className="text-end">
                          <Link href={route.forgotPassword} className="forgot-link">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-login">
                    <Link href={route.dashboard} className="btn btn-login">
                      Sign In
                    </Link>
                  </div>
                  <div className="signinform">
                    <h4>
                      New on our platform?
                      <Link href={route.register} className="hover-a">
                        {" "}
                        Create an account
                      </Link>
                    </h4>
                  </div>
                  <div className="form-setlogin or-text">
                    <h4>OR</h4>
                  </div>
                  <div className="form-sociallink">
                    <ul className="d-flex">
                      <li>
                        <Link href="#" className="facebook-logo">
                          <Image
                              src="/assets/img/icons/facebook-logo.svg"
                              alt="Facebook"
                              width={20}
                              height={20}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                              src="/assets/img/icons/google.png"
                              alt="Google"
                              width={20}
                              height={20}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="apple-logo">
                          <Image
                              src="/assets/img/icons/apple-logo.svg"
                              alt="Apple"
                              width={20}
                              height={20}
                          />
                        </Link>
                      </li>
                    </ul>
                    <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                      <p>Copyright © 2023 DreamsPOS. All rights reserved</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signin;
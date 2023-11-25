"use client";
import { useEffect, useState, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../app/page.module.css";
import axios from "@/api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatchPwd(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ userName: user, email: email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      // console.log(response.acc);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // this will be a great place to clear the input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
    // console.log(user, email, pwd);
  };

  return (
    <main className={styles.signUp}>
      {success ? (
        <section>
          <h1>success!</h1>
          <p>
            <Link href="log-in">Log In</Link>
          </p>
        </section>
      ) : (
        <div>
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}>
                  <faFontAwesome icon={faCheck}></faFontAwesome>
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                  <faFontAwesome icon={faTimes}></faFontAwesome>
                </span>
              </label>
              <input
                type="text"
                placeholder="username"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <faFontAwesome icon={faInfoCircle}>
                  4 - 16 characters <br></br>
                  Must Begin with a letter <br></br>
                  Letters, numbers, underscores, hyphens allowed
                </faFontAwesome>
              </p>

              {/* Email Input */}

              <label htmlFor="email">
                {/* Username: */}
                <span className={validEmail ? "valid" : "hide"}>
                  <faFontAwesome icon={faCheck}></faFontAwesome>
                </span>
                <span className={validEmail || !email ? "hide" : "invalid"}>
                  <faFontAwesome icon={faTimes}></faFontAwesome>
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                ref={userRef}
                // autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                aria-invalid={validEmail ? "false" : "true"}
                // aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                // id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <faFontAwesome icon={faInfoCircle}>
                  Must be a valid email
                </faFontAwesome>
              </p>

              {/* Password Input */}

              <label htmlFor="password">
                password:
                <span className={validPwd ? "valid" : "hide"}>
                  <faFontAwesome icon={faCheck}></faFontAwesome>
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                  <faFontAwesome icon={faTimes}></faFontAwesome>
                </span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                required
                placeholder="password"
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <faFontAwesome icon={faInfoCircle}>
                  8 - 16 characters <br></br>
                  Must include uppercase and lowercase letters, a number and a
                  special character <br></br>
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </faFontAwesome>
              </p>

              {/* Confirm Password Input */}

              <label htmlFor="confirm_pwd">
                Confirm Password:
                <span className={validMatchPwd && matchPwd ? "valid" : "hide"}>
                  <faFontAwesome icon={faCheck}></faFontAwesome>
                </span>
                <span
                  className={validMatchPwd || !matchPwd ? "hide" : "invalid"}
                >
                  <faFontAwesome icon={faTimes}></faFontAwesome>
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                id="confirm_pwd"
                onChange={(e) => {
                  setMatchPwd(e.target.value);
                }}
                required
                aria-invalid={validMatchPwd ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatchPwd ? "instructions" : "offscreen"
                }
              >
                <faFontAwesome icon={faInfoCircle}>
                  Must match the password input field
                </faFontAwesome>
              </p>

              <button
                disabled={
                  !validName || !validPwd || !validMatchPwd ? true : false
                }
              >
                Sign Up
              </button>
            </form>

            <p>
              Already registered?<br></br>
              <span className="line">
                <Link href="log-in">Log In</Link>
              </span>
            </p>
          </section>
          <section></section>
        </div>
      )}
    </main>
  );
}

export default SignUp;

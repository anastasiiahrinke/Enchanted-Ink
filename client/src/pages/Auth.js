import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location)
  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left__brand">NOVELLA</div>
        <div className="auth-left__content">
          <h1 className="auth-left__heading">
            Your story
            <br />
            begins
            <br />
            <span className="auth-left__heading--italic">here.</span>
          </h1>
          <div className="auth-left__divider" />
          <p className="auth-left__sub">
            Join thousands of devoted readers.
            <br />
            Every title you love — in one quiet place.
          </p>
        </div>
      </div>

      <div className="auth-right">
        <NavLink to="/" className="auth-back">
          ← BACK TO STORE
        </NavLink>

        <div className="auth-tabs d-flex gap-4 mb-4">
          <NavLink
            to={LOGIN_ROUTE}
            className={`auth-tab ${isLogin ? "auth-tab--active" : ""}`}
          >
            SIGN IN
          </NavLink>
          <NavLink
            to={REGISTRATION_ROUTE}
            className={`auth-tab ${!isLogin ? "auth-tab--active" : ""}`}
          >
            CREATE ACCOUNT
          </NavLink>
        </div>

        <div className="auth-heading mb-4">
          <h2>{isLogin ? "Welcome" : "Create your"}</h2>
          <h2 className="auth-heading--italic">
            {isLogin ? "back." : "account."}
          </h2>
          <p className="auth-heading__sub">
            {isLogin
              ? "Sign in to your library and continue reading."
              : "Start your literary journey today."}
          </p>
        </div>

        <Form className="d-flex flex-column gap-3">
          <Form.Group>
            <Form.Label className="auth-label">EMAIL ADDRESS</Form.Label>
            <Form.Control
              className="auth-input"
              type="email"
              placeholder="your@email.com"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="auth-label">PASSWORD</Form.Label>
            <div className="auth-input-wrapper">
              <Form.Control
                className="auth-input"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <span
                className="auth-show"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>
          </Form.Group>

          {isLogin && (
            <div className="d-flex justify-content-between align-items-center">
              <Form.Check
                className="auth-check"
                type="checkbox"
                label="Keep me signed in"
              />
              <span className="auth-forgot">FORGOT PASSWORD?</span>
            </div>
          )}

          <button className="btn-signin-auth mt-2">
            {isLogin ? "SIGN IN →" : "CREATE ACCOUNT →"}
          </button>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="d-flex gap-3">
            <button className="btn-social" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="currentColor"
                  opacity="0.9"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="currentColor"
                  opacity="0.5"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
              GOOGLE
            </button>

            <button className="btn-social" type="button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              FACEBOOK
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Auth;

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [logInError, setLogInErr] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogInError(error);
      });
  };

  return (
    <div className="card mt-28 shrink-0 w-full m-16 mx-auto max-w-sm shadow-2xl bg-base-100">
      <div>
        <h2 className="font-bold text-center text-3xl	 pt-4">Login</h2>
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <div className="form-control mb-4">
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
            })}
            placeholder="Enter Your Email"
            className="input input-bordered"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="form-control mb-4">
          <input
            type="password"
            {...register("password", {
              required: "Password is Required",
            })}
            placeholder="Enter Your password"
            className="input input-bordered"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <label className="label">
            <Link to="#" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
          {logInError && <p className="text-red-500">logInError</p>}
        </div>
        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>

        <div>
          <p>
            don't have an account?
            <Link className="link" to="/signup">
              Sign Up Here
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default Login;

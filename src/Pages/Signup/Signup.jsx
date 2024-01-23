import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathName || "/login";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUpError, setSingUpError] = useState("");

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
        const userInfo = {
          displayName: data.name,
          phoneNumber: data.category,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSingUpError(error.message);
        // ..
      });
  };

  return (
    <div className="card mt-28 shrink-0 w-full m-16 mx-auto max-w-sm shadow-2xl bg-base-100">
      <div>
        <h2 className="font-bold text-center text-3xl	 pt-4">Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
        <select
          {...register("category", {
            required: "Category is Required",
          })}
          className="select select-bordered w-full max-w-xs mb-4"
        >
          <option selected>Buyer</option>
          <option>Seller</option>
        </select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}

        <div className="form-control mb-4">
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            placeholder="Enter Your Name"
            className="input input-bordered"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

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
              minLength: {
                value: 8,
                message: "Password must be 8 characters long",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[@$!%*?&])/,
                message:
                  "Passwotd must have one uppercase and One spesial caracters",
              },
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

          {signUpError && (
            <p className="text-red-500">This Account is alrady Register!</p>
          )}
        </div>
        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>

        <div>
          <p>
            Alrady have an account?
            <Link className="link" to="/login">
              Login Here
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default Signup;

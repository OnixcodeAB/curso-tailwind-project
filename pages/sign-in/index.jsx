import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";

//Component to notify failed credential to the user,

const NotifyBadCredential = () => {
  return (
    <div className="my-4">
      <Typography className="text-lg text-red-500 font-medium">
        Incorrect Email or password try again
      </Typography>
    </div>
  );
};

// SigIn Component
const SignIn = () => {
  const [valueState, setvaleuStat] = useState();
  const [badCredentials, setBadCredentials] = useState(false);

  const authContext = useContext(AuthContext);
  const router = useRouter();

  // Function to save user login data
  const onChange = (e) => {
    e.preventDefault();

    authContext.setCredentials({
      ...authContext.credentials,
      [e.target.name]: e.target.value,
    });
  };
  

  // Function to check if the provided email and password exist

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    const token = authContext.authState;
    if (authContext.CheckCredentials(token["token"])) {
      // Redirect to a different page upon successful login
      router.push("/");
      return true;
    } else {
      setBadCredentials(true);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={valueState}
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                value={valueState}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            {badCredentials ? <NotifyBadCredential /> : ""}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleButtonSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            href="/sign-up"
            className="font-semibold leading-6 text-lg text-indigo-600 hover:text-indigo-500"
          >
            Sign UP
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

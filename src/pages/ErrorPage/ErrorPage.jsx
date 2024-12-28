import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="pt-32 p-5 text-center">
      <h1 className="mt-3 font-semibold text-[#AFE1F5] text-9xl">404</h1>
      <p className="mt-3 text-2xl font-extrabold">Page Not Found</p>
      <p className="font-medium mt-3 text-xl">
        Oops!! The page you are looking for might have been <br /> moved, renamed or
        might never existed
      </p>
      <p className="mt-3">{error.statusText || error.message}</p>
      <Link to="/">
        <button class="inline-block px-6 py-2 font-semibold text-black border border-black mt-3  hover:bg-black hover:text-white transition-colors">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

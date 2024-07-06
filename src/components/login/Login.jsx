import React from "react";
import Header from "./Header";
import BodyForm from "./BodyForm";

export default function Login() {
  return (
    <div className="bg-main-color h-screen md:flex flex-col justify-center items-center bg-bform bg-center bg-no-repeat md:bg-center ">
      <Header />
      <BodyForm />
    </div>
  );
}

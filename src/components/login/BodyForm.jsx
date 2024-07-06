import React from "react";
import agroInvestLogo from "../../assets/images/logo.svg";

import { FcGoogle } from "react-icons/fc";

export default function BodyForm() {
  return (
    <div className=" md:flex flex-col items-center justify-center    xl:w-[890px] md:h-[841px] ">
      <div className="flex justify-center items-center sm:my-2 ">
        <img
          src={agroInvestLogo}
          alt="logo"
          className="w-[200px] xl:w-[350px] md:w-[300px]"
        />
      </div>
      <div className="  md:w-[600px] xl:w-[700px] ">
        <form
          action=""
          className="bg-main-color-light h-3/6 m-3 md:m-0 rounded-xl p-4 md:p-5 md:w-full md:h-full"
        >
          <h3 className="text-[16px] md:text-[16px] xl:text-[25px] font-bold text-center ">
            Connectez-vous à votre compte
          </h3>
          <div className="my-5">
            <div>
              <label
                htmlFor="email"
                className="text-[15px] md:text-[14px] xl:text-[20px] font-bold"
              >
                Email:
              </label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrer votre email"
                className="w-full p-3 md:p-3 xl:p-5 rounded-xl mt-2 bg-main-color-input"
              />
            </div>
          </div>

          <div className="my-5">
            <div>
              <label
                htmlFor="password"
                className="text-[15px] md:text-[14px] xl:text-[20px] font-bold"
              >
                Mot de passe:
              </label>
            </div>
            <div className="">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Entrer votre mot de passe"
                className="w-full  p-3 md:p-3 xl:p-5 rounded-xl mt-2 bg-main-color-input"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-main-color-btn-submit text-main-color-light w-28 md:w-48 font-bold py-2 md:py-3  px-4 md:px-5 rounded-xl"
              >
                <h6 className="md:text-[13px] text-[13px] xl:text-[17px]">Se connecter</h6>
              </button>
              <a
                href="http://"
                className="font-bold md:text-[14px] text-[13px] xl:text-[17px] hover:text-main-color-btn-submit"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <h4 className="text-[15px] md:text-[15px] xl:text-[18px]  font-bold mt-6 text-center">
              Ou se connecter avec{" "}
            </h4>
            <div className="flex justify-center items-center my-3 md:my-5">
              <a href="http://">
                <FcGoogle size={40} />
              </a>
            </div>
            <p className="text-[15px] md:text-[15px] xl:text-[18px]  mt-3 text-center">
              Vous n'avez pas de compte ?{" "}
              <a href="" className="text-main-color-btn-submit">
                Créer un compte
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import agroInvestLogo from "../../assets/images/logo.svg";

import { FcGoogle } from "react-icons/fc";

export default function BodyForm() {
  return (
    <div className=" md:flex flex-col items-center justify-center  md:bg-bform md:bg-center md:bg-cover  md:w-[890px] md:h-[841px] ">
      <div className="flex justify-center items-center my-2 ">
        <img
          src={agroInvestLogo}
          alt="logo"
          className="w-[200px] md:w-[400px]"
        />
      </div>
      <div className=" md:w-[650px]  ">
        <form
          action=""
          className="bg-main-color-light h-3/6 m-3 rounded-xl p-4 md:p-5 md:w-full md:h-full"
        >
          <h3 className="text-[25px] md:text-[30px] font-bold text-center">
            Connectez-vous à votre compte
          </h3>
          <div className="my-5">
            <div>
              <label
                htmlFor="email"
                className="text-[17px] md:text-[20px] font-bold"
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
                className="w-full p-3 md:p-5 rounded-xl mt-2 bg-main-color-input"
              />
            </div>
          </div>

          <div className="my-5">
            <div>
              <label
                htmlFor="password"
                className="text-[17px] md:text-[20px] font-bold"
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
                className="w-full  p-3 md:p-5 rounded-xl mt-2 bg-main-color-input"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-main-color-btn-submit text-main-color-light w-28 md:w-48 font-bold py-2 md:py-3  px-4 md:px-5 rounded-xl"
              >
                <h6 className="md:text-[20px] ">Se connecter</h6>
              </button>
              <a
                href="http://"
                className="font-bold md:text-[20px] hover:text-main-color-btn-submit"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <h4 className="text-[17px] md:text-[20px]  font-bold mt-6 text-center">
              Ou se connecter avec{" "}
            </h4>
            <div className="flex justify-center items-center my-3 md:my-5">
              <a href="http://">
                <FcGoogle size={40} />
              </a>
            </div>
            <p className="text-[16px] md:text-[20px]  mt-3 text-center">
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

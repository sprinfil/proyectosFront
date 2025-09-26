import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SharedButton } from "../SharedButton/SharedButton";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8">
      <Card className="w-[500px] py-5 px-10 flex flex-col ">
        <div className="">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Proyectos SAPA
          </h2>
        </div>

        <div className="mt-10 ">
          <div>
            <label
              for="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Nombre de usuario
            </label>
            <div className="mt-2">
              <Input placeholder="Nombre de usuario" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mt-5">
              <label
                for="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <Input placeholder="Constraseña" />
            </div>
          </div>

          <div>
            <SharedButton
              texto={"Iniciar Sesión"}
              className="w-full mt-5"
              onClick={() => {
                navigate("/proyectos");
              }}
            />
          </div>

          {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p> */}
        </div>
      </Card>
    </div>
  );
};

import React from "react";
import { Input } from "../../components/input";

export const LoginPage = () => {
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

      <div className="mt-10 sm:mx-auto w-[350px] p-6 shadow-lg rounded-md sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input
            title="Email"
            name="email"
            placeholder="exemplo@gmail.com..."
          />

          <Input
            title="Senha"
            name="senha"
            placeholder="senha"
            autoComplete="current-password"
            required
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Ainda não possui conta?{" "}
          <a
            href="/auth/cadastrar"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Criar conta
          </a>
        </p>
      </div>
    </div>
  );
};

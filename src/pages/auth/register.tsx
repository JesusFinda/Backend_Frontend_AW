import React from "react";
import { Input } from "../../components/input";

export const RegisterPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto w-[350px] p-6 shadow-lg rounded-md sm:max-w-sm">
        <form className="space-y-2" action="#" method="POST">
          <Input title="Nome" name="nome" />
          <Input title="Nome de usuário" name="username" />
          <Input title="BI" name="bi" />
          <Input title="Telefone" name="phone" type="tel" />
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
              Cadastrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já possui conta?{" "}
          <a
            href="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

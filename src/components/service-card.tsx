import React from "react";

type Props = {
  name: string;
  price: number;
  description: string;
};

export const ServiceCard = ({ description, name, price }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow max-w-[300px] ">
      <img className="rounded-t-lg" src="/" alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
          {name}
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-700 ">{description}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Fazer Marcação
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

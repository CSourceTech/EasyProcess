import Head from "next/head";
import React from "react";
import { BiConfused } from "react-icons/bi";
type Props = {};

function Custom404({}: Props) {
  return (
    <div>
      <Head>
        <title>Error 404: Not Found | Ease My Process</title>
      </Head>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black flex justify-center items-center text-gray-600">
            404
            <BiConfused className="h-32 w-32 inline  items-center" />
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ventured down the wrong road?
          </p>

          <p className="mt-4 text-gray-500">
            We can't find that page. And if we can't, that means it may have
            never existed!
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded bg-[#D20420] px-5 py-3 text-sm font-medium text-white hover:bg-rose-500 transition focus:outline-none focus:ring"
          >
            Go Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Custom404;

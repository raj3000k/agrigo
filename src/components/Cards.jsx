import { Fragment, useState } from "react";

export default function Cards({ s }) {
  return (
    <div className="items-center flex flex-row">
      <button
        class=" hover:bg-green-500 rounded-3xl text-3xl bg-green-800 items-center h-72 w-72 text-white flex flex-row 
      justify-center "
      >
        {s}
      </button>
    </div>
  );
}

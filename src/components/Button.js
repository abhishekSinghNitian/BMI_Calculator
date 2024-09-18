import React from "react";

export default function Button({ name, onSubmit}) {
  return (
    <div>
      <button
        className="border-solid border-2 border-indigo-600 rounded-lg w-[250px] h-10 bg-slate-600 text-2xl"
        onClick={onSubmit}
      >
        {name}
      </button>
    </div>
  );
}

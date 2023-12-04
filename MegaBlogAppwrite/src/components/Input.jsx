import React, { useId } from "react";

export default function Input() {
  const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...pros },
    ref
  ) {
    const id = useId();
    return (
      <div>
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          type={text}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
          ref={ref}
          {...pros}
          id={id}
        />
      </div>
    );
  });
}

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const FormInput = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <div className="w-full space-y-2 font-bricolage">
      <label className="text-neutrals800 font-medium" htmlFor={props?.name}>
        {props?.title}
      </label>
      <input
        {...props}
        className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutrals500 text-neutrals800 ease transition-all duration-300 outline-primary"
      />
    </div>
  );
};

export default FormInput;

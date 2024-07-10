import { useRef, forwardRef, useImperativeHandle } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import GitHub_SVG from "../assets/svg/GitHub_Invertocat_Logo.svg?react";
import LinkedIn_SVG from "../assets/svg/LinkedIn_icon.svg?react";
import "./CSS/connect.css";

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const Connect = forwardRef((_props, ref) => {
  const connectRef = useRef<HTMLElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const keys = import.meta.env;

  const sendEmail: SubmitHandler<Inputs> = () => {
    if (form.current) {
      emailjs
        .sendForm(keys.VITE_Service_ID, keys.VITE_Template_ID, form.current, {
          publicKey: keys.VITE_Public_Key,
        })
        .then(
          () => {
            reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      scroll: () => {
        connectRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    }),
    []
  );

  return (
    <section className="c-connect-bg py-12" ref={connectRef}>
      <h3 className="font-neuropol font-bold text-center text-5xl text-slate-100 mb-5">
        Connect with me
      </h3>
      <form
        className="c-form-bg w-1/3 mx-auto p-8 space-y-8 border rounded-lg"
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        <div>
          <label className="text-xl text-white" htmlFor="user_name">
            Your Name
          </label>
          <input
            className="input input-bordered w-full block"
            placeholder="John Doe"
            {...register("user_name", { required: true })}
          />
          {errors.user_name && (
            <p className="text-lg text-red-500 font-semibold">
              Name is Required
            </p>
          )}
        </div>

        <div>
          <label className="text-xl text-white" htmlFor="user_email">
            Your Email
          </label>
          <input
            className="input input-bordered w-full block"
            placeholder="example@gmail.com"
            {...register("user_email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            })}
          />
          {errors.user_email && (
            <p className="text-lg text-red-500 font-semibold">
              Valid Email is Required
            </p>
          )}
        </div>

        <div>
          <label className="text-xl text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-48 block"
            placeholder="Hello, I would love to talk with you about..."
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <p className="text-lg text-red-500 font-semibold">
              Message is Required
            </p>
          )}
        </div>
        <button className="btn w-28 h-14 mx-auto bg-cyan-500 border-cyan-600 hover:bg-cyan-300 hover:border-cyan-400 text-lg block">
          Submit
        </button>
      </form>
      <div className="flex justify-center space-x-40 pt-20">
        <a href="https://github.com/Xavier-L-25" target="_blank">
          <GitHub_SVG className="c-SVG-bg h-20 w-min" />
        </a>
        <a
          href="https://www.linkedin.com/in/xavier-lopez-1a9713281/"
          target="_blank"
        >
          <LinkedIn_SVG className="c-SVG-bg h-20 w-min" />
        </a>
      </div>
    </section>
  );
});

export default Connect;

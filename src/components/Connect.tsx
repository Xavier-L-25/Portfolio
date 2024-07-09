import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import GitHub_SVG from "../assets/svg/GitHub_Invertocat_Logo.svg?react";
import LinkedIn_SVG from "../assets/svg/LinkedIn_icon.svg?react";
import "./CSS/connect.css";

const Connect = () => {
  const form = useRef<HTMLFormElement>(null);

  const keys = import.meta.env;

  const sendEmail = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(keys.VITE_Service_ID, keys.VITE_Template_ID, form.current, {
          publicKey: keys.VITE_Public_Key,
        })
        .then(
          () => {
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="c-connect-bg">
      <h3 className="text-center text-5xl text-slate-100">Connect with me</h3>
      <form
        className="c-form-bg w-1/3 mx-auto p-10 space-y-8 border rounded-lg"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <label className="text-xl text-white" htmlFor="user_name">
            Your Name
          </label>
          <input
            className="input input-bordered w-full block"
            type="text"
            placeholder="John Doe"
            name="user_name"
          />
        </div>

        <div>
          <label className="text-xl text-white" htmlFor="user_email">
            Your Email
          </label>
          <input
            className="input input-bordered w-full block"
            type="email"
            placeholder="example@gmail.com"
            name="user_email"
          />
        </div>

        <div>
          <label className="text-xl text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-48 block"
            placeholder="Hello, I would love to talk with you about..."
            name="message"
          ></textarea>
        </div>
        <button className="btn w-28 h-14 mx-auto bg-cyan-500 border-cyan-600 hover:bg-cyan-300 hover:border-cyan-400 text-lg block">
          Submit
        </button>
      </form>
      <div className="flex justify-center space-x-40 py-20">
        <GitHub_SVG className="c-SVG-bg h-20 w-min" />
        <LinkedIn_SVG className="c-SVG-bg h-20 w-min" />
      </div>
    </section>
  );
};

export default Connect;

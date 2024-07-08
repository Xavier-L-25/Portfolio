/// <reference types="vite-plugin-svgr/client" />
import HTML_SVG from "../assets/svg/HTML5_logo_and_wordmark.svg?react";
import CSS_SVG from "../assets/svg/CSS3_logo_and_wordmark.svg?react";
import JavaScript_SVG from "../assets/svg/logo-javascript.svg?react";
import TypeScript_SVG from "../assets/svg/typescript.svg?react";
import React_SVG from "../assets/svg/React-icon.svg?react";
import TailwindCSS_SVG from "../assets/svg/Tailwind_CSS_Logo.svg?react";
import CSharp_SVG from "../assets/svg/Logo_C_sharp.svg?react";
import DotNET_SVG from "../assets/svg/Microsoft_.NET_logo.svg?react";
import SQL_SVG from "../assets/svg/Sql_data_base_with_logo.svg?react";
import SQLServer_SVG from "../assets/svg/microsoft-sql-server-1.svg?react";
import PostgreSQL_SVG from "../assets/svg/postgre-sql.svg?react";
import Git_SVG from "../assets/svg/Git-logo.svg?react";
import "./CSS/skills.css";

const Skills = () => {
  return (
    <section className="c-skills-bg">
      <div className="container mx-auto">
        <h3 className="text-center text-5xl text-slate-100 mb-16">Skills</h3>
        <div className="pb-32 flex flex-wrap gap-28 justify-center">
          <div className="c-SVG-bg p-8 rounded-full">
            <HTML_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <CSS_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <JavaScript_SVG className="h-32 w-min rounded-lg" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <TypeScript_SVG className="h-32 w-min rounded-lg" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <React_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <TailwindCSS_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <CSharp_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <DotNET_SVG className="h-32 w-min rounded-lg" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <SQL_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <SQLServer_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <PostgreSQL_SVG className="h-32 w-min" />
          </div>
          <div className="c-SVG-bg p-8 rounded-full">
            <Git_SVG className="h-32 w-min" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { useRef, forwardRef, useImperativeHandle } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { LuMouse } from "react-icons/lu";
import "./CSS/intro.css";

const Intro = forwardRef((_props, ref) => {
  const topRef = useRef<HTMLElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      scroll: () => {
        topRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      },
    }),
    []
  );

  return (
    <>
      <section
        className="c-intro-bg min-h-dvh flex flex-col justify-center items-center relative"
        ref={topRef}
      >
        <h1 className="font-nasalization text-center text-6xl font-bold text-red-500">
          Hello, I'm Xavier
        </h1>
        <h2 className="font-zekton text-center text-5xl">
          A full stack web developer
        </h2>
        <div className="absolute mt-80">
          <LuMouse className="mx-auto size-8" />
          <MdKeyboardDoubleArrowDown className="c-animation size-10" />
        </div>
      </section>
    </>
  );
});

export default Intro;

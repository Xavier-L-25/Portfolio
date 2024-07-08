import "./CSS/about.css";

const About = () => {
  return (
    <section className="c-about-bg py-32">
      <div className="container mx-auto">
        <h3 className="text-center text-5xl text-slate-100 mb-24">About me</h3>
        <div className="flex gap-x-24 items-center">
          <div className="h-min">
            <h3 className="text-center text-3xl text-slate-100">
              How it started...
            </h3>
            <p className="text-center text-xl text-slate-100">
              My software development journey started with the help of{" "}
              <a
                className="text-cyan-100 underline hover:text-slate-300"
                href="https://www.freecodecamp.org/"
                target="_blank"
              >
                FreeCodeCamp.org
              </a>
              . I had always been interested in coding but never knew how to get
              started. With all the information out there on the internet about
              how to code and what language to learn first I felt overwhelmed.
              When I discovered FreeCodeCamp and their structured curriculum I
              felt like I had a start point and end point that I could work
              towards. This gave me the confidence to finally start my coding
              journey. I worked on the the Responsive Web Design Certification
              while also working full time as a supervisor in a retail store. As
              I worked my way through the certification I realized I really
              enjoyed web design. By the time I finished the certification I
              knew this was something I wanted to pursue full time. I
              immediately started on the next section of the curriculum which
              taught me all about JavaScript. Here is where I decided I wanted
              fast track my learning while also getting guided help from people
              that knew the industry.
            </p>
          </div>

          <div className="h-min">
            <h3 className="text-center text-3xl text-slate-100">Right now</h3>
            <p className="text-center text-xl text-slate-100">
              I joined{" "}
              <a
                className="text-cyan-100 underline hover:text-slate-300"
                href="https://sabio.la/"
                target="_blank"
              >
                Sabio
              </a>{" "}
              and here I truly learned what it took to become a web developer. I
              learned all of the skills I needed to begin my journey as a
              professional full stack web developer. I finished my learning
              about JavaScript and was then taught all fundamental concepts of
              React. React opened my eyes to how such interactive websites were
              built today, a concept I was struggling to understand when I was
              building webpages with pure HTML, CSS, and JavaScript. I then
              learned all about the back end of web development and built APIs
              with the use of C# and the .NET framework. This along with also
              learning all about SQL and database storage, structure, and
              normalization now meant I could interactively store any
              information I wanted to on my websites. I left Sabio knowing I was
              ready to join the web development industry.
            </p>
          </div>

          <div className="h-min">
            <h3 className="text-center text-3xl text-slate-100">
              ...The future
            </h3>
            <p className="text-center text-xl text-slate-100">
              For the future I want to continue learning more about web
              development. One of the things I love about this industry is that
              there is always something new to learn. Whether that be learning a
              new languages such as Java for a new backend experience or
              learning a new framework such as Vue I want to try it all. I'm am
              especially interested in learning more about cloud development as
              well as user authentication and authorization. I believe proper
              web security is crucial for any website and user authentication
              and authorization plays a large role in making sure a website is
              secure. I also know web applications are being built with the idea
              of cloud development at the forefront so I want to learn more
              about the design of cloud development applications on services
              such as AWS and Azure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

type Ref = {
  refToAbout: React.RefObject<HTMLElement>;
  refToSkills: React.RefObject<HTMLElement>;
  refToConnect: React.RefObject<HTMLElement>;
};

const Navbar = ({ refToAbout, refToSkills, refToConnect }: Ref) => {
  const scroll = (e: React.SyntheticEvent) => {
    switch (e.currentTarget.id) {
      case "About":
        refToAbout.current?.scroll();
        break;
      case "Skills":
        refToSkills.current?.scroll();
        break;
      case "Connect":
        refToConnect.current?.scroll();
        break;
    }
  };

  return (
    <div className="container mx-auto relative z-10">
      <nav className="navbar  absolute">
        <p className="navbar-start font-nasalization text-neutral-50 text-3xl font-extrabold hover:cursor-default">
          Xavier
        </p>
        <ul className="navbar-end space-x-32">
          <li
            id="About"
            className="font-zekton text-neutral-50 text-xl font-semibold hover:text-neutral-200 hover:cursor-pointer"
            onClick={scroll}
          >
            About
          </li>
          <li
            id="Skills"
            className="font-zekton text-neutral-50 text-xl font-semibold hover:text-neutral-200 hover:cursor-pointer"
            onClick={scroll}
          >
            Skills
          </li>
          <li
            id="Connect"
            className="font-zekton text-neutral-50 text-xl font-semibold hover:text-neutral-200 hover:cursor-pointer"
            onClick={scroll}
          >
            Connect
          </li>
          <li className="font-zekton text-neutral-50 text-xl font-semibold hover:text-neutral-200 hover:cursor-pointer">
            Resume
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

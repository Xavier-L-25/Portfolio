const Navbar = () => {
  return (
    <div className="container mx-auto relative z-10">
      <nav className="navbar  absolute">
        <text className="navbar-start text-neutral-50 text-3xl font-extrabold hover:text-neutral-200">
          Xavier
        </text>
        <text className="navbar-end text-neutral-50 text-xl font-semibold hover:text-neutral-200">
          About
        </text>
        <text className="navbar-end text-neutral-50 text-xl font-semibold hover:text-neutral-200">
          Skills
        </text>
        <text className="navbar-end text-neutral-50 text-xl font-semibold hover:text-neutral-200">
          Connect
        </text>
        <text className="navbar-end text-neutral-50 text-xl font-semibold hover:text-neutral-200">
          Resume
        </text>
      </nav>
    </div>
  );
};

export default Navbar;

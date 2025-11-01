const Navbar = () => {
  return (
    <div>
      <nav className="border-b p-[1rem] flex justify-between items-center">
        <div className="flex items-center gap-[2rem]">
          logo
          <h1>SKhub</h1>
        </div>
        <ul className="flex items-center gap-[6rem]">
          <li>
            <a href="">Profiles</a>
          </li>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <div>user Profile</div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

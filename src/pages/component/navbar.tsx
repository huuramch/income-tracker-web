import { Avatar } from "@/icons/geldavatar";
import { Logo } from "@/icons/geldmain";

export const Navbar = () => {
  return (
    <div className="nav_menu" style={{ padding: '0px 100px'}}>
      <div style={{ display: "flex", justifyContent: "space-between", gap:'20px', alignItems: "center" }}>
        <Logo />
        <li>
          <a href="#">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            Records
          </a>
        </li>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="btn" style={{ width: '100px', marginRight:'20px'}}> + Record</button>
        <Avatar />
      </div>
    </div>
  );
};

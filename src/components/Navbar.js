import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="mx-[4%] tablet:mx-[10%] flex justify-between items-center font-Poopins my-[2%] tablet:my-[1%]">
      <img className="h-[55px]" alt="LOGO" src={Logo} />

      <svg className="h-[27px] w-[27px] laptop:hidden" viewBox="0 0 32 32">
        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"></path>
      </svg>

      <div className="hidden laptop:flex gap-x-[60px] text-navBarText font-medium">
        <p className="cursor-pointer hover:text-orange">Home</p>
        <p className="cursor-pointer hover:text-orange">About Us</p>
        <p className="cursor-pointer hover:text-orange">Help</p>
        <p className="cursor-pointer hover:text-orange">Sign In</p>
        <p className="cursor-pointer hover:text-orange">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;

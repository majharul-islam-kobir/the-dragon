import { Link } from "react-router";
import { useContext, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import image from "../../assets/image/user.png";
import { AuthContext } from "../../contex/AuthContext";

function Nevber() {
    const {user , signOutUser} = useContext(AuthContext)
    console.log(user);
    

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSingOut = () => {
    signOutUser()
    .then( () => {
        console.log("User is logout")
        
    }).catch((error) => {
        console.log(error);
        
    })
    
  }

  return (
    <nav className="flex justify-between items-center sticky top-[180px] bg-white py-7 container mx-auto z-20">
      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Center Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row justify-center flex-grow text-center absolute md:static bg-white top-14 left-0 w-full md:w-auto shadow-md md:shadow-none z-10`}
      >
        <ul className="flex flex-col md:flex-row items-center">
          <li className="mx-4 text-lg font-semibold my-2 md:my-0">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-lg font-semibold my-2 md:my-0">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 text-lg font-semibold my-2 md:my-0">
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <ul className="flex items-center">
          {/* User Image */}
          <li>
            {
                user ? <>
                    <span>{user.email}</span>
                </>: 
            <a><img src={image} width={41} alt="User" /></a>
            }
          </li>
          {/* Login Button */}
          <li className="text-white bg-black px-[23px] ml-3 py-[5px] text-lg md:text-xl">
            {user ? <>
                <Link onClick={handleSingOut} to="/login">LogOut</Link>
            </>
            : <Link to="/login">LogIn</Link>
            }
           
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nevber;

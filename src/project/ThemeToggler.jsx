import Divider from "./Divider";

// ICONS
import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return true;
  });

  const handleToggleTheme = () => {
    // if ( isDarkTheme === true ) {
    //     return setIsDarkTheme(false)
    // } else {
    //     return setIsDarkTheme(true)
    // }
    setIsDarkTheme((previous) => !previous);
  };

  return (
    <div
      className={`${
        isDarkTheme === true
          ? "text-white bg-slate-950"
          : " text-black bg-white"
      } h-screen w-full flex flex-col items-center justify-center`}
    >
      <button onClick={handleToggleTheme}>
        {isDarkTheme ? <IoMdSunny size={40} /> : <IoMoon size={40} />}
      </button>
      <Divider theme={isDarkTheme}/>
    </div>
  );
};

export default ThemeToggler;

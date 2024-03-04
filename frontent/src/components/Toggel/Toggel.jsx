import React, { useContext } from "react";
// Import icons sun from react icons
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

//  import themeContext from context
import { themeContext } from "../../context";
const Toggel = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //  handelToggle
  const handleToggle = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggel">
      <IoSunnyOutline />
      <IoMoonOutline />
      <button
        onClick={handleToggle}
        className="b-toggle"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></button>
    </div>
  );
};

export default Toggel;

import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import logo from "../../assets/logo.png"

import "./layout.css";
import { useState } from "react";
import Cards from "../cards/cards";
import { width } from "@mui/system";
const DefaultLayout = () => {
    const [menufull,setMenufull] = useState(true)
    const [itemdata,setItemdata] = useState([1,2,3,4])
    const menushirnk = ()=>{
        setMenufull(!menufull)
    }
  return (
    <>
      <div className="layoutContainer">
        <div className="leftcontainer" style={menufull?{width:"15%"}:{width:"5%"}}>
          <div style={{height:"5%"}}>
            <HomeIcon />
            <button className={menufull?"left_btn":"hideleft_btn"}>Home</button>
          </div>
          <div style={{height:"5%"}}>
            <CategoryIcon />
            <button className={menufull?"left_btn":"hideleft_btn"}>Products</button>
          </div>
          <div style={{height:"5%"}}>
            <InsertDriveFileIcon />
            <button className={menufull?"left_btn":"hideleft_btn"}>Bill</button>{" "}
          </div>
          <div style={{height:"5%"}}>
            <EmojiPeopleIcon />
            <button className={menufull?"left_btn":"hideleft_btn"}>Customers</button>
          </div>
          <div style={{height:"5%"}}>
            <LogoutIcon />
            <button className={menufull?"left_btn":"hideleft_btn"}>Login</button>
          </div>
        </div>
        <div className="rightcontainer" >
          <div className="rightHeader">
            <div onClick={menushirnk} className="menuicon">{menufull?<MenuOpenIcon/>:<KeyboardArrowRightIcon/>}</div>
            <img src={logo} style={{objectFit:"contain",height:"100%", width:"100%"}}/>
            <div><LocalMallIcon/></div>
          </div>
          <div className="right_content">
            {itemdata.map(()=>{
                return  <Cards/>
            })}
               
          </div>
         
        </div>
      </div>
    </>
  );
};
export default DefaultLayout;

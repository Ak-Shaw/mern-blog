import axios from "axios"
import { useEffect, useState } from "react"
import "./sidebar.css"
import {Link} from "react-router-dom"

const PORT = process.env.PORT || 5000;

export default function Sidebar() {
    const [cats, setCats] = useState([])
    useEffect(()=>{
        const getCats = async()=> {
            const res = await axios.get("http://localhost:" + PORT + "/api/categories")
            console.log(res);
            setCats(res.data)
        };
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.ibb.co/jgncghb/LRM-EXPORT-20191219-215206-removebg.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum eaque fugiat, omnis aperiam officia quos repellendus animi, culpa ab sit illo cumque dolore. Nisi magnam sint dolorem. Recusandae, exercitationem.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link className="link" to={`/?cat=${c.name}`}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

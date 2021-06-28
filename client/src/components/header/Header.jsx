import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://i.pinimg.com/originals/f0/9d/d9/f09dd9bf26f82fe882a36aa78ff0800a.jpg" alt="" className="headerImg" />
        </div>
    )
}

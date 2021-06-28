import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
    const PORT = process.env.PORT || 5000;
    const PF = "http://localhost:" + PORT + "/images/"
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}

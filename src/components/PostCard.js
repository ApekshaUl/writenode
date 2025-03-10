import { auth,db } from "../firebase/config";
import {doc,deleteDoc} from "firebase/firestore";

export const PostCard = ({ post,toggle,setToggle }) => {
  
  if (!post) return null; // Ensure post is not null/undefined
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  async function handleDelete()
  {
    const document = doc(db,"posts",post.id);
    await deleteDoc(document);
    setToggle(!toggle);
  }
  return (
    <div className="card">
      <p className="title">{post?.title || "Untitled Post"}</p>
      <p className="description">{post?.description || "No description available"}</p>
      <p className="control">
        <span className="author">{post?.author?.name || "Unknown Author"}</span>
        {isAuth && post?.author?.id === auth?.currentUser?.uid && (
          <span onClick = {handleDelete}className="delete">
            <i className="bi bi-trash3"></i>
          </span>
        )}
      </p>
    </div>
  );
};

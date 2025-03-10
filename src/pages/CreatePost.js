import { addDoc,collection } from "firebase/firestore";
import {db,auth} from "../firebase/config";
import { useNavigate } from "react-router-dom";
import {useTitle} from "../hooks/useTitle";
export const CreatePost = () => {
  useTitle("Create");
  const navigate = useNavigate();
  const postRef = collection(db,"posts");
  async function handleSubmitPost(event)
  {
    event.preventDefault();
    const document = {
      title:event.target.title.value,
      description:event.target.description.value, 
      author:{
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef,document);
    navigate("/");
  }
  return (
   <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleSubmitPost} className="createPost">
          <input type="text" className="title" name="title" placeholder="title" maxLength="50" required/>
          <textarea name="description" className="description"  placeholder="description" maxLength="500" required></textarea>
          <button type="submit" className="submit">Create</button>
      </form>
   </section>
  )
}

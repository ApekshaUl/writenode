import { useEffect,useState,useRef } from "react";
import {PostCard} from "../components/PostCard";
import {getDocs,collection} from "firebase/firestore";
import {db} from "../firebase/config";
import {useTitle} from "../hooks/useTitle";
import {Skeletons} from "../components/Skeletons";
export const Home = () => {
  useTitle("Home");
  const [posts,setPost] = useState([false,false,false]);
  const postRef = useRef(collection(db,"posts"));
  const [toggle,setToggle] = useState();
  useEffect(()=>{
    async function getPosts() {
      const data = await getDocs(postRef.current);
      
      setPost(data.docs.map((document)=>(
        {...document.data(),id:document.id}
      )));
    }
    
    getPosts();
  },[postRef,toggle])
  return (
    <section>
      {posts.map((post,index)=>
      (
        post ? (<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>)
        :(<Skeletons key={index}/>)
        
      ))}
      
    </section>
  )
}

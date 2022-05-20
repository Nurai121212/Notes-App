import { useState} from 'react';
import Input from "./UI/MyInput/Input";
import Button from "./UI/MyButton/Button";

function Form({create}){
  const[post, setPost] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      text: post
    };
    create(newPost)
    setPost('');
  }

  return(
    <form style={{display: 'flex', gap: '15px'}}>
      <Input
        value = {post}
        onChange = {e => setPost(e.target.value)}
        type="text" 
        placeholder="Your Text..."
       />
      <Button onClick={addNewPost}>Create Post</Button>
    </form>
  )
}

export default Form
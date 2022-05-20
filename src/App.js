import { useState , useEffect} from 'react';
import ItemList from './components/ItemList';
import Form from './components/Form';

function App(){
  const[posts, setPosts] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("posts"));
    return initialValue || "";
  })
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  return(
    <div>
      <Form create={createPost}/>
      {posts.length ? <ItemList remove={removePost} posts={posts}/>
      : <div>
          <h1 style={{textAlign: 'center'}}>Empty List</h1>
        </div>
      }
    </div>
  )
}

export default App;
import Item from "./Item";
function ItemList({posts, remove}){
  return(
    <ul>
      {posts.map((post, index) => 
        <Item remove={remove} number={index + 1} post={post} key={post.id}/>
      )}
    </ul>
  )
}

export default ItemList
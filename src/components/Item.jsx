import Button from "./UI/MyButton/Button"

function Item({post, number, remove}){
  return(
    <li>
      <h3>{number}</h3>
      <h2>{post.text}</h2>
      <Button onClick={() => remove(post)}>delete</Button>
    </li>
  )
}

export default Item
import s from './Input.module.sass';

function Input(props){
  return(
    <input {...props} className={s.Input}/>
  )
}

export default Input
import s from './Button.module.sass';

function Button({children, ...props}){
  return(
    <button {...props} className={s.Button}>
      {children}
    </button>
  )
}

export default Button
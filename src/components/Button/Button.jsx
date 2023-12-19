import './Button.css'


const Button = ({isOutline, icon, text, ...rest}) => {
  return (
    <div>
        <button  
        {...rest}
        className={isOutline ? "contact-second-btn" : "contact-first-btn" } >
        
        {icon}
        {text}
        </button>

    </div>
  )
}

export default Button
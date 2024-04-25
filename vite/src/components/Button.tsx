import { Props } from "../types"

const Button = (props:Props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Button
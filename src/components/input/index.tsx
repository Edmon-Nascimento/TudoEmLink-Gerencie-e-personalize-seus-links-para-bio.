import type { InputProps } from "../../@types"

export default function Input(props:InputProps){
    return(
        <input  
            className="border-0 h-9 rounded-md px-2 mb-3 bg-white outline-0"  
            {...props}
        />
    )
}
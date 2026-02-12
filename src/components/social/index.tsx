import type { Social} from "../../@types"

export function Social({url, children}:Social){
    return(
        <a href={url} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
}
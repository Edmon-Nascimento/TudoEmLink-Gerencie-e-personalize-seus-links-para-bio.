import type { ReactNode } from "react"
import type { InputHTMLAttributes } from "react"

export type Social = {
    url:string
    children: ReactNode
}

export type PrivateProps = {
    children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
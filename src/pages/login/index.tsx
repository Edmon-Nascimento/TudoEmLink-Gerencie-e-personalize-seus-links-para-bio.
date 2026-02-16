import { Link } from "react-router-dom"
import Input from "../../components/input"
import { useState } from "react"

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e:SubmitEvent){
        e.preventDefault()
        
    }

    return(
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Tudo
                    <span className="bg-linear-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">emLink</span>
                </h1>
            </Link>
            
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-8">
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="********"   
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                />
                <button type="submit" className="h-9 bg-blue-600 rounded-md border-0 text-lg font-medium text-white cursor-pointer">
                    Acessar
                </button>
            </form>
        </div>
    )
}
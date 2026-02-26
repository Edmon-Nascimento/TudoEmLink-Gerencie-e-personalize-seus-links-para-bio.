import { Link } from "react-router-dom"
import Input from "../../components/input"
import { useState } from "react"
import { auth } from "../../services/firebaseconnection"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e:SubmitEvent){
        e.preventDefault()
        
        if(email === "" || password ===""){
            alert("Insira um email e senha válidos para continuar")
            return
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            navigate("/admin",{replace: true})
            console.log("Logado com sucesso!")
        })
        .catch((error)=>{
            console.log("Erro ao fazer login: ")
            console.log(error)
        })


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
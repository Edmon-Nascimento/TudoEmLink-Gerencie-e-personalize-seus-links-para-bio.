import { auth } from "../services/firebaseconnection";
import { onAuthStateChanged } from "firebase/auth";
import type { PrivateProps } from "../@types";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export function Private({children}: PrivateProps):any{

    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }

                localStorage.setItem("@tudoemlink", JSON.stringify(userData))
                setLoading(prev =>! prev)
                setSigned(prev =>! prev)
            }else{
                setLoading(false)
                setSigned(false)
            }
        })

        return ()=>{
            unsub()
        }
        
    },[])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return(
            <Navigate to="/login"/>
        )
    }

    return children
}
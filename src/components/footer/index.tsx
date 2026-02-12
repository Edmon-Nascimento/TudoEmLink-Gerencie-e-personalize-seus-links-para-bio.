import { Social } from "../social"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"


export default function Footer(){
    return(
        <footer className="flex justify-center gap-3 my-4">
            <Social url="https://instagram.com/edmoncode">
                <FaInstagram size={35} color="#fff"/>
            </Social>

            <Social url="https://linkedin.com/in/edmon-nascimento">
                <FaLinkedin size={35} color="#fff"/>
            </Social>

            <Social url="https://github.com/edmon-nascimento">
                <FaGithub size={35} color="#fff"/>
            </Social>
        </footer>
    )
}
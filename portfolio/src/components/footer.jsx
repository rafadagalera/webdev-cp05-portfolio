import { FaCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const socials = [
    {
        name: 'Rafael',
        linkedin: 'https://www.linkedin.com/in/devdagalera/',
        github: 'https://github.com/rafadagalera',
    },
    {
        name: 'Vinicius',
        linkedin: 'https://www.linkedin.com/in/taikitaiki/',
        github: 'https://github.com/taikiidev',
    },
    {
        name: 'Micael',
        linkedin: 'https://www.linkedin.com/in/micaelazarias',
        github: 'https://github.com/MicaelAzarias',
    },
    {
        name: 'Pedro',
        linkedin: 'https://www.linkedin.com/in/pedrohenriq-/',
        github: 'https://github.com/phz1n777',
    },
    {
        name: 'Felipe',
        linkedin: 'https://linkedin.com/in/felipe-nakama-97ba4b289',
        github: 'https://github.com/FelipeNakama',
    }
]

export default function Footer() {
    return (
        <div className=" bg-slate-700 flex w-screen  fixed bottom-0 h-16 text-zinc-50 text-xl">
            <div className="flex gap-4 items-center">
                <p>Todos os direitos reservados à Cococoding</p><FaCopyright />
            </div>
            <div className="flex gap-10 pl-20 items-center">
                <div className="flex gap-4">
                    <div className="flex items-center"><FaLinkedin /><p>Linkedin:</p> </div>
                    <ul className="flex gap-6">
                        {socials.map((i) => (
                            <li key={i.name}>
                                <a target="_blank" href={i.linkedin}> {i.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex">
                    <ul className="flex gap-4">
                        <div className="flex items-center"><FaGithub /><p>Github:</p></div>
                        
                        {socials.map((i) => (
                            <li key={i.name}>
                                <a target="_blank" href={i.github}>{i.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    <div className='p-8 flex justify-between w-4/5 m-auto text-white text-l'>
        <div><h1>Logo</h1></div>
        <div>
          <ul className='flex justify-between gap-7 '>
            <li className='flex gap-3'><Link className='flex' to="/"><p className='text-emerald-400'>01.</p>Home</Link></li>
            <li className='flex gap-3'><Link className='flex' to="projects"><p className='text-emerald-400'>02.</p>Projetos</Link></li>
            <li className='flex gap-3'><Link className='flex' to="team"><p className='text-emerald-400'>03.</p>Nosso time</Link></li>
            <li className='flex gap-3'><Link className='flex' to="contact"><p className='text-emerald-400'>04.</p>Contato</Link></li>
          </ul>
        </div>
      </div>
  );
}


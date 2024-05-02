const people = [
    {
      name: 'Rafael Nascimento',
      linkedin: 'https://www.linkedin.com/in/devdagalera/',
      github: 'https://github.com/rafadagalera',
      imageUrl: 'https://i.pinimg.com/564x/6b/00/56/6b0056e8e079346e13f73a41d77049e5.jpg',

    },
    {
        name: 'Vinicius Taiki',
        linkedin:'a',
        github: '',
        imageUrl:'a',
    },
    {
        name: 'Micael Azarias',
        linkedin:'a',
        github: '',
        imageUrl:'a',
    },
    {
        name: 'Pedro Henrique',
        linkedin:'a',
        github: '',
        imageUrl:'a',
    },
    {
        name: 'Felipe Nakama',
        linkedin:'a',
        github: '',
        imageUrl:'a',
    }
  ]
export default function Team(){
    return(
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça o nosso time</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cococoding é um time de desenvolvedores que tem como objetivo tirar um 10zão nesse CP!
          </p>
        </div>
        <ul linkedin="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <a target="_blank" href={person.linkedin} className="text-sm font-semibold leading-6 text-indigo-600">Linkedin</a>
                  <a target= "_ blank" href={person.github} className="text-sm font-semibold leading-6 text-gray-900 p-4">Github </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}
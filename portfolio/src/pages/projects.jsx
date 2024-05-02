export default function Projects(){
    const callouts = [
        {
          name: 'Valorant WishList',
          description: 'Faça sua wishlist das skins de arma do jogo Valorant.',
          imageSrc: 'src/assets/valorant-wishlist.png',
          imageAlt: 'Print do site',
          href: 'https://github.com/rafadagalera/Valorant-Wishlist',
        },
        {
          name: 'Fokus',
          description: 'Uma plataforma que visa aumentar a produtividade.',
          imageSrc: 'src/assets/Fokus.png',
          imageAlt: 'Print do site',
          href: 'https://github.com/rafadagalera/Fokus',
        },
        {
          name: 'Automação de Certificados',
          description: 'Automação de certificados em Python',
          imageSrc: 'src/assets/certificado_padrao.jpg',
          imageAlt: 'Imagem do projeto',
          href: 'https://github.com/MicaelAzarias/Python_vida_real.git',
        },
      ]
    return(
        <div className='w-3/5 m-auto mt-24'>
          <h1 className='text-7xl'>
            PROJETOS
          </h1>
              
          <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-10 max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-400 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a target="_blank" href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>

          
        </div>

    )
}
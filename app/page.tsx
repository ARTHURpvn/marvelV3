import Header from './header'
import Inicio from './inicio'
import Filme from './filmes'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-white dark:bg-slate-800 w-full h-full'>
      <header>
        <Header/>
      </header>
    
      <section className='mb-10'>
        <Inicio/> 
      </section>

      <section className='mx-6'>
        <div>
          <a href="">
            <p className='mb-5'>Filmes</p>
          </a>
        </div>

        <nav className='grid grid-flow-col overflow-x-scroll gap-4 w-full h-54'>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
          <Filme/>
        </nav>
      </section>

      <section className='grid grid-flow-col mt-16 mx-6'>
        <nav className='w-96 p-3 dark:hover:bg-red-900'>
          <figure className='w-full'>
            <Image
            src={'/captaMarvel2.jfif'}
            alt='Capa do FIlme'
            width={400}
            height={400}
            ></Image>
          </figure>

          <figcaption>
            <h1 className='text-lg font-bold'>
              Capitã Marvel
            </h1>

            <p className='dark:text-gray-400 font-light'>
              Aqui vai ser um descrição, onde pode ser grande ou pequena
            </p>
          </figcaption>
        </nav>

        <nav className='w-96 p-3 dark:hover:bg-red-900'>
          <figure className='w-full'>
            <Image
            src={'/captaMarvel2.jfif'}
            alt='Capa do FIlme'
            width={400}
            height={400}
            ></Image>
          </figure>

          <figcaption>
            <h1 className='text-lg font-bold'>
              Capitã Marvel
            </h1>

            <p className='dark:text-gray-400 font-light'>
              Aqui vai ser um descrição, onde pode ser grande ou pequena
            </p>
          </figcaption>
        </nav>

        <nav className='w-96 p-3 dark:hover:bg-red-900'>
          <figure className='w-full'>
            <Image
            src={'/captaMarvel2.jfif'}
            alt='Capa do FIlme'
            width={400}
            height={400}
            ></Image>
          </figure>

          <figcaption>
            <h1 className='text-lg font-bold'>
              Capitã Marvel
            </h1>

            <p className='dark:text-gray-400 font-light'>
              Aqui vai ser um descrição, onde pode ser grande ou pequena
            </p>
          </figcaption>
        </nav>
      </section>

      <section className='flex flex-col justify-center my-16 mx-6'>
        <div className='flex justify-center items-center gap-14'>
          <nav>
            <button>
              <Image
              src={'/seta.png'}
              alt='icone seta'
              width={50}
              height={50}
              ></Image>
            </button>
          </nav>

          <figure>
            <Image
            src={'/captaMarvel.jpg'}
            alt='Capa do FIlme'
            width={200}
            height={200}
            className="w-96 h-auto"
            ></Image>
          </figure>

          <figure>
            <Image
            src={'/captaMarvel.jpg'}
            alt='Capa do FIlme'
            width={200}
            height={200}
            className="w-96 h-auto"
            ></Image>
          </figure>

          <nav>
            <button>
              <Image
              src={'/seta.png'}
              alt='icone seta'
              width={50}
              height={50}
              className='rotate-180'
              ></Image>
            </button>
          </nav>
        </div>

        <div className='flex justify-center mt-6'>
          <span className='flex gap-3'>
            <input type='checkbox'  className='w-4 h-4'/>
            <input type='checkbox'  className='w-4 h-4'/>
            <input type='checkbox'  className='w-4 h-4'/>
            <input type='checkbox'  className='w-4 h-4'/>
            <input type='checkbox'  className='w-4 h-4'/>
            <input type='checkbox'  className='w-4 h-4'/>
          </span>
        </div>
      </section>
    </div>
  )
}
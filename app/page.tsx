import Header from './header'
import Inicio from './inicio'
import Filme from './filmes'

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
    </div>
  )
}

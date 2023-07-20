import Image from 'next/image'

export default function Aside() {
    return (
        <nav className="flex w-1/5 pt-16 h-screen bg-slate-700">
            <div className='flex flex-col w-full'>
                
                <ul className='flex flex-col self-center items-center justify-between w-5/6 h-3/6'>
                    <li className='flex flex-row justify-center items-center w-full h-1/4 bg-slate-800'>
                        <a href="">
                            <Image
                            src={'/logoFilme.png'}
                            alt='Imagem de Filmes'
                            width={10}
                            height={10}
                            ></Image>
                            <p> FILMES </p>
                        </a>
                    </li>

                    <li className='flex justify-center items-center w-full h-1/4 bg-slate-800'>
                        <a href="">
                            <img src="" alt="" />
                            <p> SERIES </p>
                        </a>
                    </li>

                    <li className='flex justify-center items-center w-full h-1/4 bg-slate-800'>
                        <a href="">
                            <img src="" alt="" />
                            <p> LIVROS </p>
                        </a>
                    </li>
                </ul>

                <div className='flex flex-col justify-around w-full h-1/2'>
                    <p> Continuar Assistindo </p>
                    <ul className='flex flex-col justify-around w-full h-1/2'>
                        <li> 
                            <a href="">
                                <img src="" alt="" />
                                <p> Nome do Filme </p>
                            </a>
                        </li>

                        <li> 
                            <a href="">
                                <img src="" alt="" />
                                <p> Nome do Filme </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
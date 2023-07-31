import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';


export default function Header() {
    return (
        <header className='w-full h-16 flex font-sans items-center fixed bg-white dark:bg-slate-800 dark:text-gray-300'>
            <aside className='w-1/5 flex justify-center'>
                <Image
                src={'/logoMarvel.png'}
                alt='Logo Marvel'
                width={160}
                height={160}
                className='logoMarvel'
                ></Image>
            </aside>

            <nav className='flex w-4/5 justify-between items-center'>
                <input className='bg-transparent rounded-full w-2/6 dark:text-white text-slate-900 border border-slate-500 px-3 py-1' type="text" name="" placeholder='Pesquisar'/>
                <nav className="w-auto">

                    <ul className='grid grid-cols-3 gap-4'>
                        <li> 
                            <Link href="/app">
                                <p className='hover:text-slate-900 dark:hover:text-slate-500'> Inicio </p>
                            </Link> 
                        </li>

                        <li> 
                            <Link href="/descobrir">
                                <p className='hover:text-slate-900 dark:hover:text-slate-500'> Descobrir </p>
                            </Link> 
                        </li>
                        
                        <li><p className='hover:text-slate-900 dark:hover:text-slate-500'> Lançamento </p></li>
                    </ul>
                </nav>

                <nav className="flex nav-info w-1/6 justify-around items-center">
                    <a href="" className='hover:text-slate-900 dark:hover:text-slate-500'> Info </a>

                    <a href="">
                        <Image
                        src={'/perfil.jpg'}
                        alt='Logo Marvel'
                        width={50}
                        height={50}
                        className='rounded-full'
                        ></Image>
                    </a>
                </nav>
            </nav>
        </header>
    );
}
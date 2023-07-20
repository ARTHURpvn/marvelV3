import Image from 'next/image'

export default function Header() {
    return (
        <header className='w-full h-16 flex font-sans items-center fixed'>
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
                <input className='rounded-full w-2/6 text-slate-900 border border-slate-500 px-3 py-1' type="text" name="" placeholder='Pesquisar'/>
                <nav className="w-1/4">

                    <ul className='flex justify-around'>
                        <li><a href=""> Inicio </a></li>
                        <li><a href=""> Descobrir </a></li>
                        <li><a href=""> Lançamento </a></li>
                    </ul>
                </nav>

                <nav className="flex nav-info w-1/6 justify-around items-center">
                    <a href=""> Info </a>

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
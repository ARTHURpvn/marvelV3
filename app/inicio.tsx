import Image from 'next/image'

export default function Inicio() {
    return (
        <main className='flex pt-20 w-full h-full'>
            <section className='flex justify-around w-full h-full gap-2'>
                <figure>
                    <Image
                    src={'/captaMarvel2.jfif'}
                    alt='Capa do FIlme'
                    width={950}
                    height={950}
                    className='rounded-2xl shadow-md'
                    ></Image>
                </figure>

                <nav className='w-1/5 h-full'>
                    <ul className='flex flex-col justify-between gap-3 items-center h-4/6'>

                        <li className='flex items-center gap-5 w-full py-2 px-5 hover:bg-gray-300 hover:text-slate-900 dark:hover:text-white dark:hover:bg-red-900 hover:shadow-lg rounded-lg'>
                            <Image
                            src={'/captaMarvel.jpg'}
                            alt='Capa do FIlme'
                            width={55}
                            height={90}
                            className='rounded-md'
                            ></Image>

                            <p> Capitã Marvel </p>
                        </li>

                        <li className='flex items-center gap-5 w-full py-2 px-5 hover:bg-gray-300 hover:text-slate-900 dark:hover:text-white dark:hover:bg-red-900 hover:shadow-lg rounded-lg'>
                            <Image
                            src={'/captaMarvel.jpg'}
                            alt='Capa do FIlme'
                            width={55}
                            height={90}
                            className='rounded-md'
                            ></Image>

                            <p> Capitã Marvel </p>
                        </li>

                        <li className='flex items-center gap-5 w-full py-2 px-5 hover:bg-gray-300 hover:text-slate-900 dark:hover:text-white dark:hover:bg-red-900 hover:shadow-lg rounded-lg'>
                            <Image
                            src={'/captaMarvel.jpg'}
                            alt='Capa do FIlme'
                            width={55}
                            height={90}
                            className='rounded-md'
                            ></Image>

                            <p> Capitã Marvel </p>
                        </li>

                        <li className='flex items-center gap-5 w-full py-2 px-5 hover:bg-gray-300 hover:text-slate-900 dark:hover:text-white dark:hover:bg-red-900 hover:shadow-lg rounded-lg'>
                            <Image
                            src={'/captaMarvel.jpg'}
                            alt='Capa do FIlme'
                            width={55}
                            height={90}
                            className='rounded-md'
                            ></Image>

                            <p> Capitã Marvel </p>
                        </li>

                        <li className='flex items-center gap-5 w-full py-2 px-5 hover:bg-gray-300 hover:text-slate-900 dark:hover:text-white dark:hover:bg-red-900 hover:shadow-lg rounded-lg'>
                            <Image
                            src={'/captaMarvel.jpg'}
                            alt='Capa do FIlme'
                            width={55}
                            height={90}
                            className='rounded-md'
                            ></Image>

                            <p> Capitã Marvel </p>
                        </li>

                    </ul>
                </nav>
            </section>
        </main>
    )
}
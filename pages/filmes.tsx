import Image from "next/image"
import 'tailwindcss/tailwind.css';

export default function Filme() {
    return (
        <a href="">
        <nav className="flex flex-col w-52 h-auto p-3 hover:bg-gray-300 dark:hover:bg-red-900">
            <Image
            src={'/captaMarvel.jpg'}
            alt='Capa do FIlme'
            width={300}
            height={300}
            className="w-52 h-auto object-container"
            ></Image>

            <div className="items-left mt-2 w-full h-54">
                <p className="dark:text-gray-300 text-xs">UCM</p>
                <h3>Capitã Marvel</h3>
            </div>
        </nav>
        </a>
    )
}
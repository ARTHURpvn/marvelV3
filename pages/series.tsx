import Header from "./header"
import Filme from "./filmes"
import Image from "next/image"

export default function series() {
    return (
        <div className="bg-white dark:bg-slate-800 w-full h-full dark:text-gray-300">
        <Header />

            <main className="flex flex-col">
                <section className="pt-20 px-6 pb-20 bg-red-900 h-9/12 w-screen gap-6">
                    <div className="flex h-auto w-auto gap-6">
                        <figure className="w-9/12 h-6/12">
                            <Image
                            src={"/captaMarvel.jpg"}
                            alt=""
                            width={500}
                            height={500}
                            ></Image>
                        </figure>

                        <div className="flex flex-col justify-between">
                            <div className="flex mx-2 flex-col">
                                <h1 className="text-3xl font-sans mb-2">
                                    Titulo do Filme/Serie
                                </h1>

                                <div className="flex items-center gap-6">
                                    <div className="flex gap-6">
                                        <p> 2023 </p>
                                        <div className="flex gap-2">
                                            <Image
                                            src={'/relogio.png'}
                                            alt=""
                                            width={20}
                                            height={20}
                                            ></Image>

                                            <p> Duração </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <p> 10/10 </p>

                                        <div className="flex">

                                            <Image
                                            src={'/estrelaCinza.png'}
                                            alt=""
                                            width={25}
                                            height={25}
                                            ></Image>

                                            <Image
                                            src={'/estrelaCinza.png'}
                                            alt=""
                                            width={25}
                                            height={25}
                                            ></Image>
                                            
                                            <Image
                                            src={'/estrelaCinza.png'}
                                            alt=""
                                            width={25}
                                            height={25}
                                            ></Image>
                                            
                                            <Image
                                            src={'/estrelaCinza.png'}
                                            alt=""
                                            width={25}
                                            height={25}
                                            ></Image>
                                            
                                            <Image
                                            src={'/estrelaCinza.png'}
                                            alt=""
                                            width={25}
                                            height={25}
                                            ></Image>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <p> Trailer </p>

                                        <Image
                                        src={'/seta.png'}
                                        alt=""
                                        width={25}
                                        height={25}
                                        className="rotate-180"
                                        ></Image>
                                    </div>
                                </div>
                            </div>

                            <div className="flex h-1/2">
                                <p className="text-sm w-11/12 text-justify">
                                    Captain Marvel é um filme estadunidense de super-herói de 2019, 
                                    baseado na personagem Carol Danvers da Marvel Comics. Produzido pelo Marvel Studios 
                                    e distribuído pela Walt Disney Studios Motion Pictures, é o vigésimo primeiro filme
                                    do Universo Cinematográfico Marvel. O filme foi escrito e dirigido por Anna Boden 
                                    e Ryan Fleck, com Nicole Perlman, Meg LeFauve e Geneva Robertson-Dworet também contribuindo 
                                    para o roteiro. Brie Larson estrela como Carol Danvers, ao lado de Samuel L. Jackson, 
                                    Ben Mendelsohn, Djimon Hounsou, Lee Pace, Lashana Lynch, Gemma Chan, Annette Bening, 
                                    Clark Gregg e Jude Law. Em 1995, a história segue Danvers quando ela se torna a Capitã Marvel,
                                    após a Terra ser pega no centro de um conflito galáctico entre duas civilizações alienígenas.
                                </p>
                            </div>

                            <div className="flex h-12 w-36 bg-black justify-around p-4 items-center">
                                <Image
                                    src={''}
                                    alt=""
                                    width={20}
                                    height={20}
                                ></Image>
                                
                                <p> Assistir </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex justify-center items-center flex-col mt-24 pb-24 gap-12">
                    <figure >
                        <Image
                        src={"/captaMarvel2.jfif"}
                        alt=""
                        width={900}
                        height={1150}
                        ></Image>
                    </figure>

                    <div className="flex gap-12 items-center">
                        
                        <Image
                            src={"/seta.png"}
                            alt=""
                            width={40}
                            height={40}
                        ></Image>

                        <div className="flex gap-6">
                            <Image
                                src={"/captaMarvel2.jfif"}
                                alt=""
                                width={160}
                                height={160}
                            ></Image>

                            <Image
                                src={"/captaMarvel2.jfif"}
                                alt=""
                                width={160}
                                height={160}
                            ></Image>

                            <Image
                                src={"/captaMarvel2.jfif"}
                                alt=""
                                width={160}
                                height={160}
                            ></Image>
                        </div>

                        <Image
                            src={"/seta.png"}
                            alt=""
                            width={40}
                            height={40}
                            className="rotate-180"
                        ></Image>
                        
                    </div>
                </section>

                <section className="flex flex-col mx-6">
                    <p>
                        Filmes Recomendados
                    </p>

                    <div className="grid grid-cols-6 pb-10">
                        <Filme />
                        <Filme />
                        <Filme />
                        <Filme />
                        <Filme />
                        <Filme />
                    </div>
                </section>
            </main>
        </div>

    )
}
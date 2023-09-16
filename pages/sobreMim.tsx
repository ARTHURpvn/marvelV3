import Header from "./header"
import Image from "next/image"

export default function info () {
    return (
        <div className="flex w-full h-full dark:bg-slate-900 pb-32">
            <Header />

            <div className="mt-32 mb-32 w-11/12 h-11/12 bg-slate-600">
                <header className="flex justify-between h-28 m-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src={''}
                            alt=""
                            width={123}
                            height={123}
                            className="rounded-full w-16 h-16 bg-slate-800"
                        ></Image>

                        <div>
                            <p> ARTHURpvn </p>
                            <p> 17 anos </p>
                        </div>
                    </div>

                    <div className="flex items-center w-1/3 gap-6">
                        <p> Git Hub </p>

                        <button
                        className="w-32 p-2 bg-red-900 text-gray-300"
                        > Doação </button>

                        <div className="flex flex-col gap-1 mx-4 ">
                            <Image
                                src={''}
                                alt=""
                                width={123}
                                height={123}
                                className="w-3 bg-gray-700 rounded-full"
                            ></Image>

                            <Image
                                src={''}
                                alt=""
                                width={123}
                                height={123}
                                className="w-3 bg-gray-700 rounded-full"
                            ></Image>

                            <Image
                                src={''}
                                alt=""
                                width={123}
                                height={123}
                                className="w-3 bg-gray-700 rounded-full"
                            ></Image>
                        </div>
                    </div>
                </header>

                <div className="flex justify-between gap-6 mt-32 mx-4">
                    <section className="flex flex-col w-1/2">
                        <nav className="flex h-16 justify-between bg-slate-900 text-gray-100 rounded-md">
                            <div className="flex items-center gap-3 mx-10">
                                <Image
                                    src={''}
                                    alt=""
                                    width={123}
                                    height={123}
                                    className="w-10 h-10 rounded-full bg-red-900"
                                ></Image>

                                <p> Instagram </p>
                            </div>

                            <div className="flex items-center gap-3 mx-10">
                                <Image
                                    src={''}
                                    alt=""
                                    width={123}
                                    height={123}
                                    className="w-10 h-10 rounded-full bg-red-900"
                                ></Image>

                                <p> robertindocreme </p>
                            </div>
                        </nav>

                        <div className="flex h-80 flex-col mt-5 bg-slate-900 rounded-md text-gray-100">
                            <h1 className="m-4 font-medium"> Sobre Mim </h1>

                            <div className="flex gap-3 mx-8">
                                <p> <b> Nome: </b> </p>
                                <p> Arthur dos Santos Pavan </p>
                            </div>

                            <div className="flex gap-3 mx-8">
                                <p> <b> Idade: </b> </p>
                                <p> 17 Anos </p>
                            </div>

                            <p className="mt-6 mx-8 text-justify">
                                Boa Tarde, Eu sou o Arthur, sou um programador full-stack, gosto muito de jogar jogos
                                de corrida ou de construir cidade, provavelmente perceberam que eu AMO os filmes da
                                marvel. Eu amo de coração programar e estou sempre tentando aprender e melhorar.
                            </p>
                        </div>
                    </section>

                    <section className="flex flex-col w-1/2 text-gray-100">
                        <div className="flex flex-col bg-slate-900 h-1/4">
                            <header> Minhas Metas </header>

                            <div className="grid grid-cols-2">
                                <div className="flex items-center">
                                    <Image
                                        src={''}
                                        alt=""
                                        width={123}
                                        height={123}
                                        className="w-5 h-5"
                                    ></Image>
                                    <p>Aqui vai é um teste</p>
                                </div>
                                
                                <div className="flex items-center">
                                    <Image
                                        src={''}
                                        alt=""
                                        width={123}
                                        height={123}
                                        className="w-5 h-5"
                                    ></Image>
                                    <p>Aqui vai é um teste</p>
                                </div>

                                <div className="flex items-center">
                                    <Image
                                        src={''}
                                        alt=""
                                        width={123}
                                        height={123}
                                        className="w-5 h-5"
                                    ></Image>
                                    <p>Aqui vai é um teste</p>
                                </div>

                                <div className="flex items-center">
                                    <Image
                                        src={''}
                                        alt=""
                                        width={123}
                                        height={123}
                                        className="w-5 h-5"
                                    ></Image>
                                    <p>Aqui vai é um teste</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
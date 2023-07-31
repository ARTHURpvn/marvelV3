import Header from "./header"
import Filme from "./filmes"
import 'tailwindcss/tailwind.css';

export default function Descobrir() {
    return (
        <div className="dark:bg-slate-800 w-full h-full dark:text-gray-300">
            <Header/>

            <main className="pt-24 mx-12">
                <header className="mb-10">
                    <div className="flex gap-12 mb-1">
                        <nav className="flex gap-2">
                            <button className="text-white"> 
                                Filtros 
                            </button>

                            <p> (X) </p>
                        </nav>

                        <nav>
                            <button>
                                Reiniciar
                            </button>
                        </nav>
                    </div>

                    <nav className="flex w-full px-6 py-3 bg-slate-900 justify-between">
                        <div className="flex gap-4">
                            <select name="categoria" id="categoria" className="w-32 p-0.5 bg-transparent">
                                <option value="filmes"> Filmes </option>
                                <option value="filmes"> Series </option>
                                <option value="filmes"> Livros </option>
                            </select>

                            <select name="categoria" id="categoria" className="w-44 p-0.5 bg-transparent">
                                <option disabled selected> Conjunto de Filmes </option>
                                <option value="filmes"> Capitã Marvel </option>
                                <option value="filmes"> Capitã Marvel </option>
                                <option value="filmes"> Capitã Marvel </option>
                                <option value="filmes"> Capitã Marvel </option>
                                <option value="filmes"> Capitã Marvel </option>
                            </select>

                            <select name="categoria" id="categoria" className="w-44 p-0.5 bg-transparent">
                                <option disabled selected> Fases </option>
                                <option value="primeira"> 1° Fase </option>
                                <option value="segunda"> 2° Fase </option>
                                <option value="terceira"> 3° Fase </option>
                                <option value="quarta"> 4° Fase </option>
                                <option value="quinta"> 5° Fase </option>
                            </select>
                        </div>

                        <div className="flex gap-6">
                            <button>
                                Não UCM
                            </button>

                            <button>
                                UCM
                            </button>

                            <button>
                                Cronologia
                            </button>
                        </div>
                    </nav>
                </header>

                <section className="grid grid-cols-6">
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                </section>
            </main>
        </div>
    )
}
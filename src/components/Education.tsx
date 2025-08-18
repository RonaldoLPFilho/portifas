import { SectionHeader } from "./generics/sectionHeader"

const education = [
    {
        name: "Engenharia de Software",
        type: "Bacharelado",
        institute: "FIAP",
        status: "Em andamento",
        period: "2022 - 2026"  
    },
    {
        name: "Ciência da Computação",
        type: "Bacharelado",
        institute: "Universadade São Judas Tadeu",
        status: "Trancada",
        period: "2020 - 2022"  
    }
]

export function Education(){
    return (
        <section className="flex justify-center py-20 bg-neutral-950">
            <div className="items-center w-[65%] px-4">
                <SectionHeader
                    title="Educação"
                    subtitle="Formação acadêmica"
                />
                {education.map((item) => (
                    <div className="border border-neutral-800 rounded-lg p-6 hover:border-orange-500/50 transitions-colors my-5 text-center">
                        <h3 className="text-3xl font-semibold text-white mb-2">{item.name} </h3>
                        <p className="text-xl text-orange-500">{item.institute} <span className="text-lg text-gray-300">{item.type}</span></p> 

                        <p className="text-gray-600 my-2">{item.period} (<span>{item.status}</span>)</p> 
                    </div>
                ))}

            </div>
        </section>
    )
}
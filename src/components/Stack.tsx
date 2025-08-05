import { Code2, Database, Server } from "lucide-react";
import { SectionHeader } from "./generics/sectionHeader";
import { Divider } from "antd";

const technologies = [
    {
        name: "Backend",
        icon: Server,
        items: [
            "Java",
            "Spring boot",
            "Hibernate",
            "JUnit & Mockito",
            "Spring Security",
            "Authentication & JWT",
            "Clean Code",
            "SOLID",
            "Domain Driven Design"
        ]
    },
    {
        name: "Frontend",
        icon: Code2,
        items: [
            "Javascript & Typescript",
            "React",
            "HTML/CSS",
            "Tailwind",
            "Antd"
        ]
    },
    {
        name: "DevOps & Data",
        icon: Database,
        items: [
            "Linux",
            "Docker",
            "Github actions",
            "SQL",
            "NoSQL"
        ]
    }
]

export function Stack(){
    return (
        <section className="flex justify-center py-20 bg-neutral-950 ">
            <div className="w-[65%] px-4">
                <SectionHeader 
                    title="Stack"
                    subtitle="Tecnologias que utilizo no dia a dia"
                />

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="bg-black p-6 rounded-lg border border-neutral-800 hover:border-orange-500/50 transition-colors ">
                            <div className="flex items-center justify-center gap-4">
                                <tech.icon className="w-18 h-18 text-orange-500 mb-4 "/>
                                <h3 className="text-2xl font-semibold text-white mb-4 ">{tech.name}</h3>
                            </div>

                            <Divider dashed style={{ borderColor: "gray" }} />
         
                            <ul className="space-y-2">
                                {tech.items.map((item) => (
                                    <li key={item} className="text-gray-400 text-lg hover:text-orange-500">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
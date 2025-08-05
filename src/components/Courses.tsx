import { Button, Carousel, Image } from "antd"
import { SectionHeader } from "./generics/sectionHeader"
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

export function Courses(){
    const carouselRef = useRef<any>(null);
    const [groupedCourses, setGroupedCourses] = useState<any[][]>([]);
    const [itemsPerSlide, setItemsPerSlide] = useState(2); 

    const courses = [
      {
        name: "Domain Driven Design",
        date: "2025",
        certification: "/certificados/2025_DomainDrivenDesign.png",
        institute: "Full Cycle",
        type: "Hard Skill"
      },
      {
        name: "Comunicação não violenta",
        date: "2025",
        certification: "/certificados/2025_ComunicacaoNaoViolenta.png",
        institute: "Udemy",
        type: "Soft Skill"
      },
      {
        name: "SOLID",
        date: "2024",
        certification: "/certificados/2024_Solid.png",
        institute: "Full Cycle",
        type: "Hard Skill"
      },
      {
        name: "Java - Orientação a Objetos",
        date: "2024",
        certification: "/certificados/2024_JavaOrientacaoObjeto.png",
        institute: "Alura",
        type: "Hard Skill"
      },
      {
        name: "Git avançado",
        date: "2024",
        certification: "/certificados/2024_GitAvancado.png",
        institute: "Full Cycle",
        type: "Hard Skill"
      },
      {
        name: "Fundamentos da Arquitetura de Software",
        date: "2024",
        certification: "/certificados/2024_FundamentoArquiteturaSoftware.png",
        institute: "Full Cycle",
        type: "Hard Skill"
      },
      {
        name: "Docker",
        date: "2024",
        certification: "/certificados/2023_Docker.png",
        institute: "Full Cycle",
        type: "Hard Skill"
      },
      {
        name: "Linux para desenvolvedores",
        date: "2023",
        certification: "/certificados/2023_LinuxParaDesenvolvedores.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Trabalho Remoto: Guia para o sucesso",
        date: "2022",
        certification: "/certificados/2022_TrabalhoRemoto.png",
        institute: "Udemy",
        type: "Soft Skill"
      },
      {
        name: "Testes unitários em Java: JUnit & Mockito",
        date: "2022",
        certification: "/certificados/2022_TestesUnitariosEmJavaTDD.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Integração contínua - Jenkis",
        date: "2022",
        certification: "/certificados/2022_Jenkis.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Java Completo",
        date: "2022",
        certification: "/certificados/2022_JavaCompleto.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Introdução à AWS",
        date: "2022",
        certification: "/certificados/2022_IntroducaoAWS.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Guia da comunicação",
        date: "2022",
        certification: "/certificados/2022_GuiaDaComunicacao.png",
        institute: "Udemy",
        type: "Soft Skill"
      },
      {
        name: "Git do básico ao avançado",
        date: "2022",
        certification: "/certificados/2022_GitDoBasicoAoAvancado.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Formação HTML & CSS",
        date: "2022",
        certification: "/certificados/2022_FormacaoHTML.png",
        institute: "Alura",
        type: "Hard Skill"
      },
      {
        name: "Docker para Desenvolvedores",
        date: "2022",
        certification: "/certificados/2022_DockerParaDesenvolvedores.png",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Azure DevOps - Integração e Entrega contínua",
        date: "2022",
        certification: "/certificados/2022_IntegracaoContinua.jpg",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Azure Pipiline - CI/CD",
        date: "2022",
        certification: "/certificados/2022_AzurePipeline.jpg",
        institute: "Udemy",
        type: "Hard Skill"
      },
      {
        name: "Curso de Negociação",
        date: "2022",
        certification: "/certificados/2022_CursoDeNegociacao.png",
        institute: "Udemy",
        type: "Soft Skill"
      },
      {
        name: "Como resolver problemas complexos",
        date: "2022",
        certification: "/certificados/2022_ComoResolverProblemasComplexos.png",
        institute: "Udemy",
        type: "Soft Skill"
      },
      {
        name: "Microsserviço: Padrões de Projeto",
        date: "2021",
        certification: "/certificados/2021_MicrosservicosPadraoDeProjeto.png",
        institute: "Alura",
        type: "Hard Skill"
      },
      {
        name: "HTTP",
        date: "2021",
        certification: "/certificados/2021_HTTPS.png",
        institute: "Alura",
        type: "Hard Skill"
      },
      {
        name: "Rest com NodeJS",
        date: "2021",
        certification: "/certificados/2021_ApiNodeJS.png",
        institute: "Alura",
        type: "Hard Skill"
      }
    ];
    
    function chunkArray<T>(arr: T[], size: number): T[][] {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
        }
        return result;
      }
    
      const updateItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width < 640) setItemsPerSlide(1);        // celular
        else if (width < 1024) setItemsPerSlide(2);   // tablet
        else setItemsPerSlide(3);                     // desktop
      };
    
      useEffect(() => {
        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
      }, []);
    
      useEffect(() => {
        setGroupedCourses(chunkArray(courses, itemsPerSlide));
      }, [itemsPerSlide]);
    
      const next = () => carouselRef.current?.next();
      const prev = () => carouselRef.current?.prev();
    
      return (
        <section className="py-20 bg-black flex justify-center w-full">
          <div className="w-[90%] px-4">
            <SectionHeader title="Cursos" subtitle="Meu aprendizado contínuo" />
    
            <div className="flex justify-center gap-30 mb-10">
              <Button
                shape="circle"
                icon={<ArrowLeft className="w-10 h-10" />}
                onClick={prev}
                className="!bg-black !text-white !border-none hover:!text-orange-500"
              />
              <Button
                shape="circle"
                icon={<ArrowRight className="w-10 h-10" />}
                onClick={next}
                className="!bg-black !text-white !border-none hover:!text-orange-500"
              />
            </div>
    
            <Carousel dots={false} ref={carouselRef} draggable>
              {groupedCourses.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="flex flex-wrap justify-center gap-6 p-6">
                    {group.map((item, index) => (
                      <div
                        key={index}
                        className="border border-neutral-800 p-4 rounded-lg w-full sm:w-[45%] lg:w-[30%]"
                      >
                        <div className="flex items-center justify-between gap-1 mb-3">
                          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                          <span className="text-sm text-orange-500">{item.institute}</span>
                        </div>
    
                        <Image src={item.certification} width={"100%"} />
    
                        <div className="flex items-center justify-between gap-1 mt-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-5 w-5 text-orange-500" />
                            <span className="text-sm text-gray-300">{item.date}</span>
                          </div>
                          <span className="text-sm bg-orange-500/10 text-orange-500 px-2 py-1 rounded">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      );
}

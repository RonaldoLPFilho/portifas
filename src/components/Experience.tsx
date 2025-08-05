import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "./generics/sectionHeader";
import { Button, Carousel } from "antd";
import { useRef } from "react";

const experiences = [
  {
    company: "Decolar",
    roles: [
      {
        name: "Software Developer II",
        period: "Fev/2025 - Presente",
        description:
          "Na minha equipe, sou responsável pelo desenvolvimento de uma plataforma de busca e recuperação de documentos essenciais gerados pela organização. Atuei diretamente na modernização de micro-aplicações, conduzindo processos de reescrita e refatoração de Java 8 para Java 21, aprimorando o desempenho e facilitando a manutenção. Elaborei documentações técnicas e wikis detalhadas, garantindo o compartilhamento eficiente de conhecimento sobre as aplicações modernizadas. Além disso, contribuo regularmente com revisões de código (code-reviews), fortalecendo as boas práticas de desenvolvimento dentro da equipe. Prestei suporte técnico a outras equipes na migração de suas aplicações para infraestrutura baseada em Docker, permitindo uma implantação mais ágil e estável em ambiente produtivo.",
      },
      {
        name: "Software Developer I",
        period: "Ago/2022 - Fev/2025 (2 anos e 7 meses)",
        description:
          "Atuei como desenvolvedor full-stack, abrangendo backend, frontend e infraestrutura. Contribuí no desenvolvimento de uma aplicação dedicada à busca, relacionamento e gestão de documentos estratégicos da organização. Além disso, participei de projetos relacionados à área de Revenue Assurance, fornecendo suporte técnico, realizando correções e implementando novas funcionalidades.",
      },
    ],
  },
  {
    company: "Viajanet",
    roles: [
      {
        name: "DevOps - ALM Dev (PJ)",
        period: "Nov/2021 - Ago/2022 (10 meses)",
        description:
          "Atuei como membro da equipe de ALM (Application Lifecycle Management), responsável pelo desenvolvimento de ferramentas CLI para automação de processos internos, resolução de problemas em serviços e aplicações, configuração e manutenção de pipelines CI/CD, gestão de pools e aplicações, além da configuração de servidores e provisionamento de ambientes de homologação. Também fui responsável pelo gerenciamento de repositórios e garantia da estabilidade, atuando diretamente com as equipes, auxiliando na resolução problemas e definição de políticas relacionadas a esteira de desenvolvimento de software.",
      },
    ],
  },
  {
    company: "Banco Alfa",
    roles: [
      {
        name: "Analista de Testes automatizados Jr.",
        period: "Mai/2021 - Out/2021 (6 meses)",
        description:
          "Fui responsável pela criação e execução de testes BDD utilizando Gherkin, além de desenvolver testes automatizados com Selenium, Cucumber, Capybara, SpecFlow, Ruby e C#. Desenvolvi e mantive diversos modelos de requisição no Postman, utilizados pela equipe para geração de massa de testes, e mantive comunicação ativa com os Product Owners (POs) durante a definição e refinamento dos PBIs. Além disso, apresentei resultados e funcionalidades nas cerimônias de Review diretamente com os clientes. Nesse período, iniciei minhas primeiras atividades de desenvolvimento, contando com o suporte de desenvolvedores mais experientes.",
      },
      {
        name: "Estagiário em Testes de Software (QA)",
        period: "Ago/2020 - Mai/2021 (10 meses)",
        description:
          "Como estagiário, fui responsável pela criação de roteiros de testes usando o Azure Test Plan, além do planejamento e execução de testes manuais de software. Mantive comunicação contínua com os Product Owners (POs) para alinhamento e refinamento dos PBIs. Nesse período, iniciei minhas primeiras automações de testes utilizando Ruby e conduzi uma apresentação interna sobre automação de testes para colegas da equipe.",
      },
    ],
  },
];

export function Experience() {
    const carouselRef = useRef<any>(null);
  
    const next = () => carouselRef.current?.next();
    const prev = () => carouselRef.current?.prev();
  
    return (
      <section className="py-20 bg-black flex justify-center w-full">
        <div className="w-[65%] px-4">
          <SectionHeader
            title="Experiência Profissional"
            subtitle="Minha jornada até aqui"
          />
          <div className="flex justify-center gap-30 mb-10">
            <Button
              shape="circle"
              icon={<ArrowLeft className="w-10 h-10" />}
              onClick={prev}
              className="!bg-black !text-white !border-none hover:!text-orange-500 "
            />

            <Button
              shape="circle"
              icon={<ArrowRight className="w-10 h-10" />}
              onClick={next}
              className="!bg-black !text-white !border-none hover:!text-orange-500"

            />
          </div>  

          <Carousel dots={false} ref={carouselRef} draggable>
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl text-center font-semibold text-white">
                        {exp.company}
                      </h3>
                      <div className="grid gap-3">
                        {exp.roles.map((role, i) => (
                          <div key={i} className="my-3">
                            <p className="text-orange-500 text-xl">{role.name}</p>
                            <div className="flex gap-2">
                              <span className="text-gray-400 mb-3">
                                {role.period}
                              </span>
                            </div>
                            <span className="text-gray-300 text-lg leading-relaxed">
                              {role.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

      </section>
    );
  }
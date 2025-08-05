import { GraduationCap, Mail, MapPin } from "lucide-react";
import pic from "../assets/mypic.jpg";
import abstractSvg from "../assets/abstract-timekeeper.svg";
import "../styles/whoami.css";

export function WhoamiSection() {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src={abstractSvg}  
          alt="Background"
          className="w-[130] h-[130%] animate-spin-slow moveBackground"
        />
      </div>

      {/* Conteúdo */}
      <div className="container px-4 relative z-10 bg-black">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-7xl font-bold text-white mb-4">
              Ronaldo Luiz<span className="text-orange-500">.</span>
            </h1>

            <h2 className="text-3xl text-gray-400 mb-6">Engenheiro de Software</h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Sou apaixonado por transformar ideias e desafios em soluções
              tecnológicas. Especializado no ecosistema Java/Spring e React, com
              forte experiência em arquitetura de microsserviços e desenvolvimento web moderno
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Brasil - São Paulo, SP</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>ronaldo.luizcp@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-orange-500" />
                <span>Eng. Software</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
            <div className="w-140 h-140 rounded-full overflow-hidden border-4 border-orange-500">
              <img
                src={pic}
                alt="My photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Mail, MapPin } from "lucide-react";
import pic from "/img/mypic.jpg";
import "../styles/whoami.css";

export function WhoamiSection() {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center py-10 sm:py-20 overflow-hidden">

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/img/abstract-timekeeper.svg" 
          alt="Background"
          className="w-[130%] h-[130%] animate-spin-slow moveBackground"
        />
      </div>

      <div className="container px-4 relative z-10 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
              Ronaldo Luiz<span className="text-orange-500">.</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-6">
              Engenheiro de Software
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed px-2 sm:px-0">
              Sou apaixonado por transformar ideias e desafios em soluções
              tecnológicas. Especializado no ecossistema Java/Spring e React, com
              forte experiência em arquitetura de microsserviços e desenvolvimento web moderno
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start text-gray-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-sm sm:text-base">Brasil - São Paulo, SP</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-sm sm:text-base">ronaldo.luizcp@gmail.com</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-sm sm:text-base">Eng. Software</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-56 h-56 sm:w-56 sm:h-56 lg:w-140 lg:h-140 rounded-full overflow-hidden border-4 border-orange-500">
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

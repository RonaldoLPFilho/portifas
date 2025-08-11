import { useEffect, useState } from "react"
import logo from "/img/logo.png"
import { Menu, X } from "lucide-react";

const navItems = [
    {name: "Início", href: "#whoami"},
    {name: "Stack", href: "#stack"},
    {name: "Experiência", href: "#experience"},
    {name: "Formação", href: "#education"},
    {name: "Cursos", href: "#courses"}
]

export function Header (){
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.slice(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                  const { offsetTop, offsetHeight } = element;
                  if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                    break;
                  }
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollToSection = (href: string) => { 
        const element = document.getElementById(href.slice(1));
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
        setIsOpen(false);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neutral-800">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center text-xl font-bold text-white">

                        <span className="text-orange-500">RL</span>Profile
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {scrollToSection(item.href)}}
                                className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                                    activeSection == item.href.slice(1)
                                    ? "text-orange-500"
                                    : "text-gray-300"
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6"/> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isOpen && (
                    <nav className="md:hidden py-4 border-t border-neutral-800">
                        {navItems.map((item => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-orange-500 ${
                                    activeSection === item.href.slice(1)
                                    ? "text-orange-500"
                                    : "text-gray-300"
                                }`}
                            >
                                {item.name}
                            </button>
                        )))}
                    </nav>
                )}
            </div>
        </header>
    )
}
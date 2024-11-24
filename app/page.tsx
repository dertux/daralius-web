import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Zap, User } from "lucide-react"
import Image from 'next/image';
import Navbar from '../components/ui/navbar'; // Add this import
import Carousel from "../components/ui/carousel";


export default function DaraliusLanding() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <Navbar /> {/* Add the Navbar component here */}
      {/* Sección de héroe */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between" id="inicio">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 text-center">
            Bienvenido a Daralius
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            La plataforma móvil que tiene como objetivo reducir la brecha de comunicación en entornos educativos y promover la inclusión social y educativa en la lengua de señas chilena (LSCH).

          </p>
          <div className="text-center mt-4">
            
  {/* Icono de GitHub */}
  <a 
    href="https://github.com/dhaarmaa/Daralius" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="mt-4 inline-flex items-center gap-2 text-xl text-gray-800 hover:text-gray-600 transition-colors"
  >
    <svg 
      className="w-6 h-6 text-gray-800 hover:text-gray-600" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.599.11.793-.26.793-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.305 3.494.998.107-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.237-3.22-.123-.303-.537-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.495 11.495 0 0 1 3.003-.404c1.02.005 2.046.137 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.242 2.873.119 3.176.771.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.476 5.921.432.373.815 1.102.815 2.222v3.293c0 .32.192.694.801.576C20.565 21.797 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
    </svg>
    Ver repositorio en GitHub
  </a>
</div>
<a 
        href="https://drive.google.com/file/d/1PuXILyAEIc0OMTBG7p7z_u8nLjJqi274/view?usp=sharing" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors w-full mt-8"
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 87.3 78" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
          <path d="M43.65 25l-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z" fill="#00ac47"/>
          <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
          <path d="M43.65 25l13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
          <path d="M59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
          <path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
        </svg>
        Descarga la beta de Daralius
      </a>

        </div>
        <div className="lg:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full filter blur-3xl opacity-30"></div>
          <Image
          src="/images/web.png"
          alt="Daralius App"
          width={400}
          height={600}
          className="relative z-10 mx-auto rounded-3xl shadow-2xl"
        />
        </div>
      </div>
      </section>

     {/* Sección de características */}
<section id="features" className="container mx-auto px-4 py-20">
  <h2 className="text-5xl lg:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 text-center">
    Características de Daralius
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      { icon: Smartphone, title: "Diseño Intuitivo", description: "Interfaz fácil de usar" },
      { icon: Zap, title: "Rápido y Eficiente", description: "Desarrollado para un rendimiento eficaz" },
      { icon: User, title: "Para todos los usuarios", description: "Desarrollado para todo tipo de usuario" }
    ].map((feature, index) => (
      <Card key={index} className="transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

{/* Sección de carrusel de imágenes */}
<section id="desarrollo" className="container mx-auto px-4 py-20">
  <h2 className="text-5xl lg:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 text-center">
    Proceso desarrollo daralius
  </h2>
  <Carousel />
</section>


      {/* Sección de desarrolladores */}
<section  id="desarrolladores" className="container mx-auto px-4 py-0">
  <h2 className="text-5xl lg:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 text-center">Nuestro Equipo</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { 
        name: "Dharma Herrera", 
        role: "Scrum Master & QA Manager", 
        imgSrc: '/images/dharma.jpeg',
        github: "https://github.com/dhaarmaa" 
      },
      { 
        name: "Alicia Muñoz", 
        role: "BackEnd Developer & Animaciones 3D", 
        imgSrc: '/images/alicia.jpeg',
        github: "https://github.com/alimunozsalas" 
      },
      { 
        name: "Sebastián Hurtado", 
        role: "UX/UI Developer", 
        imgSrc: '/images/seba.jpeg',
        github: "https://github.com/dertux" 
      },
    ].map((dev, index) => (
      <Card key={index} className="border border-purple-600 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
            <Image
              src={dev.imgSrc}
              alt={dev.name}
              className="w-full h-full object-cover"
              width={500}  // Ajusta según el tamaño que necesites
              height={300} // Ajusta según el tamaño que necesites
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black">{dev.name}</h3>
          <p className="text-center text-gray-600">{dev.role}</p>
          
          {/* Icono de GitHub */}
          <a href={dev.github} target="_blank" rel="noopener noreferrer" className="mt-4">
            <svg 
              className="w-6 h-6 text-gray-800 hover:text-gray-600" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.599.11.793-.26.793-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.305 3.494.998.107-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.237-3.22-.123-.303-.537-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.495 11.495 0 0 1 3.003-.404c1.02.005 2.046.137 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.242 2.873.119 3.176.771.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.476 5.921.432.373.815 1.102.815 2.222v3.293c0 .32.192.694.801.576C20.565 21.797 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
            </svg>
          </a>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Daralius</h3>
              <p className="text-gray-400">Daralius es un proyecto que tiene como objetivo reducir la brecha de comunicación entre comunidades oyentes y sordas, facilitando la comprensión y el aprendizaje de la lengua de señas chilena (LSCh). Este enfoque se centra especialmente en contextos educativos donde se busca promover la inclusión social y educativa.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Características</a></li>
                <li><a href="#desarrollo" className="text-gray-400 hover:text-white transition-colors duration-300">Desarrollo</a></li>
                <li><a href="#desarrolladores" className="text-gray-400 hover:text-white transition-colors duration-300">Equipo</a></li>
              </ul>
            </div>
            <div>
  <h4 className="text-lg font-semibold mb-4">Contacto</h4>
  <ul className="space-y-2">
  <li>
    <a href="https://www.linkedin.com/in/sebastian-hurtado-m/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-9 19H8v-8h2v8zm-1-9.303c-.645 0-1.203-.565-1.203-1.253 0-.688.558-1.253 1.203-1.253.644 0 1.203.565 1.203 1.253 0 .688-.558 1.253-1.203 1.253zm11 9.303h-2v-4.386c0-1.048-.374-1.768-1.311-1.768-.715 0-1.139.481-1.325.944-.065.157-.082.375-.082.592v4.618h-2v-8h2v1.086c.375-.583 1.043-1.413 2.515-1.413 1.836 0 3.212 1.203 3.212 3.791v5.536z" />
      </svg>
      Sebastián Hurtado
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/alicia-carolina-muñoz-salas-277198223/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-9 19H8v-8h2v8zm-1-9.303c-.645 0-1.203-.565-1.203-1.253 0-.688.558-1.253 1.203-1.253.644 0 1.203.565 1.203 1.253 0 .688-.558 1.253-1.203 1.253zm11 9.303h-2v-4.386c0-1.048-.374-1.768-1.311-1.768-.715 0-1.139.481-1.325.944-.065.157-.082.375-.082.592v4.618h-2v-8h2v1.086c.375-.583 1.043-1.413 2.515-1.413 1.836 0 3.212 1.203 3.212 3.791v5.536z" />
      </svg>
      Alicia Muñoz
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/dharmaherrera/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-9 19H8v-8h2v8zm-1-9.303c-.645 0-1.203-.565-1.203-1.253 0-.688.558-1.253 1.203-1.253.644 0 1.203.565 1.203 1.253 0 .688-.558 1.253-1.203 1.253zm11 9.303h-2v-4.386c0-1.048-.374-1.768-1.311-1.768-.715 0-1.139.481-1.325.944-.065.157-.082.375-.082.592v4.618h-2v-8h2v1.086c.375-.583 1.043-1.413 2.515-1.413 1.836 0 3.212 1.203 3.212 3.791v5.536z" />
      </svg>
      Dharma Herrera
    </a>
  </li>
</ul>

</div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Daralius. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Download, Menu, X } from "lucide-react"
import { TerminalEffects } from "@/components/terminal-effects"
import { MatrixRain } from "@/components/matrix-rain"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null)

  const technologies = [
    { name: "HTML", level: "Avanzado" },
    { name: "CSS", level: "Avanzado" },
    { name: "JavaScript", level: "Avanzado" },
    { name: "TypeScript", level: "Intermedio" },
    { name: "Tailwind", level: "Avanzado" },
    { name: "React", level: "Avanzado" },
    { name: "Node.JS", level: "Avanzado" },
    { name: "Next.JS", level: "Intermedio" },
    { name: "MySQL", level: "Intermedio" },
  ]

  const weeklyProjects = [
    {
      week: 1,
      title: "Fundamentos web y configuración de VSC",
      description: "Fundamentos web y configuración de VSC.",
      tech: ["HTML", "HTTP", "VSC"],
      status: "completed",
      summary: "Introducción a tecnologías web, protocolos y uso básico de Visual Studio Code.",
      githubUrl: "https://erpaprendizaje.uncp.edu.pe/web/unit?s=08dd5d7e-9022-44db-8791-d8c6ebc06469",
    },
    {
      week: 2,
      title: "Estructura web y diseño responsivo",
      description: "Estructura web y diseño responsivo.",
      tech: ["HTML5", "CSS3"],
      status: "completed",
      summary: "Se presento un conjunto de emmet para poder hacer abreviaciones en el codigo HTML",
      githubUrl: "https://github.com/DonMichi26/SEMANA2.git",
    },
    {
      week: 3,
      title: "Diseño avanzado con librerías CSS",
      description: "Diseño avanzado con librerías CSS.",
      tech: ["Bootstrap", "Tailwind CSS"],
      status: "completed",
      summary: "Desarrollo de sitios con componentes, tipografía y layouts usando Bootstrap y Tailwind CSS.",
      githubUrl: "https://github.com/DonMichi26/SEMANA3.git",
    },
    {
      week: 4,
      title: "Programación y animaciones en JS",
      description: "Programación y animaciones en JS.",
      tech: ["JavaScript", "Canvas"],
      status: "completed",
      summary: "Practica Calificada de donde se crearon dos proyectos con javascript una ruleta y una lista.",
      githubUrl: "https://github.com/DonMichi26/PraCalificada.git",
    },
    {
      week: 5,
      title: "Componentes y props en React",
      description: "Componentes y props en React.",
      tech: ["React (Framework JS)"],
      status: "completed",
      summary: "Introducción a React, desarrollo basado en componentes y comunicación con props y children.",
      githubUrl: "https://github.com/DonMichi26/portafolio-js.git",
    },
    {
      week: 6,
      title: "Eventos, APIs y routing",
      description: "Eventos y routing.",
      tech: ["React"],
      status: "completed",
      summary: "Manejo de eventos, consumo de APIs, renderizado condicional e iterativo con React.",
      githubUrl: "https://github.com/DonMichi26/backen.git",
    },
    {
      week: 7,
      title: "Uso de hooks personalizados",
      description: "Uso de hooks personalizados.",
      tech: ["React"],
      status: "completed",
      summary: "Uso de hooks (useState, useEffect, etc.) y desarrollo de hooks personalizados en React.",
      githubUrl: "https://github.com/DonMichi26/proyectof.git",
    },
    {
      week: 8,
      title: "Evaluación y retroalimentación",
      description: "Evaluación y retroalimentación.",
      tech: ["—"],
      status: "",
      summary: "Evaluación continua, consolidado de aprendizajes y retroalimentación de la Unidad I.",
      githubUrl: "",
    },
    {
      week: 9,
      title: "Backend con PHP y JSP",
      description: "Backend con PHP y JSP.",
      tech: ["PHP", "JSP"],
      status: "completed",
      summary: "Arquitectura web backend y despliegue de aplicaciones con PHP y JSP.",
      githubUrl: "https://github.com/DonMichi26/php.git",
    },
    {
      week: 10,
      title: "Fundamentos de Python",
      description: "Fundamentos de Python.",
      tech: ["Python"],
      status: "completed",
      summary: "Sintaxis básica, estructuras de datos, funciones, clases, herencia y excepciones en Python.",
      githubUrl: "https://github.com/DonMichi26/python.git",
    },
    {
      week: 11,
      title: "Vistas, plantillas y modelos en Django",
      description: "Vistas, plantillas y modelos.",
      tech: ["Django"],
      status: "completed",
      summary: "Creación de proyectos Django, gestión de URLs, plantillas y modelos de datos.",
      githubUrl: "",
    },
    {
      week: 12,
      title: "Formularios y administración en Django",
      description: "Formularios y administración.",
      tech: ["Django", "Middleware"],
      status: "completed",
      summary: "Validación de datos, personalización de Django admin, sesiones y autenticación.",
      githubUrl: "",
    },
    {
      week: 13,
      title: "APIs RESTful y HATEOAS",
      description: "APIs RESTful y HATEOAS.",
      tech: ["Django REST Framework"],
      status: "completed",
      summary: "Creación de APIs RESTful, serialización de datos, paginación y manejo de CSRF.",
      githubUrl: "https://github.com/DonMichi26/django.git",
    },
    {
      week: 14,
      title: "Microservicios escalables",
      description: "Microservicios escalables.",
      tech: ["Django"],
      status: "completed",
      summary: "Implementación y consumo de microservicios con Docker y Kubernetes, monitoreo y seguridad.",
      githubUrl: "",
    },
    {
      week: 15,
      title: "Presentación de proyectos",
      description: "Presentación de proyectos.",
      tech: ["—"],
      status: "completed",
      summary: "Exposición de proyectos de investigación y evaluación de Logro 02.",
      githubUrl: "https://github.com/DonMichi26/semana15",
    },
    
  ];

  const techLogos: Record<string, string> = {
    HTML: "/html.png",
    CSS: "/css.png",
    JavaScript: "/js.png",
    TypeScript: "/TypeScript.png",
    Tailwind: "/Tailwind.png",
    React: "/React.png",
    "Node.JS": "/NodeJS.png",
    "Next.JS": "/Next.png",
    MySQL: "/MySQL.png",
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* Terminal Effects Background */}
      <TerminalEffects />
      <MatrixRain />

      {/* Content Overlay */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm">
        {/* Sidebar Navigation */}
        <div className="fixed left-0 top-0 h-full w-16 bg-white/90 backdrop-blur-sm shadow-lg z-50 flex flex-col items-center py-6 space-y-6">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LM</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link
            href="https://github.com/luismagro"
            target="_blank"
            className="p-2 hover:bg-emerald-50 rounded-lg transition-colors group"
          >
            <Github size={20} className="text-gray-600 group-hover:text-emerald-600" />
          </Link>

          <Link
            href="mailto:luis.magro@example.com"
            className="p-2 hover:bg-emerald-50 rounded-lg transition-colors group"
          >
            <Mail size={20} className="text-gray-600 group-hover:text-emerald-600" />
          </Link>
        </div>

        {/* Right Side Text */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 -rotate-90 z-40">
          <div className="text-6xl font-bold text-gray-200 tracking-wider">NEKOLU CODE</div>
        </div>

        {/* Language Selector */}
        <div className="fixed top-6 right-6 z-40 flex space-x-2">
          <button className="px-3 py-1 text-sm font-medium text-gray-900 bg-white/80 backdrop-blur-sm rounded-md shadow-sm">
            ES
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">EN</button>
        </div>

        {/* Main Content */}
        <div className="ml-16 mr-32">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-between px-12 py-20">
            <div className="flex-1 max-w-2xl">
              <p className="text-lg text-gray-600 mb-4">Hola a todos, soy</p>
              <h1 className="text-7xl font-bold text-gray-900 mb-6 leading-tight">Luis Magro</h1>
              <p className="text-lg text-gray-700 mb-2">🎓 Estudiante de Ingeniería de Sistemas - 9no Semestre</p>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Estudiante apasionado por el desarrollo de software y las nuevas tecnologías. Enfocado en crear
                aplicaciones web modernas mientras completo mi formación académica.
              </p>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <div className="w-150 h-150 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/perfil.png"
                      alt="Luis Magro"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-450">09no</div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="w-full max-w-md mx-auto">
                    <div className="bg-white/100 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                      <Image
                        src="/foto.png"
                        alt="Luis Magro"
                        width={320}
                        height={320}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Sobre mí</p>
                  <h2 className="text-5xl font-bold text-gray-900 mb-8">¿Quién soy?</h2>
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Soy un estudiante de Ingeniería de Sistemas en el 9no semestre, con un gran interés en el
                      desarrollo de software y las últimas tendencias tecnológicas.
                    </p>
                    <p>
                      Mi enfoque principal es la creación de aplicaciones web modernas y funcionales, donde busco
                      aplicar mis conocimientos académicos y habilidades técnicas.
                    </p>
                    <p>
                      Estoy en constante aprendizaje y busco oportunidades para crecer como desarrollador, contribuyendo
                      con soluciones innovadoras y eficientes.
                    </p>
                    <p>
                      Mi objetivo es combinar mi formación académica con la experiencia práctica para convertirme en un
                      profesional integral en el campo del desarrollo de software.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-medium border border-emerald-200">
                      💚 Team Python
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-20 w-full px-0 bg-white/90 backdrop-blur-sm">
            <div className="max-w-6xl w-full mx-auto text-center">
              <p className="text-sm text-gray-500 mb-2">Habilidades</p>
              <h2 className="text-5xl font-bold text-gray-900 mb-16">Tecnologías y Herramientas</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                {technologies.map((tech, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border border-gray-100 hover:border-emerald-200"
                  >
                    <CardContent className="p-0 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-100">
                        {/* Aquí puedes agregar tus imágenes */}
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow border">
                          <Image
                            src={techLogos[tech.name] || "/logos/default.png"}
                            alt={tech.name}
                            width={32}
                            height={32}
                            className="object-contain"
                            style={{ maxWidth: "80%", maxHeight: "80%" }}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-1 text-sm">{tech.name}</h3>
                      <p className="text-xs text-slate-500">{tech.level}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* 16 Weeks Projects Section */}
          <section className="py-20 px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm text-gray-500 mb-2">Cronograma de Desarrollo</p>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">16 Semanas de Desarrollo Web</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Un viaje de 16 semanas desarrollando proyectos progresivos que demuestran el crecimiento y dominio de
                  diferentes tecnologías y conceptos en la universidad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {weeklyProjects.map((project) => (
                  <Card
                    key={project.week}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl bg-emerald-50/90 backdrop-blur-sm border-emerald-200 ${selectedWeek === project.week ? "ring-2 ring-emerald-500" : ""}`}
                    onClick={() => setSelectedWeek(selectedWeek === project.week ? null : project.week)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs bg-emerald-100 text-emerald-800 border-emerald-300">
                          Semana {project.week}
                        </Badge>
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm mb-4 line-clamp-2">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {selectedWeek === project.week && (
                        <div className="mt-4 pt-4 border-t space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2">Resumen del Proyecto</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{project.summary}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2">Tecnologías Utilizadas</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                              <Link href={project.githubUrl || "#"} target="_blank">
                                <Github className="w-4 h-4 mr-1" />
                                Ver Código
                              </Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-12 bg-slate-900/95 backdrop-blur-sm text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">¿Trabajamos juntos?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos sde trabjar juntos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                  <Link href="mailto:luis.magro@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Gmail
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/luismagro" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

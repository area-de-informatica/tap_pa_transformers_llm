import { defineEventHandler, getMethod, readBody, createError } from "h3"

// Datos mock - en producción vendrían de una base de datos
const creditsData = {
  team: [
    {
      id: 1,
      name: "Mario Hernández",
      role: "Estudiante",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-15%20a%20las%2017.47.03_fb1c1653.jpg-Bl6FqeLjOArns5IjyXAkqQPJFg3TpU.jpeg",
      bio: "Estudiante de Licenciatura en Informática de la Universidad de Córdoba, actualmente en 5º semestre. Interesado en inteligencia artificial y aprendizaje automático.",
    },
    {
      id: 2,
      name: "Moises Bedoya",
      role: "Estudiante",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-15%20a%20las%2017.55.24_db65b4a8.jpg-278AOjTZLqKs9wNAq0hVjTiLIWDjDj.jpeg",
      bio: "Cursa el 5º semestre de Licenciatura en Informática en la Universidad de Córdoba. Le apasiona el desarrollo web y la tecnología educativa.",
    },
    {
      id: 3,
      name: "Luis Gonzalez",
      role: "Estudiante",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-17%20a%20las%2022.04.14_a6762549.jpg-cVTUnklTUkLzb69RP5pAIR0opvEvVA.jpeg",
      bio: "Estudiante de 5º semestre de Licenciatura en Informática en la Universidad de Córdoba. Le gusta el diseño de interfaces y la experiencia de usuario.",
    },
    {
      id: 4,
      name: "Ximena Sibaja",
      role: "Estudiante",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-18%20a%20las%2005.43.41_7d330245.jpg-7SpkIFymn2iFuLTF6jDCS1ZQkYiiX6.jpeg",
      bio: "Cursa la Licenciatura en Informática en la Universidad de Córdoba, actualmente en 5º semestre. Interesada en inteligencia artificial y procesamiento de lenguaje natural.",
    },
  ],

  technologies: [
    {
      name: "Vue.js",
      version: "3.3.0",
      description: "Framework progresivo para construir interfaces de usuario",
      icon: "💚",
      category: "Frontend",
    },
    {
      name: "Vuetify",
      version: "3.4.0",
      description: "Biblioteca de componentes Material Design para Vue.js",
      icon: "🎨",
      category: "UI Framework",
    },
    {
      name: "Pinia",
      version: "2.1.0",
      description: "Store intuitivo, type safe y flexible para Vue",
      icon: "🍍",
      category: "State Management",
    },
    {
      name: "Node.js",
      version: "18.17.0",
      description: "Runtime de JavaScript construido sobre el motor V8 de Chrome",
      icon: "🟢",
      category: "Backend",
    },
    {
      name: "Express.js",
      version: "4.18.0",
      description: "Framework web rápido, minimalista y flexible para Node.js",
      icon: "🚀",
      category: "Backend",
    },
    {
      name: "OpenAI API",
      version: "4.0",
      description: "API para integración con modelos de lenguaje avanzados",
      icon: "🤖",
      category: "AI/ML",
    },
  ],
}

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  if (method === "GET") {
    return creditsData
  }

  if (method === "POST") {
    const body = await readBody(event)
    const { name, role, bio, contributions } = body

    if (!name || !role) {
      throw createError({
        statusCode: 400,
        statusMessage: "Nombre y rol son requeridos",
      })
    }

    const newMember = {
      id: creditsData.team.length + 1,
      name,
      role,
      bio: bio || "",
      contributions: contributions || [],
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`,
      social: {},
    }

    creditsData.team.push(newMember)
    return newMember
  }

  throw createError({
    statusCode: 405,
    statusMessage: "Método no permitido",
  })
})

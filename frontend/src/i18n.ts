import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact", resume: "Download Resume" },
      headings: { toolkit: "Technical Skills", worked: "Previous Experience", featured: "Projects" },
       hero: {
        part1: "Hi! I'm Jomarie. I'm a ",
        part2: "cloud engineer & passionate AI enthusiast.",
        part3: "I enjoy building applications that blend innovation and functionality. I'm particularly excited about the challenge of creating ",
        part4: "cloud-based solutions",
        part5: ", leveraging distributed computing for scalable efficiency."
      },
      about: {
        about: "About Me",
        p1: "I am a Cloud & Technical Support Specialist focused on AWS, Linux, networking, and automation. Currently an AWS re/Start Fellow at Per Scholas, I specialize in building hands-on cloud architectures and AI-powered workflows across AWS, Azure, and GCP.",
        p2: "I enjoy solving complex technical problems, automating repetitive operations, and translating operational challenges into practical solutions. My recent projects span serverless applications, enterprise networking, and NetGuard AI—an intelligent tool engineered for automated security log analysis and Tier-1 incident triage.",
        p3: "Outside of tech, I'm an avid Formula 1 fan, pickleball player, and long-distance hiker. Having thru-hiked both the Camino de Santiago and Camino Portugués, I bring the same endurance, disciplined focus, and curiosity to every technical challenge I tackle."
    },
      skills: [
        "AWS Certified Solutions Architect – Associate",
        "Google AI Professional Certificate",
        "Microsoft Certified: Azure Fundamentals",
        "Google Cloud Digital Leader",
        "Google IT Support Professional",
        "AWS Cloud Support Associate",
      ],
      experience: [
        {
          role: "Account Executive",
          company: "Aurakore IT Solutions",
          date: "2025",
          desc: "B2B IT sales and client relationship management for technical solutions."
        },
        {
          role: "Sales Specialist",
          company: "Apple",
          date: "2018 – 2020",
          desc: "Provided product troubleshooting, technical recommendations, and customer support."
        },
        {
          role: "Marine Engineering Specialist (88L)",
          company: "U.S. Army",
          date: "2010",
          desc: "Maintained vessel propulsion systems and diesel engines in high-stakes environments."
        }
      ],
      projects: [
        {
          title: "Cloud Resume Challenge Multi-Cloud Adaptation",
          desc: "Adapted the Cloud Resume Challenge utilizing multi-cloud infrastructure, Terraform, and automated CI/CD pipelines.",
          tech: "AWS, GCP, Terraform, CI/CD"
        },
         {
          title: "Jomarie's Multi-Cloud AI Resume Platform",
          desc: "Adapted the Cloud Resume Challenge utilizing multi-cloud infrastructure, Terraform, and automated CI/CD pipelines.",
          tech: "AWS, GCP, Terraform, CI/CD"
        }, {
          title: "Multi-Cloud AI Resume Platform",
          desc: "Adapted the Cloud Resume Challenge utilizing multi-cloud infrastructure, Terraform, and automated CI/CD pipelines.",
          tech: "AWS, GCP, Terraform, CI/CD"
        }, {
          title: "Multi-Cloud AI Resume Platform",
          desc: "Adapted the Cloud Resume Challenge utilizing multi-cloud infrastructure, Terraform, and automated CI/CD pipelines.",
          tech: "AWS, GCP, Terraform, CI/CD"
        },
        {
          title: "NetGuard AI",
          desc: "Cloud-native incident response summarizer and security tool built using Google Cloud Platform services and Google AI Studio.",
          tech: "GCP, Google AI Studio"
        }
      ],
      footer: {
        text: "Designed & Built by",
        rights: "All Rights Reserved."
      }
    }
  },
  es: {
    translation: {
      nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", resume: "Descargar Currículum" },
      headings: { toolkit: "Herramientas Técnicas", worked: "Dónde he trabajado", featured: "Proyectos Destacados" },
        hero: {
        part1: "¡Hola! Soy Jomarie. Soy ",
        part2: "ingeniera en la nube y una apasionada de la IA.",
        part3: " Disfruto construyendo aplicaciones que combinan innovación y funcionalidad. Me entusiasma especialmente el desafío de crear ",
        part4: "soluciones basadas en la nube",
        part5: ", aprovechando la computación distribuida para una eficiencia escalable."
      },
      about: {
        title: "Sobre mí",
      p1: "Soy Especialista en Soporte Técnico y Cloud, enfocada en AWS, Linux, redes y automatización. Actualmente como becaria de AWS re/Start en Per Scholas, diseño e implemento soluciones prácticas en la nube y flujos de trabajo impulsados por IA en AWS, Azure y GCP.",
      p2: "Me apasiona resolver incidencias técnicas complejas, automatizar tareas repetitivas y convertir retos operativos en soluciones eficientes. Mis proyectos recientes abarcan aplicaciones serverless, redes y NetGuard AI, una herramienta desarrollada para el análisis automatizado de registros de seguridad y la clasificación de incidentes de Nivel 1.",
      p3: "Fuera del ámbito tecnológico, soy aficionada a la Fórmula 1, jugadora de pickleball y senderista de larga distancia. Habiendo completado tanto el Camino de Santiago como el Camino Portugués, aplico la misma resistencia, enfoque disciplinado y determinación a cada proyecto que emprendo."
    },

      skills: [
        "AWS Certified Solutions Architect – Associate",
        "Google AI Professional Certificate",
        "Microsoft Certified: Azure Fundamentals",
        "Google Cloud Digital Leader",
        "Google IT Support Professional",
        "React & Tailwind CSS",
        "AWS Lambda, API Gateway & DynamoDB",
        "Terraform & CI/CD"
      ],
      experience: [
        {
          role: "Aprendiz de AWS re/Start",
          company: "Per Scholas (Nueva York)",
          date: "Agosto 2026 – Diciembre 2026",
          desc: "Cohorte de entrenamiento intensivo enfocado en infraestructura en la nube, Python, Linux y redes en AWS."
        },
        {
          role: "Ejecutivo de Cuentas",
          company: "Aurakore IT Solutions",
          date: "2025",
          desc: "Ventas B2B de TI y gestión de relaciones con clientes para soluciones técnicas."
        },
        {
          role: "Especialista en Ventas",
          company: "Apple",
          date: "2018 – 2020",
          desc: "Proporcioné resolución de problemas de productos, recomendaciones técnicas y atención al cliente."
        },
        {
          role: "Especialista en Ingeniería Marina (88L)",
          company: "Ejército de los EE. UU.",
          date: "2010",
          desc: "Mantenimiento de sistemas de propulsión de embarcaciones y motores diésel en entornos de alto riesgo."
        }
      ],
      projects: [
        {
          title: "Plataforma de Currículum con IA Multi-Nube",
          desc: "Adaptación del Cloud Resume Challenge utilizando infraestructura multi-nube, Terraform y tuberías CI/CD automatizadas.",
          tech: "AWS, GCP, Terraform, CI/CD"
        },
        {
          title: "NetGuard AI",
          desc: "Resumidor de respuesta a incidentes nativo de la nube y herramienta de seguridad creada con Google Cloud Platform y Google AI Studio.",
          tech: "GCP, Google AI Studio"
        }
      ],
      footer: {
        text: "Diseñado y Construido por",
        rights: "Todos los derechos reservados."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;

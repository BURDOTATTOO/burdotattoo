<script setup lang="ts">

import Title from '~/components/atoms/title-description/index.vue'
import PostSubtitle from '~/components/organisms/post-subtitle/index.vue'
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import IconTitle from '~/components/organisms/icon-title/index.vue'
import ServiceCards from '~/components/organisms/service-cards-1/index.vue'

//icons

import SeoSvg from '~/components/icons/SeoSvg.vue'
import OffPageSvg from '~/components/icons/OffPageSvg.vue'
import BrandPromoSvg from '~/components/icons/BrandPromoSvg.vue'
import StatisticsUpSvg from '~/components/icons/StatisticsUpSvg.vue'
import OptimizationSvg from '~/components/icons/OptimizationSvg.vue'
import PayPerClicSvg from '~/components/icons/PayPerClicSvg.vue'
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import DevelopSvg from '~/components/icons/DevelopSvg.vue'

useSeoMeta({
  title: 'Mejora el Rendimiento y Visibilidad de tu Sitio Web con SEO - Vanguardia',
  ogTitle: 'Optimización SEO en Colombia - Aumenta tu Visibilidad y Rendimiento Web',
  description: 'Nuestros servicios de SEO en Colombia optimizan tu sitio web para mejorar su rendimiento y visibilidad en los motores de búsqueda. Atrae tráfico orgánico y maximiza las conversiones con estrategias SEO efectivas.',
  ogDescription: 'Destaca en los resultados de búsqueda con nuestros servicios de optimización SEO en Colombia. Mejoramos tu visibilidad online, incrementamos el tráfico orgánico y ayudamos a tu negocio a alcanzar su audiencia objetivo.',
  ogImage: '/meta/seo-optimizacion-colombia.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Mejora tu Presencia Online con Servicios de SEO en Colombia - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Potencia tu sitio web con nuestro SEO en Colombia. Aumenta la visibilidad local y general, atrae tráfico dirigido y optimiza el rendimiento de tu negocio online.',
})

const iconTitle = [
  {
    title: 'Optimización de Motores de Búsqueda (SEO)',
    subtitle: 'Aumenta la calidad y cantidad del tráfico en tu sitio web incrementando su visibilidad en los motores de búsqueda.',
    icon: SeoSvg
  },
  {
    title: 'Optimización de Contenido',
    subtitle: 'Asegúrate de que el contenido esté escrito de manera que alcance a la mayor audiencia posible.',
    icon: OptimizationSvg
  },
  {
    title: 'Optimización (On-Page)',
    subtitle: 'Mejora individualmente cada página web para que ocupe posiciones más altas y atraiga tráfico relevante desde los motores de búsqueda.',
    icon: StatisticsUpSvg
  },
  {
    title: 'Optimización (Off-Page)',
    subtitle: 'Incrementa la autoridad de tu dominio mediante la creación de contenido y la obtención de backlinks desde otros sitios web.',
    icon: OffPageSvg
  },
  {
    title: 'Marketing en Redes Sociales',
    subtitle: 'Contrata a nuestro equipo de expertos en marketing en redes sociales y multiplica tus oportunidades de negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.',
    icon: BrandPromoSvg
  },
  {
    title: 'Marketing PPC (Pago por Clic)',
    subtitle: 'Publicidad de pago por clic para obtener resultados y tráfico de forma inmediata.',
    icon: PayPerClicSvg
  },
]

const serviceCards = [
  {
    title: 'SEO Básico',
    price: '$1,199.999',
    icon: DevelopSvg,
    features: [
      'Optimización de contenido',
      'Optimización de etiquetas y descripciones',
      'Páginas a optimizar: 1-5',
      'Palabras clave incluidas: 1-10',
      'Informe de rendimiento: 1 por año',
    ],
    cta: 'Solicitar'
  },
  {
    title: 'SEO Pro',
    price: '$2,999.999',
    icon: ProSvg,
    features: [
      'Optimización de contenido',
      'Optimización de etiquetas y descripciones',
      'Páginas a optimizar: 1-15',
      'Palabras clave incluidas: 21-40',
      'Creación de enlaces incluida',
      'Publicaciones de blog: 4 por año',
      'Informe de rendimiento: 4 por año',
    ],
    cta: 'Solicitar'
  },
  {
    title: 'SEO Premium',
    price: '$4,999.999',
    icon: PremiumSvg,
    features: [
      'Optimización de contenido',
      'Optimización de etiquetas y descripciones',
      'Páginas a optimizar: 1-20',
      'Palabras clave incluidas: 41-60',
      'Creación de enlaces incluido',
      'Publicaciones de blog: 12 por año',
      'Informe de rendimiento: 4 por año',
    ],
    cta: 'Solicitar'
  }
]

</script>

<template>

  <Title
    marginTop
    title="¿Tu sitio web está bien posicionado en Google?"
    description="Haz que tu página web aparezca en los principales motores de búsqueda con nuestro servicio integral de optimización y marketing online." 
  />

  <IconTitle
    :data="iconTitle"
  />

  <PostSubtitle
    marginTop
    title="¿Cómo Mejorar el rendimiento de tu sitio web y hacerlo más atractivo para los motores de búsqueda?"
    text="La optimización en motores de búsqueda (SEO) es fundamental para mejorar la visibilidad y el posicionamiento de tu sitio web en las páginas de resultados de los buscadores (SERPs). Mediante técnicas avanzadas de optimización técnica, refinamiento de contenido y creación estratégica de enlaces, el SEO no solo aumenta el tráfico orgánico, sino que también fortalece la presencia online de tu negocio." 
    text1="Nuestros expertos en SEO analizan los algoritmos de los motores de búsqueda y los patrones de comportamiento de los usuarios para optimizar los sitios web, alineándolos con palabras clave relevantes y consultas de los usuarios. Esto permite atraer tráfico dirigido y maximizar las tasas de conversión. Los servicios de SEO incluyen optimización on-page, que abarca la investigación de palabras clave, la optimización de metaetiquetas y la mejora del contenido, así como optimización off-page, que incluye la construcción de enlaces y la integración con redes sociales."
    text2="En un entorno digital competitivo, contar con servicios de SEO efectivos es fundamental para que las empresas establezcan su presencia digital y alcancen a su audiencia objetivo de manera eficiente."
  />

  <SubTitle
    title="Nuestros planes de SEO"
    description="Diseñados para maximizar tu presencia digital y alcanzar tus objetivos comerciales con precisión y eficacia."
  />

  <ServiceCards :data="serviceCards" />

  <PostText
    marginTop
    title="Optimización Local: Destaca tu Negocio en las Búsquedas Locales"
    text="La forma en que las personas navegan en línea está cambiando constantemente. Hoy en día, cada vez más personas utilizan la búsqueda local y en dispositivos móviles para buscar información, realizar compras y comparar los servicios y precios de empresas locales. Este cambio está transformando la manera en que se debe abordar la optimización en motores de búsqueda (SEO). Ya no es suficiente con lograr que tu sitio web sea visible en los resultados de búsqueda orgánica; también es crucial asegurarte de que tu sitio esté optimizado para que las personas puedan encontrar tu negocio mediante búsquedas locales y desde smartphones y dispositivos móviles."
    textTwo="La búsqueda local es un tipo especializado de SEO que incrementa la visibilidad local de un negocio en línea y mejora su clasificación en los resultados de búsqueda para palabras clave relacionadas con ubicaciones geográficas específicas. En los últimos años, la necesidad de la búsqueda local ha aumentado debido a que los motores de búsqueda han comenzado a integrar la búsqueda local en los resultados de búsqueda orgánica. Esta es la razón por la que el marketing de SEO local es tan efectivo para dirigir tráfico objetivo significativo a tu sitio web. Una comprensión completa del análisis de tus competidores y clientes, junto con la investigación de palabras clave, desempeña un papel fundamental en la ejecución de una estrategia de SEO local."
  />

</template>


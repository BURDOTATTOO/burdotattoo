<script setup lang="ts">

import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import PostText from '~/components/sections/01-row/post-text/index.vue'
import CardMarketingSeo from '~/components/sections/03-row/cards/marketing-seo/index.vue'
import CardMarketingColorSeo from '~/components/sections/03-row/cards/marketing-color-seo/index.vue'

useSeoMeta({
  title: 'Mejora tu presencia en línea con nuestro servicio de marketing en redes sociales.',
  ogTitle: 'Mejora tu presencia en línea con nuestro servicio de marketing en redes sociales.',
  description: 'Incrementa tu visibilidad en línea y alcanza a más clientes con nuestro servicio de marketing en redes sociales.',
  ogDescription: 'Incrementa tu visibilidad en línea y alcanza a más clientes con nuestro servicio de marketing en redes sociales.',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Mejora tu presencia en línea con nuestro servicio de marketing en redes sociales.',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Incrementa tu visibilidad en línea y alcanza a más clientes con nuestro servicio de marketing en redes sociales.',
})

</script>

<template>

  <TitleSubtitle 
    title="¿Tu sitio web está bien posicionado en Google?"
    subtitle="Haz que tu página web aparezca en los principales motores de búsqueda con nuestro servicio integral de optimización y marketing online." 
  />

  <CardMarketingSeo />

  <PostText
    marginTop
    title="¿Cómo Mejorar el rendimiento de tu sitio web y hacerlo más atractivo para los motores de búsqueda?"
    text="Los servicios de optimización en motores de búsqueda (SEO) son estrategias esenciales para mejorar la visibilidad y el posicionamiento de un sitio web en las páginas de resultados de los buscadores (SERPs). A través de la optimización técnica, el refinamiento de contenido y la creación estratégica de enlaces, el SEO busca incrementar el tráfico orgánico y fortalecer la presencia online de tu sitio web." 
    textTwo="Nuestros expertos en SEO analizan los algoritmos de los motores de búsqueda y los patrones de comportamiento de los usuarios para optimizar los sitios web, alineándolos con palabras clave relevantes y consultas de los usuarios. Esto permite atraer tráfico dirigido y maximizar las tasas de conversión. Los servicios de SEO incluyen optimización on-page, que abarca la investigación de palabras clave, la optimización de metaetiquetas y la mejora del contenido, así como optimización off-page, que incluye la construcción de enlaces y la integración con redes sociales."
    textThree="En un entorno digital competitivo, contar con servicios de SEO efectivos es fundamental para que las empresas establezcan su presencia digital y alcancen a su audiencia objetivo de manera eficiente."
  />

  <TitleSubtitle
    title="Nuestros planes de SEO"
  />

  <CardMarketingColorSeo />

  <PostText
    marginTop
    title="Optimización Local: Destaca tu Negocio en las Búsquedas Locales"
    text="La forma en que las personas navegan en línea está cambiando constantemente. Hoy en día, cada vez más personas utilizan la búsqueda local y en dispositivos móviles para buscar información, realizar compras y comparar los servicios y precios de empresas locales. Este cambio está transformando la manera en que se debe abordar la optimización en motores de búsqueda (SEO). Ya no es suficiente con lograr que tu sitio web sea visible en los resultados de búsqueda orgánica; también es crucial asegurarte de que tu sitio esté optimizado para que las personas puedan encontrar tu negocio mediante búsquedas locales y desde smartphones y dispositivos móviles."
    textTwo="La búsqueda local es un tipo especializado de SEO que incrementa la visibilidad local de un negocio en línea y mejora su clasificación en los resultados de búsqueda para palabras clave relacionadas con ubicaciones geográficas específicas. En los últimos años, la necesidad de la búsqueda local ha aumentado debido a que los motores de búsqueda han comenzado a integrar la búsqueda local en los resultados de búsqueda orgánica. Esta es la razón por la que el marketing de SEO local es tan efectivo para dirigir tráfico objetivo significativo a tu sitio web. Una comprensión completa del análisis de tus competidores y clientes, junto con la investigación de palabras clave, desempeña un papel fundamental en la ejecución de una estrategia de SEO local."
  />

</template>
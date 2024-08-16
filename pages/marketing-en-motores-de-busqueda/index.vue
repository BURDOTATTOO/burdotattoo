<script setup lang="ts">

import Title from '~/components/atoms/title-description/index.vue'
import PostText from '~/components/sections/seo/post-text/index.vue'
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import CardMarketingSeo from '~/components/sections/seo/marketing-seo/index.vue'
import CardMarketingColorSeo from '~/components/sections/marketing/marketing-color-seo/index.vue'

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
});

</script>

<template>

  <Title
    marginTop
    title="¿Tu sitio web está bien posicionado en Google?"
    description="Haz que tu página web aparezca en los principales motores de búsqueda con nuestro servicio integral de optimización y marketing online." 
  />

  <CardMarketingSeo />

  <PostText
    marginTop
    title="¿Cómo Mejorar el rendimiento de tu sitio web y hacerlo más atractivo para los motores de búsqueda?"
    text="La optimización en motores de búsqueda (SEO) es fundamental para mejorar la visibilidad y el posicionamiento de tu sitio web en las páginas de resultados de los buscadores (SERPs). Mediante técnicas avanzadas de optimización técnica, refinamiento de contenido y creación estratégica de enlaces, el SEO no solo aumenta el tráfico orgánico, sino que también fortalece la presencia online de tu negocio." 
    textTwo="Nuestros expertos en SEO analizan los algoritmos de los motores de búsqueda y los patrones de comportamiento de los usuarios para optimizar los sitios web, alineándolos con palabras clave relevantes y consultas de los usuarios. Esto permite atraer tráfico dirigido y maximizar las tasas de conversión. Los servicios de SEO incluyen optimización on-page, que abarca la investigación de palabras clave, la optimización de metaetiquetas y la mejora del contenido, así como optimización off-page, que incluye la construcción de enlaces y la integración con redes sociales."
    textThree="En un entorno digital competitivo, contar con servicios de SEO efectivos es fundamental para que las empresas establezcan su presencia digital y alcancen a su audiencia objetivo de manera eficiente."
  />

  <SubTitle
    marginTop
    title="Nuestros planes de SEO"
    description="Diseñados para maximizar tu presencia digital y alcanzar tus objetivos comerciales con precisión y eficacia."
  />

  <CardMarketingColorSeo />

  <PostText
    marginTop
    title="Optimización Local: Destaca tu Negocio en las Búsquedas Locales"
    text="La forma en que las personas navegan en línea está cambiando constantemente. Hoy en día, cada vez más personas utilizan la búsqueda local y en dispositivos móviles para buscar información, realizar compras y comparar los servicios y precios de empresas locales. Este cambio está transformando la manera en que se debe abordar la optimización en motores de búsqueda (SEO). Ya no es suficiente con lograr que tu sitio web sea visible en los resultados de búsqueda orgánica; también es crucial asegurarte de que tu sitio esté optimizado para que las personas puedan encontrar tu negocio mediante búsquedas locales y desde smartphones y dispositivos móviles."
    textTwo="La búsqueda local es un tipo especializado de SEO que incrementa la visibilidad local de un negocio en línea y mejora su clasificación en los resultados de búsqueda para palabras clave relacionadas con ubicaciones geográficas específicas. En los últimos años, la necesidad de la búsqueda local ha aumentado debido a que los motores de búsqueda han comenzado a integrar la búsqueda local en los resultados de búsqueda orgánica. Esta es la razón por la que el marketing de SEO local es tan efectivo para dirigir tráfico objetivo significativo a tu sitio web. Una comprensión completa del análisis de tus competidores y clientes, junto con la investigación de palabras clave, desempeña un papel fundamental en la ejecución de una estrategia de SEO local."
  />

</template>
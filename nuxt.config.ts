// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },

  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://pirole.ru',
    name: 'Pirole'
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },

  sitemap: {
    urls: [
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      }
    ]
  },

  app: {
    head: {
      title: 'Pirole — Кастомная мебель для баров и ресторанов',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Pirole — производство кастомизированной мебели для баров, ресторанов и заведений. Уникальные изделия в индустриальном и лофт стиле из металла и дерева. Звоните: +7 (916) 867-35-50'
        },
        {
          name: 'keywords',
          content: 'мебель для баров, мебель для ресторанов, кастомная мебель, лофт мебель, индустриальная мебель, мебель из металла и дерева, барные стойки, столы для ресторанов, мебель на заказ'
        },
        { name: 'author', content: 'Pirole' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'yandex', content: 'index, follow' },

        // Open Graph
        { property: 'og:title', content: 'Pirole — Кастомная мебель для баров и ресторанов' },
        { property: 'og:description', content: 'Производство уникальной мебели в индустриальном стиле из металла и дерева для баров и ресторанов' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pirole.ru' },
        { property: 'og:image', content: 'https://pirole.ru/images/1.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:site_name', content: 'Pirole' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pirole — Кастомная мебель для баров и ресторанов' },
        { name: 'twitter:description', content: 'Производство уникальной мебели в индустриальном стиле' },
        { name: 'twitter:image', content: 'https://pirole.ru/images/1.png' },

        // Geo
        { name: 'geo.region', content: 'RU' },
        { name: 'geo.placename', content: 'Россия' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/images/logo.svg' },
        { rel: 'canonical', href: 'https://pirole.ru' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Pirole',
            'description': 'Производство кастомизированной мебели для баров, ресторанов и заведений в индустриальном и лофт стиле',
            'url': 'https://pirole.ru',
            'telephone': '+7 (916) 867-35-50',
            'image': 'https://pirole.ru/images/logo.svg',
            'priceRange': '$$',
            'address': {
              '@type': 'PostalAddress',
              'addressCountry': 'RU'
            },
            'openingHours': 'Mo-Fr 09:00-18:00',
            'sameAs': []
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'Кастомная мебель Pirole',
            'description': 'Уникальная мебель в индустриальном стиле из металла и дерева для баров и ресторанов',
            'brand': {
              '@type': 'Brand',
              'name': 'Pirole'
            },
            'offers': {
              '@type': 'Offer',
              'priceCurrency': 'RUB',
              'availability': 'https://schema.org/InStock'
            }
          })
        }
      ]
    }
  }
})

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'uget-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.min.css'  },
      { rel: 'stylesheet', href: '/assets/vendor/font-awesome/css/font-awesome.min.css'  },
      { rel: 'stylesheet', href: '/assets/vendor/animate-css/vivify.min.css'  },
      { rel: 'stylesheet', href: '/assets/vendor/vendor/c3/c3.min.css'  },
      { rel: 'stylesheet', href: '/assets/vendor/chartist/css/chartist.min.css'  },
      { rel: 'stylesheet', href: '/assets/vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.css'  },
      { rel: 'stylesheet', href: '/assets/css/site.min.css'  }
    ],
    script : [
      { src: '/assets/vendor/jquery/jquery-3.3.1.min.js' },
      { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' , body : true },
      { src: '/assets/bundles/vendorscripts.bundle.js' , body : true },
      { src: '/assets/bundles/c3.bundle.js' , body : true },
      { src: '/assets/bundles/flotscripts.bundle.js' , body : true },
      { src: '/assets/bundles/knob.bundle.js' , body : true },
      { src: '/assets/js/common.js' , body : true },
      { src: '/assets/js/index.js' , body : true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
     port: 8080, // default: 3000
     host: '0.0.0.0' // default: localhost
  }
}

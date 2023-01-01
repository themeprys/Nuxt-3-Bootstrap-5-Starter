// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          title: "Nuxt 3 Starter",
          // or, instead:
          // titleTemplate: (title) => `My App - ${title}`,
          viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
          charset: 'utf-8',
          meta: [
            { name: 'description', content: 'My amazing site.' }
          ],
          bodyAttrs: {
            class: 'starter'
          },          
          link: [
            {
              href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
              rel: "stylesheet",
              integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
              crossorigin: "anonymous"
            },
            {
              href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
              rel: "stylesheet",
              integrity: "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
              crossorigin: "anonymous",
              referrerpolicy: "no-referrer",
            },
      
          ],
          script: [
            {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
              integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
              crossorigin: "anonymous"
            },
          ]          
        },
      },
      css: [
        // CSS file in the project
        '@/assets/css/main.css',
      ],
      

})

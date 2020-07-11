# React SSR Multipage Template

The goal of this project is to create a multipage application in react (A larger SSR application consisting of smaller react applications)

Reasons for doing this
1. Avoid storing secrets on the client
2. Avoid exposing critical routing logic on the client. e.g. routing between authenticated and unauthenticated pages
3. You run much thinner applications at any giving time and not ginormous application

# Technologies
- React
- Parcel
- Koa
- Nunjucks
- HTTP-Only Cookies

## Alternatives
### Nuxt
1. Stores secrets on the client (no http-only cookie option)
2. Reinvents a lot of what we already know how to do on the server-side

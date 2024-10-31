/**
 * @type {import("astro").MiddlewareHandler}
 */
export const onRequest = async (context, next) => {
  const response = await next()

  if (response.status === 404) {
    const request = context.request

    // Obtiene el objeto URL
    const url = new URL(request.url)

    // Obtiene el pathname
    const pathname = url.pathname

    // Construye la URL completa para la redirección
    const baseUrl = `${url.protocol}//${url.host}`

    // conditional Redirection
    if (pathname.match('/es')) {
      return context.redirect(`${baseUrl}/es`, 301) // Construye URL completa
    }

    return context.redirect(`${baseUrl}/`, 301) // Construye URL completa
  }

  return response
}

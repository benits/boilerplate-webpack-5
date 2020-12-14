export const redirectTo = (microapp, params) => {
  const { host } = window.location
  const { protocol } = window.location
  const parts = host.split('.')

  if (microapp !== undefined) {
    // Remove the subdomain from the parts list
    parts.splice(0, 1)

    // Set the location to the new url
    window.location = `${protocol}//${microapp}.${parts.join('.')}${params}`
  }
}

export const valuePriceMask = value => {
  return value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
}

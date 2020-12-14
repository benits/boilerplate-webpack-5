import PropTypes from 'prop-types'
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const AuthContext = createContext({
  signed: false,
  user: {
    id: null,
    name: null,
    publicId: null,
    createCompanyId: null,
    termsAgree: null,
    companys: null,
    token: null,
    publicGuidCompany: null,
    draft: false
  },
  signIn: () => {},
  signOut: () => {}
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    publicId: null,
    createCompanyId: null,
    termsAgree: null,
    companys: null,
    token: null,
    publicGuidCompany: null,
    draft: false
  })

  /**
   * signIn
   *
   * @param {string} userPublicGuid
   * @param {string} companyPublicGuid
   * @return {void}
   */
  const signIn = async () => {
    const response = {}

    // atribui o token do usuario ao header do axios
    // api.defaults.headers.Authorization = `Bearer ${response.token}`
    // api.defaults.headers.contentType = 'application/json;charset=utf-8'

    // salva os dados do usuario no localstorage
    localStorage.setItem('@ECauth:user', JSON.stringify(response))
    localStorage.setItem('@ECauth:token', response.token)

    return setUser(response)
  }

  async function signOut() {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const loadStorageData = () => {
      const storagedUser = localStorage.getItem('@ECauth:user')
      const storagedToken = localStorage.getItem('@ECauth:token')

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
        // atribui o token do usuario ao header do axios
        // api.defaults.headers.authorization = `Bearer ${storagedToken}`
        // api.defaults.headers.contentType = 'application/json;charset=utf-8'
      }
    }
    loadStorageData()
  }, [])

  const contextValue = {
    signed: !!user,
    user,
    signIn: useCallback(data => signIn(data), []),
    signOut: useCallback(() => signOut(), [])
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvider

import { useContext } from 'react'
import { AuthContext } from '@src/providers/AuthProvider'

function useAuth() {
  const { signed, user, signIn, signOut } = useContext(AuthContext)
  return { signed, user, signIn, signOut }
}

export default useAuth

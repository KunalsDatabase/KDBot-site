import {AuthContextType,AuthProviderProps} from '../types'
import {createContext,useState} from 'react'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    return (
      <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
      </AuthContext.Provider>
    )
  }
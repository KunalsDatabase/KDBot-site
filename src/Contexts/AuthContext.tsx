import {AuthContextType,AuthProviderProps} from '../types'
import {createContext,useState,useEffect} from 'react'
import {getUserData} from '../Services/authService'
export const AuthContext = createContext<AuthContextType | undefined>(undefined)
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState<any>(null) // Replace with a proper user type
    useEffect(() => {
      getUserData().then((data) => {
          setUser(data)
          setIsLoading(false)
      })
  }
  ,[])
    return (
      <AuthContext.Provider value={{isLoading,user}}>
        {children}
      </AuthContext.Provider>
    )
  }
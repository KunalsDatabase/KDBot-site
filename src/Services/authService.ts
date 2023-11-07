export const getUserData = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_BASE_URL+'/getUser', {
            credentials: 'include', //include cookies in the request
        })
        if (response.ok) {
            return await response.json()
        }
        return null
    } catch (error) {
        console.error('Error fetching user data:', error)
        throw error
    }
}
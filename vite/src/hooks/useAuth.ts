import {JwtPayload, jwtDecode} from 'jwt-decode'
interface Payload extends JwtPayload{
    id:string
    name:string,
    email:string
    profile:Profile[]
}
interface Profile{
    url:string
}
const useAuth = () => {
  try {
    // Retrieve access token from local storage
    const accessToken = localStorage.getItem('vite-access-token') as string
    
    if (accessToken) {
      const decoded = jwtDecode(accessToken) as Payload
      const { id,name, email,  exp } = decoded
      const isExpired = exp! < Date.now() / 1000
      return {id, name, email, isExpired};
    }else return null
  } catch (error) {
    console.error('Error decoding token:', error);
    // Handle the decoding error, return null or a default value
    return null;
  }
};

export default useAuth;
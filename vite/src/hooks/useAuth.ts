import {JwtPayload, jwtDecode} from 'jwt-decode'
interface Payload extends JwtPayload{
    id:string
    name:string,
    email:string
    profile:Profile[],
    role:string
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
      const { sub:id,name, email, role,  exp } = decoded
      const isExpired = exp! < Date.now() / 1000
      return {id, name, email, role, isExpired};
    }else return null
  } catch (error) {
    console.error('Error decoding token:', error);
    // Handle the decoding error, return null or a default value
    return null;
  }
};

export default useAuth;
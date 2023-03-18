import { useLocation } from 'react-router-dom'
function WithGuarde(Components:any) {

  
  const location = useLocation();
  console.log('sss');
  console.log('location', location)

  return Components
}

export default WithGuarde;
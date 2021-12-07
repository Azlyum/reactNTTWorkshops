import { useEffect, useState }from 'react'

export const useBoomTing = () => {
  const [toggle, setToggle] = useState(false);
   
  const toggleFun = () =>{
    setToggle(!toggle)
  }
  return [toggle, toggleFun]
}


export const useName = (initName="james") => {
  const [name,  setName] = useState(initName);
   useEffect(() => {
     console.log(name)
   }, [name ])
  const nameFun = (firstName) =>{
    setName(firstName)
  }
  return  { name, nameFun }
}
 

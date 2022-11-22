import React from 'react'

const useForm = () => {
    const [values, setValues]= useState({
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    confirmpass:""

});
const [error, setError] = useState({})
const handleChange=(e)=>{
    const {name,value}=e.target;
    setValues((prevValues)=>{
        return{
            ...prevValues,[name]:value
        }
    })
}
return{handleChange,values}

}

export default useForm
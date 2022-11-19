import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {auth,db} from '../../firebase-config'
import { setDoc,doc,Timestamp} from 'firebase/firestore';

export default function Register() {
  const navigate=useNavigate()
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    error:null,
    loading:false
  });
  let {name,email,password,error,loading}=data;

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const RegisterUser = async(e)=>{
    e.preventDefault()
    setData({...data,error:null,loading:true})
    if(!data.name || !data.email || !data.password){
        setData({...data,error:"All fields are required!"})
    }
    try{
        const result=await createUserWithEmailAndPassword(auth,data.email,data.password)
        await setDoc(doc(db,'users',result.user.uid),{name,
        uid:result.user.uid,
        email,
        createdAt:Timestamp.fromDate(new Date()),
        isOnline:true,
        })
        setData({
            name:'',
            email:'',
            password:'',
            error:null,
            loading:false
        })
        navigate('/');
    }
    catch(err){
        setData({...data,error:err.message,loading:false})
    }
  }

  return (
    <div>
      <div>
        Create an Account
      </div>
      <form onSubmit={RegisterUser} className="content-center">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder='Enter Name' className='mx-2 border-2 border-black' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='Enter Email' className='mx-2 border-2 border-black' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder='Enter Password' className='mx-2 border-2 border-black' onChange={handleChange}/>
        </div>
        <div className="">
          <button className="bg-teal-600" disabled={loading}>
          {loading ? "Creating ..." : "Register"}
          </button>
      </div>
      </form>
    </div>
  )
}

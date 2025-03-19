import React,{useEffect, useState} from 'react'
import { auth,db } from '../firebase/firebase'
import { doc,getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
const Profile = () => {
    const[userdetails,setUserdetails]=useState(null)
    const fetchUserdata=async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docref=doc(db,"User",user.uid)
            const docSnap= await getDoc(docref)
            if(docsnap.exists()){
                setUserdetails(docSnap.data());
                console.log(docSnap.data());
            }
            else{
                console.log("user is not logged in")
            }
        })
    }
useEffect(()=>{
    fetchUserdata
},[])
async function handleLogout(){
    try{
        await auth.signOut();
        window.location.href="/login"
        console.log("Userloggedout successfully")

    }
    catch(error){
console.error("error logged out:",error.message);
    }
}
  return (
    <div>
     {
        userdetails ?(
            <>
            <h3>welcome{userdetails.firstname}</h3>
            <div>
                <p>Email:{userdetails.email}</p>
                <p>firstname:{userdetails.firstname}</p>
                <p>lastname:{userdetails.lastname}</p>
                </div>
                <button onClick={handleLogout}>logout</button></>
        ):(
            <p>loading...</p>
        )
     }
    </div>
  )
}

export default Profile

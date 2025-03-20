import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Profile = () => {
  const [userdetails, setUserdetails] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserdata = async () => {
      setIsLoading(true);
      if (user) {
        try {
          const docref = doc(db, 'Users', user.uid); 
          const docSnap = await getDoc(docref);
          if (docSnap.exists()) {
            setUserdetails(docSnap.data());
            console.log(docSnap.data());
          } else {
            console.log('User data not found.');
            setUserdetails(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Error fetching user data.');
          setUserdetails(null);
        } finally {
          setIsLoading(false);
        }
      } else {
        setUserdetails(null);
        setIsLoading(false);
        console.log('User is not logged in.');
      }
    };
    fetchUserdata();
  }, [user]);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = '/login';
      console.log('User logged out successfully');
      toast.success('User logged out successfully');
    } catch (error) {
      console.error('Error logged out:', error.message);
      toast.error('Error logging out.');
    }
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : userdetails ? (
        <>
          <h3>Welcome {userdetails.firstname}</h3>
          <div>
            <p>Email: {userdetails.email}</p>
            <p>Firstname: {userdetails.firstname}</p>
            <p>Lastname: {userdetails.lastname}</p>
          </div>
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <p>User data not available.</p>
      )}
    </div>
  );
};

export default Profile;
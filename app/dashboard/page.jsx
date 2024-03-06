'use client'
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

 
  if (status === 'loading') {
    return <p>Loading</p>;
  }

  
  const username = session?.user?.name;
  if (username) {
    
    return (
      <>
        <h1>Dashboard</h1>
        <p>User : {username !== undefined ? username : ' '}</p>
      </>
    );
  } else {
   
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    
    return <p>Redirection</p>;
  }
};

export default Dashboard;
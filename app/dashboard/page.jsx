'use client'
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  // Vérifier si la session est en cours de chargement
  if (status === 'loading') {
    return <p>Loading</p>;
  }

  // Vérifier si la session est définie
  const username = session?.user?.name;
  if (username) {
    // Afficher le contenu du tableau de bord
    return (
      <>
        <h1>Dashboard</h1>
        <p>User : {username !== undefined ? username : ' '}</p>
      </>
    );
  } else {
    // Redirection côté client vers la page d'accueil
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    // En attendant la redirection, afficher un contenu ou une page de chargement
    return <p>Redirection</p>;
  }
};

export default Dashboard;
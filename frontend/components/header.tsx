import Link from 'next/link';
import styles from './header.module.css';
import {signIn, signOut, useSession} from "next-auth/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useEffect, useState} from "react";

export default function Header() {
  const {data: session, status} = useSession();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Set the current URL path using useEffect to avoid issues during server-side rendering
    setCurrentPath(window.location.pathname);
  }, []);


  const handleLogout = async () => {
    await signOut();
    window.location.href = '/';
  }

  const handleContact = () => {
    window.location.href = '/about';
  }

  const buttonText = () => {
    switch (currentPath) {
      case '/about':
        return 'Learn More';
      case '/dashboard':
        return 'View Dashboard';
        // Add more cases as needed
      default:
        return 'Contact Us';
    }
  }

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link style={currentPath == "/" ? {color: '#501EE5', fontWeight: 700} : {fontWeight: 400} } href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link style={currentPath == "/about" ? {color: '#501EE5', fontWeight: 700} : {fontWeight: 400} } href="/about">About Us</Link>
            </li>
            {session?.user && (
                <>
                  <li className={styles.navItem}>
                    <Link style={currentPath == "/dashboard" ? {color: '#501EE5', fontWeight: 700} : {fontWeight: 400}}
                          href="/dashboard">Dashboard</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link style={currentPath == "/chat" ? {color: '#501EE5', fontWeight: 700} : {fontWeight: 400}}
                          href="/chat">Chat</Link>
                  </li>
                </>


            )}
          </ul>
          {session?.user ? (
                  <div style={{width: '400px', display: "flex", justifyContent: "flex-end"}}>
                    <ConnectButton accountStatus={'avatar'} />
              <button className={styles.loginButton} onClick={handleLogout}>Sign out</button>
            </div>
          )
              :
                (
                    <button className={styles.loginButton} onClick={handleContact}>Contact Us</button>
                )
          }
        </nav>
      </header>
  );
}

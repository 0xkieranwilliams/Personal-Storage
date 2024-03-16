import Layout from "../components/layout";
import Image from 'next/image';
import { signIn } from "next-auth/react";
import styles from "./homepage.module.css";

export default function Index() {
    const handleLogin = () => {
        console.log('Login');
        signIn("worldcoin", { callbackUrl: '/admin' });
    }

    return (
        <Layout>
            <div className={styles.heroContainer}>
                <Image src={require("../assets/img/logo.svg")} width={220} height={220} alt="Logo" />
                <Image src={require("../assets/img/secure-drawing.svg")} height={400} width={400} alt="Hero"/>
                <div className={styles.loginButtonContainer}>
                    <button className={styles.loginButton} onClick={handleLogin}>Sign in using Worldcoin</button>
                </div>
            </div>
        </Layout>
    );
}

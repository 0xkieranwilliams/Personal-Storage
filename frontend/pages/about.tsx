// AboutUs.tsx

import Image from 'next/image';
import styles from './aboutus.module.css';
import Layout from "../components/layout";

const about = () => {
    return (
        <Layout>
            <div className={styles.aboutUsContainer}>
                <div className={styles.content}>
                    <h2 className={styles.aboutH2}>About Human Storage</h2>
                    <p className={styles.aboutP}>Welcome to Human Storage, your secure vault in the digital world. Our mission is to provide a
                        privacy-focused storage solution that meets the needs of individuals and organizations
                        alike.</p>
                    <p className={styles.aboutP}>With state-of-the-art encryption and innovative Worldcoin authentication, we ensure that your
                        digital assets are protected and easily accessible. We are committed to delivering an
                        exceptional service that upholds the principles of security, integrity, and simplicity.</p>
                </div>
            </div>
        </Layout>
)
    ;
};

export default about;

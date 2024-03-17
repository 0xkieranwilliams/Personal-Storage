import styles from './aboutus.module.css';
import Layout from "../components/layout";
import React from "react";

export default function About() {
    return (
        <Layout>
            <div className={styles.aboutContainer}>
                <h1 className={styles.dashboardTitle}>About Us</h1>

                <p className={styles.dashboardSubtitle}>Welcome to Human Storage, your secure vault in the digital world. Our
                    mission is to provide a
                    privacy-focused storage solution that meets the needs of individuals and organizations
                    alike.</p>
                <p className={styles.dashboardSubtitle}>With state-of-the-art encryption and innovative Worldcoin authentication,
                    we ensure that your
                    digital assets are protected and easily accessible. We are committed to delivering an
                    exceptional service that upholds the principles of security, integrity, and simplicity.</p>
            </div>
        </Layout>
    );
};

import styles from './aboutus.module.css';
import Layout from "../components/layout";
import React from "react";

export default function Chat() {
    // create a chat which is question and answer based
    const chat = [
        {
            question: "What is Human Storage?",
            answer: "Human Storage is a secure vault in the digital world. Our mission is to provide a privacy-focused storage solution that meets the needs of individuals and organizations alike."
        },
        {
            question: "How does Human Storage work?",
            answer: "With state-of-the-art encryption and innovative Worldcoin authentication, we ensure that your digital assets are protected and easily accessible. We are committed to delivering an exceptional service that upholds the principles of security, integrity, and simplicity."
        },
        {
            question: "What is Worldcoin?",
            answer: "Worldcoin is a digital currency that is used to authenticate users and secure their digital assets."
        },
        {
            question: "How do I get started?",
            answer: "To get started, simply sign up for an account and start uploading your digital assets."
        },
        {
            question: "How do I upload my digital assets?",
            answer: "You can upload your digital assets by clicking on the 'Upload Document' button on the dashboard."
        },
    ];



    return (
        <Layout>
            <div className={styles.aboutContainer}>

            </div>
        </Layout>
    );
};

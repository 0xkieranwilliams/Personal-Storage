import styles from './chat.module.css'; // Make sure to create a corresponding CSS module file
import Layout from "../components/layout";
import React, { useState } from "react";

export default function Chat() {
    const [invalid, setInvalid ] = useState(false);
    const [question, setQuestion] = useState('');
    const [selectedTag, setSelectedTag] = useState('Medical Records');
    const [chat, setChat] = useState([
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
    ]);

    const handleAskQuestion = async () => {
        if (!question) {
            setInvalid(true);
            return;
        }

        // Here, simulate sending the question to the backend and getting a response
        // This is where you would integrate your actual backend service or AI response
        const newResponse = { question, answer: "This is a simulated answer." };

        setChat([...chat, newResponse]);
        setQuestion(''); // Clear input after sending
        setInvalid(false); // Reset invalid state
    }

    const handleSelectTag = (tag: string) => {
        setSelectedTag(tag);
        console.log('selected tag: ', tag);
    }

    return (
        <Layout>
            <div className={styles.chatContainer}>
                <h1 className={styles.chatTitle}>Chat</h1>
                <div className={styles.selectContainer}>
                    <p>Select document type to chat with</p>
                    <select className={styles.dropdown} value={selectedTag} onChange={(tag) => handleSelectTag(tag.target.value)}>
                        <option value="Medical Records">Medical Records</option>
                        <option value="Passports">Passports</option>
                        <option value="Emergency Information">Emergency Information</option>
                        <option value="Education Transcripts">Education Transcripts</option>
                        <option value="Legal Contracts">Legal Contracts</option>
                        <option value="Education Transcripts">Misc</option>
                    </select>
                </div>
                <div className={styles.chatWindow}>
                    {chat.map((c, index) => (
                        <div key={index} className={styles.chatMessage}>
                            <div className={`${styles.chatBubble} ${styles.userQuestion}`}>
                                {c.question}
                            </div>
                            <div className={`${styles.chatBubble} ${styles.aiAnswer}`}>
                                {c.answer}
                            </div>
                        </div>
                    ))}

                </div>
                <div className={styles.inputArea}>
                    <input
                        type="text"
                        className={invalid ? styles.invalidInput : styles.validInput}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask a question..."
                    />
                    <button onClick={handleAskQuestion} className={styles.askButton}>Ask</button>
                </div>
            </div>
        </Layout>
    );
};

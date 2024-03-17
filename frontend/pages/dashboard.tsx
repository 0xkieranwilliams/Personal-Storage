import Layout from "../components/layout";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import addresses from "../blockchain-config/contract_address.json";
import contractABI from "../blockchain-config/abi.json";
const contractAddress = addresses["314159"];
console.log(contractABI)

export default function Dashboard() {
  useEffect(() => {
    console.log(contractAddress)
    const fetchDocuments = async () => {
      // Connect to the Ethereum network
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Connect to the contract
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      console.log(contract.getDocuments)

      // Call the getDocuments function on the contract
      const result = await contract["getDocuments(string)"]("Medical Records");
      console.log(result)

    };

    fetchDocuments();
  }, []);

  return (
    <Layout>
      <h1>This page is protected by NextAuth Middleware</h1>
      <p>Only admin users can see this page.</p>
      <p>
        To learn more about the NextAuth middleware see&nbsp;
        <a href="https://next-auth.js.org/configuration/nextjs#middleware">
          the docs
        </a>
      </p>
    </Layout>
  );
}

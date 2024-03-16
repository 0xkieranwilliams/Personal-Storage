// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentStorage {
    // Mapping from user address -> (tag -> array of CIDs)
    mapping(address => mapping(string => string[])) private userDocuments;

    // Predefined tags
    string[] private tags = [
        "Medical Records",
        "Passports",
        "Emergency Information",
        "Education Transcripts",
        "Legal Contracts",
        "Misc"
    ];

    // Function to add a new CID to the caller's tag
    function addDocument(string memory tag, string memory cid) public {
        require(isTagValid(tag), "Invalid tag provided");
        userDocuments[msg.sender][tag].push(cid);
    }

    // Function to get CIDs by the caller and tag
    function getDocuments(
        string memory tag
    ) public view returns (string[] memory) {
        require(isTagValid(tag), "Invalid tag provided");
        return userDocuments[msg.sender][tag];
    }

    // Function to check if a tag is predefined (optional, for validation)
    function isTagValid(string memory tag) public view returns (bool) {
        for (uint i = 0; i < tags.length; i++) {
            if (keccak256(bytes(tags[i])) == keccak256(bytes(tag))) {
                return true;
            }
        }
        return false;
    }
}


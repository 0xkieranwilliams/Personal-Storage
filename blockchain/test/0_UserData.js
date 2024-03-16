const { expect } = require("chai");
const hre = require("hardhat");

describe("DocumentStorage contract", () => {
  let documentStorage;
  let owner;
  let anotherAccount;

  before(async () => {
    [owner, anotherAccount] = await ethers.getSigners();
    const DocumentStorage = await hre.ethers.getContractFactory("DocumentStorage");
    documentStorage = await DocumentStorage.deploy();
    console.log(documentStorage)
  });

  it("should allow adding a document with a valid tag", async () => {
    const tag = "Medical Records";
    const cid = "cid12345";
    await documentStorage.connect(owner).addDocument(tag, cid);
    let _owner = await documentStorage.connect(owner)
    console.log(documentStorage)
    const documents = await documentStorage.connect(owner).getDocuments(tag);
    expect(documents).to.include(cid);
  });

  it("should not allow adding a document with an invalid tag", async () => {
    const invalidTag = "Invalid Tag";
    const cid = "cid67890";
    const tx = documentStorage.connect(owner).addDocument(invalidTag, cid);

    await expect(tx).to.be.revertedWith("Invalid tag provided");
  });

  it("should only allow the document owner to retrieve their documents", async () => {
    const tag = "Passports";
    const cidOwner = "cidOwner";
    const cidAnother = "cidAnother";

    // Owner adds their document
    await documentStorage.connect(owner).addDocument(tag, cidOwner);

    // Another account tries to add their document
    await documentStorage.connect(anotherAccount).addDocument(tag, cidAnother);

    // Each account retrieves their documents
    const documentsOwner = await documentStorage.connect(owner).getDocuments(tag);
    const documentsAnother = await documentStorage.connect(anotherAccount).getDocuments(tag);

    // Assertions
    expect(documentsOwner).to.include(cidOwner);
    expect(documentsOwner).not.to.include(cidAnother);
    expect(documentsAnother).to.include(cidAnother);
    expect(documentsAnother).not.to.include(cidOwner);
  });

  it("should maintain separate document lists for each user and tag", async () => {
    const tag1 = "Education Transcripts";
    const tag2 = "Legal Contracts";
    const cid1 = "cidTag1";
    const cid2 = "cidTag2";

    // Adding documents to different tags for the same user
    await documentStorage.connect(owner).addDocument(tag1, cid1);
    await documentStorage.connect(owner).addDocument(tag2, cid2);

    // Retrieving documents by tag
    const documentsTag1 = await documentStorage.connect(owner).getDocuments(tag1);
    const documentsTag2 = await documentStorage.connect(owner).getDocuments(tag2);

    // Assertions
    expect(documentsTag1).to.include(cid1);
    expect(documentsTag1).not.to.include(cid2);
    expect(documentsTag2).to.include(cid2);
    expect(documentsTag2).not.to.include(cid1);
  });
});


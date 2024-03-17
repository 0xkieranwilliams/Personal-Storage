const lighthouse  = require('@lighthouse-web3/sdk');

const main = async () => {
  const apiKey = '8d76a910.9ba49f4a7b024fe78576706de013850a';
  const uploadResponse = await lighthouse.upload(
    './text.txt', 
    apiKey
  );
  console.log(uploadResponse);
}
main()


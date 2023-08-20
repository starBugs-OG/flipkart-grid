//This is a script to deploy the contract to the blockchain

//Import the web3 library
import ethers from 'ethers';

//Import the compiled contract 
//This is the contract that was compiled in the previous step 
import compiledContract from './build/contracts/Flipcoins.json';

//Import the private key from the .env file
//This is the private key of the account that will deploy the contract 
//This account must have enough funds to pay for the gas fees 

const privateKey = process.env.PRIVATE_KEY;

//Create a function to deploy the contract 

async function deploy() {
    //Create a new ethers provider connected to the polygon testnet 
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/4p4dIgkSccNSIOpgg_8jnt8wGRsCBgJa');

    //Create a new wallet using the private key 
    const wallet = new ethers.Wallet(privateKey, provider);

    //Create a factory for the contract 
    const factory = new ethers.ContractFactory(compiledContract.abi, compiledContract.bytecode, wallet);

    //Deploy the contract 
    const contract = await factory.deploy();

    //Wait for the contract to be deployed 
    await contract.deployed();

    //Log the address of the deployed contract 
    console.log(contract.address);
}

//Call the deploy function
deploy();

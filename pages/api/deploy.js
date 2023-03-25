const ethers = require("ethers");
const solc = require("solc");
const dotenv = require("dotenv");

dotenv.config();

export default async function handler(req, res) {
  try {
    const { source, network, contractName, chainId } = req.body;

    let provider = null;

    if (network === "mantle") {
      provider = new ethers.JsonRpcProvider(
        `https://rpc.testnet.mantle.xyz/`
      );
    } else if (network === "5ire") {
      provider = new ethers.JsonRpcProvider(
        `https://rpc-testnet.5ire.network/`
      );
    } else if (network === "thundercore") {
      provider = new ethers.JsonRpcProvider("https://testnet-rpc.thundercore.com/");
    } 
    else if (network === "xdc") {
      provider = new ethers.JsonRpcProvider("https://erpc.apothem.network/");
    }
    else if (network === "polygon") {
      provider = new ethers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/");
    }

    const pk = "276b595c52346ca12bca8630121a389462dd591d5a7ba532f75bf6d490a5ffd1";
    const wallet = new ethers.Wallet(pk, provider);

    const fileName = `${contractName}.sol`;

    // Compile the Solidity file using solc
    const input = {
      language: "Solidity",
      sources: {
        [fileName]: {
          content: source,
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["abi", "evm.bytecode"],
          },
        },
      },
    };
    const output = JSON.parse(
      solc.compile(JSON.stringify(input), { version: "0.8.8" })
    );

    console.log(output);

    // Get the compiled contract's ABI and bytecode
    const abi = output.contracts[fileName][contractName].abi;
    const bytecode =
      output.contracts[fileName][contractName].evm.bytecode.object;

    // Create an instance of the ContractFactory
    const factory = new ethers.ContractFactory(abi, bytecode, wallet);

    // Deploy the contract
    const contract = await factory.deploy({ chainId });
    await contract.waitForDeployment();

    const address = await contract.getAddress();

    console.log("Contract deployed to:", address);

    return res.status(200).json({
      address,
    });
  } catch (e) {
    console.log(e);
  }
  return res.status(200);
}

# Deploy-it
 ## Inspiration
Our belief is that having a visual scripter for Solidity would allow skilled engineers to develop more intricate systems on the Ethereum platform, while also enabling individuals with limited technical expertise to engage with smart contracts. This would ultimately facilitate the wider adoption of blockchain technology among the general public.

## What it does
Deploy-it is a visual scripter for Solidity designed to enhance the comprehension of smart contracts for both technical and non-technical individuals. For technical experts, this tool offers the capability to import existing smart contracts and visualize data flow in a simplified, no-code format. Additionally, they can also create new smart contracts using the tool and easily deploy them on various chains, including Mantle, 5ire, Polygon, xdc, and Thundercore. On the other hand, non-technical users, such as DeFi traders and product managers, can benefit from the tool's capacity to simplify codebase syntax, allowing them to better understand how data or money is utilized in a smart contract ecosystem, such as a DeFi AMM or money market.

## How we built it
* Parsing the code into an Abstract Syntax Tree (AST)
* Converting the AST into a format usable by React Flow (a visual programming library)
* Building a visual interface in React Flow to represent the Solidity code
* Converting the visual representation back into an AST
* Generating Solidity code from the updated AST.

## Challenges we ran into
* Converting a visual graph back into an AST, and then into source code is a very complex task that presented some challenges
* Converting an AST into a visual graph was also slightly challenging

## Sample Contract Deployed of the Sample Contract for the Bounty
## Developer Tooling Catagory
* 5ire Testnet:-  https://explorer.5ire.network/evm/tx/0xf0524e9e1b8b880947ae74f0665243d6d284d6c5fcc03af1061bf35600efc56d
* Thundercore Testnet:- https://explorer-testnet.thundercore.com/address/0xa89229906e5f5EF13530f9F97c752367DD3c752a/
* XDC Testnet:- https://explorer.apothem.network/address/0x4Fbc3863284b20F25ee45dB7303d8C11A5F417e0
* Mantle Testnet:- https://explorer.testnet.mantle.xyz/address/0x4Fbc3863284b20F25ee45dB7303d8C11A5F417e0

## What's next for Deploy It
* Integration of third-party libraries such as Chainlink Oracles or Optimism's AttestationStation is made easy.
* Upgradability and time-locks can be added quickly by simply changing settings.
* The system automatically detects and displays possible security vulnerabilities and recommendations to fix them.
* Automatic gas optimization techniques are included.
* Deployment and management of deployed contracts are centralized in one place.
* The node system is more robust, with internal functions and modifiers included.
* The platform supports other programming languages in addition to Solidity.

## DEMO LINKS
* https://deploy-it-theta.vercel.app/
* https://youtu.be/ZsVbIH21YWQ

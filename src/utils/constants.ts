import Poll from "../../smart-contract/artifacts/smart-contract/contracts/Poll.sol/Poll.json";

export const contractABI = Poll.abi;
export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

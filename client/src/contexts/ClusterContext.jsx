import React, { createContext, useState } from "react";
import { useAccount, useWriteContract } from "wagmi";

import { contractAbi, contractAddress } from "../../../common";

const shorten = (ethAddr) => ethAddr.slice(0, 15) + "..." + ethAddr.slice(-12);

export const ClusterContext = createContext({
  handleWriteToContract: () => {},
  handleClusterId: () => {},
  shorten,
  pollingInterval: 3000,
  address: "",
  clusterId: "",
});
export const ClusterProvider = ({ children }) => {
  const { writeContract } = useWriteContract();

  const [clusterId, setClusterId] = useState("");

  const handleClusterId = (handler) => {
    setClusterId(handler);
  };

  const { address } = useAccount();

  const handleWriteToContract = (functionName, args = [], enabled = false) => {
    writeContract({
      abi: contractAbi,
      address: contractAddress,
      functionName,
      args,
      account: address,
      query: { enabled },
    });
  };

  return (
    <ClusterContext.Provider
      value={{
        handleWriteToContract,
        address,
        shorten,
        handleClusterId,
        clusterId,
      }}
    >
      {children}
    </ClusterContext.Provider>
  );
};

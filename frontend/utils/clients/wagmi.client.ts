import { http, createConfig } from 'wagmi'
import { filecoin, filecoinCalibration, mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [filecoinCalibration, mainnet, sepolia],
  transports: {
    [filecoinCalibration.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

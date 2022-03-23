require('dotenv').config();
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: '.src/artifacts'
  },
  network: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/1E2Mu3SBsLPrCc_gOnS03w0ZRVkRSNyE',
      account: [`0x${process.env.Key}`]
    }
  }
};

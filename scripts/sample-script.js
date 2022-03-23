const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();

  console.log("deploying to:", deployer.address);

  const wavePortal = await hre.ethers.getContractFactory('WavePortal');
  const wave = await wavePortal.deploy();

  await wave.deployed();

    console.log('portal deployed to:', wave.address)
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

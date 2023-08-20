module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: './src/artifacts',
        contracts: './src/contracts',
    },
    networks: {
        hardhat: {
        },
        polygon: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/4p4dIgkSccNSIOpgg_8jnt8wGRsCBgJa",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};


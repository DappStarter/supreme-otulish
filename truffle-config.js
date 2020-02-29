require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note saddle modify hockey entire sure giggle'; 
let testAccounts = [
"0x3c0fed05b119ef2d94eb40d09bac37ba29cf0978666d602a2a31b645f48ab271",
"0x944528663a3fdbc56e1d98aa91d17a022d8b80ccf1ce5a3c55e7200bad571544",
"0xe21cfcf1a71f2f2bfb9f374a4bdb3e13a45253a7c9b899208bce74a046ca6f16",
"0x1b0b6ef0e6503db49b44b191e3e4e9ce1b85069fc686145d862b17ecf7739ad9",
"0xa5c582ac93c6161d04a0111ce424df9bb055c0da2baf740518fbea6e70bbabf1",
"0x9b3fc2d8fc22fecec90bb810f14bf562b7fb7e8be79784f3271e27cf29fb5492",
"0x8910fb08239cd0b314d556640eaed93b264869266bbe1f7c0d6559b9bf021dff",
"0x58ab04058dafaef56bca00f6f5a5d39abf942580a670d1ef9bd830befcd9da0e",
"0x51fad82a2c2bee0a9539142b69a4dc30a28b4ae64473805f8e38d7bef904bd96",
"0x3c860a33cab154fbefbfffe46e2dedd425f3b33359b484317d97d7e4d67bc239"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

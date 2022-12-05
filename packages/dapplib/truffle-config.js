require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million proof include clog oppose that'; 
let testAccounts = [
"0x03f0a1e6619a92b8990f62c75c0495e3f9ebb2d4ccb44542e5ba40f557c1f52f",
"0x1a8ec8b4645e4154abb0665d0128f3fc0ab68edba68da57fac80a1cd0c6c001d",
"0xcb59ab9f4faaceb23bbb0ff6ca4a9fa9b922a13951404d0b41fbef1c38e6442c",
"0x6b55c9674e40000c567633a76b2a72d4e32fa379038550ca85fbcfff8f08e0b7",
"0x143aa3913ecdb8ae26ed915aa58fdeb74ebc687540054e15260917f085279c00",
"0xbacdabdd9d9942a9e96959d0d103d4181ee66d6add59303cf971b0503a4fd291",
"0x422d9d5d321157449b7263455f3ae7c4470835c65919116149a8102c0dc02e36",
"0x5d1b31b15392fdcc2250d346e7ed8d10409e6e9b3fe693f80b5f8e3f6bf3a946",
"0x18fdf325a82eec65aed6c95ad5e4ef4dfd4b15f17009dcbb51552ec07c8825ae",
"0x50ba2b38896b679e9494417c92a862629c2fb8cc74d4f143537401c6d06ee93d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



import {HashConnect} from "hashconnect"

const connectToWallet = async () => {
    let hashconnect= new HashConnect()

    let appData = {
        name: "dApp Example",
        description: "An example hedera dApp",
        icon: "https://www.hashpack.app/img/logo.svg"
    }

    let initData = await hashconnect.init(appData)
    let privateKey = initData.privKey

    console.log("PrivateKey : " + privateKey)

    let state = await hashconnect.connect()
    let topic = state.topic

    let pairingString = hashconnect.generatePairingString(state, 'mainnet', false)

    hashconnect.findLocalWallets()
    if(hashconnect.findLocalWallets() === undefined)
    {
        alert("Please Install HashPack Wallet ")
    }

    hashconnect.connectToLocalWallet(pairingString)

}
export default connectToWallet
import { HashConnect } from 'hashconnect';

let hashconnect = new HashConnect();
const appMetadata = {
  ...,
  url: "https://royal-labs-portal.vercel.app/"
}
let initData = await this.hashconnect.init(appMetadata, "testnet", false);
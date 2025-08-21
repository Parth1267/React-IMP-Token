import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import copy from "copy-to-clipboard";
import {
  createWeb3Modal,
  defaultConfig,
  useDisconnect,
  useWeb3ModalAccount,
  useWeb3ModalError,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { useWeb3Modal } from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import settings from "./setting.json"
const projectId = "b401379b017324ea933758d00338f970";
// const projectId = "f2d37f8cd549d7eea639bfff4beff193";//main website
const chainid = 97;
// const chainid = 56;
// const mainnet = {
//     chainId: chainid,
//     name: "BSC Mainnet",
//     currency: "BNB",
//     explorerUrl: "https://bscscan.com",
//     rpcUrl: "https://bsc-dataseed.binance.org/",
// };
const mainnet = {
  chainId: chainid,
  name: "BSC test",
  currency: "BNB",
  explorerUrl: "https://testnet.bscscan.com",
  rpcUrl: "https://endpoints.omniatech.io/v1/bsc/testnet/public",
};


const metadata = {
  name: "frontend",
  description: "",
  url: "*", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: chainid,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: "...", // used for the Coinbase SDK
  }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});
export const ImpC = createContext();

const IMP = () => {
  var { address, chainId, isConnected } = useWeb3ModalAccount();
  // address = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
  const { disconnect } = useDisconnect()
  const { error } = useWeb3ModalError()


  const [account, setaccount] = useState(address);
  const [balance, setBalance] = useState(0);
  // const [settings, setsettings] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [rate, setrate] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [esigner, setesigner] = useState(null);
  const [tokenrate, settokenrate] = useState(0);
  const [blocks, setblocks] = useState(null);
  const [smuser, setsmuser] = useState(null);
  const [locked, setlocked] = useState(null);
  const [dbuser, setdbuser] = useState(null);
  const [stakcontract, setstakcontract] = useState(null);
  const [defRef, setdefRef] = useState(null);
  const { open } = useWeb3Modal();
  const { walletProvider } = useWeb3ModalProvider();

  const formatAddress = (address) => {
    if (address) {
      return address.substr(0, 6) + "..." + address.substr(-6, 6);
    }
  };
  const connectInjected = async () => {
    try {
      await open();
    } catch (ex) {
      console.log(ex);
    }
  };
  const toastError = (data) => {
    toast.error(data);
  };
  const toastSuccess = (data) => {
    toast.success(data);
  };
  const toastInfo = (data) => {
    toast(data, {
      // Custom Icon
      icon: "❕",
      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };

  const copyaddress = (address) => {
    copy(address);
    toastSuccess("Copied");
  };

  const getSetting = async () => {
    // console.log("link :- ", process.env.REACT_APP_BACKEND_URL, process.env.REACT_APP_SECRET_KEY);
    await axios
      .post(process.env.REACT_APP_BACKEND_URL, {
        method: "setting",
        submethod: "get",
        key: process.env.REACT_APP_SECRET_KEY,
      })
      .then((res) => {
        // var dedata = decryptData(res.data);
        if (res.data.error) {
          return "";
        }
        // setsettings(res.data.data);
      });
  };

  async function disconnectNow() {
    try {
      // deactivate();
      disconnect()
      localStorage.setItem("isconnected", false);
      setBalance(0);
    } catch (ex) {
      console.log(ex);
    }
  }

  const connectMetamask = async () => {
    try {
      open();
      localStorage.setItem("isconnected", true);
    } catch (error) {
      alert(error);
    }
  };

  const getudata = async (address) => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: "user",
      submethod: "get",
      key: process.env.REACT_APP_SECRET_KEY,
      address: address ? address.toLowerCase() : address,
    });
  };
  const getuserDB = async () => {
    var data = await getudata(account);
    if (data.data.error) {
      setdbuser(null)
      return "";
    }
    setdbuser(data.data.data);
  };

  useEffect(() => {
    setaccount(address)
    // }, [account]);
  }, [address]);
  useEffect(() => {
    getuserDB();
  }, [account]);
  // }, [address]);
  useEffect(() => {
    // getSetting();
  }, []);

  const getSigner = async () => {
    if (!isConnected) return;

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    const signer = await ethersProvider.getSigner();
    setesigner(signer)
  }
  const getsmcs = async () => {
    console.log("seee", settings);
    if (!isConnected || !settings.token || esigner === null) return;

    let contract = new ethers.Contract(
      settings.token,
      settings.token_abi,
      esigner
    );
    let maincontract = new ethers.Contract(
      settings.contract,
      settings.contract_abi,
      esigner
    );
    setstakcontract(maincontract);
    var balance = await contract.balanceOf(account);
    setBalance(Number(ethers.utils.formatUnits(balance, 18)).toFixed(2));
    var userdesc = await maincontract.userdesc(account);

    var defreff = await maincontract.defaultaddress();
    setdefRef(defreff)
    setsmuser({
      ref_address: userdesc._ref,
      address: userdesc._mem,
      _amt: Number(ethers.utils.formatUnits(userdesc._amt, 18)).toFixed(2),
      _locked: Number(ethers.utils.formatUnits(userdesc._locked, 18)).toFixed(2),
      _claimed: Number(ethers.utils.formatUnits(userdesc._claimed, 18)).toFixed(2),
      _referalreward: Number(ethers.utils.formatUnits(userdesc._referalreward, 18)).toFixed(2),
      _lastclaim: Number(userdesc._lastclaim),
      _taskreward: Number(ethers.utils.formatUnits(userdesc._taskreward, 18)).toFixed(2),
      _status: Number(ethers.utils.formatUnits(userdesc._status, 18)).toFixed(2),
      _date: Number(userdesc._date)
    });
    // var getrate = await maincontract.bnbrate();
    var gettokenrate = await maincontract.tokenrate();
    setrate(Number(ethers.utils.formatUnits(gettokenrate, 18)).toFixed(4));
    var laststakes = await maincontract.laststake(account);
    var lockeddesc = await maincontract.lockeddesc(laststakes);
    var locked = {
      _amt: Number(ethers.utils.formatUnits(lockeddesc._amt, 18)).toFixed(2),
      _rate: Number(ethers.utils.formatUnits(lockeddesc._rate, 18)).toFixed(2),
      _sdate: Number(lockeddesc._sdate),
      _edate: Number(lockeddesc._edate),
      _token: lockeddesc._token,
      _lid: lockeddesc._lid,
    }
    setlocked(locked)
    console.log("laststakes", locked);

  };
  const getEthersData = async () => {
    if (!settings.contract || !ethers) {
      return
    }
    const ethersProvider = new ethers.providers.JsonRpcProvider(mainnet.rpcUrl);
    const contract = new ethers.Contract(
      settings.contract,
      settings.contract_abi,
      ethersProvider
    );
    var gettokenrate = await contract.tokenrate();
    console.log("rate", ethers.utils.formatUnits(gettokenrate, 18));
    // setrate(1);
    setrate(Number(ethers.utils.formatUnits(gettokenrate, 18)).toFixed(4));
  }
  function formatDate(timestamp) {
    const date = new Date(timestamp);

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // Format the date as DD-MM-YYYY
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }
  function formatDateTime(timestamp) {
    const date = new Date(timestamp);

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // Extract hours, minutes, and seconds
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date and time as DD-MM-YYYY HH:MM:SS
    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
  }

  useEffect(() => {
    getEthersData();
  }, [settings, ethers]);
  useEffect(() => {
    getsmcs();

  }, [isConnected, account, walletProvider, settings, esigner]);
  useEffect(() => {
    getSigner();
  }, [isConnected, walletProvider]);
  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#ffa518",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <ImpC.Provider
        value={{
          settings: settings,
          library: ethers,
          balance,
          userdata,
          dbuser,
          getuserDB,
          web3,
          blocks,
          esigner,
          tokenrate,
          smuser,
          account: account ? account.toLowerCase() : account,
          connectInjected,
          disconnectNow,
          connectMetamask,
          formatAddress,
          toastError,
          toastSuccess,
          getudata,
          toastInfo, defRef,
          getsmcs,
          ethers,
          getEthersData,
          rate,
          copyaddress,
          stakcontract,
          setaccount,
          setlocked,
          locked,
          formatDate, formatDateTime
        }}
      >
        <App />
      </ImpC.Provider>
    </>
  );
}

export default IMP;

import axios from "axios";
import { createContext,useContext, useEffect,useState,useReducer} from "react";


const CoinListContext =createContext();
const CoinListProvider =({children})=>{
    const [coinList,setCoinList]=useState([]); 
    const[isLoading,setIsLoading]=useState(false);  
    useEffect(()=> {
        (async ()=>{
            try{
                  setIsLoading(true);
                  const {data}=await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d");
                  setIsLoading(false);
                  setCoinList(data);
            }
            catch(err)
            {
                console.error(err,"something wong,can't get videos");
            }
               
        })();
    },[])

    return <CoinListContext.Provider value={{coinList,setCoinList,isLoading,setIsLoading}}>{children}</CoinListContext.Provider>
}

const useCoinList=()=>useContext(CoinListContext);
export {useCoinList,CoinListProvider};
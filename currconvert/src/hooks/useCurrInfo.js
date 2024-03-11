import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setdata]=useState({});
    useEffect(()=>{
        const h00k=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(h00k)
        .then((res)=>{
            res.json();
        })
        .then((res)=>{
            setdata(res[currency]);
            console.log(data);
        })
        
    },[currency]);
}
//custom hook
export default useCurrencyInfo;
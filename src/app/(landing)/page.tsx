import Application from "@/components/landing/Application";
import CurrentPriceOfCurrency from "@/components/landing/CurrentPriceOfCurrency";
import FluctuationsInDigitalCurrency from "@/components/landing/FluctuationsInDigitalCurrency";
import Introduction from "@/components/landing/Introduction";
import InviteFriends from "@/components/landing/InviteFriends";
import Options from "@/components/landing/Options";
import Property from "@/components/landing/Property";
import Trades from "@/components/landing/Trades";
import { API_KEY, BASE_URL_BITPIN } from "@/helpers/constans/envirement";
import { ResponseCurrency } from "@/types/Home";
const getData = async ()=>{
 const response = await fetch(`${BASE_URL_BITPIN}/mkt/currencies/`,{headers:{Authorization:`Bearer ${API_KEY}`}})
 const result = await response.json()
 return result
}
export default async function Home() {
  const data:ResponseCurrency = await getData()
  return (
    <>
      <main className="">
        <Introduction />
        <div className="bg-white dark:bg-black px-5 lg:px-20 pb-20">
          <FluctuationsInDigitalCurrency currency={data.results}/>
          <CurrentPriceOfCurrency currency={data.results} />
          <Property />
          <Options />
          {/* <Application /> */}
        </div>
        <InviteFriends />
        {/* <Trades /> */}
      </main>
    </>
  );
}

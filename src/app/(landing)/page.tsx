import CurrentPriceOfCurrency from "@/components/landing/CurrentPriceOfCurrency";
import FluctuationsInDigitalCurrency from "@/components/landing/FluctuationsInDigitalCurrency";
import Introduction from "@/components/landing/Introduction";
import InviteFriends from "@/components/landing/InviteFriends";
import Options from "@/components/landing/Options";
import Property from "@/components/landing/Property";
import {  BASE_API_MAIN } from "@/helpers/constans/envirement";
import { ResponseCurrency } from "@/types/Home";
const getData = async ()=>{
 const response = await fetch(`${BASE_API_MAIN}/currencies/?for_dashboard=true`)
 const result = await response.json()
 return result
}
export default async function Home() {
  const data:any = await getData()
  return (
    <>
      <main className="">
        <Introduction />
        <div className="bg-white dark:bg-black px-5 lg:px-20 pb-20">
          <FluctuationsInDigitalCurrency currency={data.objects}/>
          <CurrentPriceOfCurrency currency={data.objects} />
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

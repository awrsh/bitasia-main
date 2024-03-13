import Application from "@/components/landing/Application";
import CurrentPriceOfCurrency from "@/components/landing/CurrentPriceOfCurrency";
import FluctuationsInDigitalCurrency from "@/components/landing/FluctuationsInDigitalCurrency";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Introduction from "@/components/landing/Introduction";
import InviteFriends from "@/components/landing/InviteFriends";
import Options from "@/components/landing/Options";
import Property from "@/components/landing/Property";
import Trades from "@/components/landing/Trades";

export default function Home() {
  return (
    <>
      <main className="">
        <Introduction />
        <div className="bg-white dark:bg-[#0b1520] px-5 lg:px-20 pb-20">
          <FluctuationsInDigitalCurrency />
          <CurrentPriceOfCurrency />
          <Property />
          <Options />
          <Application />
        </div>
        <InviteFriends />
        <Trades />
      </main>
      <Footer />
    </>
  );
}

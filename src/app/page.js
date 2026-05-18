import Image from "next/image";
import Banner from "./components/Banner";
import ExtraSection from "./components/ExtraSection";
import ExtraSection2 from "./components/ExtraSection2";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ExtraSection></ExtraSection>
      <ExtraSection2></ExtraSection2>
    </div>
  );
}

// import Header from "@/components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          mainHeader={'Our Stories'}
          subHeader={`About Us`}
        />
      </section>
    </>
  );
}

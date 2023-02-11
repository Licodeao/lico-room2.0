import Banner from "components/Banner";
import Header from "components/Header";
import SectionHeader from "components/sectionHeader";
import Head from "next/head";
import { FC, ReactNode } from "react";
import axios from "axios";
import SmallCard from "components/SmallCard";
import MediumCard from "components/MediumCard";
import LargeCard from "components/LargeCard";
import Footer from "components/Footer";

interface IExplore {
  img: string;
  location: string;
  distance: string;
}

interface ICard {
  img: string;
  title: string;
}

interface IProps {
  children?: ReactNode;
  exploreData: IExplore[];
  cardsData: ICard[];
}

const Home: FC<IProps> = (props) => {
  const { exploreData, cardsData } = props;
  return (
    <div>
      <Head>
        <title>LicoRoom2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <SectionHeader title="Explore Nearby" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => {
              return (
                <SmallCard
                  key={index}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>

        <section>
          <div className="py-8">
            <SectionHeader title="Live Anywhere" />
          </div>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, index) => {
              return <MediumCard key={index} img={img} title={title} />;
            })}
          </div>
        </section>

        <section className="relative py-16 cursor-pointer">
          <LargeCard
            title="The Greatest Outdoors"
            description="Wishlists curated by Licodeao."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await axios.get("https://www.jsonkeeper.com/b/4G1G");
  const cardsData = await axios.get("https://www.jsonkeeper.com/b/VHHT");
  return {
    props: {
      exploreData: exploreData.data,
      cardsData: cardsData.data,
    },
  };
}

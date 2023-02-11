import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import axios from "axios";
import InfoCard from "components/InfoCard";
import MapBox from "components/Map";

interface IProps {
  children?: ReactNode;
  searchResults: any[];
}

const SearchPage: FC<IProps> = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatStartDate = format(new Date(startDate as string), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate as string), "dd MMMM yy");
  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Type of Place
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Price
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              Rooms and Beds
            </p>
            <p className="button hover:shadow-lg active:scale-95 active:bg-gray-100">
              More filters
            </p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map((item, index) => {
              return <InfoCard key={index} itemData={item} />;
            })}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default memo(SearchPage);
SearchPage.displayName = "SearchPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchResults = await axios.get("https://www.jsonkeeper.com/b/5NPS");
  return {
    props: {
      searchResults: searchResults.data,
    },
  };
};

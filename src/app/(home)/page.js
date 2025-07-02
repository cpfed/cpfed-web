import HomePage from "@/components/HomePage";
import InfoPage from "@/components/InfoPage";
import ContestsPage from "@/components/ContestsPage";
import NewsPage from "@/components/NewsPage";
import FaqPage from "@/components/FaqPage";
import SponsorsPage from "@/components/SponsorsPage";

export default function Home() {
  return (
      <div>
        <HomePage />
        <SponsorsPage />
        <InfoPage />
        <ContestsPage />
        <NewsPage />
        <FaqPage />
      </div>
  );
}
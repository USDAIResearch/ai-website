import Layout from "@/components/commons/Layout";
import Body from "@/components/home/Body";
import BooksComponent from "@/components/home/BooksComponent";
import MessageThemeComponent from "@/components/home/MessageThemeComponent";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { db } from "@/lib/helpers/db";

export const revalidate = 0;
export default async function HomePage() {
  const researchThemes = []

  const researchKeywords = await db.keyword.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  const contentFeedData = await db.researchPaper.findMany({
    where: {
      status: "active",
    },
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      feedbacks: {
        orderBy: {
          createdAt: "desc",
        },
        where: {
          status: "active",
        },
      },
    },
    take: 4,
  });

  return (
    <Layout>
      <Navbar />
      <Body
        researchThemes={researchThemes}
        researchKeywords={researchKeywords}
        contentFeedData={contentFeedData}
      />
      <MessageThemeComponent researchThemes={researchThemes} />
      <BooksComponent />
      <Footer />
    </Layout>
  );
}

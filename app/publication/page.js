import Layout from "@/components/commons/Layout";
import Body from "@/components/home/Body";
import Footer from "@/components/home/Footer";
import LoadingBody from "@/components/home/LoadingBody";
import Navbar from "@/components/home/Navbar";
import { db } from "@/lib/helpers/db";
import { DEFAULT_PAGE_SIZE } from "@/utils/constants";
import { Suspense } from "react";

export const revalidate = 0;
export default async function PublicationsPgae() {
  const researchThemes = await db.theme.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

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
    take: DEFAULT_PAGE_SIZE,
  });

  return (
    <Layout>
      <Navbar />
      <Suspense fallback={<LoadingBody />}>
        <Body
          isHomepage={false}
          researchThemes={researchThemes}
          researchKeywords={researchKeywords}
          contentFeedData={contentFeedData}
        />
      </Suspense>
      <Footer />
    </Layout>
  );
}

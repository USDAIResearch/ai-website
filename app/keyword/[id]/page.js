import { fieldBasedResearchPaper } from "@/app/actions/home/action";
import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Body from "@/components/keyword/Body";
import { db } from "@/lib/helpers/db";
import { notFound } from "next/navigation";
export default async function PaperDetail({ params }) {
  const fieldId = params["id"];
  const allKeywordList = await db.keyword.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  const selectedField = allKeywordList.find((item) => item.id == fieldId);

  if(!selectedField){
    notFound();
  }

  const feedData = await fieldBasedResearchPaper(selectedField, "keywords");
  return (
    <Layout>
      <Navbar />
      <Body selectedField={selectedField} feedData={feedData} />
      <Footer />
    </Layout>
  );
}

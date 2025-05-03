import { fieldBasedResearchPaper } from "@/app/actions/home/action";
import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Body from "@/components/theme/Body";
import { db } from "@/lib/helpers/db";
import { notFound } from "next/navigation";
export default async function PaperDetail({ params }) {
  const fieldId = params["id"];
  const allThemeList = await db.theme.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  const selectedField = allThemeList.find((item) => item.id == fieldId);

  if(!selectedField){
    notFound();
  }

  const feedData = await fieldBasedResearchPaper(selectedField, "themes");
  return (
    <Layout>
      <Navbar />
      <Body selectedField={selectedField} feedData={feedData} />
      <Footer />
    </Layout>
  );
}

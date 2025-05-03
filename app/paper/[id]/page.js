import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Body from "@/components/paper/Body";
export default function PaperDetail({ params }) {
  const paperId = params["id"];
  return (
    <Layout>
      <Navbar />
      <Body paperId={paperId}/>
      <Footer />
    </Layout>
  );
}

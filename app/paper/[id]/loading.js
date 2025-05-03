import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import LoadingBody from "@/components/paper/LoadingBody";

export default function Loading() {
  return (
    <Layout>
      <Navbar />
      <LoadingBody />
      <Footer />
    </Layout>
  );
}

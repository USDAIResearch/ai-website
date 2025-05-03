import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export default function NotFound() {
  return (
    <Layout>
      <Navbar />
      <h1 className="text-5xl text-center my-[10%]"><span className="text-red-500">404 !</span> Page Not Found</h1>
      <Footer />
    </Layout>
  );
}

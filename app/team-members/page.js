import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Body from "@/components/team-members/Body";

export default function TeamMembersPage() {
  return (
    <Layout>
      <Navbar />
      <Body />
      <Footer />
    </Layout>
  );
}

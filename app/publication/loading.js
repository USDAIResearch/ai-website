import Layout from "@/components/commons/Layout";
import Footer from "@/components/home/Footer";
import LoadingBody from "@/components/home/LoadingBody";
import Navbar from "@/components/home/Navbar";
import React from "react";

const Loading = () => {
  return (
    <Layout>
      <Navbar />
      <LoadingBody />
      <Footer />
    </Layout>
  );
};

export default Loading;

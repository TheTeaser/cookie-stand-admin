import Head from "next/head";
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from "@/components/Footer";
import ReportTable from "@/components/ReportTable";

export default function CookieStandAdmin() {

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <Main />
      <ReportTable />
      <Footer />
      
    </>
  )

}
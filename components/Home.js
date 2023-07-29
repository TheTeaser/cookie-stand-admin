import Head from "next/head";
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from "@/components/Footer";
import ReportTable from "@/components/ReportTable";
import { useState } from "react";

export default function Home (){
    const [form, setForm] = useState([])

    return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <Main setForm={setForm} form={form} />
      {form.length !== 0 ? (
        <ReportTable form={form} setForm={setForm} />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-xl">Report table coming soon ...</h2>
        </div>
      )}
      
      <Footer form={form.length} />
    </>
  );
}

import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout";
import WelcomeContent from "@/components/WelcomeContent";
import { getSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/weather");
      } else {
        console.log("no session");
      }
    });
  }, [router]);
  return (
    <>
      <Layout>
        <WelcomeContent />
        <AuthForm />
      </Layout>
    </>
  );
}

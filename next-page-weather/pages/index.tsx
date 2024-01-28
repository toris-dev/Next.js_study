import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout";
import WelcomeContent from "@/components/WelcomeContent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <WelcomeContent />
        <AuthForm />
      </Layout>
    </>
  );
}

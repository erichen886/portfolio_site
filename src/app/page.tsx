import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { Metadata } from "next";
//TODO: add profile pic generate something from AI
// import profilePic from "../../public/images/profile/"

export const metadata: Metadata = {
  title: "Home",
  description: "Write some description",
};

const Home = () => {
  return (
    <>
      {/* TODO: this stuff is now in the metadata import in nextjs */}
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head> */}
      <main className="flex items-center text-dark w-full self-stretch grow ">
        <Layout className="flex bg-light p-32 self-stretch">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex p-2 justify-center">
              Pic Here
              {/* TODO:Uncomment when generate profile pic */}
              {/* <Image src={profilePic} alt="Eric Chen" className="w-full h-auto" /> */}
            </div>
            <div className="w-1/2 flex flex-col items-center self-center p-2">
              <AnimatedText
                text="Some slogan here"
                className="!text-6xl !text-left p-2"
              />
              <p className="my-4 text-base font-medium self-start p-2">
                Mini Bio here, but for now here are many words to kind of fill
                this out. See how it looks in a bit.
              </p>
              <div className="flex items-center self-start mt-2 p-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  {/* TODO: add link arrow icon */}
                  <LinkArrow className={"w-6 ml-2"} />
                </Link>
                {/* TODO: add resume pdf to public folder */}
                <Link
                  href="mailto:erichen886@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default Home;

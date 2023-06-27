import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
//TODO: add profile pic generate something from AI
// import profilePic from "../../public/images/profile/"

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              {/* TODO:Uncomment when generate profile pic */}
              {/* <Image src={profilePic} alt="Eric Chen" className="w-full h-auto" /> */}
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Some slogan here"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Mini Bio here, but for now here are many words to kind of fill
                this out. We'll see how it looks in a bit.
              </p>
              <div></div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;

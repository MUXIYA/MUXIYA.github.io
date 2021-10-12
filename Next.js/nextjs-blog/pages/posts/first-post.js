import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Divs from "../../components/divs";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Divs className={"success"} children={"登录"} type={"1"}></Divs>
      <Divs className={"error"} children={"错误-----"} type={"2"}></Divs>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

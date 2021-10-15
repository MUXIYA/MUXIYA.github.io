import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.poem_wrap}>
        <div
          className={`${utilStyles.poem_border} ${utilStyles.poem_left}`}
        ></div>
        <div
          className={`${utilStyles.poem_border} ${utilStyles.poem_right}`}
        ></div>
        <h1>念两句诗</h1>
        <div className={utilStyles.poem_sentence}>
           山有木兮木有枝。心悦君兮君不知。
        </div>
        <div className={utilStyles.poem_info}>
          【春秋】《越人歌》
        </div>
      </div>
      <section className={utilStyles.headingMd}>
        <p>这里可以填充个人介绍</p>
        <Link href="/posts/first-post">
          <a> 第一篇文章</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>内容</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                《{title}》
                  {/* {id} */}
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <script
        type="text/javascript"
        src="https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js"
      ></script>
    </Layout>
  );
}

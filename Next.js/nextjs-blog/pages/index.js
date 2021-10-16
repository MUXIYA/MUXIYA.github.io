import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { createFromIconfontCN } from "@ant-design/icons";
import Date from "../components/date";

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2871124_r7l2yqxzuje.js", // 在 iconfont.cn 上生成
});

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
      {/* 头部 */}
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
        <div className={utilStyles.poem_info}>【春秋】《越人歌》</div>
      </div>
      {/* 简介 */}
      {/* <section className={utilStyles.headingMd}>
        <p>这里可以填充个人介绍</p>
        <Link href="/posts/first-post">
          <a> 查看更多</a>
        </Link>
      </section> */}
      {/* 内容 */}
      <section className={utilStyles.headingMd}>
        {/* <h2 className={utilStyles.headingLg}>内容</h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div>
                <MyIcon className={utilStyles.svg} type="icon-food-strawberry" />
                <Link href={`/posts/${id}`} className={utilStyles.title_link}>
                  <a className={utilStyles.title_a}>{title}</a>
                </Link>
              </div>
              <br />
              <div>摘要</div>
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

import Head from "next/head";

const HeadInfo = ({title, keyword, contents}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={contents} />
      <meta name="description" keyword={keyword} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog powerd by Next js',
  contents: 'practice next js'
}


export default HeadInfo;

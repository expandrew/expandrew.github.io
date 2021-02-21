import Head from 'next/head';

export const Meta = ({
  title,
  description = 'Andrew M Westling is a software engineer in New York City.',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}andrewwestling.com</title>
        <meta name="description" content={description}></meta>
      </Head>
      {children}
    </>
  );
};

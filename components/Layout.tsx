import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

import { PageMeta } from '../types';

interface Props extends PropsWithChildren {
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'The Blockchain Company.IO - Running businesses optimally with digital transformation first development strategies using AI, blockchain, and the latest traditional computing technologies.', 
    description: 'Running optimally? The digital transformation is here and rapidly changing the business landscape. Contact us to schedule a free consultation to find out how your business can benefit.',
    cardImage: '/og.png',
    googleAdsenseAccount: 'ca-pub-1991072520590519',
    keywords: 'blockchain, web3, web developer near me, SEO score, how to increase your SEO score',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://blockchain-company.io/${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blockchaincoio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <meta name="google-adsense-account" content={meta.googleAdsenseAccount} />
        
   <Script id="Adsense-id" data-ad-client="ca-pub-1991072520590519" strategy="worker" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1991072520590519"
     crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <main id="skip">{children}</main>
      <Footer />
    </>
  );
}

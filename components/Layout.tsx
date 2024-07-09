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
    title: 'The Blockchain Company.IO', 
    description: 'Get your startups MVP running in days with Onyx, my free MVP template!'
    referrer: 'origin-when-cross-origin',
    creator: 'Robert Mourey Jr.',
    publisher: 'The Blockchain Company.IO LLC',
    cardImage: '/og.png',
    googleAdsenseAccount: 'ca-pub-1991072520590519',
    keywords: 'blockchain, how can blockchain help my business, SEO, SEO score, blockchain consultant, BitCoin, NFT, NFTs, digital transformation first development, web3, web developer near me, improve my SEO score, how to increase your SEO score, AI developer near me, improve business SEO, optimize business SEO, blocksquawk, blockchain developer near me, optimize SEO rankings, optimize my business, ChatGPT developer, webflow developer, nextjs developer, quantum computing, digital transformation, IPFS, Ethereum, Dapps, DAO, Cardano, can ai help my business, SEO solutions, SMB AI powerhouse, CodersRank, github, blockchain newsletter',
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
        <meta name="keywords" content={meta.keywords} />
   <Script id="Adsense-id" data-ad-client="ca-pub-1991072520590519" strategy="worker" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1991072520590519"
     crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <main id="skip">{children}</main>
      <Footer />
    </>
  );
}

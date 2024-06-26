import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

import s from './Footer.module.css';

export default function Footer() {
  return (
    <>
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex flex-initial items-center font-bold md:mr-24"
          >
            <span className="rounded-full border border-zinc-700 mr-2">
              <Logo />
            </span>
            <span>The Blockchain Company.IO</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="https://profile.codersrank.io/user/rmourey26"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                CodersRank Profile
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="mailto:inquire@blockchain-company.io"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Contact
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="https://mailchi.mp/blockchain-company/smb-ai-powerhouse"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Free AI Tutorial
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
            <a
              aria-label="Github Repository"
              href="https://github.com/the-blockchain-company"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-zinc-900">
        <div>
          <span>&copy; 2024 The Blockchain Company.IO LLC All rights reserved.</span>
        </div>
        <div className="flex items-center"> 
          <span className="text-white">Make your SMB an AI Powerhouse! </span>
          <a href="https://mailchi.mp/blockchain-company/smb-ai-powerhouse" aria-label="blockchain-company.io Link">
            <img
              src="/bcc-text-logo.svg"
              alt="The Blockchain Company.IO Logo"
              className="inline-block h-6 ml-4 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}

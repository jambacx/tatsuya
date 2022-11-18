import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BlogPostCard from '../components/BlogPostCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      {/* <Container> */}
      <div className="flex flex-col justify-center items-start max-w-2xl mt-12 border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Tatsuya Hamada
            </h1>
            <h2 className="mt-7 font-semibold  text-gray-700 dark:text-gray-200 mb-4">
              - KDDI Corporation
            </h2>
            <p className="dark:text-gray-200 mb-4">
              Deputy Chief Operating Officer <br></br>
              Global Consumer Business<br></br>
              Development Division <br></br>
              Global Consumer Business Sector
            </p>
            <h2 className="mt-4 font-semibold text-gray-700 dark:text-gray-200 mb-4">
              - Mobicom Corporation LLC
            </h2>
            <p className="dark:text-gray-200 mb-11">
              Chairman of the Board of Directors
            </p>
          </div>
          <div className="w-[100px] sm:w-[500px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt=""
              height={300}
              width={300}
              src="/avatar.png"
              sizes="60vw"
              priority
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h5 className="font-bold text-1xl md:text-2xl tracking-tight mb-6 mt-4 text-black dark:text-white">
          Business name card
        </h5>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]" />
        </div>
        <span className="h-16" />
        <Link
          href="https://instagram.com/tatsu_hamada?igshid=NDk5N2NlZjQ="
          className="text-gray-900 my-3 dark:text-gray-100 underline"
        >
          • Instagram
        </Link>
        <Link
          href="https://www.linkedin.com/in/tatsuya-hamada-16859a4a/"
          className="text-gray-900 my-3 dark:text-gray-100 underline"
        >
          • Linkedin
        </Link>
        <Link
          href="https://www.facebook.com/ukth16"
          className="text-gray-900 my-3 dark:text-gray-100 underline"
        >
          • Facebook
        </Link>
      </div>
      {/* </Container> */}
    </Suspense>
  );
}

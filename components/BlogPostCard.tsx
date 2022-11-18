import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import Image from 'next/image';

export default function BlogPostCard({ gradient }) {
  return (
    <div
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <Image
            src="/photo1.png"
            alt="Photo"
            width={600}
            height={750}
            priority
            className="next-image"
          />
        </div>
      </div>
    </div>
  );
}

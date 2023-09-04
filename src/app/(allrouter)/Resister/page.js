import React from 'react';
import { Inter, Roboto_Mono } from 'next/font/google';

// Load fonts and assign them to constants
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

const Page = () => {
  return (
    <div className={roboto_mono.className}>
      Register
    </div>
  );
};

export default Page;

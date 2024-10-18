'use client';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      {value}
      <br />
      <button onClick={() => setValue(value + 1)}>click</button>
      <br />
      <button onClick={() => setValue(0)}>reset</button>
      <Navbar />
      <Hero />
      <Footer />
      {createPortal(<p>ciao</p>, document.body)}
      <p>ciao2</p>
    </>
  );
}

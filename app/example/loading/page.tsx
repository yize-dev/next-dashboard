'use client'

import Router from 'next/router';
import { useState, useEffect } from 'react';
import Loading from 'react-loading';
import LoadingOne from '@/components/loading-screen/loading-one/loading';
import LoadingTwo from '@/components/loading-screen/loading-two/loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
      setIsLoading(false);
  }, []);

  return (
    <>
        <LoadingTwo/>
    </>
  );
}
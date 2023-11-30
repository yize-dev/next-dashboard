'use client'

import { Suspense } from 'react';
import { LazyMotion, domMax, m } from 'framer-motion';

// ----------------------------------------------------------------------


type Props = {
  children: React.ReactNode;
};

function MotionLazy({ children }: Props) {
  return (
    <LazyMotion strict features={domMax}>
    <m.div>
      <Suspense >
      {children}
      </Suspense>
    </m.div>
    </LazyMotion>
  );
} 

export default MotionLazy;

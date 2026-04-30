'use client';

import React from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';

export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <MotionConfig reducedMotion="user">
            <LazyMotion features={domAnimation} strict={false}>
                {children}
            </LazyMotion>
        </MotionConfig>
    );
}

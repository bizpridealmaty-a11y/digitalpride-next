'use client';

import React, { useState, Children, useRef, useLayoutEffect, type HTMLAttributes, type ReactNode } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

/**
 * Stepper — переключение этапов (адаптация ReactBits, ребрендинг под DigitalPride:
 * красные индикаторы/линии/кнопка, тёмное стекло). Импорт переведён на framer-motion.
 */
interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    backButtonText?: string;
    nextButtonText?: string;
    completeButtonText?: string;
    disableStepIndicators?: boolean;
}

const ACCENT = '#E31C24';

export default function Stepper({
    children,
    initialStep = 1,
    onStepChange = () => { },
    onFinalStepCompleted = () => { },
    stepCircleContainerClassName = '',
    stepContainerClassName = '',
    contentClassName = '',
    footerClassName = '',
    backButtonProps = {},
    nextButtonProps = {},
    backButtonText = 'Назад',
    nextButtonText = 'Далее',
    completeButtonText = 'Готово',
    disableStepIndicators = false,
    ...rest
}: StepperProps) {
    const [currentStep, setCurrentStep] = useState<number>(initialStep);
    const [direction, setDirection] = useState<number>(0);
    const stepsArray = Children.toArray(children);
    const totalSteps = stepsArray.length;
    const isCompleted = currentStep > totalSteps;
    const isLastStep = currentStep === totalSteps;

    const updateStep = (newStep: number) => {
        setCurrentStep(newStep);
        if (newStep > totalSteps) onFinalStepCompleted();
        else onStepChange(newStep);
    };

    const handleBack = () => {
        if (currentStep > 1) { setDirection(-1); updateStep(currentStep - 1); }
    };
    const handleNext = () => {
        if (!isLastStep) { setDirection(1); updateStep(currentStep + 1); }
    };
    const handleComplete = () => { setDirection(1); updateStep(totalSteps + 1); };

    return (
        <div className="flex w-full flex-col items-center" {...rest}>
            <div
                className={`w-full rounded-3xl ${stepCircleContainerClassName}`}
                style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 30px 70px -30px rgba(0,0,0,0.7)',
                }}
            >
                <div className={`${stepContainerClassName} flex w-full items-center p-6 md:p-8`}>
                    {stepsArray.map((_, index) => {
                        const stepNumber = index + 1;
                        const isNotLastStep = index < totalSteps - 1;
                        return (
                            <React.Fragment key={stepNumber}>
                                <StepIndicator
                                    step={stepNumber}
                                    disableStepIndicators={disableStepIndicators}
                                    currentStep={currentStep}
                                    onClickStep={(clicked) => { setDirection(clicked > currentStep ? 1 : -1); updateStep(clicked); }}
                                />
                                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
                            </React.Fragment>
                        );
                    })}
                </div>

                <StepContentWrapper
                    isCompleted={isCompleted}
                    currentStep={currentStep}
                    direction={direction}
                    className={`px-6 md:px-8 ${contentClassName}`}
                >
                    {stepsArray[currentStep - 1]}
                </StepContentWrapper>

                {!isCompleted && (
                    <div className={`px-6 md:px-8 pb-7 ${footerClassName}`}>
                        <div className={`mt-6 flex ${currentStep !== 1 ? 'justify-between' : 'justify-end'}`}>
                            {currentStep !== 1 && (
                                <button
                                    onClick={handleBack}
                                    className="rounded-lg px-4 py-2 font-semibold text-sm text-white/55 transition hover:text-white"
                                    {...backButtonProps}
                                >
                                    {backButtonText}
                                </button>
                            )}
                            <button
                                onClick={isLastStep ? handleComplete : handleNext}
                                className="flex items-center gap-2 rounded-full py-2.5 px-6 font-bold text-sm text-white transition hover:scale-[1.04] active:scale-95"
                                style={{ backgroundColor: ACCENT, boxShadow: '0 10px 30px -8px rgba(227,28,36,0.6)' }}
                                {...nextButtonProps}
                            >
                                {isLastStep ? completeButtonText : nextButtonText}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

interface StepContentWrapperProps {
    isCompleted: boolean;
    currentStep: number;
    direction: number;
    children: ReactNode;
    className?: string;
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className = '' }: StepContentWrapperProps) {
    const [parentHeight, setParentHeight] = useState<number>(0);
    return (
        <motion.div
            style={{ position: 'relative', overflow: 'hidden' }}
            animate={{ height: isCompleted ? 0 : parentHeight }}
            transition={{ type: 'spring', duration: 0.4 }}
            className={className}
        >
            <AnimatePresence initial={false} mode="sync" custom={direction}>
                {!isCompleted && (
                    <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
                        {children}
                    </SlideTransition>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

interface SlideTransitionProps {
    children: ReactNode;
    direction: number;
    onHeightReady: (height: number) => void;
}

function SlideTransition({ children, direction, onHeightReady }: SlideTransitionProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
    }, [children, onHeightReady]);
    return (
        <motion.div
            ref={containerRef}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
        >
            {children}
        </motion.div>
    );
}

const stepVariants: Variants = {
    enter: (dir: number) => ({ x: dir >= 0 ? '-100%' : '100%', opacity: 0 }),
    center: { x: '0%', opacity: 1 },
    exit: (dir: number) => ({ x: dir >= 0 ? '50%' : '-50%', opacity: 0 }),
};

export function Step({ children }: { children: ReactNode }) {
    return <div className="py-2">{children}</div>;
}

interface StepIndicatorProps {
    step: number;
    currentStep: number;
    onClickStep: (clicked: number) => void;
    disableStepIndicators?: boolean;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators = false }: StepIndicatorProps) {
    const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';
    const handleClick = () => { if (step !== currentStep && !disableStepIndicators) onClickStep(step); };
    return (
        <motion.div
            onClick={handleClick}
            className={`relative outline-none focus:outline-none ${disableStepIndicators ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
            animate={status}
            initial={false}
        >
            <motion.div
                variants={{
                    inactive: { scale: 1, backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' },
                    active: { scale: 1.05, backgroundColor: ACCENT, color: '#fff' },
                    complete: { scale: 1, backgroundColor: ACCENT, color: '#fff' },
                }}
                transition={{ duration: 0.3 }}
                className="flex h-10 w-10 items-center justify-center rounded-full font-extrabold text-sm"
                style={{ border: '1.5px solid rgba(255,90,77,0.35)' }}
            >
                {status === 'complete' ? (
                    <CheckIcon className="h-5 w-5 text-white" />
                ) : (
                    <span>{String(step).padStart(2, '0')}</span>
                )}
            </motion.div>
        </motion.div>
    );
}

function StepConnector({ isComplete }: { isComplete: boolean }) {
    const lineVariants: Variants = {
        incomplete: { width: 0 },
        complete: { width: '100%' },
    };
    return (
        <div className="relative mx-1.5 h-[3px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div
                className="absolute left-0 top-0 h-full rounded"
                style={{ background: `linear-gradient(90deg, ${ACCENT}, #FF5A4D)` }}
                variants={lineVariants}
                initial={false}
                animate={isComplete ? 'complete' : 'incomplete'}
                transition={{ duration: 0.4 }}
            />
        </div>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}

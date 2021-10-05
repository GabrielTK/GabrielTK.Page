import { motion, Transition, useAnimation, Variant } from "framer-motion";
import { ReactChild, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const FadeInAnimationData: AnimationData = {
    onScreen: {
        scale: 1, opacity: 1
    },
    offScreen: {
        scale: 0, opacity: 0,
    },
    transition: { duration: 0.3 }
}

export interface AnimationData {onScreen: Variant, offScreen: Variant, transition: Transition}
export function AnimateOnScroll({ children, once, ...animationData }: {children: ReactChild, once?: boolean} & AnimationData) {
    const controls = useAnimation();
    const [ref, inView] = useInView(); //See https://react-intersection-observer.vercel.app/?path=/story/introduction--page
    const beenShown = useRef<boolean>(false);
    useEffect(() => {
      if (inView) {
        controls.start("visible");
        beenShown.current = true;
      } else {
        if (!once || !beenShown.current) controls.start("hidden");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={animationData?.transition ?? FadeInAnimationData.transition}
        variants={{
          visible: animationData?.onScreen ?? FadeInAnimationData.onScreen,
          hidden: animationData?.offScreen ?? FadeInAnimationData.offScreen,
        }}
      >
        {children}
      </motion.div>
    );
  }
import { motion } from 'framer-motion'
import React from 'react'
import Image from "next/image";
export default function HelloSection() {
    return (
        <h1 variant="heading.h1" textAlign="center">
          Hello, I am <span color="primary">Gabe</span>
          <br />
          <motion.div
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <Image
              src="/assets/Arrow-down.svg"
              height={80}
              width={80}
              color={"white"}
            />
          </motion.div>
        </h1>
    )
}

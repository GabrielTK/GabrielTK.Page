import { css } from "@emotion/react";
import Image from "next/image";
import gradientStyles from "../styles/gradient.module.scss";
import { motion } from "framer-motion";
import HelloSection from "../src/pages/hello";
import Section1 from "../src/pages/Section1";
import Section2 from "../src/pages/Section2";
import StarryPage, { CoordinatePair } from "../src/utility/Stars";
import dynamic from 'next/dynamic'
const CodersRank = dynamic(import("../src/codersrank"), {ssr: false})

import { useEffect, useState } from "react";

let styles = {
  centerFlex: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};

export default function IndexPage() {
  const [finalPageZVel, setfinalPageZVel] = useState<CoordinatePair>({x: 0, y: 0})

  return (<>
    <div className={gradientStyles.animated} position="sticky" height="100%">
      <div css={styles.centerFlex} height="100vh">
        <HelloSection></HelloSection>
      </div>
      <div css={styles.centerFlex} height="100vh">
        <Section1></Section1>
      </div>
      <div css={styles.centerFlex} height="100vh">
        <Section2></Section2>
      </div>
    </div>
    <div height="100%">
      <StarryPage velocity={finalPageZVel} wndTimes={2}><div>
      <div css={styles.centerFlex} height="100vh">
          <div style={{alignItems: 'center'}}>
          <h1 variant="heading.h1">I am also on CodersRank</h1>
          <br/>
          
          <CodersRank username="gabrieltk" branding="false"></CodersRank>
          
          <br/>

          <div display="flex"  alignItems="center">

          </div>
          </div>
        </div>
        <div css={styles.centerFlex} height="100vh">
          <div style={{alignItems: 'center'}}>
          <h1 variant="heading.h1">Like what you see?</h1>
          <br/>
          
          <br/>

          <div display="flex" width="100%" alignItems="center"><button variant="button" onClick={()=>{
            setfinalPageZVel({x: 200, y: 0})
            setTimeout(()=>{
              window.location.href = "https://github.com/GabrielTK/"
            }, 500)
          }}>Let's Go!</button></div>
          </div>
        </div>
      </div></StarryPage>
    </div>
  </>);
}

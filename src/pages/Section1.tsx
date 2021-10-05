import React from 'react'
import Lottie from 'react-lottie';
import * as codingAnimation from '../animations/coding.json'
import Image from 'next/image'
export default function Section1() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", textAlign: "center"}} width="100%">
            <div>
                <p variant="heading.h2">I love building user experiences</p>

                <p variant="heading.h4">Be it Web, Mobile or Game Design</p>

                <div display="flex" flexDirection="row" justifyContent="center" pt="5%" flexGrow="0" flexShrink="0" gap={1}>
                    <Image src="/assets/logos/swiftui.png" height="40" width="40"></Image> 
                    <Image src="/assets/logos/react.svg" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/material-design/material-design.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/unity/unity.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/unreal-engine/unreal-engine.png" height="40" width="40"></Image> 
                </div>
            </div>
            <div>
                <Lottie options={{animationData: codingAnimation, loop: true, autoplay: true}}></Lottie>
            </div>
            
        </div>
    )
}

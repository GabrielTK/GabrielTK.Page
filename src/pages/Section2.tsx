import React from 'react'
import Lottie from 'react-lottie';
import * as codingAnimation from '../animations/server1.json'
import Image from 'next/image'
export default function Section2() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", textAlign: "center"}} width="100%">
            <div>
                
                <Lottie options={{animationData: codingAnimation, loop: true, autoplay: true}} height={700} width={700}></Lottie>
            </div>
            <div>
                
                <p variant="heading.h2">Backend or even IT?</p>
                <p variant="heading.h3">I've got your back 😉</p>
                <div display="flex" flexDirection="row" justifyContent="center" pt="5%" flexGrow="0" flexShrink="0" gap={1}>
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/93d8a67084f94b2a444e510199a6e7622e5b09a3/topics/dotnet/dotnet.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aspnet/aspnet.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png" height="40" width="40"></Image> 
                    <Image src="https://raw.githubusercontent.com/github/explore/eaef8552d8b082ffafe2bfc8a5023d47da904aac/topics/azure/azure.png" height="40" width="40"></Image>

                    
                </div>
            </div>
            
        </div>
    )
}

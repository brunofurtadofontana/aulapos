import React from 'react'
import Video from "../../Videos/video.mp4"
import {
    AnimatedContainer,
    AnimatedBg,
    VideoBg,
    AnimatedContent,
    AnimatedH1,
    AnimatedP,
    AnimatedBtnWrapper,
    Button,
    
} from "./AnimatedElements"
const Animated = () => {
    return (
        <AnimatedContainer>
            <AnimatedBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </AnimatedBg>
            <AnimatedContent>
                <AnimatedH1>
                    Virtual Data make Easy
                </AnimatedH1>
                <AnimatedP>
                    Sign UP for a new accont today and receive $250 in credid card
                </AnimatedP>
                <AnimatedBtnWrapper>
                    <Button to="signup">Get Started</Button>
                </AnimatedBtnWrapper>
            </AnimatedContent>
        </AnimatedContainer>
    )
}

export default Animated

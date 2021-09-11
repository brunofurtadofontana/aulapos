import React from 'react'
import {
    Box,
    ContentBox,
    BoxTitle,
    BoxText
} from "./ContentElements"

const Content = ({boxData}) => {
    return (
        <ContentBox>
            {boxData.map(box => (
            <Box bgColor={box.bgColor}>
                <BoxTitle>
                    {box.title}
                </BoxTitle>
                <BoxText>
                    {box.text}
                </BoxText>
            </Box>    
            ))}
        </ContentBox>
    )
}

export default Content

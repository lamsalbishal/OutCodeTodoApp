import React, { useEffect } from 'react'
import { Container, Text } from '../styles/StyleFeatures'
import { navigationRelace } from '../utils/navUtils'
import { FlexJCWrapper } from '../styles/StyleFeatures'
import { Colors } from '../const/Colors'

const SplashScreen = () => {
    useEffect(() => {
        setTimeout(() => {
            navigationRelace('HomeScreen')
        }, 3000)
    },)
    return (
        <Container>
            <FlexJCWrapper>
                <Text heavy="bold" middle exlarge crColor={Colors.mainColor}>Todo App</Text>
            </FlexJCWrapper>
        </Container>
    )
}

export default SplashScreen
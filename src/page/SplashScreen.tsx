import React, { useEffect } from 'react'
import { Container, Text } from '../styles/StyleFeatures'
import { navigationRelace } from '../utils/navUtils'
import { FlexJCWrapper } from '../styles/StyleFeatures'

const SplashScreen = () => {
    useEffect(() => {
        setTimeout(() => {
            navigationRelace('HomeScreen')
        }, 3000)
    },)
    return (
        <Container>
            <FlexJCWrapper>
                <Text middle>Todo App</Text>
            </FlexJCWrapper>
        </Container>
    )
}

export default SplashScreen
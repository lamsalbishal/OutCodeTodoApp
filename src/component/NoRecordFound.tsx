import React from 'react'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FelxCCWrap, Text } from '../styles/StyleFeatures'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const NoRecordFound = () => {
    return (
        <FelxCCWrap>
            <MIcon name='newspaper-variant-outline' size={hp(6)} />
            <Text small ptGap={hp(1)} >No Data Found!</Text>
        </FelxCCWrap>
    )
}

export default NoRecordFound
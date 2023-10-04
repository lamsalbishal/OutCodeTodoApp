import React from 'react'
import { BottomWrapBox, Container, HrLine, PaddingHVGap } from '../styles/StyleFeatures'
import { ViewWrapper } from '../styles/StyleFeatures'
import { Text } from '../styles/StyleFeatures'
import { FlexSBWrapper } from '../styles/StyleFeatures'
import { BorderWithRadius } from '../styles/StyleFeatures'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../const/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
    cancleModal: () => void,
    confirmModal: () => void
}
const DeleteConfirmModal: React.FC<Props> = ({ cancleModal, confirmModal }) => {
    return (
        <View style={styles.deleteWrapBox}>

            <BottomWrapBox>
                <HrLine />
                <View style={styles.wrapBox}>
                    <PaddingHVGap phGap={wp(6)} pvGap={hp(2)}>
                        <ViewWrapper>
                            <Text medium heavy="bold">Are You Sure you want to delete?</Text>
                            <PaddingHVGap phGap={wp(1)} pvGap={hp(5)}>
                                <FlexSBWrapper>
                                    <TouchableOpacity onPress={() => confirmModal()}>
                                        <BorderWithRadius brGap={hp(6)} crGap={Colors.mainColor} pvGap={hp(1)} phGap={wp(15)} bgGap={Colors.mainColor}>
                                            <Text crColor={Colors.whiteColor} small>Yes</Text>
                                        </BorderWithRadius>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => cancleModal()}>
                                        <BorderWithRadius brGap={hp(6)} crGap={Colors.lightGrayColor} pvGap={hp(1)} phGap={wp(15)} bgGap={Colors.lightGrayColor}>
                                            <Text crColor={Colors.blackColor} small>No</Text>
                                        </BorderWithRadius>
                                    </TouchableOpacity>
                                </FlexSBWrapper>
                            </PaddingHVGap>
                        </ViewWrapper>
                    </PaddingHVGap>
                </View>
            </BottomWrapBox>

        </View>
    )
}

export default DeleteConfirmModal

const styles = StyleSheet.create({
    deleteWrapBox: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.4)'

    },
    wrapBox: {
        backgroundColor: Colors.lightDimWhiteColor
    }
})
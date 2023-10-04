import React from 'react'
import { TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BorderWithRadius, FlexRAWrap, FlexSBWrapper, HrLine, PaddingAllGap, PaddingHVGap, Text } from '../../styles/StyleFeatures'
import moment from 'moment';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../const/Colors';

interface Props {
    item: {
        id: string,
        timeStamp: string,
        note: string,
        status: boolean
    },
    onClickCheckBox: () => void,
    editToNavigae: () => void
    onDeleleteConfirmBox: () => void
}
const NoteBox: React.FC<Props> = ({ item, onClickCheckBox, editToNavigae, onDeleleteConfirmBox }) => {
    return (
        <PaddingAllGap ptGap={hp(3)}>
            <BorderWithRadius bgGap={Colors.lightDimWhiteColor} crGap={Colors.lightDimWhiteColor} brGap={hp(1.5)} phGap={wp(2)} pvGap={hp(1)} >
                <Text>{item?.note}</Text>
                <PaddingHVGap pvGap={hp(1)}>
                    <HrLine />
                </PaddingHVGap>
                <FlexSBWrapper>
                    <FlexRAWrap>
                        <TouchableOpacity onPress={() => onClickCheckBox()}>
                            {item?.status ?
                                <MIcon color={Colors.blackColor} name="checkbox-outline" size={hp(2.5)} />
                                :
                                <MIcon name="checkbox-blank-outline" size={hp(2.5)} />
                            }
                        </TouchableOpacity>
                        <Text plGap={wp(1)}>{moment(item?.timeStamp).format("ddd, hA YY")}</Text>
                    </FlexRAWrap>
                    <FlexRAWrap>
                        <TouchableOpacity onPress={() => editToNavigae()} style={{ width: wp(10) }}>
                            <AIcon name="edit" size={hp(2.5)} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onDeleleteConfirmBox()} style={{ width: wp(8) }}>
                            <MIcon name="delete" size={hp(2.5)} />
                        </TouchableOpacity>

                    </FlexRAWrap>
                </FlexSBWrapper>
            </BorderWithRadius>
        </PaddingAllGap>
    )
}

export default NoteBox
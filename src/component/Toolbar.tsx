import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    BottomElevationWrapBox,
    FlexRAWrap,
    FlexSBWrapper,
    HrLine,
    PaddingAllGap,
    PaddingHVGap,
    Text,
    ViewWrapper,
} from '../styles/StyleFeatures';


import { goBack } from '../utils/navUtils';
import { Colors } from '../const/Colors';

interface Props {
    title: string;
    imageShow?: boolean;
    imageUrl?: string;
    hrLine?: boolean;
    rightIcon?: boolean;
    rightIconName?: string;
    rightIconFunc?: any;
}

const Toolbar: React.FC<Props> = ({
    title,
    hrLine = true,
    rightIcon,
    rightIconName = '',
    rightIconFunc,
}) => {
    return (
        <ViewWrapper>
            <BottomElevationWrapBox>
                <PaddingHVGap phGap={wp(4)} pvGap={hp(1.8)}>
                    <FlexSBWrapper>
                        <ViewWrapper>
                            <FlexRAWrap>
                                <TouchableOpacity onPress={() => goBack()}>
                                    <Icon
                                        name="chevron-back"
                                        size={hp(3.3)}
                                        color={Colors.blackColor}
                                    />
                                </TouchableOpacity>


                                <PaddingAllGap plGap={wp(8)}>
                                    <Text size={600} medium>
                                        {title}
                                    </Text>
                                </PaddingAllGap>
                            </FlexRAWrap>
                        </ViewWrapper>
                        <ViewWrapper>
                            {rightIcon && (
                                <TouchableOpacity onPress={() => rightIconFunc()}>
                                    <Icon
                                        name={rightIconName}
                                        size={hp(3.5)}
                                        color={Colors.blackColor}
                                    />
                                </TouchableOpacity>
                            )}
                        </ViewWrapper>
                    </FlexSBWrapper>
                </PaddingHVGap>
            </BottomElevationWrapBox>
            {hrLine && <HrLine />}
        </ViewWrapper>
    );
};

export default Toolbar;

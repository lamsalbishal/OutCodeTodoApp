import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
    PaddingHVGap,
    Text,
    ViewWrapper,
    ShortRoundWrapBox,
} from '../styles/StyleFeatures';
import { Colors } from '../const/Colors';

interface Props {
    title: string;
    pvGap?: number;
    phGap?: number;
    brColor?: string;
    brWid?: number;
    style?: any;
    onPress: () => void;
    txtColor?: string | any;
    bgColor?: string;
    icon?: any;
    disabled?: boolean;
    horizontalPadding?: boolean;
}

const CustomButton: React.FC<Props> = ({
    title,
    pvGap,
    phGap,
    brColor,
    brWid,
    style,
    onPress,
    txtColor,
    bgColor,
    icon,
    disabled,
    horizontalPadding,
}) => {
    return (
        <ViewWrapper style={style}>
            <PaddingHVGap phGap={horizontalPadding ? 0 : wp(3)} pvGap={hp(3)}>
                <TouchableOpacity disabled={disabled} onPress={() => onPress()}>
                    <ShortRoundWrapBox
                        bgColor={bgColor || Colors.mainColor}
                        bgRadius={hp(20)}
                        pvGap={pvGap || hp(1.5)}
                        phGap={phGap || 0}
                        brColor={brColor ? brColor : Colors.whiteColor}
                        brWid={brWid || 1}>
                        {disabled ? (
                            <ActivityIndicator color={Colors.whiteColor} />
                        ) : (
                            <Text medium crColor={txtColor || Colors.whiteColor}>
                                {icon && <>{icon} </>}
                                {title}
                            </Text>
                        )}
                    </ShortRoundWrapBox>
                </TouchableOpacity>
            </PaddingHVGap>
        </ViewWrapper>
    );
};

export { CustomButton };

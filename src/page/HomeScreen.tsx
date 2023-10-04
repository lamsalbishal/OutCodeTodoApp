import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    Container,
    HrLine,
    PaddingAllGap,
    PaddingHVGap,
    Text,
    ViewWrapper,
} from '../styles/StyleFeatures';
import ListComponent from '../features/ListComponent';
import { CustomButton } from '../component/CustomButton';
import { navigate } from '../utils/navUtils';
import { Colors } from '../const/Colors';




const HomeScreen = () => {

    const renderItems = ({ item, index }: { item: any; index: any }) => {
        return (
            <ViewWrapper key={index}>

            </ViewWrapper>
        );
    };

    return (
        <Container>
            <PaddingHVGap pvGap={hp(1.8)} phGap={wp(3)} >
                <Text heavy="700" medium crColor={Colors.mainColor}>Todo App</Text>
            </PaddingHVGap>
            <HrLine />
            <ScrollView showsVerticalScrollIndicator={false}>
                <PaddingHVGap phGap={wp(3)} pvGap={hp(1.5)}>
                    <PaddingAllGap pbGap={hp(10)}>
                        <ListComponent
                            data={[]}
                            renderItem={renderItems}
                            keyExtractor={item => item.id}
                        />
                    </PaddingAllGap>
                </PaddingHVGap>
            </ScrollView>
            <View style={Styles.bottomTab}>
                <CustomButton
                    onPress={() =>
                        navigate('CreateEditNoteScreen', {
                            status: false,
                            updateData: {},
                        })
                    }
                    brColor={Colors.mainColor}
                    title="Create Note"
                />
            </View>

        </Container>
    );
};

export default HomeScreen;


const Styles = StyleSheet.create({
    bottomTab: {
        bottom: hp(0.7),
        position: 'absolute',
        width: '100%'
    }
})

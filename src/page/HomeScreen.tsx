import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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

} from '../styles/StyleFeatures';
import ListComponent from '../features/ListComponent';
import { CustomButton } from '../component/CustomButton';
import { navigate } from '../utils/navUtils';
import { Colors } from '../const/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import NoRecordFound from '../component/NoRecordFound';
import NoteBox from '../component/HomeComponent/NoteBox';





const HomeScreen = () => {
    const noteList = useSelector((state: RootState) => state.persistedReducer.noteReducer.notestore);

    const renderItems = ({ item, index }: { item: any; index: any }) => {
        return (
            <NoteBox item={item} />
        );
    };

    return (
        <Container>
            <PaddingHVGap pvGap={hp(1.8)} phGap={wp(3)} >
                <Text heavy="700" medium crColor={Colors.mainColor}>Todo App</Text>
            </PaddingHVGap>
            <HrLine />
            <ScrollView showsVerticalScrollIndicator={false}>
                {noteList.length > 0 ?
                    <PaddingHVGap phGap={wp(3)}>
                        <PaddingAllGap pbGap={hp(10)}>
                            <ListComponent
                                data={noteList}
                                renderItem={renderItems}
                                keyExtractor={item => item.id}
                            />
                        </PaddingAllGap>
                    </PaddingHVGap>
                    :
                    <PaddingAllGap ptGap={hp(30)}>
                        <NoRecordFound />
                    </PaddingAllGap>
                }
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

import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Modal } from 'react-native';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import NoRecordFound from '../component/NoRecordFound';
import NoteBox from '../component/HomeComponent/NoteBox';
import { statusChangeNote } from '../store/reducers/NoteSlice';
import DeleteConfirmModal from '../component/DeleteConfirmModal';
import { deleteNoteStore } from '../store/reducers/NoteSlice';





const HomeScreen = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [deleteID, setDeleteID] = useState('')

    const noteList = useSelector((state: RootState) => state.persistedReducer.noteReducer.notestore);
    const sortedArray = noteList.map(noteList.pop, [...noteList]);


    const completeOrNot = (idNo: string) => {
        dispatch(statusChangeNote(idNo))
    }

    const editToNavigae = (item: any) => {
        navigate('CreateEditNoteScreen', {
            status: true,
            updateData: {
                id: item.id,
                note: item.note,
                status: item.status,
                timeStamp: item.timeStamp,

            },
        })
    }

    const onDeleleteConfirmBox = (deleteID: string) => {
        setDeleteID(deleteID)
        setOpen(true)
    }


    const renderItems = ({ item, index }: { item: any; index: any }) => {

        return (
            <NoteBox
                item={item}
                onClickCheckBox={() => completeOrNot(item?.id)}
                editToNavigae={() => editToNavigae(item)}
                onDeleleteConfirmBox={() => onDeleleteConfirmBox(item?.id)}
            />
        );
    };

    const handleBackdropPress = () => {
        setOpen(false)
    }

    const deleteNote = () => {
        dispatch(deleteNoteStore(deleteID))
        setOpen(false)
    }
    return (
        <Container>
            <PaddingHVGap pvGap={hp(1.8)} phGap={wp(3)} >
                <Text heavy="700" medium crColor={Colors.mainColor}>Todo App</Text>
            </PaddingHVGap>
            <HrLine />
            <ScrollView showsVerticalScrollIndicator={false}>
                {sortedArray.length > 0 ?
                    <PaddingHVGap phGap={wp(3)}>

                        <PaddingAllGap pbGap={hp(10)}>
                            <ListComponent
                                data={sortedArray}
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

            <Modal
                animationType="slide"
                visible={open}
                transparent
                onRequestClose={() => handleBackdropPress()}
            >

                <DeleteConfirmModal cancleModal={() => setOpen(false)} confirmModal={() => deleteNote()} />
            </Modal>

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

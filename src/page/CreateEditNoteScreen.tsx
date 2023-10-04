


import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, ToastAndroid } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {
    Container,
    InputTextField,
    PaddingAllGap,
    PaddingHVGap,
    Text,
    ViewWrapper,
} from '../styles/StyleFeatures';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Toolbar from '../component/Toolbar';
import { CustomButton } from '../component/CustomButton';
import moment from 'moment';
import { Colors } from '../const/Colors';
import { createNoteStore } from '../store/reducers/NoteSlice';
import { goBack } from '../utils/navUtils';
import { genRandomId } from '../features/CommonFeature';


const CreateEditNoteScreen = ({ route }: { route: any }) => {
    const dispatch = useDispatch();
    const { status, updateData } = route.params;


    const createSchema = Yup.object().shape({
        note: Yup.string().required('Note is required'),
    });




    const createNewEditNote = async (values: any) => {
        const CurrentDate = moment().format();
        const noteObj = {
            id: genRandomId(6),
            note: values.note,
            status: false,
            timeStamp: CurrentDate,
            updateTimeStamp: CurrentDate,
        }
        dispatch(createNoteStore(noteObj))
        ToastAndroid.show('Create Successfully', ToastAndroid.BOTTOM)
        goBack()
    };


    return (
        <Container>
            <Toolbar title={status ? 'Update Note' : 'Create Note'} />
            <ScrollView keyboardShouldPersistTaps="handled">
                <PaddingHVGap pvGap={hp(1)} phGap={wp(5)}>
                    <Formik
                        validationSchema={createSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize
                        initialValues={{
                            note: status ? updateData?.note : '',

                        }}
                        onSubmit={values => createNewEditNote(values)}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            isSubmitting,
                        }) => (
                            <ViewWrapper>

                                <Text small ptGap={hp(3)}>For your reminder, save a note.</Text>
                                <PaddingAllGap ptGap={hp(2)}>


                                    <InputTextField
                                        bwGap={1}
                                        plGap={wp(5)}
                                        brGap={hp(1)}
                                        onChangeText={handleChange('note')}
                                        handleBlur={handleBlur('note')}
                                        placeholder="Create a note"
                                        marginBottom={errors.note ? 5 : 18}
                                        value={values.note}
                                        multiline

                                    />

                                    {errors.note && (
                                        <Text
                                            crColor={Colors.redColor}
                                            ptGap={hp(0.5)}
                                            plGap={wp(3)}>
                                            {errors.note}
                                        </Text>
                                    )}
                                </PaddingAllGap>

                                <PaddingAllGap ptGap={hp(3)}>
                                    <CustomButton
                                        horizontalPadding
                                        brColor={Colors.mainColor}
                                        disabled={isSubmitting}
                                        onPress={() => handleSubmit()}
                                        title={status ? 'Update Note' : 'Create Note'}
                                    />
                                </PaddingAllGap>


                            </ViewWrapper>
                        )}
                    </Formik>
                </PaddingHVGap>
            </ScrollView>
        </Container>
    );
};

export default CreateEditNoteScreen;




import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {
    Container,
    FlexRAWrap,
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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Toolbar from '../component/Toolbar';
import { CustomButton } from '../component/CustomButton';


const CreateEditNoteScreen = ({ route }: { route: any }) => {
    const dispatch = useDispatch();
    const { status, updateData } = route.params;


    const createSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
    });

    const createNewEditNote = async (values: any) => {

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
                            name: status ? updateData?.name : '',
                            description: status ? updateData?.description : '',
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
                                <PaddingAllGap ptGap={hp(3)}>
                                    <InputTextField
                                        iconNo={1}
                                        iconName="user"
                                        handleChange={handleChange('name')}
                                        handleBlur={handleBlur('name')}
                                        label="Name"
                                        keyboardType="default"
                                        secureTextEntry={false}
                                        value={values.name}

                                    />

                                    {errors.name && (
                                        <Text
                                            crColor={Colors.redColor}
                                            ptGap={hp(0.5)}
                                            plGap={wp(3)}>
                                            {errors.name}
                                        </Text>
                                    )}
                                </PaddingAllGap>

                                <PaddingAllGap ptGap={hp(3)}>
                                    <InputTextField
                                        iconName="description"
                                        handleChange={handleChange('description')}
                                        handleBlur={handleBlur('description')}
                                        label="Description"
                                        keyboardType="default"
                                        secureTextEntry={false}
                                        value={values.description}

                                    />

                                    {errors.description && (
                                        <Text
                                            crColor={Colors.redColor}
                                            ptGap={hp(0.5)}
                                            plGap={wp(3)}>
                                            {errors.description}
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

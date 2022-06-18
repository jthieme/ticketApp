import React, {useState} from 'react';
import {styles, Colors} from './../components/styles';
import {View, SafeAreaView, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Formik } from "formik";
import {Ionicons} from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import * as ImagePicker from 'expo-image-picker';
import moment from 'moment'
import uuid from 'react-native-uuid';

const AddTask = ({navigation}) => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.TaskContainer}>
            <View style={styles.TaskContainer}>
                <Formik
                    initialValues={
                        {
                            name: '',
                            subject: '',
                            desc: '',
                            assignedTo: 'Supervisor',
                            assigneeConfirmedComplete: '',
                            dateReported: moment().format('llll'),
                            vehicle: '',
                            media: image !== null ? image : '',
                            key: uuid.v4(),
                            isCompleted: false
                        }
                    }
                    onSubmit={(values)=> {
                        
                        if (values.name === '' || values.desc === '' || values.subject === '' || values.vehicle === '')
                        {
                            Alert.alert('Error', 'Please fill out all of the fields before submitting ticket.');
                        } else {
                            console.log(values);
                            values.media = image;
                            navigation.navigate('Home');
                            
                        }                        
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style={{flex: 1}}>
                        <MyTextInput
                            placeholder='Name *'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />

                        <MyTextInput
                            placeholder='Subject *'
                            onChangeText={handleChange('subject')}
                            onBlur={handleBlur('subject')}
                            value={values.subject}
                        />
                        <MyTextInput
                            placeholder='Truck *'
                            onChangeText={handleChange('vehicle')}
                            onBlur={handleBlur('vehicle')}
                            value={values.vehicle}
                        />
                        
                        <TouchableOpacity style={    
                            {
                                flexDirection: 'row',
                                backgroundColor: Colors.darkLight,
                                borderRadius: 10,
                                padding: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 4
                            }
                             }
                             onPress={pickImage}
                             value={values.media}>
                            <Ionicons
                                name='add'
                                color={Colors.brand}
                                size={30}
                            />
                            <Text style={{fontSize: 16}}>Add Media</Text>
                        </TouchableOpacity>

                        {/* {image !== null ? (
                            <ScrollView
                                horizontal
                                scrollEnabled
                                contentContainerStyle={{flex: 0, flexGrow: 1}}
                            >
                                <Image
                                    style={{
                                        width: 100,
                                        height: 110,
                                        borderRadius: 10,
                                        marginHorizontal: 5
                                    }}
                                    source={{uri:image}}
                                />
                            </ScrollView>
                        ) : <Text style={{marginTop: '-6%'}} />} */}

                        <MyTextInput
                            placeholder='Description *'
                            onChangeText={handleChange('desc')}
                            onBlur={handleBlur('desc')}
                            value={values.desc}
                            style={styles.TaskDesc} 
                            multiline={true}
                            numberOfLines={4}
                        />
                        <View style={{marginTop: '2%'}}>
                            <TouchableOpacity style={styles.TaskButton} onPress={handleSubmit}>
                                <Text style={styles.TaskButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)}
                </Formik>
            </View>
        </SafeAreaView>
        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({...props}) => {
    return (
        <View>
            <TextInput style={styles.TaskInput} {...props} />
        </View>
    );
};


export default AddTask;
import React, {useState} from 'react';
import {styles, Colors} from './../components/styles';
import {View, SafeAreaView, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// For editing names and position
import { Formik } from 'formik';

// For editing profile picture
import * as ImagePicker from 'expo-image-picker';

const Account = ({navigation}) => {

    const [firstName, setFirstName] = useState('Josh');
    const [lastName, setLastName] = useState('Thieme');
    const [position, setPosition] = useState('Software Engineer');
    const [media, setMedia] = useState();
    const [edit, setEdit] = useState(false);
    const [image, setImage] = useState('');

    // const [darkMode, setDarkMode] = useState(false);

    // const showDarkMode = () => {
    //     setDarkMode(!darkMode);
    // }

    const editInformation = () => {
        setEdit(!edit);
    }



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
        <SafeAreaView style={styles.AccountContainer}>
            <View style={styles.AccountHeader}>
                <Image
                    style={styles.AccountImage}
                    source={{uri: image != '' ? image : 'https://reactnative.dev/img/tiny_logo.png'}} 
                />
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.AccountName}>{firstName} {lastName}</Text>
                <Text style={styles.AccountPosition}>{position}</Text>
            </View>

            </View>

            <View style={styles.AccountMain}>
                {/* <View style={styles.AccountSlider}>
                    <Text style={styles.AccountText}>Dark Mode</Text>
                    <Fontisto 
                        name={darkMode ? 'toggle-on' : 'toggle-off'}
                        color={darkMode ? Colors.brand : Colors.black}
                        size={40}
                        onPress={showDarkMode}
                        />
                </View> */}

                {edit && (<Formik
                    initialValues={{

                        firstName: firstName,
                        lastName: lastName,
                        position: position,
                        media: image
                    }}
                    onSubmit={(values) => {
                        if (values.firstName === '' || values.lastName === '' || values.position === '')
                        {
                            Alert.alert('Error', 'Please fill out all of the fields before submitting changes.');
                        } else {
                            setFirstName(values.firstName);
                            setLastName(values.lastName);
                            setPosition(values.position);
                            setMedia(values.media);
                            setEdit(!edit);
                        }
                    }}>{({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
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
                            <Text style={{fontSize: 16}}>Change Profile Picture</Text>
                        </TouchableOpacity>

                            <MyTextInput
                                placeholder='First Name *'
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                            />
    
                            <MyTextInput
                                placeholder='Last Name *'
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                            />
                            <MyTextInput
                                placeholder='Position *'
                                onChangeText={handleChange('position')}
                                onBlur={handleBlur('position')}
                                value={values.position}
                            />
                           
                            <View style={{marginVertical: 5}}>
                                <TouchableOpacity style={styles.TaskButton} onPress={handleSubmit}>
                                    <Text style={styles.TaskButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)}
                </Formik>)}

                <Text style={styles.AccountText}>Notifications</Text>
                <Text style={styles.AccountText}>Something</Text>
            </View>

            <View style={styles.AccountButtons}>
                <TouchableOpacity style={styles.AccountButtonStyle} onPress={editInformation}>
                    <Text style={styles.AccountButtonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.AccountButtonStyle}>
                    <Text style={styles.AccountButtonText}>Sign Out</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.AccountButtonStyle}>
                    <Text style={styles.AccountButtonText}>Save</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

const MyTextInput = ({...props}) => {
    return (
        <View>
            <TextInput style={styles.TaskInput} {...props} />
        </View>
    );
};

export default Account;
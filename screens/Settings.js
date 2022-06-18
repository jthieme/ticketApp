import React from 'react';
import {styles, Colors} from './../components/styles';
import {Ionicons} from '@expo/vector-icons';
import {View, SafeAreaView, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Settings = ({navigation}) => {
    return (
        <>
        <SafeAreaView style={styles.SettingsContainer}>
            <View style={styles.SettingsHeader}>
                <View style={styles.SettingsSearch}>
                    <Ionicons 
                        name='search'
                        size={20}
                        color={Colors.gray}
                    />
                    <TextInput style={styles.SettingsSearchText}placeholder='Add your Organization' />
                </View>
            </View>
                
            <View style={styles.AccountMain}>
                <Text style={styles.AccountText}>Notifications</Text>
                <Text style={styles.AccountText}>Something</Text>
            </View>

        </SafeAreaView>

            <View style={styles.SettingsButton}>
                <TouchableOpacity style={styles.TaskButton}>
                    <Text style={styles.TaskButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        
        </>
    )
}

export default Settings;
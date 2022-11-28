import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, TextInput, Button} from 'react-native';
import {styles, Colors} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { data } from './Data';
import Ticket from './Ticket';
import {Ionicons} from '@expo/vector-icons';
import Divider from './Divider';

// onPress={() => data.filter((j) => {
//     j.isCompleted === true ?
//      console.log(j.subject + " " + j.isCompleted) : 'false';
// })}



const Filter = () => {
    const [showModal, setShowModal] = useState(false);
    const [truckNumber, setTruckNumber] = useState();
    const [hasMedia, setHasMedia] = useState(false);
    const [truckInput, setShowTruckInput] = useState(false);
    const [subjectInput, setShowSubjectInput] = useState(false);
    const [reportedInput, setShowReportedInput] = useState(false);
    const [assignedInput, setShowAssignedInput] = useState(false);
    
    const filterData = () => {
        console.log('BUTTON PRESSED');
        setShowModal(!showModal)
    }
    return (
        <View>
            <TouchableOpacity 
                style={{marginRight: 30}}
                onPress={ () =>
                    setShowModal(!showModal)
                }
                >
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                        setModalVisible(!showModal);
                    }}
                >
                <View style={{
                    flex: 1,
                    justifyContent: "top",
                    alignItems: "center",
                    marginTop: 22,
                    
                    }}>
                    <View style={{
                        margin: 42,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 20,
                        // alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 4
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        flexDirection:"row"
                        
                        }}>
                        <View
                            flexDirection="column"
                        >
                            <TouchableOpacity
                                style={{marginLeft: 220,}}
                                onPress={()=>setShowModal(!showModal)}
                            >
                                <Ionicons
                                    name='close'
                                    color="black"
                                    size="25"
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    alignContent:"center",
                                    alignItems:"center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: Colors.black,
                                        fontSize: 25
                                    }}
                                >Filter</Text>
                            </View>
                            
                            
                            <View style={styles.SettingsHeader}>
                                <View style={styles.SettingsSearch}>
                                    <Ionicons 
                                        name='search'
                                        size={20}
                                        color={Colors.gray}
                                    />
                                    <TextInput style={styles.SettingsSearchText}
                                        placeholder='Filter' 
                                        placeholderTextColor={Colors.gray}
                                    />
                                </View>
                            </View>
                            <Divider></Divider>
                            <View
                                alignItems="left"
                                paddingLeft={20}
                            >
                                <View
                                    style={styles.FilterItemBackground}
                                >
                                    <TouchableOpacity
                                        
                                        onPress={()=>setShowTruckInput(!truckInput)}
                                    >
                                        <Text
                                            flexDirection="column"
                                            style={styles.FilterItem}
                                        >Truck</Text>

                                    {truckInput && 
                                    (
                                        <TextInput
                                            marginLeft={15}
                                            placeholder='0'
                                            placeholderTextColor="gray"
                                            fontColor="black"
                                            fontSize={25}
                                            keyboardType="number-pad"
                                        
                                        />    
                                    )}
                                    </TouchableOpacity>
                                    
                                </View>
                             

                                <View
                                    style={styles.FilterItemBackground}
                                >
                                    <TouchableOpacity
                                        onPress={()=>setShowSubjectInput(!subjectInput)}
                                    >
                                        <Text
                                            style={styles.FilterItem}
                                        >Subject</Text>

                                    {subjectInput && 
                                    (
                                        <TextInput
                                            marginLeft={15}
                                            placeholder='U-Joint'
                                            placeholderTextColor="gray"
                                            fontColor="black"
                                            fontSize={18}                                        
                                        />    
                                    )}
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={styles.FilterItemBackground}
                                >
                                    <TouchableOpacity
                                        onPress={()=>setShowReportedInput(!reportedInput)}
                                    >
                                        <Text
                                            style={styles.FilterItem}
                                        >Reported By</Text>
                                    {reportedInput && 
                                    (
                                        <TextInput
                                            marginLeft={15}
                                            placeholder='Jared Nickle'
                                            placeholderTextColor="gray"
                                            fontColor="black"
                                            fontSize={18}                                        
                                        />    
                                    )}
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={styles.FilterItemBackground}
                                >
                                    <TouchableOpacity
                                        onPress={()=>setShowAssignedInput(!assignedInput)}
                                    >
                                        <Text
                                            style={styles.FilterItem}
                                        >Assigned By</Text>
                                    {assignedInput && 
                                    (
                                        <TextInput
                                            marginLeft={15}
                                            placeholder='Jared Nickle'
                                            placeholderTextColor="gray"
                                            fontColor="black"
                                            fontSize={18}                                       
                                        />    
                                    )}
                                    </TouchableOpacity>
                                </View>
                                
                                <View
                                    style={styles.FilterItemBackground}
                                >
                                    <TouchableOpacity
                                        style={{
                                            flexDirection:"row"
                                        }}
                                        onPress={()=> setHasMedia(!hasMedia)}
                                        >
                                        <Ionicons
                                            name={hasMedia ?  'checkbox' :'square-outline'}
                                            color={Colors.brand}
                                            size={20}
                                            style={styles.FilterItem}
                                            />
                                        <Text
                                            style={styles.FilterItem}
                                            >Media</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                            <Divider></Divider>
                        <View style={{flexDirection:"column"}}>
                
                            <TouchableOpacity
                                onPress={() => filterData()}
                            >
                                <Text style={{
                                    padding: 15,
                                    marginTop: 10,
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    backgroundColor: Colors.brand,
                                    textAlign: "center"}}
                                >Submit</Text>
                                
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
            </View>
            </Modal>
                <Icon
                    name='filter-outline'
                    size={30}
                    color={Colors.brand}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Filter;

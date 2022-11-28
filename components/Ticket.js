import React, {useState, useEffect} from 'react';
import {Text, FlatList, View, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native';
import {styles, Colors} from './styles';
import {Ionicons} from '@expo/vector-icons';

const Ticket = ({ticketList}) => {
    const defaultImage = 'https://airbnb-clone-prexel-images.s3.amazonaws.com/genericAvatar.png';
    const [isComplete, setIsComplete] = useState();
    const [show, setShow] = useState();
    // const [showModal, setShowModal] = useState(false);

    const showContent = (key) => {
        if (show == key) {
            // Clicked on it again ... false means expand nothing
            setShow(false);
            // console.log(todoRef);
        } else {
            // Clicked on something else ... save the key so we can expand the right thing later
            setShow(key); 
        }
    }

    const [users, setUsers] = useState([]);
    

    return (
        <SafeAreaView style={{flex: 1}}>
        <FlatList showsVerticalScrollIndicator={false}
            data={ticketList}
            renderItem={(data) => {
                return (
            <> 
            <TouchableOpacity key={data.item.key} onPress={() => showContent(data.item.key)}> 
                <View style={styles.TicketCard}>
                    <Image
                        style={styles.TicketCardImage}
                        source={{uri: defaultImage}} 
                    />
                    <View style={styles.TicketCardInner}>
                        <Text style={styles.TicketCardName}>{data.item.vehicle}</Text>
                        <Text style={styles.TicketCardSubject}>
                            {data.item.subject}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => data.item.isCompleted = !data.item.isCompleted}>{/*setShowModal(true)*/}
                        <Ionicons
                            name='ellipsis-horizontal-circle'
                            color={Colors.brand}
                            size={50}
                            style={styles.TicketCardImage}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.TicketCardExpand}>
                    <Text>
                
                {show == data.item.key && 
                // When we check to see if we are supposed to show something, then compare the key value
                
                    (<View style={{padding: 10, width:370}}>
                        <Text style={styles.TicketCardDesc}>
                            {data.item.desc}
                        </Text>

                        <Text style={{padding: 5}}>
                            Reported by: {data.item.name}
                        </Text>

                        <Text style={{padding: 5}}>
                            Reported: {data.item.dateReported}
                        </Text>
            
                        {data.item.isCompleted == true && ( 
                            <Text style={{padding: 5}}>
                                Confirmed Completion: {data.item.assigneeConfirmedComplete}
                            </Text>
                        )}
                    </View> )}
                    </Text>
                </View> 
            </TouchableOpacity>
            </>
        )}}
        />
        </SafeAreaView>
    )
};

export default Ticket;
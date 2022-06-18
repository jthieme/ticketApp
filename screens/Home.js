import React, {useState, useEffect} from 'react';
import {styles, Colors} from '../components/styles';
import { SafeAreaView } from 'react-native';
import Ticket from '../components/Ticket';
import Icon from 'react-native-vector-icons/Ionicons';

var utc = new Date().toLocaleDateString();
const data = [
    {
        name: 'Josh Thieme',
        subject: 'U-Joint',
        desc: 'The bolt that is meant to hold the u-joint in place has the head broken off from it. See attached picture.',
        assignedTo: 'Mia Thieme',
        assigneeConfirmedComplete: utc,
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 1',
        media: '',
        key: '1',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'U-Bolt',
        desc: 'The bolt that is meant to hold the u-joint in place has the head broken off.',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 2',
        media: '',
        key: '2',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'Engine',
        desc: 'The engine is idling rough.',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 3',
        media: '',
        key: '3',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'Transmission',
        desc: 'Truck recently started shifting super rough. Please fix.',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 4',
        media: '',
        key: '4',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'Fuel',
        desc: 'Truck does not want to start. Something with fuel?',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 5',
        media: '',
        key: '5',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'Fuel Filter',
        desc: 'The engine will only run for a short time.',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 6',
        media: '',
        key: '6',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'Green Leak',
        desc: 'There is a green leak coming from the truck. Not sure what it is.',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 7',
        media: '',
        key: '7',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'No Heat',
        desc: 'There is not any heat. I am from Arizona, I need heat!',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 8',
        media: '',
        key: '8',
        isCompleted: false
    },
    {
        name: 'Josh Thieme',
        subject: 'No AC',
        desc: 'Too dang hot out here! I need the AC! We live in a desert!',
        assignedTo: 'Jared Nickle',
        assigneeConfirmedComplete: 'NA',
        dateReported: 'Tue Mar 8, 2022',
        vehicle: 'Truck 9',
        media: '',
        key: '9',
        isCompleted: false
    }
];

const Home = ({navigation}) => {

    const [ticketList, setTicketList] = useState(data);


    const getTickets = () => {
        setTicketList(data);
    }
    useEffect(() => {
        getTickets();
    }, []);

    return (
        <SafeAreaView  style={styles.HomeContainer}>
                <Ticket 
                    ticketList={ticketList}
                    setTicketList={setTicketList}
                />
        </SafeAreaView>
    )
};

export default Home;
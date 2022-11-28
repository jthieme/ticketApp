import React, {useState, useEffect} from 'react';
import {styles, Colors} from '../components/styles';
import { SafeAreaView } from 'react-native';
import Ticket from '../components/Ticket';
import {data} from '../components/Data';

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
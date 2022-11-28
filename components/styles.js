import {StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import {darkMode} from './../screens/Account';
// colors
export const Colors = {
    bg: '#eee',
    primary: '#fff',
    secondary: '#e5e7eb',
    tertiary: '#1f2937',
    darkLight: '#9ca3f9',
    brand: '#1d48f9',
    green: '#10b981',
    red: '#ff2222',
    black: '#000',
    dark: '#222',
    darkFont: '#bbb',
    gray: '#888',
    lightGray: '#dfdfdf'
}

export const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: Colors.bg,
    },
    TicketCard : {
        padding: 10,
        justifyContent: 'space-between',
        borderColor: Colors.red,
        backgroundColor: Colors.primary,
        marginTop: 15,
        flexDirection: 'row',
    },
    TicketCardExpand: {
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
    },
    TicketCardImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    TicketCardName:{
        fontSize: 17,
        fontWeight: 'bold'
    },
    TicketCardSubject: {
        fontSize: 16,
        paddingBottom: 5
    },
    TicketCardDesc: {
        fontSize: 14,
        flexWrap: 'wrap',
    },
    TicketCardInner: {
        flexDirection: "column",
        width: 100
    },
    TicketCardButton: {
        height: 50,
    },
    NavBar: {
        backgroundColor: Colors.black,
        padding: 10,
        height: 70
    },
    NavBarItem: {
        padding: 6,
        fontSize: 13
    },
    TaskContainer: {
        flex: 1,
        paddingTop: 15,
        padding: 10,
        backgroundColor: Colors.bg
    },
    TaskInput: {
        borderColor: Colors.darkLight,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        height: 45,
    },
    TaskDesc: {
        borderColor: Colors.darkLight,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        height: 85,
    },
    TaskButton: {
        flexDirection: 'row',
        backgroundColor: Colors.darkLight,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4
    },
    TaskButtonText: {
        fontSize: 16
    },
    AccountContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: darkMode ? Colors.dark : Colors.bg
    },
    AccountHeader: {
        flexDirection: 'row', 
        padding: 15
    },
    AccountImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    AccountName: {
        marginLeft: 10,
        height: 50,
        fontSize: 24,
        paddingLeft: 10,
        paddingTop: 5,
        color: Colors.black
    },
    AccountPosition: {
        marginLeft: 10,
        height: 50,
        fontSize: 16,
        paddingLeft: 10,
        color: Colors.black
    },
    AccountMain: {
        padding: 5,
        paddingLeft: 15
    },
    AccountText: {
        marginTop: 5,
        height: 50,
        fontSize: 18,
        color: Colors.black
    },
    AccountSlider: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    AccountButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 5,
        paddingLeft: 10
    },
    AccountButtonStyle: {
        padding: 10,
        backgroundColor: Colors.darkLight,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    AccountButtonText: {
        fontSize: 16
    },
    SettingsContainer: {
        flex: 1,
        marginTop: 15
    }, 
    SettingsHeader: {
        padding: 10,
    },
    SettingsSearch: {
        borderColor: Colors.darkLight,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        marginBottom: 5,
        height: 45,
        flexDirection: 'row'
    },
    SettingsSearchText: {
        paddingLeft: 5
    },
    SettingsButton: {
        flex: -1,
        margin: 10
    },
    DividerLine: {
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    FilterItem: {
        fontSize:20,
        paddingVertical: 8,
    },
    FilterItemBackground: {
        // backgroundColor: Colors.lightGray,
        width: '95%',
        
    }

});
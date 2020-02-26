import {Dimensions, StyleSheet} from "react-native";
import { HEADER_COLOR } from '../config/colors';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    bgImage: {
        // flex: 1,
        // top: 0,
        // left: 0,
        // backgroundColor: '#f7f7f7',
        // width: SCREEN_WIDTH,
        // height: SCREEN_HEIGHT,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    innerContainer: {
        flexDirection:'column',
        flex: 1,
        width: SCREEN_WIDTH
    },
    header: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 10 / 100,
        paddingTop: SCREEN_HEIGHT * 3 / 100,
        alignItems: 'center',
        alignSelf: 'center',
        top: 0
    },
    headerTitleStyle: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingTop: 10
    },
    topContainer: {
        flex:1,
        // backgroundColor: HEADER_COLOR
    },
    bottomContainer: {
        flex:1.5,
        backgroundColor: '#ffffff'
    }
});

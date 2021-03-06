import {Dimensions, StyleSheet} from "react-native";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
    container: {
        flex: 1
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

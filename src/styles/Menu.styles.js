import {
    StyleSheet
} from 'react-native'

import {SCREEN_HEIGHT, SCREEN_WIDTH} from "./Master.styles";

export const MenuStyle = StyleSheet.create({
    imageStyle:{
        marginLeft:15,
        marginRight:20,
        alignSelf:'center',
        width:20,
        height:24,
        justifyContent:'center'
    },
    container: {
        width: SCREEN_WIDTH,
        backgroundColor:'#f6f6f6',
        flex: 1,
        alignSelf: 'stretch'
    }
});

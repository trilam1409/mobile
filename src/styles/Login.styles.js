import {Dimensions, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
    loginContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingLeft: wp(5),
        paddingRight: wp(5),
        paddingTop: wp(30),
    },

    wrapForm: {
        paddingTop: wp(10),
    },

    wrapButton: {
        marginTop: 20,
        borderRadius: 30,
        overflow: 'hidden'

    },


    title: {
        fontSize: wp(8),
        color: '#fff',
        paddingBottom: 8,

    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,
    },

    textBold: {
        fontWeight: 'bold',
    },

    textSubTitle: {
        fontSize: wp(4.5),
        color: '#fff',
        textAlign: 'center',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#fff",
        paddingTop: wp(10)
    },
});


{/*<Animated.View style={[slideInDown.getLayout(), {opacity: fadeIn}]}>*/
}
{/*<View style={Styles.logo}>*/
}
{/*<AutoHeightImage width={100} source={require('../../../assets/images/vnwl_logo_white.png')}/>*/
}
{/*</View>*/
}
{/*</Animated.View>*/
}

import React from 'react';
import {View, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import {Text} from 'react-native-elements';
import MyCoursesCardList from './MyCoursesCardList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyCoursesView = (props) => {
    const {listCourses, onCardPress, quote, myProfile} = props;

    return (
        <View style={{flex: 1}}>

            <ImageBackground style={Styles.imageHeader} source={{uri: quote.img_url}}>
                <SafeAreaView>
                    <View style={Styles.textHeader}>
                        <Text style={Styles.textHi}>Chào {myProfile.full_name}</Text>
                        <Text style={Styles.textQuote}>{quote.quote}</Text>
                        <Text style={Styles.textAuthor}>{quote.author}</Text>
                    </View>
                </SafeAreaView>

            </ImageBackground>
            <SafeAreaView style={{flex: 1}}>
                <MyCoursesCardList listCourses={listCourses} onCardPress={onCardPress}/>
            </SafeAreaView>


        </View>


    );
};

const Styles = StyleSheet.create({
    imageHeader: {
        resizeMode: 'contain',

    },
    textHeader: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    textHi: {
        fontWeight: '500',
        fontSize: wp(4),
        color: '#ffff',
        paddingBottom: wp(3),
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,

    },

    textQuote: {
        fontSize: wp(5.5),
        color: '#fff',
        fontWeight: '300',
        paddingBottom: wp(2),
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,
    },

    textAuthor: {
        fontSize: wp(4),
        color: '#fff',
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,
    },
});

export default MyCoursesView;

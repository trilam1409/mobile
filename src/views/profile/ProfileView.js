import React from 'react';
import {
    Text,
    View,
    StyleSheet, SafeAreaView, Dimensions
} from 'react-native';

import {Avatar, Card} from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import MenuProfileView from './MenuProfileView';

const ProfileView = (props) => {
    const {onLogoutPress, onMenuItemPress, userData} = props;

    return (
        <View style={Styles.container}>


            <AutoHeightImage in width={Dimensions.get('window').width} style={Styles.imageHeader}
                             source={require('../../../assets/images/headerProfile.png')}/>


            <SafeAreaView>
                <View style={Styles.wrapInfo}>
                    <Avatar
                        placeholderStyle={{backgroundColor: '#fff'}}
                        width={100}
                        height={100}
                        rounded
                        source={{uri: userData.avatar}}
                    />
                    <Text style={Styles.textName}>{userData.full_name}</Text>
                </View>

                <View style={Styles.wrapCard}>
                    <View style={Styles.cardInner}>

                        <LinearGradient style={Styles.wrapNumber} colors={['#005C97', '#363795']}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}>
                            <Text style={Styles.textNumber}>{userData.course_wait}</Text>
                        </LinearGradient>

                        <Text style={Styles.textCardInfo}>Số khoá chưa học</Text>
                    </View>
                    <View style={Styles.cardInner}>
                        <LinearGradient style={Styles.wrapNumber} colors={['#76b852', '#8DC26F']}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}>
                            <Text style={Styles.textNumber}>{userData.course_studied}</Text>
                        </LinearGradient>

                        <Text style={Styles.textCardInfo}>Số khoá hoàn thành</Text>
                    </View>
                </View>

                <MenuProfileView onLogoutPress={onLogoutPress} onMenuItemPress={onMenuItemPress}/>

                {/*<View style={Styles.logoFooter}>*/}
                {/*<AutoHeightImage width={130} source={require('../../assets/images/vnwl_logo.png')}/>*/}
                {/*</View>*/}

            </SafeAreaView>


        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',

    },

    imageHeader: {
        marginBottom: -50,
    },

    wrapInfo: {
        alignItems: 'center',
        paddingBottom: 30,
    },

    textName: {
        paddingTop: 10,
        fontSize: wp(5.5),

    },

    wrapCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
        paddingLeft: wp(8),
        paddingRight: wp(8),
    },

    cardInner: {
        width: wp(40),
        alignItems: 'center',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: '#fff',
        borderRadius: 8,

    },

    wrapNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(9),
        height: wp(9),
        borderRadius: 30,
    },

    textNumber: {
        color: '#fff',
        fontSize: wp(5),
    },

    textCardInfo: {
        paddingTop: 15,
        textAlign: 'center',
    },

    logoFooter: {
        alignItems: 'center',
        paddingBottom: 20,
    },
});

export default ProfileView;

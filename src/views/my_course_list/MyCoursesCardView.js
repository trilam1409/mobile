import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import {Bar} from 'react-native-progress';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ripple from 'react-native-material-ripple';

export default function MyCoursesCardView(props) {
    const {item, onCardPress} = props;

    const {image_url, name, author, process, start_date, expired_day} = item;

    const ProgressBar = (props) => {
        const {process} = props;

        if (process == 0) {
            return (
                <View style={Styles.progressBar}>
                    <Text style={[Styles.textProgressBar, {color: '#808080'}]}>Hoàn thành {process * 100}%</Text>
                    <Bar progress={process} width={null} borderWidth={0} color={'#808080'}
                         unfilledColor={'#808080'}/>
                </View>

            );
        }

        if (process >= .8) {
            return (
                <View style={Styles.progressBar}>
                    <Text style={[Styles.textProgressBar, {color: '#7ed321'}]}>Hoàn thành {process * 100}%</Text>
                    <Bar progress={process} width={null} borderWidth={0} color={'#7ed321'}
                         unfilledColor={'#d8f1bc'} />
                </View>
            );

        }

        return (
            <View style={Styles.progressBar}>
                <Text style={[Styles.textProgressBar, {color: '#e6c60d'}]}>Hoàn thành {process * 100}%</Text>
                <Bar progress={process} width={null} borderWidth={0} color={'#e6c60d'}
                     unfilledColor={'#f7f1a6'}/>
            </View>
        );
    };


    return (

        <Ripple rippleColor={'#fff'} onPress={() => onCardPress(item)} disabled={!expired_day && true}>
            <View style={Styles.containerCard}>

                {
                    !expired_day && <View style={Styles.containerCardExpired}></View>
                }

                <View style={Styles.wrapTime}>
                    <Text style={Styles.startDate}>Mời học {start_date}</Text>

                    {
                        !expired_day ? <Text style={[Styles.expiredDay, {color: '#808080'}]}> • Hết hạn</Text>
                            : <Text style={[Styles.expiredDay, {color: '#00b9f2'}]}> • Còn {expired_day} ngày sử
                                dụng</Text>
                    }

                </View>
                <View style={Styles.wrapContent}>
                    <View style={{flex: 2}}>
                        <Image
                            resizeMode="cover"
                            style={Styles.imageCourse}
                            source={{uri: image_url}}
                        />
                    </View>
                    <View style={{flex: 5, paddingLeft: 12, justifyContent: 'space-between'}}>
                        <Text style={Styles.nameCourse} numberOfLines={2} ellipsizeMode='tail'>
                            {name}
                        </Text>
                        <Text style={Styles.author} numberOfLines={1} ellipsizeMode='tail'>
                            Giảng viên: {author}
                        </Text>
                    </View>
                </View>

                <ProgressBar process={process}/>
            </View>
        </Ripple>

    );
}

const Styles = StyleSheet.create({
    containerCard: {
        flexDirection: 'column',
        position: 'relative',
        padding: 0,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: '#fff',
        borderRadius: 4
    },

    containerCardExpired: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.1)',
        zIndex: 10,
        borderRadius: 4

    },

    wrapTime: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },

    startDate: {
        fontSize: wp('3'),
        color: '#6d7278',
    },

    expiredDay: {
        fontSize: wp('3'),
    },

    wrapContent: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
        minHeight: 86
    },

    imageCourse: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 4,
    },
    nameCourse: {
        fontWeight: '500',
        fontSize: wp(4),
        color: '#212529',
        paddingBottom: 12,
    },

    author: {
        fontSize: wp(3),
        color: '#6d7278',
    },
    progressBar: {
        borderTopWidth: 1,
        borderTopColor: '#ededed',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },

    textProgressBar: {
        paddingBottom: 5,
    },
});

import React from 'react';
import {StyleSheet, Text, SectionList} from 'react-native';
import MyCoursesCardView from './MyCoursesCardView';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MyCoursesCardList(props) {
    const {listCourses, onCardPress} = props;

    return (

            <SectionList
                sections={listCourses}
                keyExtractor={(item, index) => index.toString()}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={Styles.title}>{title}</Text>
                )}
                renderItem={({item, index, section}) => (
                    <MyCoursesCardView item={item} onCardPress={onCardPress}/>
                )}
                stickySectionHeadersEnabled={false}
            />

    );
}

const Styles = StyleSheet.create({
    title: {
        fontSize: wp(5),
        fontWeight: '600',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 30,
        paddingBottom: 20
    },
});

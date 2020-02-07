import React from 'react';
import { View, Text } from 'react-native';
import MyCoursesCardList from './MyCoursesCardList';

export default function MyCoursesView(props){
    const { listCourses, onCardPress } = props;
    return(
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <MyCoursesCardList listCourses={listCourses} onCardPress={onCardPress}/>
        </View>
    )
}

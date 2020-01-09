import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import MyCoursesCardView from "./MyCoursesCardView";

export default function MyCoursesCardList(props){
    const { listCourses, onCardPress } = props;
    return(
        <ScrollView>
            <FlatList
                vertical
                data = {listCourses}
                renderItem = {({item}) =>
                    <TouchableWithoutFeedback onPress={ () => onCardPress(item) } >
                        <View>
                            <MyCoursesCardView item={item} />
                        </View>
                    </TouchableWithoutFeedback>
                }
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled
            />
        </ScrollView>
    )
}

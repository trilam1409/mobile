import React from 'react';
import {
    View,
    ScrollView,
    FlatList } from 'react-native';
import { WelcomeStyle } from '../styles/Welcome.styles';
import CategoryView from "./course_list/CategoryView";

export default function WelcomeView(props) {
    const { listCategoriesCourses, onCardPress } = props;

    return (
        <View style={WelcomeStyle.container}>
            <ScrollView>
                <FlatList
                    vertical
                    data = {listCategoriesCourses}
                    renderItem = {({item}) =>
                        <CategoryView categoryImage={item.categoryImageUri} title={item.title} listCourses={item.course} onCardPress={onCardPress}/>
                    }
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    directionalLockEnabled
                />
            </ScrollView>
        </View>
    );
}


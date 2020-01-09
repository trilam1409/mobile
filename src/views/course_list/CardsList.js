import React, { Component } from 'react';
import CardView from './CardView';
import { ScrollView, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'

export default function CardsList(props) {
    const { listCourses, onCardPress } = props;
    return(
        <ScrollView>
            <FlatList
                horizontal
                data = {listCourses}
                renderItem = {({item}) =>
                    <TouchableWithoutFeedback onPress={ () => onCardPress(item) } >
                        <View>
                            <CardView item={item} />
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

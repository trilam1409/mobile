import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import CardList from './CardsList';
import { WelcomeStyle } from '../../styles/Welcome.styles';

export default function CategoryView(props){
    const { categoryImage, title, listCourses, onCardPress } = props;
    return(
        <View style={{ flexDirection: 'row' }}>
            <Card
                containerStyle={WelcomeStyle.category}
                image={categoryImage}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    {title}
                </Text>
            </Card>

            <CardList listCourses={listCourses} onCardPress={onCardPress}/>
        </View>
    )
}

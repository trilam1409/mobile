import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { Style as MyCourseStyle } from '../../styles/MyCourses.styles';

export default function MyCoursesCardView(props){
    const { item } = props;
    return(
        <Card containerStyle={MyCourseStyle.cardContainer} wrapperStyle={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
                <Image
                    resizeMode="cover"
                    style={{
                        position:'absolute',
                        left:0,
                        right:0,
                        top:0,
                        bottom:0
                    }}
                    source={{uri: item.image_url}}
                />
            </View>
            <View style={{ flex: 5, margin: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#172b4d' }}>
                    {item.name}
                </Text>
                <Text style={{ marginTop: 30, color: '#172b4d' }}>
                    {item.author}
                </Text>
            </View>
        </Card>
    )
}

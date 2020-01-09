import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import * as NumberUtil from '../../utils/NumberUtil';

export default function CardView(props){
    const { item } = props;
    return(
            <Card
                image={item.imageUri}>
                <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}>
                    {item.title}
                </Text>
                <Text style={{marginBottom: 10}}>
                    {NumberUtil.formatNumber(item.price)} $
                </Text>
                <Text style={{marginBottom: 10}}>
                    {item.description}
                </Text>
            </Card>
    )
}

import React from 'react';
import {
    View,
    ScrollView,
    FlatList } from 'react-native';
import { StaticScreenStyle } from '../styles/StaticScreen.styles';

export default function StaticScreenView(props) {
    const { staticContent } = props;

    return (
        <ScrollView style={StaticScreenStyle.staticContentContainer}>
            {staticContent}
        </ScrollView>
    );
}


import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from './Master.styles';

export const Style = StyleSheet.create({
    cardContainer: {
        padding: 8,
        maxHeight: SCREEN_HEIGHT * 15 / 100,
        borderRadius: 4,
    }
});

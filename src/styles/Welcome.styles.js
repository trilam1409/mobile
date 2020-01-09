import { StyleSheet, Dimensions } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './Master.styles';

export const WelcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    category: {
        width: SCREEN_WIDTH / 2.5
    },
    card: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

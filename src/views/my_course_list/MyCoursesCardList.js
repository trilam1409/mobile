import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, FlatList, TouchableWithoutFeedback, Animated} from 'react-native';
import MyCoursesCardView from './MyCoursesCardView';
import Ripple from 'react-native-material-ripple';

export default function MyCoursesCardList(props) {
    const {listCourses, onCardPress} = props;


    const [slideInDown] = useState(new Animated.ValueXY({x: 0, y: 50}));
    const [fadeIn] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            slideInDown,
            {
                toValue: {x: 0, y: 0},
                duration: 1000,
            },
        ).start();

        Animated.timing(
            fadeIn,
            {
                toValue: 1,
                duration: 1000,
            },
        ).start();
    }, []);

    return (
        <FlatList
            data={listCourses}
            renderItem={({item}) =>
                <Ripple rippleColor={'#fff'} onPress={() => onCardPress(item)}>
                    <Animated.View style={[slideInDown.getLayout(), {opacity: fadeIn}]}>
                        <View>
                            <MyCoursesCardView item={item}/>
                        </View>
                    </Animated.View>
                </Ripple>
            }
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    );
}

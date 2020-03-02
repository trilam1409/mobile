import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientWrap = (props) => {

    const {styleContainer, children} = props;

    return (
        <LinearGradient style={styleContainer} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
                        colors={['#444973', '#4C6785', '#5E7367']}>
            {children}
        </LinearGradient>
    )
}

export default LinearGradientWrap;

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientWrap = (props) => {

    const {styleContainer, children} = props;

    return (
        <LinearGradient style={styleContainer} start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#0283df', '#76bdf0']}>
            {children}
        </LinearGradient>
    )
}

export default LinearGradientWrap;

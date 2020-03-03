import React from 'react';
import {ListItem, Icon} from 'react-native-elements';
import {View} from 'react-native';
import {Term} from './static_content/Term';
import {StyleSheet} from 'react-native';

import Ripple from 'react-native-material-ripple';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


const MenuProfileView = (props) => {

    const {onLogoutPress, onMenuItemPress} = props;

    return (
        <View style={Styles.container}>

            <Ripple>
                <ListItem
                    key={0}
                    title={'Quản lý thông báo'}
                    leftIcon={<View style={Styles.iconStyle}><Icon type={'material-community'} name={'bell'}
                                                                   color={'#FFBC42'}
                                                                   size={wp(5)}/></View>}
                    chevron
                    bottomDivider
                    titleStyle={Styles.titleStyle}
                    containerStyle={Styles.containerStyle}
                />
            </Ripple>

            <Ripple onPress={() => onMenuItemPress(Term(), 'ĐIỀU KHOẢN SỬ DỤNG')}>
                <ListItem
                    key={1}
                    title={'Điều khoản sử dụng'}
                    leftIcon={<View style={Styles.iconStyle}><Icon type={'ionicon'} name={'md-paper'} color={'#F16B6F'}
                                                                   size={wp(5)}/></View>}
                    chevron
                    bottomDivider
                    titleStyle={Styles.titleStyle}
                    containerStyle={Styles.containerStyle}
                />
            </Ripple>

            <Ripple  onPress={onLogoutPress}>
                <ListItem
                    key={2}
                    title={'Đăng xuất'}
                    leftIcon={<View style={[Styles.iconStyle, {borderBottomColor: 'transparent'}]}><Icon
                        type={'ionicon'}
                        name={'ios-log-out'}
                        color={'#6d9d88'}
                        size={wp(5)}/></View>}
                    chevron
                    titleStyle={Styles.titleStyle}
                    containerStyle={Styles.containerStyle}
                />
            </Ripple>
        </View>
    );
};

const Styles = StyleSheet.create({

    container: {
        borderTopColor: '#bcbbc1',
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderBottomColor: '#bcbbc1',
        backgroundColor: '#fff',
        marginBottom: wp(20),
    },
    containerStyle: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 5,
        marginRight: 16,
    },

    iconStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginBottom: -1,
        paddingBottom: 17,
        paddingLeft: 16,
        paddingRight: 16,
    },
    titleStyle: {
        color: '#4a4a4a',
        fontSize: wp(4),
        paddingBottom: 16,
    },
});

export default MenuProfileView;



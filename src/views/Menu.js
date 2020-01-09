import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

import { Avatar } from 'react-native-elements'
import { MenuStyle as styles } from '../styles/Menu.styles';
import { Term } from '../views/static_content/Term';
import SettingsList from 'react-native-settings-list';

export default function MenuView(props) {
    const { onLogoutPress, onMenuItemPress } = props;

    return (
        <View style={styles.container}>
            <View style={{flex:1, alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
                <Avatar
                    width={120}
                    height={120}
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                />
                <Text h3 style={{fontWeight: 'bold', fontSize: 17}}>Ngọc Nguyễn</Text>
                <Text>Học viên</Text>
            </View>
            <View style={{backgroundColor:'transparent',flex:2, marginTop: 20}}>
                <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
                    <SettingsList.Item
                        icon={
                            <View style={styles.imageStyle}>
                                <Image style={{alignSelf:'center', height:22, width:22}} source={require('../../assets/images/term_condition_icon.png')}/>
                            </View>
                        }
                        onPress={() => onMenuItemPress(Term(), 'ĐIỀU KHOẢN SỬ DỤNG')}
                        hasNavArrow={false}
                        itemWidth={70}
                        titleStyle={{color:'black', fontSize: 16}}
                        title='Điều khoản sử dụng'
                    />

                    <SettingsList.Item
                        icon={
                            <View style={styles.imageStyle}>
                                <Image style={{alignSelf:'center', height:22, width:22}} source={require('../../assets/images/privacy_policy_icon.png')}/>
                            </View>
                        }
                        onPress={() => onMenuItemPress(Term(), 'ĐIỀU KHOẢN SỬ DỤNG')}
                        hasNavArrow={false}
                        itemWidth={70}
                        titleStyle={{color:'black', fontSize: 16}}
                        title='Nguyên tắc về riêng tư'
                    />

                    <SettingsList.Item
                        icon={
                            <View style={styles.imageStyle}>
                                <Image style={{alignSelf:'center', height:22, width:22}} source={require('../../assets/images/sign-out.png')}/>
                            </View>
                        }
                        hasNavArrow={false}
                        itemWidth={70}
                        onPress={onLogoutPress}
                        titleStyle={{color:'black', fontSize: 16}}
                        title='Đăng xuất'
                    />
                </SettingsList>
            </View>
            <View style={{alignItems: 'center', alignSelf: 'center', marginBottom: 20}}>
                <Text>1.0.0</Text>
                <View>
                    <Image style={{height:20, width:76}} source={require('../../assets/images/eduworks_final_logo.png')}/>
                </View>
            </View>
        </View>
    );
}


import AsyncStorage from '@react-native-community/async-storage';

exports.storeToCache = async ({ key, data }) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return JSON.stringify(data);
    } catch (e) {
        return e.message;
    }
};

exports.getFromCache = async (key) => {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
    } catch (e) {
        return e.message;
    }
};

exports.removeFromCache =  async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(e) {
        return e.message;
    }
};

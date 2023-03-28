import React, { useEffect } from 'react';
import { StyleSheet, Image, View, useWindowDimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setTimeout(() => {
                navigation.navigate('List');
            }, 3000);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{
                uri: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
            }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: useWindowDimensions.height,
        width: useWindowDimensions.width
    },
    logo: {
        width: wp('90%'),
        height: hp('12%'),
        alignSelf: 'center',
        marginBottom: hp('2%')
    }
})

export default Splash;
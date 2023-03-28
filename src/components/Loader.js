import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'#f40000'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('100%'),
        width: wp('100%')
    }
})

export default Loader;
import React from 'react'
import {ActivityIndicator, View, StyleSheet, useWindowDimensions, Text, SafeAreaView} from 'react-native'
import COLORS from '../colors/colors';

const Loader = ({visible = true}) => {
    const {height, width} = useWindowDimensions();
    return visible && <SafeAreaView style={[style.container, {height, width}]}>
        <View style={style.loader}>
            <ActivityIndicator size="large" color={COLORS.blue}/>
            {/* <Text style={{marginRight: 10, fontSize: 16}}>Loading...</Text> */}
        </View>
    </SafeAreaView>;
};

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        height: 70,
        backgroundColor: COLORS.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
})

export default Loader
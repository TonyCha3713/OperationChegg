import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native';
import COLORS from '../colors/colors';

const HomeworkDetail = ({navigation}) => {
    const route = useRoute();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: COLORS.black}}>
            <Text style={{color: COLORS.white}}>{route.params.item.title}</Text>
            <Text style={{color: COLORS.white}}>{route.params.item.body}</Text>
            <Button 
                title="GO BACK"
                onPress={() => {
                    Alert.alert(
                        "Confirmation",
                        "Are you sure you want to buy?",
                        [
                            {text: 'Buy', onPress: () => console.log('Buy button clicked')},
                            {text: 'Cancel', onPress: () => console.log('Cancel button clicked'), style: 'cancel'}
                        ]

                    )
                    navigation.goBack();
                }}
            />
        </View>
    );
}

export default HomeworkDetail;
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import * as Notifications from 'expo-notifications';
import { useEffect } from "react";

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true
        }
    }
});

const HomeScreen = () => {
    
    useEffect(() => {
        const subscription = Notifications.addNotificationResponseReceivedListener(response => {
            console.log('Resieved');
            console.log(response.notification.request.content.data.userName)
        });

        return () => {
            subscription.remove();
        }
    }, []);
    const notify = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Hi',
                body: 'Press me ASAP',
                data: {
                    userName: 'Sergei'
                },
            },
            trigger: {
                seconds: 5
            }
        });
    };

    return (
        <ImageBackground source={require('../assets/background.jpg')} resizeMethod='resize' style={styles.rootScreen}>
            <Text style={{color: '#12f12e'}}>Home Screen</Text>
            <Button title='Notify' onPress={notify}/>
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    }
})
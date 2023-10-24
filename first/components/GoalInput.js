import { useState } from 'react';

import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

export default function GoalInput({addGoal, visible, closeModal}) {
    const [goal, setGoal] = useState('');

    function onAddGoal() {
        addGoal(goal);
        setGoal('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/1601364676.png')} style={styles.image}/>
                <TextInput 
                    placeholder='Input your goal' 
                    style={styles.textInput}
                    onChangeText={(value) => setGoal(value)}
                    value={goal}/>
                <View style={styles.actions}>
                    <View style={styles.button}>
                        <Button title='Close' onPress={closeModal} color='red'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={onAddGoal} color='rgba(238,238,247,1)'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'rgba(213,213,221,1)',
        backgroundColor: 'rgba(238,238,247,1)',
        borderWidth: 1,
        width: '70%',
        padding: 5,
        marginBottom: 20
    },
    inputContainer: {
        backgroundColor: 'rgba(196,222,241,1)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 10
    },
    actions: {
        flexDirection: 'row',

    },
    button: {
        width: '30%',
        marginHorizontal: 16
    },
    image: {
        width: '100%',
        height: 100,
        marginBottom: 50,
    }
});
  
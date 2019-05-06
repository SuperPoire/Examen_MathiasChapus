import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

type Props = {};
export default class LoginForm extends Component<Props> {

    _putNotes() {
        fetch('mongodb://localhost:27017/Examen_MathiasChapus/putNotes', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-Type': 'application/json',
            },
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.input}
                        placeholder="login"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => { this.setState({ identificationLogin: text }) }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.input}
                        placeholder="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => { this.setState({ identificationPassword: text }) }} />
                </View>

                <View style={{ margin: 5 }}>
                    <TouchableOpacity onPress={this._onLogin.bind(this)} style={styles.button}>
                        <Text>Se connecter</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 5 }}>
                    <TouchableOpacity onPress={() => { this.props.setParentState({ isLogin: false }) }} style={styles.button}>
                        <Text>Créer un compte</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'silver',
        borderWidth: 1,
        flex: 1,
        margin: 10,
        padding: 5,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
    },
});
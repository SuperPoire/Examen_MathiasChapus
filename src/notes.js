import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';

type Props = {};
export default class SearchView extends Component<Props> {

    state = {
        search_TitleActor: "",
        search_Category: ""
    }

    componentWillMount() {

    }

    _buttonAdd() {
         fetch('mongodb://localhost:27017/Examen_MathiasChapus', {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                       'content-Type': 'application/json',
                     },
                 })
    render() {
        return (

            <View style={styles.container}>
                
                <View style={styles.viewSearch}>
                    <TextInput style={styles.input}
                        placeholder="Titre"
                        autoCapitalize="none"
                        autoCorrect={false}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewSearch: {
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    container: {
        flexDirection: 'column'
    },
    input: {
        height: 40,
        borderColor: 'silver',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        flex:1
        //padding: 5,
    },
    pickerStyle: {
        
        margin:5
    },
    buttonSearch: {
        backgroundColor: 'silver',
        borderRadius: 5,
        marginRight:5,
        padding:5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
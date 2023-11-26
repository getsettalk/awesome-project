import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const TableView = () => {

    const [newdetaildata, setNewDetailData] = useState();
    const [builtuparea, setBuiltUPArea] = useState();
    const [completiontime, setCompletionTime] = useState();
    const [noofunskilledlabor, setNoOfUnSkilledLabor] = useState();
    const [noofskilledlabor, setNoOfSkilledLabor] = useState();
    const [wagesunsikilledlabor, setWagesUnSkilledLabor] = useState();

    return (
        <View style={[styles.container1, { backgroundColor: '#fff' }]}>
            <View style={{ paddingHorizontal: 14, paddingVertical: 12 }}>
                <View style={[styles.Container, { columnGap: 1 }]}>
                    <Text style={styles.Textinput}>Side Address</Text>
                    <Text style={styles.Textinput}>Built-Up Area</Text>
                    <Text style={[styles.Textinput]}>Completion Time</Text>
                </View>
                <View style={[styles.Container, { columnGap: 1 }]}>
                    <TextInput style={styles.InputText} placeholder='Type Address' value={newdetaildata} onChangeText={(text) => setNewDetailData(text)} />
                    <TextInput style={styles.InputText} keyboardType='number-pad' placeholder='Type Area' value={builtuparea} onChangeText={(text) => setBuiltUPArea(text)} />
                    <TextInput style={styles.InputText} keyboardType='number-pad' placeholder='Type Time' value={completiontime} onChangeText={(text) => setCompletionTime(text)} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 14, paddingVertical: 12 }}>
                <View style={[styles.Container, { columnGap: 1 }]}>
                    <Text style={styles.Textinput}>No of UnSkilled Labor</Text>
                    <Text style={styles.Textinput}>No of Skilled Labor</Text>
                    <Text style={[styles.Textinput]}>Wages-UnSkilled Labor</Text>
                </View>
                <View style={[styles.Container, { columnGap: 1 }]}>
                    <TextInput style={styles.InputText} keyboardType='number-pad' placeholder='Type Un-Labour' value={noofunskilledlabor} onChangeText={(text) => setNoOfUnSkilledLabor(text)} />
                    <TextInput style={styles.InputText} keyboardType='number-pad' placeholder='Type Skiled' value={noofskilledlabor} onChangeText={(text) => setNoOfSkilledLabor(text)} />
                    <TextInput style={styles.InputText} keyboardType='number-pad' placeholder='Type Wages' value={wagesunsikilledlabor} onChangeText={(text) => setWagesUnSkilledLabor(text)} />
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#1212',
        width: '20%',
        borderRadius: 4,
        marginLeft: '76%',
    },
    addButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 30,
    },
    Container: {
        display: 'flex',
        flexDirection: 'row',
    },
    Textinput: {
        width: '34%',
        backgroundColor: '#Eaeaea',
        padding: 10,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '700',
    },
    container1: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 8,
        borderRadius: 6,
        shadowColor: '#0d051a',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    InputText: {
        width: '34%',
        height: 40,
        fontWeight: '700',
        paddingLeft: 20,
        backgroundColor: '#d9d1d1',
    },
});

export default TableView
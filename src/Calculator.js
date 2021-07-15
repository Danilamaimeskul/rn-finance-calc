import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

let categories =[ 
    {category:'coffee',  spend: 0},
    {category:'book', spend: 0,},
    {category:'parking' , spend: 0,},
    {category:'food', spend: 0,},
    {category:'apartments', spend: 0},
]
export const Calculator = (props) =>{


    const [money, setMoney] = useState(0)
    const [tempMoney, setTempMoney] = useState(0)

    const pressHandler = () => {
        // setMoney(tempMoney);
        setTempMoney(+(tempMoney) + +(money))
        console.log(tempMoney)
    }

    return(
        <View style={styles.container}>
            <Text>{tempMoney}</Text>
            <View style={styles.addBlock}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={setMoney}
                    placeholder='Add money'
                    value = {money}
                />
                <Button title='Add money' onPress={pressHandler}/>
            </View>
            <Spending />
        </View>
    );
}

function Spending (props) {
    return(
        <View>
            <Text>Spending</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black'
    },
    addBlock: {
        flexDirection: 'row'
    },
    container: {
        alignItems: 'center'
    }
  });
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TableView from '../Component/TableView'
import { ScrollView } from 'react-native-gesture-handler'

const ConstructionComponent = () => {

  const [count, setCount] = useState(1);

  const renderTableViews = () => {
    const tableViews = [];
    for (let i = 0; i < count; i++) {
      tableViews.push(<TableView key={i} />);
    }
    console.log(tableViews)
    return tableViews;
  };


  return (
    <ScrollView>
      <View style={{ backgroundColor: '#a7a7a7', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20, backgroundColor: '#fff', color: '#000', padding: 2 }}>{count}</Text>

        <TouchableOpacity style={{ backgroundColor: '#f6be08', width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => setCount(count + 1)}>
          <Text style={{ fontSize: 40, color:'#2e2e2e' }}>+</Text>
        </TouchableOpacity>
      </View>
      {renderTableViews()}
    </ScrollView>
  )
}

export default ConstructionComponent
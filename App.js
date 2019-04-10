import React, { Component} from 'react';
import { AppRegistry,Alert, Text, TextInput,StyleSheet,FlatList,Button,View } from 'react-native';


export default class PizzaTranslator extends Component {
  constructor(probs){
    super(probs);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={{padding: 40}}>
       <FlatList
          data={[
            {key: 'Молоко'},
            {key: 'Хліб'},
            {key: 'Сир'},
            {key: 'Масло'},
            {key: 'Помідор'},
            {key: 'Огірок'},
            {key: 'Капуста'},
            {key: 'Буряк'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Button
  onPress={() => {
    Alert.alert('ЗАМОВЛЕННЯ ПРИЙНЯТО');
  }}
  title="Купити"
/>
        <TextInput style={{heigt: 10}}
        placeholder="Поле для введення"
        onChangeText={(text) => this.setState({text})} />
        <Text style={{padding:20, fontSize: 50}}>
        {this.state.text.split(' ').map ((word) => word && '').join(' ')}
        </Text>
       
       
  
      </View>
    );
  }
}
AppRegistry.registerComponent('FirstApp', ()=>PizzaTranslator);


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    backgroundColor: 'yellow',
    padding: 15,
    fontSize: 20,
    height: 50,
  },
})
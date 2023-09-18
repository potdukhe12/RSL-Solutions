import {Text,View,StyleSheet} from 'react-native';

export default UserData = (props) => {
    const item = props.item;
    return (
      <View style={styles.box}>
        <Text style={styles.item}>{item.id}</Text>
        <Text style={styles.item}>{item.name}</Text>
      </View>
    )
  }
  
  const styles=StyleSheet.create({
    item:{
      fontSize:25,
      color:'orange',
      padding:5,
      margin:2,
      flex:1,
      textAlign:'center'
    },
    box:{
      flexDirection:'row',
      borderColor:'orange',
      borderWidth:2,
      marginBottom:10,
    }
  })
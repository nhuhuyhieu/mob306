import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<FlatList
data={[
{ key: 'Devin', sdt: '098762888' },
{ key: 'Dan', sdt: '088299289' },
{ key: 'Dominic', sdt: '090989900' },
{ key: 'Jackson', sdt: '088990088' },
{ key: 'James', sdt: '098779989' },
{ key: 'Joel', sdt: '098787899' },
{ key: 'John', sdt: '078997899' },
]}
renderItem={({ item }) =>

<View style={
{flexDirection: 'row',
backgroundColor: 'green'}
}>

<Text style={styles.item}>{item.key}</Text>
<Text style={styles.item}>{item.sdt}</Text>
</View>



}
/>
</View>
);}

const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 22,
},
item: {
padding: 10,
fontSize: 18,
height: 44,
},
});
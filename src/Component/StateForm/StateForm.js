import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

function StateForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        update(data);
      });
  };
  const update = data => {
    const {name} = data.results[0];
    setFirstName(name.first);
    setLastName(name.last);
    setTitle(name.title);
  };

  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250,
      }}>
      <Text
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: 20,
          fontSize: 18,
          color: 'black',
        }}>
        {' '}
        Name:{' '}
        {!firstName || !lastName || !title
          ? 'Loading...'
          : `${title} ${firstName} ${lastName}`}
      </Text>
      <Button
        onPress={() => fetchRandomUser()}
        title="Update Name"
        color="#841584"
      />
    </View>
  );
}

export default StateForm;

//////////////////////////

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   ScrollView,
//   SafeAreaView,
//   StyleSheet,
//   Button,
// } from 'react-native';
// import styles from './Style';

// const StateForm = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <View
//       style={{
//         alignContent: 'center',
//         justifyContent: 'center',
//         margin: 50,
//       }}>
//       <Text
//         style={{
//           alignContent: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           marginBottom: 10,
//           fontSize: 18,
//         }}>
//         {count}
//       </Text>
//       <Button onPress={() => increment()} title="Add" color="#841584" />
//     </View>
//   );
// };

// export default StateForm;

///////////////////////////////////////////

{
  /*
//parameter, object([])
// useState
const [update, setUpdate] = useState(0);


// Function
const recruit = () => {
    setUpdate(data); 
}
 // Event
<Button 
 onPress = {() => recruit()} title="Add" color="#841584"
 />

 // UseEffect

 useEffect(() => { 
  // here is where you make API call(s) or any side effects
  fetchData('/data')
}, [] ) 
/// passing empty braces is necessary



*/
}

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   ScrollView,
//   SafeAreaView,
//   StyleSheet,
//   Button,
// } from 'react-native';
// import styles from './Style';
// import FormButton from '../../Component/FormButton/index';

// const StateForm = () => {
//   const [companyName, setCompanyName] = useState('');
//   const [jobtitle, setJobTitle] = useState('');
//   const [numberOfOpenings, setNumberOfOpenings] = useState('');
//   const [data, setData] = useState(null);

//   const checkManadatoryValue = () => {
//     console.warn(data);
//   };

//   return (
//     <SafeAreaView style={{margin: 10, borderRadius: 12}}>
//       <ScrollView>
//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>First Name</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 value={companyName}
//                 style={styles.input}
//                 numberOfLines={1}
//                 onChangeText={text => setCompanyName(text)}
//                 placeholder="Rishav"
//                 placeholderTextColor="#666"
//               />
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>last Name</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 value={jobtitle}
//                 style={styles.input}
//                 numberOfLines={1}
//                 onChangeText={text => setJobTitle(text)}
//                 placeholder="Bittu"
//                 placeholderTextColor="#666"
//               />
//             </View>
//           </View>
//         </View>
//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>Age</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 value={numberOfOpenings}
//                 keyboardType="numeric"
//                 style={styles.input}
//                 numberOfLines={1}
//                 onChangeText={text => setNumberOfOpenings(text)}
//                 placeholder="Age"
//                 placeholderTextColor="#666"
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       <View style={{marginTop: 'auto', paddingLeft: 30, paddingRight: 30}}>
//         <FormButton
//           onPress={() => checkManadatoryValue()}
//           buttonTitle={'Submit'}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default StateForm;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChildProps from '../ChildProps';

const ParentProps = () => {
  return (
    <View style={styles.container}>
      <ChildProps SuperHeroName="Thor" status="God of Thunder" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 0,
    borderRadius: 10,
    flex: 1,
  },
});

export default ParentProps;

/////////////////////////////////

// import React from 'react';
// import {View, Text} from 'react-native';

// const Rishu = props => {
//   return (
//     <View>
//       <Text>{props.name}</Text>
//       <Text>{props.status}</Text>
//     </View>
//   );
// };

// const Profile = () => {
//   return (
//     <View style={{justifyContent: 'flex-end', padding: 10}}>
//       <Rishu name="Bittu" status="Programmer" />
//       <Rishu name="Rishav" status="Developer" />
//       <Rishu name="Chiku" status="Coder" />
//     </View>
//   );
// };

// export default Profile;

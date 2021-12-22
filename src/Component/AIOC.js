//Ternary and && operators
//------------------------

import React from 'react';
import {View, Text} from 'react-native';

const Profile = () => {
  let name = 'Rishav';
  return (
    <View>
      {
        name && <Text>{name}</Text>
      }
    </View>

    // <View>
    //  {
    //   name ? <Text>{name}</Text> : <Text>no name</Text>
    //  }
    // </View>
  );
};

export default Profile;


///////////////////

//Props
//-----

import React from 'react';
import {View, Text} from 'react-native';

const Rishu = props => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.status}</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{justifyContent: 'flex-end', padding: 10}}>
      <Rishu name="Bittu" status="Programmer" />
      <Rishu name="Rishav" status="Developer" />
      <Rishu name="Chiku" status="Coder" />
    </View>
  );
};

export default Profile;


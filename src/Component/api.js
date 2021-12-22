import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';

import {APIs} from '../../APIs/Api';
import {
  FlatList,
  Image,
  Linking,
  RefreshControl,
  ActivityIndicator,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../GovtInvestScreen/Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FormButton from '../../components/Buttons/FormButton/index';
import Modal from 'react-native-modal';
//import GovtJobPostComponent from "../../components/GovtJobPostComponent";
import GovtInvestPostComponent from '../../components/GovtInvestPostComponent';
import {env} from '../../config';
import Languages from '../Multi Language/Languages';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Drawer, Searchbar} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';

const GovtInvestScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.reduxState);

  const [state, setState] = useState(null);
  const [token, setToken] = useState(null);
  const [value, setValue] = React.useState('first');
  const [selectedvalue, setSelectedValue] = useState(null);
  //const [data, setData] = useState(params.data);
  // const[location,setLocationData]=useState([{}])
  const [filteredLocation, setFilteredLocation] = useState(null);

  const [visible, setVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState(null);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query !== null) {
      const filterData = state.filter(jsonArray =>
        jsonArray.masterName.toLowerCase().includes(query.toLowerCase()),
      );
      console.log(filterData);
      setFilteredLocation(filterData);
    }
  };

  useEffect(() => {
    auth()
      .currentUser.getIdTokenResult()
      .then(async r => {
        fetch(APIs.MasterAPI + '13', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + r.token,
          },
        })
          .then(response => response.json())
          .then(res => {
            setState(res);
            //console.warn(res)
          })
          .catch(error => {
            console.log('Error' + error);
          });
      })
      .catch(err => console.error('An error occurred', err));
  }, []);

  return (
    <View>
      <ScrollView>
        <Searchbar
          style={{height: 42, marginBottom: 15}}
          placeholder={Languages.searchState}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        {filteredLocation ? (
          <View>
            <RadioButton.Group
              onValueChange={newValue => setSelectedValue(newValue)}
              value={selectedvalue}>
              {filteredLocation &&
                filteredLocation.map((item, key) => (
                  <View
                    key={key}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton value={item.id} />
                    <Text> {item.masterName}</Text>
                  </View>
                ))}
            </RadioButton.Group>
          </View>
        ) : (
          <View>
            <RadioButton.Group
              onValueChange={newValue => setSelectedValue(newValue)}
              value={selectedvalue}>
              {state &&
                state.map((item, key) => (
                  <View
                    key={key}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton value={item.id} />
                    <Text> {item.masterName}</Text>
                  </View>
                ))}
            </RadioButton.Group>
          </View>
        )}
      </ScrollView>
      {/*<View style={{ marginTop: 'auto' }}>
              <TouchableOpacity style={styles.buttonContainer}
               onPress={()=>{toggleCancel()}}
             
              >
                <Text style={styles.buttonText}>{Languages.Submit}</Text>
              </TouchableOpacity>
              
        </View> */}
      {/* <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 200 }}>
        {Languages.ComingSoon}
      </Text> */}
    </View>
  );
};
export default GovtInvestScreen;

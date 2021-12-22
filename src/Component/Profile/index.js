// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   SafeAreaView,
//   ScrollView,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableHighlight,
//   ActivityIndicator,
//   Button,
//   StyleSheet,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import FormInput from '../../components/FormInput/index';
// import FormButton from '../../components/Buttons/FormButton/index';
// import Languages from '../Multi Language/Languages';
// import styles from '../../components/FormInput/styles';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchUser} from '../../redux/actions';
// import {RadioButton, Snackbar} from 'react-native-paper';
// import {firebase} from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';
// import {APIs} from '../../APIs/Api';

// import DocumentPicker from 'react-native-document-picker';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Video from 'react-native-video';
// import {RNCamera} from 'react-native-camera';
// //import VideoRecorder from 'react-native-beautiful-video-recorder';
// import Modal from 'react-native-modal';
// import {useIsFocused} from '@react-navigation/native';

// const EditJob = ({navigation, route: {params}}) => {
//   useEffect(() => {
//     navigation.setOptions({
//       title: Languages.Editjobs,
//     });
//   }, []);

//   const quillref = React.createRef(null);

//   const [experience, setExperience] = useState(null);
//   const [trade, setTrade] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [education, setEducation] = useState(null);
//   const [salary, setSalary] = useState(null);
//   const [jobType, setJobType] = useState(null);

//   const [companyName, setCompanyName] = useState('');
//   const [jobtitle, setJobTitle] = useState('');
//   const [jobdec, setJobDec] = useState('');
//   const post = params.post;
//   console.log(post);

//   const [selectedValue, setSelectedValue] = useState('');
//   const [ExperienceValue, setExperienceValue] = useState('');
//   const [exp, setExp] = useState('');
//   const [tra, setTra] = useState('');
//   const [loc, setLoc] = useState('');
//   const [edu, setEdu] = useState('');
//   const [sal, setSal] = useState('');
//   const [job, setJob] = useState('');
//   const [visible, setVisible] = React.useState(false);

//   const onToggleSnackBar = () => setVisible(!visible);

//   const onDismissSnackBar = () => setVisible(false);

//   const [data, setData] = useState(null);
//   const [authToken, setAuthToken] = useState(null);

//   const [videoFile, setVideoFile] = useState(null);
//   const [videoUri, setVideoUri] = useState(null);
//   const [currentVideoUri, setCurrentVideoUri] = useState(null);
//   const [recording, setRecording] = useState(false);
//   const [processing, setProcessing] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);
//   let cameraRef = useRef(null);
//   const [isCameraModalVisible, setIsCameraModalVisible] = useState(false);
//   const [camType, setCam] = useState(RNCamera.Constants.Type.back);
//   const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
//   const isFocused = useIsFocused();
//   const [currentPaused, setCurrentPaused] = useState(true);
//   const [paused, setPaused] = useState(false);

//   const startRecording = async () => {
//     let value;
//     if (cameraRef.current) {
//       try {
//         const options = {
//           quality: 0.5,
//           videoBitrate: 8000000,
//           maxDuration: 120,
//           mute: false,
//         };
//         const promise = cameraRef?.current?.recordAsync(options);
//         if (promise) {
//           setRecording(true);
//           const data = await promise;
//           console.log('Recorded video data : ' + data);
//           setRecording(false);
//           setCurrentVideoUri(data.uri);
//           for (let key in data) {
//             if (data.hasOwnProperty(key)) {
//               value = data[key];
//               console.log(key, value);
//             }
//           }
//           setVideoFile(data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const stopRecording = () => {
//     cameraRef.current.stopRecording();
//     cameraModelFalse();
//   };
//   let button = (
//     <TouchableOpacity onPress={startRecording.bind(this)}>
//       <Text style={{fontSize: 14}}> Start Recording </Text>
//     </TouchableOpacity>
//   );

//   if (recording) {
//     button = (
//       <TouchableOpacity onPress={stopRecording.bind(this)}>
//         <Text style={{fontSize: 14}}> STOP </Text>
//       </TouchableOpacity>
//     );
//   }

//   if (processing) {
//     button = (
//       <View style={styles.capture}>
//         <ActivityIndicator animating size={18} />
//       </View>
//     );
//   }

//   useEffect(() => {
//     //setVideoUri(data.videoResumeVirtualPath)
//   }, []);
//   const selectFile = async () => {
//     let value;
//     // Opening Document Picker to select one file
//     try {
//       const res = await DocumentPicker.pick({
//         // Provide which type of file you want user to pick
//         type: [DocumentPicker.types.video],
//       });
//       console.log(res.uri);
//       setCurrentVideoUri(res.uri);
//       // for (let key in res) {
//       //   if (res.hasOwnProperty(key)) {
//       //     value = res[key];
//       //     console.log("Value uri"+value.uri);
//       //     setCurrentVideoUri(value.uri);
//       //   }
//       // }
//       toggleModal();
//     } catch (err) {
//       toggleModal(); // Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         // If user canceled the document selection
//         alert('Canceled');
//       } else {
//         // For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };

//   const onPlayPausePressRecent = () => {
//     console.log('Paused');
//     setPaused(!paused);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const cameraModel = () => {
//     toggleModal();
//     setIsCameraModalVisible(!isCameraModalVisible);
//   };
//   const flipCamera = () => {
//     if (camType === RNCamera.Constants.Type.back) {
//       setCam(RNCamera.Constants.Type.front);
//     } else {
//       setCam(RNCamera.Constants.Type.back);
//     }
//   };

//   const togglefalsh = () => {
//     if (flash === RNCamera.Constants.FlashMode.off) {
//       setFlash(RNCamera.Constants.FlashMode.on);
//     } else {
//       setFlash(RNCamera.Constants.FlashMode.off);
//     }
//   };
//   const cameraModelFalse = () => {
//     setIsCameraModalVisible(!isCameraModalVisible);
//   };

//   const user = useSelector(state => state.reduxState);
//   const [name, setName] = useState('');
//   const [checked, setChecked] = React.useState('Yes');
//   const dispatch = useDispatch();
//   const [selectedValues, setSelectedValues] = useState('');
//   const [token, setToken] = useState();
//   const checkManadatoryValue = () => {
//     if (
//       companyName === '' ||
//       companyName === undefined ||
//       companyName === null
//     ) {
//       alert('Please enter company name');
//     } else if (jobtitle === '' || jobtitle === undefined || jobtitle === null) {
//       alert('Please enter Job Title');
//     } else {
//       sendToAPI();
//     }
//   };
//   useEffect(() => {
//     auth()
//       .currentUser.getIdTokenResult()
//       .then(r => {
//         setToken(r.token);

//         fetch(APIs.master, {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + r.token,
//           },
//         })
//           .then(response => response.json())
//           .then(json => setDataValues(json))
//           .catch(err => {
//             console.log('Some errors occurred');
//             console.log('Network' + err);
//           })
//           .done();
//       });
//   }, []);

//   const setDataValues = json => {
//     for (let key in json) {
//       if (json[key].id === 7) {
//         let locationData = json[key].masterModel;
//         let locationSortedData = locationData.sort(function (a, b) {
//           var textA = a.masterName.toUpperCase();
//           var textB = b.masterName.toUpperCase();
//           return textA < textB ? -1 : textA > textB ? 1 : 0;
//         });

//         setLocation(locationSortedData);
//         setCompanyName(post.companyName);
//         setJobTitle(post.jobTitle);
//         setEdu(post.educationId);
//         setExp(post.experienceId);
//         setJobDec(post.jobDescription);
//         setSal(post.salaryId);
//         setTra(post.tradeId);
//         setJob(post.typeOfWorkId);
//         setLoc(post.locationId);
//         setChecked(post.bikeAndDl);
//         setCurrentVideoUri(post.videoVirtualPath);
//       }
//       if (json[key].id === 1) {
//         setTrade(json[key].masterModel);
//       }
//       if (json[key].id === 3) {
//         setExperience(json[key].masterModel);
//       }
//       if (json[key].id === 2) {
//         setEducation(json[key].masterModel);
//       }
//       if (json[key].id === 5) {
//         setSalary(json[key].masterModel);
//       }
//       if (json[key].id === 4) {
//         setJobType(json[key].masterModel);
//       }
//     }
//   };

//   const sendToAPI = () => {
//     console.log(post.id);
//     console.log(jobtitle);
//     const obj = {};
//     obj.id = post.id;
//     (obj.companyName = companyName),
//       (obj.jobTitle = jobtitle),
//       (obj.educationId = edu),
//       (obj.experienceId = exp),
//       (obj.typeOfWorkId = job),
//       (obj.bikeAndDl = checked),
//       (obj.jobDescription = jobdec),
//       (obj.tradeId = tra),
//       (obj.salaryId = sal),
//       (obj.locationId = loc),
//       (obj.videoVirtualPath = currentVideoUri),
//       console.log(obj);
//     fetch(APIs.job, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + token,
//       },
//       body: JSON.stringify(obj),
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         console.log('Response from server' + responseJson);
//         onToggleSnackBar();
//         uploadvideo(responseJson);
//         // clearState()
//         return responseJson;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   const uploadvideo = json => {
//     let formData = new FormData();
//     formData.append('video', {
//       uri: currentVideoUri,
//       type: 'video/mp4',
//       name: 'video.mp4',
//     });
//     console.log(APIs.employerVideo + json.jobId);
//     fetch(APIs.employerVideo + json.jobId, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//         Authorization: 'Bearer ' + token,
//       },
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         console.log(responseJson);
//         onToggleSnackBar();
//         navigation.goBack();
//         return responseJson;
//       })
//       .catch(error => {
//         onToggleSnackBar();
//         console.error(error);
//       });
//   };
//   // const clearState=()=>{
//   //   setCompanyName('')
//   //   setJobTitle('')
//   //   setJobDec('')

//   // }
//   return (
//     <SafeAreaView
//       keyboardShouldPersistTaps="always"
//       keyboardDismissMode="on-drag"
//       style={{margin: 10, borderRadius: 12}}>
//       <ScrollView style={styles.scrollView}>
//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.CompanyName}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 value={companyName}
//                 style={styles.input}
//                 numberOfLines={1}
//                 onChangeText={text => setCompanyName(text)}
//                 placeholder={Languages.CompanyName}
//                 placeholderTextColor="#666"
//               />
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.jobtitle}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 value={jobtitle}
//                 style={styles.input}
//                 numberOfLines={1}
//                 onChangeText={text => setJobTitle(text)}
//                 placeholder={Languages.jobtitle}
//                 placeholderTextColor="#666"
//               />
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.location}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={loc}
//                 style={{height: 50, width: 280}}
//                 onValueChange={(itemValue, itemIndex) => setLoc(itemValue)}>
//                 {location !== null &&
//                   location.map((item, key) => (
//                     <Picker.Item label={item.masterName} value={item.id} />
//                   ))}
//               </Picker>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.Wheeler}</Text>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <RadioButton
//               value={checked}
//               status={checked === 'Yes' ? 'checked' : 'unchecked'}
//               onPress={() => setChecked('Yes')}
//             />
//             <Text>{Languages.Yes}</Text>
//           </View>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <RadioButton
//               value={checked}
//               status={checked === 'No' ? 'checked' : 'unchecked'}
//               onPress={() => setChecked('No')}
//             />
//             <Text>{Languages.No}</Text>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.JobTrade}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={tra}
//                 style={{height: 50, width: 280}}
//                 onValueChange={(itemValue, itemIndex) => setTra(itemValue)}>
//                 {trade !== null &&
//                   trade.map((item, key) => (
//                     <Picker.Item label={item.masterName} value={item.id} />
//                   ))}
//               </Picker>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.MinimumEducation}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={edu}
//                 style={{height: 50, width: 280}}
//                 onValueChange={(itemValue, itemIndex) => setEdu(itemValue)}>
//                 {education !== null &&
//                   education.map((item, key) => (
//                     <Picker.Item label={item.masterName} value={item.id} />
//                   ))}
//               </Picker>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.Experience}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={exp}
//                 style={{height: 50, width: 280}}
//                 onValueChange={(itemValue, itemIndex) => setExp(itemValue)}>
//                 {experience !== null &&
//                   experience.map((item, key) => (
//                     <Picker.Item label={item.masterName} value={item.id} />
//                   ))}
//               </Picker>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.JobType}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={job}
//                 style={{height: 50, width: 280}}
//                 onValueChange={(itemValue, itemIndex) => setJob(itemValue)}>
//                 {jobType !== null &&
//                   jobType.map((item, key) => (
//                     <Picker.Item label={item.masterName} value={item.id} />
//                   ))}
//               </Picker>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.Offered}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={sal}
//                 style={{height: 50, width: 280}}
//                 onValueChange={(itemValue, itemIndex) => setSal(itemValue)}>
//                 {salary !== null &&
//                   salary.map((item, key) => (
//                     <Picker.Item label={item.masterName} value={item.id} />
//                   ))}
//               </Picker>
//             </View>
//           </View>
//         </View>

//         <View
//           style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, flex: 1}}>
//           <Text style={{fontSize: 16}}>{Languages.JobDescription}</Text>
//           <View style={{marginTop: 6}}>
//             <View style={styles.inputContainers}>
//               <TextInput
//                 value={jobdec}
//                 style={styles.input}
//                 multiline
//                 numberOfLines={4}
//                 onChangeText={text => setJobDec(text)}
//                 placeholder={Languages.JobDescription}
//                 placeholderTextColor="#666"
//               />
//             </View>
//           </View>
//         </View>

//         <View style={{padding: 30, flex: 1}}>
//           <Text style={{fontSize: 19}}>{Languages.UploadVideo}</Text>
//           {/* <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'gray' }}>
//         {Languages.ProfileMsg}
//       </Text> */}

//           <View style={{marginTop: 20}}>
//             <TouchableOpacity
//               onPress={toggleModal}
//               style={{
//                 width: '100%',
//                 height: 200,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: 'gray',
//               }}>
//               {currentVideoUri === null && (
//                 <MaterialCommunityIcons
//                   name={'video'}
//                   size={100}
//                   color={'gray'}
//                 />
//               )}
//               <Text
//                 style={{
//                   fontSize: 16,
//                   fontWeight: '300',
//                   marginBottom: '3%',
//                   marginTop: '3%',
//                 }}>
//                 {Languages.AddVideo}{' '}
//               </Text>
//               {currentVideoUri !== null && (
//                 <Video
//                   source={{uri: currentVideoUri}}
//                   style={{width: '100%', height: 200}}
//                   resizeMode={'cover'}
//                   repeat={false}
//                   //paused={currentPaused}
//                 />
//               )}
//             </TouchableOpacity>
//           </View>
//           <Modal isVisible={isModalVisible}>
//             <View
//               style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'rgba(52, 52, 52, 0.8)',
//               }}>
//               {/* <Button title={Languages.Pickfromcamera}  onPress={cameraModel} /> */}
//               <Text></Text>
//               <Button title={Languages.pickfromGallery} onPress={selectFile} />
//               <Text></Text>
//               <Button title="Cancel" color="red" onPress={toggleModal} />
//             </View>
//           </Modal>
//           {/* <Modal isVisible={isCameraModalVisible}>
//         <View style={{ flex: 1,  backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
//           {isFocused && <RNCamera
//             ref={cameraRef}
//             type={camType}
//             flashMode={flash}
//             captureAudio={true}
//             androidCameraPermissionOptions={{
//               title: 'Permission to use camera',
//               message: 'We need your permission to use your camera phone',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel'
//             }}
//             androidRecordAudioPermissionOptions={{
//               title: 'Permission to use audio recording',
//               message: 'We need your permission to use your audio',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel'
//             }}
//           >
//             <View
//               style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
//             >
//               {button}
//             </View>
//             <View style ={{flex: 0, flexDirection:'row',justifyContent:'center' }}>
//               <TouchableOpacity onPress={() => togglefalsh()} style={styles.capture}>
//                 <Text style={{fontSize: 14}}> Flash</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => flipCamera()} style={styles.capture}>
//                 <Text style={{fontSize: 14}}> Flip Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </RNCamera>}
//         </View>
//       </Modal> */}

//           <View style={{width: '100%', height: 200, padding: 20}}>
//             {/*   <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: '3%' }}>{Languages.RecentlyUploaded} </Text>*/}
//             {videoUri !== null && (
//               <TouchableWithoutFeedback onPress={onPlayPausePressRecent}>
//                 <Video
//                   source={{uri: videoUri}}
//                   style={{width: '100%', height: 200}}
//                   resizeMode={'cover'}
//                   repeat={false}
//                   paused={paused}
//                 />
//               </TouchableWithoutFeedback>
//             )}
//           </View>
//         </View>
//       </ScrollView>

//       {/* <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 40, flex: 1  }}>
//         <FormButton
//           onPress={() => navigation.navigate("EditProfile2", {
//             name: name
//           })}
//           buttonTitle={Languages.Submit}
//         />
//       </View> */}

//       <View style={{marginTop: 'auto', paddingLeft: 30, paddingRight: 30}}>
//         <FormButton
//           //onPress={ checkManadatoryValue()}

//           // onPress={()=> checkManadatoryValue()}

//           onPress={() => {
//             sendToAPI(params, navigation);
//           }}
//           buttonTitle={Languages.Submit}
//         />
//         <Snackbar
//           style={{marginLeft: 40}}
//           visible={visible}
//           onDismiss={onDismissSnackBar}
//           action={{
//             label: 'Job Edited Successflly',
//             onPress: () => {
//               // Do something
//             },
//           }}></Snackbar>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default EditJob;

// // import React from 'react';
// // import {View, Text} from 'react-native';

// // const Profile = () => {
// //   let name = '';
// //   return (
// //     <View>{name && <Text>{name}</Text>}</View>

// //     // <View>
// //     //  {
// //     //   name ? <Text>{name}</Text> : <Text>no name</Text>
// //     //  }
// //     // </View>
// //   );
// // };

// // export default Profile;



import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Alert, Text, Animated, FlatList } from 'react-native';
import TabNavigator from '@lunarhook/react-native-tab-navigator';  

import ValueTypeModule from '../../../config/ValueTypeModule'
import { SixrandomModule } from '../SixrandomLib/SixrandomModule'
import IconConfig from '../../../config/IconConfig'
import ScreenConfig from '../../../config/ScreenConfig';
import { Card, Button, Modal, WingBlank, WhiteSpace, List, SwipeAction, SearchBar } from '@ant-design/react-native';
import { HistoryArrayGroup } from '../../../config/StorageModule'
import UserModule from '../../../config/UserModule'
import { StyleConfig, FontStyleConfig } from '../../../config/StyleConfig';
//import FingerprintScanner from 'react-native-fingerprint-scanner';
//import Fingerprintstyles from '../../../fingerprint/Application.container.styles';
//import FingerprintPopup from '../../../fingerprint/FingerprintPopup.component';
const { width, height } = Dimensions.get('window');
let modalhandler = null;

class SixrandomHistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: [],
      rowTranslateAnimatedValues:[]
      
    };
  }

  animationIsRunning = false
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["SixrandomHistoryPage"].name,
    };
  }
  /*
  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = (any) => {
    this.setState({ popupShowed: false });
    if(false==any)
    {
      this.props.navigation.goBack()
    }
    else
    {
      this.timer = setTimeout(
        () => {
          this.refreshlist()
        },
        200
      );
    }
    
  };
  */


  gobackrefreshlist()
  {
    this.refreshlist()
  }
  componentDidMount() {
    this.refreshlist()
    /*
      FingerprintScanner
      .isSensorAvailable()
      .then(
        this.handleFingerprintShowed()
      )
      .catch(
        error =>{
          if(error.name == "FingerprintScannerNotSupported")
          {this.handleFingerprintDismissed(true)}
        }
      );
      */
  }

  componentWillUnmount() {
    // ????????????this.timer????????????clearTimeout?????????
    // ?????????????????????timer???????????????????????????????????????????????????????????????????????????clear
    //FingerprintScanner.release();
    console.log(modalhandler)
    modalhandler ? modalhandler.close() : () => { }
    this.timer && clearInterval(this.timer);
  }
  _starRow(rowData) {
    HistoryArrayGroup.loadid('sixrandom', rowData.id).then(async (ret) => {
      var Jobj = JSON.parse(ret);
      Jobj.star = true == Jobj.star ? false : true
      Jobj.sync = false
      ret = JSON.stringify(Jobj)
      let T = await UserModule.SyncFileServer("sixrandom", rowData.id, ret)
      if (undefined != T && 2000 == T.code) {
        ret = HistoryArrayGroup.MakeJsonSync(ret)
      }
      await HistoryArrayGroup.saveid('sixrandom', rowData.id, ret)
      this.refreshlist();
    })
  }
  _updateRow(rowData) {
    console.log(modalhandler)
    modalhandler = Modal.prompt(
      '????????????',
      '',
      (newtips: any) => this._updateStorage(rowData, newtips),
      'default',
      '',
      [rowData.tip],
    );
    console.log(modalhandler)
  };
  _updateStorage(rowData, newtips) {

    HistoryArrayGroup.loadid('sixrandom', rowData.id).then(async (ret) => {
      var Jobj = JSON.parse(ret);
      Jobj.tip = newtips;
      Jobj.sync = false
      ret = JSON.stringify(Jobj)
      let T = await UserModule.SyncFileServer("sixrandom", rowData.id, ret)
      if (undefined != T && 2000 == T.code) {
        //?????????????????????????????????????????????????????????
        ret = HistoryArrayGroup.MakeJsonSync(ret)
      }
      await HistoryArrayGroup.saveid('sixrandom', rowData.id, ret)
      this.refreshlist();
    })
  }
  _deleteRow(rowData) {
    Alert.alert(
      '??????',
      '??????: ' + rowData.name,
      [
        { text: '??????', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: '??????', onPress: () => this._deletehistory(rowData) },
      ],
      { cancelable: false }
    )
  }
  async _deletehistory(rowData) {
    HistoryArrayGroup.loadid('sixrandom', rowData.id).then(async (ret) => {
      var Jobj = JSON.parse(ret);
      let T = await UserModule.SyncFileServer("sixrandom", rowData.id, "")
      if (undefined != T && 2000 == T.code) {
        T.data.forEach(async (element) => {
          filename = element.File
          if (-1 != filename.indexOf(String(rowData.id)) && true == element.Del) {
            await HistoryArrayGroup.remove('sixrandom', rowData.id);
          }
        });
      }
      else {
        await HistoryArrayGroup.remove('sixrandom', rowData.id);
      }
      this.Animaterefreshlist(rowData)
    })
  }
  Animaterefreshlist(rowData) {
    if (!this.animationIsRunning) {
      this.animationIsRunning = true;
      Animated.timing(this.state.rowTranslateAnimatedValues[rowData.id], { toValue: 0, duration: 800 ,useNativeDriver: true}).start(() => {
          this.animationIsRunning = false;
          this.refreshlist();
      });
    }
  }


  refreshlist() {
    //this.setState({isLoading: true});
    HistoryArrayGroup.GetSixrandomHistory().then(ids => {
      if (ids.length == 0) {
        ScreenConfig.DeviceToast("??????????????????")
        this.props.navigation.goBack()
        return
      }
      console.log("refreshlist", ids[0])
      this.setState({ dataSource: ids })
    })
  }

  onSearch = (searchText) => {
    return new Promise((resolve, reject) => {
      HistoryArrayGroup.GetSixrandomHistory().then(ids => {
        var filterArray = []
        for (var i = 0, len = ids.length; i < len; i++) {
          console.log(searchText, ids[i].name);
          if (ids[i].tip.match(searchText)) {
            filterArray.push(ids[i])
          }
        }
        this.setState({ dataSource: filterArray })
      })
      resolve();
    });
  }
  onSearchCancel = () => {
    return new Promise((resolve, reject) => {
      HistoryArrayGroup.GetSixrandomHistory().then(ids => {
        this.setState({ dataSource: ids })

      })
      resolve();
    });
  }

  render() {
    if (undefined != this.props.navigation.state.params && "refresh" === this.props.navigation.state.params.text) {
      this.props.navigation.state.params.text = ""
      this.refreshlist()
      //return (<View></View>)
    }
    this.animationIsRunning = false
    this.state.rowTranslateAnimatedValues = [];
    rowlist = this.state.dataSource
    rowlist.forEach((element, i) => {
      this.state.rowTranslateAnimatedValues[`${element.id}`] = new Animated.Value(1);
    });
    const { errorMessage, popupShowed } = this.state;
    const { navigate } = this.props.navigation;
    return (<View style={styles.container}>
      <SearchBar
        ref="search_box"
        onChange={this.onSearch}
        onCancel={this.onSearchCancel}
        //defaultValue="??????"
        placeholder="??????"
        cancelTitle="??????"
        //returnKeyType="??????"
        keyboardDismissOnSubmit={true}
        backgroundColor="#ffffff"
        titleCancelColor="#000000"
      /**
      * There many props that can customizable
      * Please scroll down to Props section
      */
      />
      <FlatList
        useFlatList={true}
        //1????????????????????????
        data={this.state.dataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(data) => (
          <View>
            <SwipeAction
              autoClose
              style={{ backgroundColor: 'transparent' }}

              left={[{
                onPress: () => this._starRow(data.item),
                text: IconConfig.IconAddStar,
              }]}
              
              right={[
                {
                  text: IconConfig.IconAddTip,
                  onPress: () => this._updateRow(data.item),
                },
                {
                  text: IconConfig.IconDelete,
                  onPress: () => this._deleteRow(data.item),
                },
              ]}
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
            >

              <WingBlank size="md">
                
                <Animated.View style={
                  {
                    opacity:this.state.rowTranslateAnimatedValues[data.item.id],
                    transform:[{
                      translateY:  this.state.rowTranslateAnimatedValues[data.item.id].interpolate({
                      inputRange: [0, 1],
                      outputRange: [-120 - (data.item.tip.length)/30 * 13,0],
                  })  }],
                  }
                }>
                  <Card style={{ width: width - 20, paddingLeft: 10 }}>
                    <TouchableOpacity onPress={() => {navigate('SixrandomFullInfoPage', {"url":data.item.url,"goback":()=>this.gobackrefreshlist()})}}>
                      <Card.Header
                        title={<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{data.item.ret}</Text>}
                        //thumbStyle={{ width: 30, height: 30 }}
                        thumb={true == data.item.star ? IconConfig.IconStar : IconConfig.IconUStar}
                        extra={<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{data.item.time}</Text>}
                      />
                      <Card.Body>
                        <View >
                          <Text style={{ marginLeft: 16, fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{data.item.tip}</Text>
                        </View>
                      </Card.Body>
                      <Card.Footer content="" extra={<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{UserModule.str2date(data.item.time) + " " + data.item.name}</Text>} />
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </WingBlank>
            </SwipeAction>
            <WhiteSpace size="xs" />
          </View>
        )}
      />
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 11, color: "#DDDDDD", textAlign: "center" }}>--end--</Text>
      <WhiteSpace size="xl" />
      {errorMessage && (
        <Text style={Fingerprintstyles.errorMessage}>
          {errorMessage}
        </Text>
      )}

      {popupShowed && (
        <FingerprintPopup
          style={Fingerprintstyles.popup}
          handlePopupDismissed={this.handleFingerprintDismissed}
        />
      )}
    </View>)


  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  list: {
    height: 45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft: 10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //???????????????????????? justifyContent: 'center'???????????? 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },

  item: {
    backgroundColor: '#aeffb1',
    height: 100,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,//???????????????
    borderRadius: 5,//??????
  },
  quickAContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 10,
  },
  quick: {
    backgroundColor: "#ff1d49",
    flex: 1,
    alignItems: 'flex-end',//????????????
    justifyContent: 'center',//????????????
    width: 100,
    borderRadius: 5,
    elevation: 5,//???????????????

  },
  delete: {
    color: "#d8fffa",
    marginLeft: 30,
    alignItems: 'flex-start',//????????????
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 0,
    justifyContent: 'center',
    height: 120,
  },
  rowBack: {
    alignItems: 'center',
    //backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
  },
  backLeftBtnLeft: {
    //backgroundColor: 'blue',
    left: 0
  },
  backRightBtnLeft: {
    //backgroundColor: 'blue',
    right: 75
  },
  backRightBtnRight: {
    //backgroundColor: 'red',
    right: 0
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5

  }
});
module.exports = SixrandomHistoryPage;  
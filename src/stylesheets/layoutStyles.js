import {StyleSheet, Platform} from 'react-native';

export default layoutStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8ECC2',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  centerCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredFlexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  centeredFlexRowTopPadded: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  centeredFlexRowBottomMargin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  centeredFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexEnd: {
    flex: 1,
    alignItems: 'flex-end'
  },
  flexRowStretched: {
    flexDirection: 'row',
    width: '100%'
  },
  statusBarBuffer: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFFFFF',
    width: '100%'
  },
  flexListView: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  listViewSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  },
  statusBar: {
    height: 40,
    backgroundColor: '#EEEEFF',
    width: '100%',
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  button: {
    borderColor: '#999999',
    borderWidth: 2,
    backgroundColor: '#EEEEEE',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingTop: 4,
    fontWeight: 'bold'
  },
  modal: {
    backgroundColor: "#EEEEEE"
  },
  modalContent: {
    flex: 1,
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1,
    alignSelf: 'stretch'
  },
  modalContentSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  inputLabel: {
    paddingRight: 10,
    textAlignVertical: 'center'
  },
  postLabel: {
    marginLeft: 10,
    textAlignVertical: 'center',
    fontSize: 11
  },
  toolbar: {
    width: '100%',
    backgroundColor: '#EEEEFF',
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  addButtonView: {
    width: 40,
    height: 40,
    borderLeftColor: '#CCCCCC',
    borderLeftWidth: 1,
    alignItems: 'center'
  },
  addButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 7
  },
  confirmBox: {
    borderColor: '#999999',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
    width: '75%',
    height: '50%',
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  confirmBoxTextView: {
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  confirmBoxText: {
    textAlign: 'center',
    fontSize: 20
  },
  confirmBoxTextSmall: {
    textAlign: 'center',
    fontSize: 15
  },
  confirmBoxButtonsView: {
    paddingTop: 25,
    flexDirection: 'row'
  },
  loadingScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#F8ECC2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    backgroundColor: '#999999',
    borderColor: '#888888',
    width: '100%',
    height: 47
  },
  confirmButton: {
    flex: 1,
    height: 47
  },
  deleteButton: {
    flex: 1,
    width: 100,
    height: 50
  },
  okButton: {
    flex:1,
    marginRight: 30,
    marginLeft: 30
  },
  errorInput: {
    borderColor: '#FF0000',
    borderWidth: 2
  },
  searchBarInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
});

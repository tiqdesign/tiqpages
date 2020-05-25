import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  return (
    <View style={styles.scaffold}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logpic.png')}
          style={styles.logPic}
        />
        <Text style={styles.welcome}>WELCOME</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Welcome to TIQPAGES!
            {'\n'}
            {'\n'}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <View style={styles.enterButton}>
              <Text style={styles.enterText}>Next</Text>
              <Icon size={16} name="forward" color="#F3F3F3" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scaffold: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  card: {
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#3F3D56',
    flex: 1,
    justifyContent: 'space-between',
    elevation: 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  contentText: {
    fontSize: 20,
    letterSpacing: 0.2,
    color: '#f3f3f3',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  welcome: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#FF6584',
  },
  logPic: {
    width: 300,
    height: 200,
  },
  enterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  enterText: {
    fontSize: 16,
    marginRight: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#F3F3F3',
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 20,
  },
});

export default HomeScreen;

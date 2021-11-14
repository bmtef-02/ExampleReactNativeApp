import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <SafeAreaView>
        <View>
          <Button 
            title="Click here for films"
            onPress={() => navigation.navigate("Film")}
          />
        </View>
      </SafeAreaView>
    )
  }

export default HomeScreen;
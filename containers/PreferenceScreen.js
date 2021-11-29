import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

class PreferenceScreen extends Component {
    render(){
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Account Info</Text>
                <Text>This information can be configured here, or upon your first purchase.</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.title}>Preferred Shipping Address</Text>
                <View>
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="First name" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Last name" 
                        />
                    </View>
                    
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Address" 
                    />
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Apartment, suite, etc. (optional)" 
                    />
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="City" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Country/Region" 
                        />
                    </View>
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="State" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Zip Code" 
                        />
                    </View>
                </View>
                <Text style={styles.title}>Preferred Payment Info</Text>
                <View>
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Card number" 
                    />
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Name on card" 
                    />
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="Expiration(MM/YY)" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Security Code" 
                        />
                    </View>
                </View>
                <Text style={styles.title}>Preferences</Text>
            </ScrollView>
        );
    }
}
export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  formInput: {
    marginTop: 10,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  groupInput: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  groupFormInput: {
    marginTop: 10,
    width: 145,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  }
});

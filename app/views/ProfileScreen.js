import React, {Fragment} from 'react';
import { Button, View, Text } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        // <Button
        //   title="Go to Jane's profile"
        //   onPress={() => navigate('Profile', {name: 'Jane'})}
        // />
        <Text>Inside ProfileScreen</Text>
      );
    }
}
export default ProfileScreen;
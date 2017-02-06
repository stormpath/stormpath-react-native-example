import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Button,
	Alert,
	ActivityIndicator
} from 'react-native';

export default class Login extends Component {

	  state = {
	  	username: '',
	  	password: '',
	    isLoggingIn: false,
	    message: ''
	  }

	_userLogin = () => { 

		this.setState({isLoggingIn: true, message:''});

		var params = {
		    username: this.state.username,
		    password: this.state.password,
		    grant_type: 'password'
		};

		var formBody = [];
		for (var property in params) {
		  var encodedKey = encodeURIComponent(property);
		  var encodedValue = encodeURIComponent(params[property]);
		  formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		var proceed = false;
	    fetch("https://my-app-name.apps.stormpath.io/oauth/token", {
	        method: "POST", 
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        body: formBody
	      })
	      .then((response) => response.json())
	      .then((response) => {
	      	if (response.error) this.setState({message: response.message});
	      	else proceed = true;
	      })
	      .then(() => {
	      	this.setState({isLoggingIn: false})
	      	if (proceed) this.props.onLoginPress();
	      })
	      .done();
	} 
  
    clearUsername = () => { 
    	this._username.setNativeProps({text: ''});
    	this.setState({message: ''});
    }
	
	clearPassword = () => { 
    	this._password.setNativeProps({text: ''});
    	this.setState({message: ''});
    }

	render() {
		return (
			<ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Login
				</Text>
				<TextInput
					ref={component => this._username = component}
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
				/>
				<TextInput 
					ref='{component => this._password = component}'
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button 
					disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>
	      </ScrollView>
	    )
	}
}
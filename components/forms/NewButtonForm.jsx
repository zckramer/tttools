import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TextInput,
	Button,
} from 'react-native';
import { useState } from 'react';

const NewButtonForm = props => {
	const [textInputLabel, setTextInputLabel] = useState('');

	function handleTextInput(enteredText) {
		setTextInputLabel(enteredText);
	}

	function handleAddButtonConfirm() {
		console.log(textInputLabel);
		props.handleAddNewButton(textInputLabel);
		props.handleCloseForm();
	}

	return (
		<SafeAreaView>
			<View style={styles.formView}>
				<Text>New Button Label:</Text>
				<TextInput
					onChangeText={handleTextInput}
					placeholder='label'
				/>
				<Button
					title='Confirm'
					onPress={handleAddButtonConfirm}
				/>
			</View>
		</SafeAreaView>
	);
};

export default NewButtonForm;

const styles = StyleSheet.create({
	formView: {
		backgroundColor: 'lightBlue',
		padding: 22,
		margin: 22,
		borderRadius: 22,
	}
});

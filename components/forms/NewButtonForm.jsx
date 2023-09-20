import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	Button,
} from 'react-native';
import { useState } from 'react';

const NewButtonForm = (props) => {
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
			<View>
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

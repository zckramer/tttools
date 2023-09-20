import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
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
			<View style={styles.mainView}>
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

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonsList: {
		backgroundColor: '#f2f2f2',
		borderRadius: 12,
		padding: 8,
	},
	button: {
		color: '#000000',
		margin: 12,
		backgroundColor: 'Green',
	},
});

export default NewButtonForm;
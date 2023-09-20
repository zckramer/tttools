import { StyleSheet, View, Button, Modal } from 'react-native';
import { useState } from 'react';
import NewButtonForm from './components/forms/NewButtonForm';

export default function App() {
	const [buttonsList, setButtonsList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(!showModal);
		console.log('click!');
	};

	const handleAddButton = newButtonToAdd => {
		setButtonsList(currentButtonsList => [
			...currentButtonsList,
			newButtonToAdd,
		]);
	};

	return (
		<View style={styles.mainView}>
			<View style={styles.buttonsList}>
				{buttonsList.map(button => (
					<Button
						style={styles.button}
						title={`${button}`}
					/>
				))}
			</View>
			<Button
				title='Create a Button'
				onPress={handleShowModal}
			/>
			<View style={styles.modalView}>
				<Modal
					animationType='slide'
					onRequestClose={handleShowModal}
					visible={showModal}
				>
					<NewButtonForm
						style={styles.mainView}
						handleCloseForm={() => handleShowModal()}
						handleAddNewButton={newButtonLabel =>
							handleAddButton(newButtonLabel)
						}
					/>
				</Modal>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalView: {
		padding: 16,
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

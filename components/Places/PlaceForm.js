import { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";
import { Place } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm({ onCreatePlace }) {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function changeTitle(text) {
    setTitle(text);
  }

  function takeImage(imageURI) {
    setSelectedImage(imageURI);
  }

  const pickLocation = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlace() {
    const placeData = new Place(title, selectedImage, pickedLocation);
    console.log("placeData: ", placeData);
    onCreatePlace(placeData);
    //console.log(title);
    //console.log(selectedImage);
    //console.log(pickedLocation);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitle}
          value={title}
        />
      </View>
      <ImagePicker onTakeImage={takeImage} />
      <LocationPicker onPickLocation={pickLocation} />
      <Button onPress={savePlace}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    //borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
});

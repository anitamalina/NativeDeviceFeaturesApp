export class Place {
  constructor(title, imageURI, location, id) {
    this.title = title;
    this.imageURI = imageURI;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // {lat: 0.2323124, lng: 123.232}
    this.id = id; //new Date().toString + Math.random().toString();
  }
}

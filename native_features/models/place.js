class Place {
    constructor(title, imageUri) {
        this.title = title;
        this.imageUri = imageUri;
        this.id = Date.now()
    }
    
};

export default Place;
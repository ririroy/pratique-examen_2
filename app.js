class Keyboard{
    constructor(name,brand,compatibleDevices,connectivityTechnology,keyboardDescription,specialFeature,colour,numberOfKeys,style,productDimensions,material){
        this.name = name;
        this.brand = brand;
        this.compatibleDevices = compatibleDevices;
        this.connectivityTechnology = connectivityTechnology;
        this.keyboardDescription = keyboardDescription;
        this.specialFeature = specialFeature;
        this.colour = colour;
        this.numberOfKeys = numberOfKeys;
        this.style = style;
        this.productDimensions = productDimensions;
        this.material = material;
    }
    toHtml(){
        const div = document.createElement('div');

        const keyboardName = document.createElement('p');
        keyboardName.textContent = 'Name: ' + this.name;
        div.appendChild(keyboardName);

        const keyboardBrand = document.createElement('p');
        keyboardBrand.textContent = 'Brand: ' + this.brand;
        div.appendChild(keyboardBrand);

        const isCompatible = document.createElement('p');
        isCompatible.textContent = 'Compatible devices: ' + this.compatibleDevices;
        div.appendChild(isCompatible);

        const keyboardConnectivity = document.createElement('p');
        keyboardConnectivity.textContent = 'Connectivity technology: ' + this.connectivityTechnology;
        div.appendChild(keyboardConnectivity);

        const description = document.createElement('p');
        description.textContent = 'Description: ' + this.keyboardDescription;
        div.appendChild(description);

        const keyboardFeature = document.createElement('p');
        keyboardFeature.textContent = 'Special feature: ' + this.specialFeature;
        div.appendChild(keyboardFeature);

        const keyboardColor = document.createElement('p');
        keyboardColor.textContent = 'Color: ' + this.colour;
        div.appendChild(keyboardColor);

        const keyboardNbKeys = document.createElement('p');
        keyboardNbKeys.textContent = 'Number of keys: ' + this.numberOfKeys;
        div.appendChild(keyboardNbKeys);

        const keyboardStyle = document.createElement('p');
        keyboardStyle.textContent = 'Keyboard style: ' + this.style;
        div.appendChild(keyboardStyle);

        const keyboardDimensions = document.createElement('p');
        keyboardDimensions.textContent = 'Dimensions ' + this.productDimensions;
        div.appendChild(keyboardDimensions);

        const keyboardMaterial = document.createElement('p');
        keyboardMaterial.textContent = 'Material ' + this.material;
        div.appendChild(keyboardMaterial);

        return div;
    }
}
const stars=[
    new Keyboard(
        "Magic-Refiner",
        "MAGIC-REFINER",
        "Smartphone",
        "Bluetooth",
        "Mechanical",
"Ergonomic",
"Off-white&Orange/RedSwitch",
68,
"Modern",
"31.2Lx10.2Wx4.3HCentimetres",
"Polycarbonate"
),
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical"
    ,"Ergonomic",
    "Off-white&Orange/RedSwitch",
    68,
    "Modern",
    "31.2Lx10.2Wx4.3HCentimetres",
    "Polycarbonate"
),
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white&Orange/RedSwitch",
    68,
    "Modern",
    "31.2Lx10.2Wx4.3HCentimetres",
    "Polycarbonate"
),
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
"Off-white&Orange/RedSwitch",
68,
"Modern",
"31.2Lx10.2Wx4.3HCentimetres",
"Polycarbonate"
),
];

stars.forEach(star => {
    document.body.appendChild(star.toHtml());
})
const cars = [
    {
        brand: "Toyota",
        model: "Fortuner",
        year: 2024,
        price: 4200000,
        color: "Black"
    },
    {
        brand: "Toyota",
        model: "Innova",
        year: 2023,
        price: 2800000,
        color: "White"
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2023,
        price: 9500000,
        color: "Blue"
    },
    {
        brand: "BMW",
        model: "M4",
        year: 2024,
        price: 14500000,
        color: "Red"
    },
    {
        brand: "Audi",
        model: "Q7",
        year: 2024,
        price: 8800000,
        color: "Black"
    },
    {
        brand: "Audi",
        model: "A6",
        year: 2023,
        price: 7000000,
        color: "White"
    },
    {
        brand: "Mahindra",
        model: "Thar",
        year: 2024,
        price: 1800000,
        color: "Red"
    },
    {
        brand: "Mahindra",
        model: "Scorpio",
        year: 2024,
        price: 2500000,
        color: "Black"
    }
];


// Get unique brands
const getBrands = () => {
    return [...new Set(cars.map(car => car.brand))];
};


// Get brands
const brands = getBrands();


// Ask user for brand
const selectedBrand = prompt(
    `Available Brands:\n${brands.join("\n")}\n\nEnter brand:`
);


// Find cars according to brand
const brandCars = cars.filter(
    car => car.brand.toLowerCase() === selectedBrand.toLowerCase()
);


if (brandCars.length === 0) {

    document.body.innerHTML = `
        <h1>Car Collection</h1>
        <h2>❌ Brand Not Found</h2>
        <p>Please enter a valid car brand.</p>
    `;

} else {

    // Get models
    const models = brandCars.map(car => car.model);


    // Ask user for model
    const selectedModel = prompt(
        `Available Models:\n${models.join("\n")}\n\nEnter model:`
    );


    // Find selected car
    const selectedCar = brandCars.find(
        car => car.model.toLowerCase() === selectedModel.toLowerCase()
    );


    if (!selectedCar) {

        document.body.innerHTML = `
            <h1>Car Collection</h1>
            <h2>❌ Model Not Found</h2>
            <p>Please enter a valid model.</p>
        `;

    } else {

        // Show car details in browser
        document.body.innerHTML = `
            <h1>🚗 Car Details</h1>

            <h2>${selectedCar.brand} ${selectedCar.model}</h2>

            <p><strong>Brand:</strong> ${selectedCar.brand}</p>
            <p><strong>Model:</strong> ${selectedCar.model}</p>
            <p><strong>Year:</strong> ${selectedCar.year}</p>
            <p><strong>Price:</strong> ₹${selectedCar.price.toLocaleString("en-IN")}</p>
            <p><strong>Color:</strong> ${selectedCar.color}</p>
        `;
    }
}
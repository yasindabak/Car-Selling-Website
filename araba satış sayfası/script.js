// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Car data and functionality
const carBrands = {
    'Mercedes': ['S-Class', 'E-Class', 'C-Class', 'G-Class', 'GLE', 'GLS', 'AMG GT', 'CLA', 'GLA', 'EQS'],
    'BMW': ['7 Series', '5 Series', '3 Series', 'X7', 'X5', 'X3', 'M8', 'i4', 'iX', 'M5'],
    'Audi': ['A8', 'A6', 'A4', 'Q8', 'Q7', 'RS e-tron GT', 'RS7', 'S5', 'Q5', 'RS Q8'],
    'Porsche': ['Panamera', 'Cayenne', 'Macan', '911', 'Taycan', '718 Cayman', '718 Boxster', 'Cayenne Coupe', '911 GT3', '911 Turbo S'],
    'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster', 'Model S Plaid', 'Model X Plaid', 'Model 3 Performance', 'Model Y Performance'],
    'Lexus': ['LS', 'ES', 'RX', 'NX', 'UX', 'LC', 'RC', 'IS', 'GX', 'LX'],
    'Land Rover': ['Range Rover', 'Range Rover Sport', 'Defender', 'Discovery', 'Evoque', 'Velar', 'Discovery Sport', 'Range Rover Long', 'Defender 90', 'Defender 110'],
    'Volvo': ['XC90', 'XC60', 'S90', 'V90', 'S60', 'C40', 'XC40', 'V60', 'S90 Recharge', 'XC60 Recharge'],
    'Bentley': ['Continental GT', 'Flying Spur', 'Bentayga', 'Mulsanne', 'Continental GTC', 'Flying Spur Speed', 'Bentayga EWB', 'Continental GT Speed', 'Flying Spur Hybrid', 'Bentayga Hybrid'],
    'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'MC20', 'Grecale', 'Gran Turismo', 'Gran Cabrio', 'MC20 Cielo', 'Levante Trofeo', 'Ghibli Trofeo']
};

const years = [2024, 2023, 2022, 2021, 2020, 2019,];

// Generate sample cars
const cars = [];
Object.entries(carBrands).forEach(([brand, models]) => {
    models.forEach(model => {
        years.forEach(year => {
            const basePrice = Math.floor(Math.random() * (5000000 - 1000000) + 1000000);
            const depreciation = (2024 - year) * 0.1;
            const price = Math.floor(basePrice * (1 - depreciation));
            
            cars.push({
                id: cars.length + 1,
                brand,
                model,
                year,
                price,
                image: 'image/2023_mercedes-benz_s-class.jpg.avif', // Mercedes S-Class için fotoğraf
                features: ['Otomatik Pilot', 'Deri Koltuk']
            });

            cars.push({
                id: cars.length + 1,
                brand: 'BMW',
                model: '7 Series',
                year: 2024,
                price: 3500000,
                image: 'image/7-series-exterior-right-front-three-quarter-3.jpeg.webp', // BMW 7 Series için fotoğraf
                features: ['Otomatik Pilot', 'Panoramik Tavan']
            });

            cars.push({
                id: cars.length + 1,
                brand: 'Audi',
                model: 'A8',
                year: 2024,
                price: 3200000,
                image: 'image/2022-Audi-A8-1.jpg', // Audi A8 için fotoğraf
                features: ['Otomatik Pilot', 'Deri Koltuk']
            });

            cars.push({
                id: cars.length + 1,
                brand: 'Porsche',
                model: '911',
                year: 2024,
                price: 4000000,
                image: 'image/front-left-side-47.jpg.avif', // Porsche 911 için fotoğraf
                features: ['Otomatik Pilot', 'Panoramik Tavan']
            });
        });
    });
});


// Display cars
function displayCars(carsToShow = cars.slice(0, 12)) {
    const container = document.getElementById('carsContainer');
    container.innerHTML = '';

    carsToShow.forEach(car => {
        const carCard = `
            <div class="col-md-6 col-lg-4">
                <div class="car-card card">
                    <img src="${car.image}" class="card-img-top" alt="${car.brand} ${car.model}">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.model}</h5>
                        <p class="card-text">
                            <strong>Yıl:</strong> ${car.year}<br>
                            <strong>Fiyat:</strong> ${car.price.toLocaleString('tr-TR')} TL
                        </p>
                        <div class="mb-3">
                            <small class="text-muted">
                                ${car.features.join(' • ')}
                            </small>
                        </div>
                        <button class="btn btn-primary">Detayları Gör</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += carCard;
    });
}

// Populate filters
function populateFilters() {
    const brandFilter = document.getElementById('brandFilter');
    const yearFilter = document.getElementById('yearFilter');
    const modelFilter = document.getElementById('modelFilter');

    // Populate brands
    Object.keys(carBrands).forEach(brand => {
        brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
    });

    // Populate years
    years.forEach(year => {
        yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
    });

    // Update models when brand is selected
    brandFilter.addEventListener('change', (e) => {
        const selectedBrand = e.target.value;
        modelFilter.innerHTML = '<option value="">Model Seçin</option>';
        
        if (selectedBrand && carBrands[selectedBrand]) {
            carBrands[selectedBrand].forEach(model => {
                modelFilter.innerHTML += `<option value="${model}">${model}</option>`;
            });
        }
    });
}

// Filter functionality
document.getElementById('filterButton').addEventListener('click', () => {
    const selectedBrand = document.getElementById('brandFilter').value;
    const selectedModel = document.getElementById('modelFilter').value;
    const selectedYear = document.getElementById('yearFilter').value;

    let filteredCars = cars;

    if (selectedBrand) {
        filteredCars = filteredCars.filter(car => car.brand === selectedBrand);
    }

    if (selectedModel) {
        filteredCars = filteredCars.filter(car => car.model === selectedModel);
    }

    if (selectedYear) {
        filteredCars = filteredCars.filter(car => car.year === parseInt(selectedYear));
    }

    displayCars(filteredCars.slice(0, 12));
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayCars();
    populateFilters();
});
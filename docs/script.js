function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login logic (replace with actual API call)
    if (username && password) {
        alert('Login successful!');
        // Redirect to the main application page or perform other actions
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Simulate registration logic (replace with actual API call)
    if (newUsername && newPassword) {
        alert('Registration successful!');
        // Redirect to the main application page or perform other actions
    } else {
        alert('Username or password missing. Please try again.');
    }
}
function showLoginForm() {
    hideForms();
    document.getElementById('loginForm').style.display = 'block';
}

function showRegisterForm() {
    hideForms();
    document.getElementById('registerForm').style.display = 'block';
}

function hideForms() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('landingPage').style.display = 'none';
}

// Show landing page by default
hideForms();
document.getElementById('landingPage').style.display = 'block';
// ... (previous code)

// Dummy data for music samples
const musicSamples = [
    { id: 1, title: 'Sample 1', artist: 'Artist A' },
    { id: 2, title: 'Sample 2', artist: 'Artist B' },
    // Add more samples as needed
];

// Function to render music samples on the landing page
function renderSampleList() {
    const sampleListContainer = document.getElementById('sampleList');

    // Clear existing content
    sampleListContainer.innerHTML = '';

    // Create and append sample items
    musicSamples.forEach((sample) => {
        const sampleItem = document.createElement('li');
        sampleItem.classList.add('sample-item');

        const titleElement = document.createElement('div');
        titleElement.classList.add('sample-title');
        titleElement.textContent = sample.title;

        const artistElement = document.createElement('div');
        artistElement.classList.add('sample-artist');
        artistElement.textContent = `by ${sample.artist}`;

        sampleItem.appendChild(titleElement);
        sampleItem.appendChild(artistElement);

        sampleListContainer.appendChild(sampleItem);
    });
}

// Call the function to render sample list on page load
renderSampleList();

// ... (remaining code)
// ... (previous code)

// Function to fetch and render music samples from the API
async function fetchAndRenderSamples() {
    const sampleListContainer = document.getElementById('sampleList');

    try {
        // Fetch data from the API
        const response = await fetch('http://127.0.0.1:5000/api/samples');
        const data = await response.json();

        // Clear existing content
        sampleListContainer.innerHTML = '';

        // Create and append sample items
        data.forEach((sample) => {
            const sampleItem = document.createElement('li');
            sampleItem.classList.add('sample-item');

            const titleElement = document.createElement('div');
            titleElement.classList.add('sample-title');
            titleElement.textContent = sample.title;

            const artistElement = document.createElement('div');
            artistElement.classList.add('sample-artist');
            artistElement.textContent = `by ${sample.artist}`;

            sampleItem.appendChild(titleElement);
            sampleItem.appendChild(artistElement);

            sampleListContainer.appendChild(sampleItem);
        });
    } catch (error) {
        console.error('Error fetching samples:', error);
    }
}

// Call the function to fetch and render samples on page load
fetchAndRenderSamples();

// ... (remaining code)


const stateDropdown = document.getElementById("state");
const cityDropdown = document.getElementById("city");

const citiesByState = {
    "USA": ["New York", "Los Angeles", "Chicago"],
    "India": ["Mumbai", "Delhi", "Bangalore"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"]
};

// Function to populate the city dropdown based on the selected state
function populateCityDropdown() {
    // Clear the city dropdown
    cityDropdown.innerHTML = "";
    
    // Get the selected state
    const selectedState = stateDropdown.value;
    
    // Get the cities for the selected state
    const cities = citiesByState[selectedState];
    
    // Add the cities to the city dropdown
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        cityDropdown.add(option);
    });
}

// Event listener to populate the city dropdown when the state dropdown is changed
stateDropdown.addEventListener("change", populateCityDropdown);
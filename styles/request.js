document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const categoriesBtn = document.querySelector('.categories-btn');
    const slider = document.querySelector('.slider');
    const formSection = document.querySelector('.form-section');
    
    // Toggle between Search and Categories
    categoriesBtn.addEventListener('click', () => {
        searchBtn.classList.remove('active');
        categoriesBtn.classList.add('active');
        slider.classList.add('moveslider');
        formSection.classList.add('form-section-move');
    });
    
    searchBtn.addEventListener('click', () => {
        categoriesBtn.classList.remove('active');
        searchBtn.classList.add('active');
        slider.classList.remove('moveslider');
        formSection.classList.remove('form-section-move');
    });
    
    // Service type selection
    const serviceType = document.getElementById('serviceType');
    const subCategory = document.getElementById('subCategory');
    
    serviceType.addEventListener('change', function() {
        if (this.value) {
            subCategory.disabled = false;
            // Clear previous options
            subCategory.innerHTML = '';
            
            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select subcategory...';
            subCategory.appendChild(defaultOption);
            
            // Add options based on selection
            if (this.value === 'indoor') {
                const indoorServices = ['Cleaning', 'Plumbing', 'Electrical', 'Carpentry'];
                indoorServices.forEach(service => {
                    const option = document.createElement('option');
                    option.value = service.toLowerCase();
                    option.textContent = service;
                    subCategory.appendChild(option);
                });
            } else if (this.value === 'outdoor') {
                const outdoorServices = ['Gardening', 'Painting', 'Roofing', 'Fencing'];
                outdoorServices.forEach(service => {
                    const option = document.createElement('option');
                    option.value = service.toLowerCase();
                    option.textContent = service;
                    subCategory.appendChild(option);
                });
            }
        } else {
            subCategory.disabled = true;
            subCategory.innerHTML = '<option value="">First choose a service type</option>';
        }
    });
  });
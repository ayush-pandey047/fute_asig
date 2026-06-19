const form = document.getElementById('enquiryForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const unitType = document.getElementById('unitType').value;

    if (!name || name === ''){
        msg.innerHTML = 'Please enter your name';
        return
    }
    if (!email || email === ''){
        msg.innerHTML = 'Please enter your email';
        return
    }
    if (!phone || phone === ''){
        msg.innerHTML = 'Please enter your phone number';
        return
    }
    if (!unitType || unitType === ''){
        msg.innerHTML = 'Please select interested unit type';
        return
    }

    formMsg.textContent = 'Thank You! Our Sales team will contact you soon.';
    form.reset();
})

const unitSelect = document.getElementById('unitSelect');
const priceResult = document.getElementById('priceResult');

unitSelect.addEventListener('change', () => {
    if (unitSelect.value === '75'){
        priceResult.textContent = 'Price: Rupees 75 Lakh';
    }
    else if (unitSelect.value === '95'){
        priceResult.textContent = 'Price: Rupees 95 Lakh';
    }
    else{
        priceResult.textContent = '';
    }
})

const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
})

const addAmenityBtn = document.getElementById('addAmenityBtn');
const newanemityInput = document.getElementById('newAmenity');
const amenitiesList = document.getElementById('amenitiesList');

addAmenityBtn.addEventListener('click', () => {
    const value = newanemityInput.value.trim();
    if (value !== '') {
        const li = document.createElement('li');
        li.textContent = value;
        amenitiesList.appendChild(li);
        newanemityInput.value = '';
    }
})


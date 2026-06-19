const form = document.querySelector('enquiry-form');
const msg = document.querySelector('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const unitType = document.getElementById('unitType').value;

    if (!name || name === ''){
        formMsg.innerHTML = 'Please enter your name';
        return
    }
    if (!email || email === ''){
        formMsg.innerHTML = 'Please enter your email';
        return
    }
    if (!phone || phone === ''){
        formMsg.innerHTML = 'Please enter your phone number';
        return
    }
    if (!unitType || unitType === ''){
        formMsg.innerHTML = 'Please select interested unit type';
        return
    }

    forMsg.textContent = 'Thank You! Our Sales team will contact you soon.';
    form.reset();
})

const unitSelect = document.getElementById('unitselect');
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
const newanemityInput = document.getElementById('newamenity');
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


const input = document.querySelector('[data-input]')
const submitBtn = document.querySelector('#submit');
const clearBtn = document.querySelector('#clear');
const nameContainer = document.querySelector('[data-name]');

// set inital value from localstorage
nameContainer.textContent =  localStorage.getItem('name') ?  localStorage.getItem('name') : "DefaultName";


const handleSubmit = (e) => {
    // get input value
    // put it to nameContainer
    // nameContainer.textContent = input.value;

    // store input value to localstorage
    localStorage.setItem('name', input.value);

    nameContainer.textContent = localStorage.getItem('name');
}

const handleClear = (e)  => {
    // clear output
    nameContainer.textContent = "";
    input.value = ""
    // localStorage.clear();
    localStorage.removeItem('name');
}



submitBtn.addEventListener('click', handleSubmit); // submit and show result
clearBtn.addEventListener('click', handleClear) // clear result



input.addEventListener('input', (e) => {
    // console.log(e.target.value);
})
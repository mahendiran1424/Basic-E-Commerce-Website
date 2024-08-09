let sidebar = document.querySelector('.side-nav-bar');

function sideopen() {
    sidebar.style.left = '0';
}

function sideclose() {
    sidebar.style.left = '-60%';
}

const container = document.querySelector('.collections');
const para = container.querySelectorAll("div");
const searchInputs = document.getElementById('input-bar');

function update(event) {
    const inputVal = event.target.value.toUpperCase();
    para.forEach(item => {
        const list = item.querySelector('p').textContent;
        if (list.toUpperCase().indexOf(inputVal) < 0) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
}

// Add event listener for input changes
searchInputs.addEventListener('input', update);

const dropdown = document.querySelector(".dropdown-menu-name");

// const dropdownMenuItems = document.querySelector('.dropdown-menu-items');
let count = 0;
dropdown.addEventListener("click", (e) => {
    const dropdownItems = document.querySelector(".dropdown-menu-items");
    if (count == 0) {
        dropdownItems.style.height = "100px";
        dropdownItems.style.transition = "0.3s all";
        count = 1;
    } else if (count == 1) {
        dropdownItems.style.height = "0px";
        dropdownItems.style.transition = "0.3s all";
        count = 0;
    }
});



const counters = document.querySelectorAll('.counter');
const speed = 400; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + inc;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
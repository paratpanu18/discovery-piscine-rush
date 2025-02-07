document.addEventListener("DOMContentLoaded", function () {
    const profileSections = document.querySelectorAll(".profile-info");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.5 } 
    );

    profileSections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.querySelector("audio");
    const audioControl = document.getElementById("audioControl");
    const icon = audioControl.querySelector("i");

    audio.volume = 0.5; // Set default volume

    audioControl.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            icon.classList.remove("fa-volume-mute");
            icon.classList.add("fa-volume-up");
        } else {
            audio.pause();
            icon.classList.remove("fa-volume-up");
            icon.classList.add("fa-volume-mute");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const selectedOption = dropdown.querySelector('.selected-option');
    const dropdownOptions = dropdown.querySelector('.dropdown-options');

    dropdownOptions.style.display = 'none';

    selectedOption.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the document click event from firing
        if (dropdownOptions.style.display === 'none') {
            dropdownOptions.style.display = 'block';
        } else {
            dropdownOptions.style.display = 'none';
        }
    });

    // Handle option selection
    dropdownOptions.querySelectorAll('.dropdown-option').forEach(option => {
        option.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the dropdown click event from firing

            // Update the selected option display
            selectedOption.innerHTML = this.innerHTML;
            dropdownOptions.style.display = 'none';

            // You can also handle the selected value here if needed
            const selectedValue = this.getAttribute('data-value');
            console.log('Selected Value:', selectedValue);
        });
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownOptions.style.display = 'none';
        }
    });
});

function clearContactForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.querySelector('.selected-option').innerHTML = 'Select Receiver';

}

document.addEventListener('DOMContentLoaded', function() {
    clearContactForm()
});

function handleContactButton(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const receiver = document.querySelector('.selected-option span').innerText;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!name || !email || !message || receiver === 'Select Receiver') {
        alert('Please fill in all fields.');
        clearContactForm();
        return;
    }

    const mailto = `mailto:${email}?subject=Message from ${name}&body=${message}`;
    window.open(mailto, '_blank');
}

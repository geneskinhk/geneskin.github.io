document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for internal links ---
    const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = this.getAttribute('href'); // Get target ID (e.g., #booking-form)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position to scroll to
                const headerOffset = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0; // Adjust for sticky header if present
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 15; // Add a small top margin

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // The smooth scroll magic
                });
            }
        });
    });

    // --- Basic Form Submission Handling (Demo) ---
    const appointmentForm = document.getElementById('appointment-form');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the actual form submission for this demo

            // You would typically gather form data here:
            // const formData = new FormData(this);
            // const name = formData.get('name');
            // ... etc.

            // --- Simple Validation Example (Optional - HTML5 handles 'required' etc.) ---
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const branchSelect = document.getElementById('branch');
            const termsCheckbox = document.getElementById('terms');
            let isValid = true;

            // Reset previous error states if any (add error classes in CSS if needed)
            // nameInput.classList.remove('error');
            // ...

            if (nameInput.value.trim() === '') {
                // alert('請輸入姓名'); // Simple alert validation
                // nameInput.classList.add('error'); // Add error class for styling
                isValid = false;
            }
            // Add more specific JS validation if needed beyond HTML5

            if (!termsCheckbox.checked) {
                alert('請先閱讀並同意條款及細則和私隱政策。');
                 isValid = false;
            }

            // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
            // IMPORTANT: In a real application, you would send the formData
            // to your server here using fetch() or XMLHttpRequest (AJAX).
            // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

            if (isValid) {
                // Show a success message (for demo purposes)
                alert('多謝您的預約！\n我們將有專人盡快聯絡您確認詳情。\n(此為示範提交，資料並未真正送出)');

                // Optionally clear the form after successful "submission"
                // this.reset();
            } else {
                 // Optionally provide more specific feedback if using error classes/messages
                 console.log("Form validation failed.");
            }

        });
    }

    // --- (Optional) Modal Links Handling ---
    // If you implement modals for Terms/Privacy, add JS here
    // Example:
    // const modalLinks = document.querySelectorAll('.modal-link');
    // modalLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const modalId = this.getAttribute('href'); // e.g., #terms-modal
    //         // Code to open the modal with ID modalId
    //         console.log(`Should open modal: ${modalId}`);
    //     });
    // });

}); // End DOMContentLoaded
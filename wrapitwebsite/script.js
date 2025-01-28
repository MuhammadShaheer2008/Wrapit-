document.addEventListener('DOMContentLoaded', function() {
    const offeringButtons = document.querySelectorAll('.offering-button');
    const offeringItems = document.querySelectorAll('.offering-item');

    offeringButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            offeringButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            offeringItems.forEach(item => {
                item.classList.remove('active');
                if (item.id === target) {
                    item.classList.add('active');
                }
            });
        });
    });
});

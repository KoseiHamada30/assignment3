document.addEventListener('DOMContentLoaded', function() {
    // Get all footer column headers
    const footerHeaders = document.querySelectorAll('.footer-column h3');
    const footer = document.querySelector('footer');

    // Add click event listener to each header
    footerHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get the parent footer column
            const footerColumn = this.parentElement;
            
            // Close all other columns
            document.querySelectorAll('.footer-column').forEach(column => {
                if (column !== footerColumn) {
                    column.classList.remove('active');
                    column.querySelector('h3').classList.remove('active');
                }
            });
            
            // Toggle active class on the clicked column
            footerColumn.classList.toggle('active');
            this.classList.toggle('active');

            // Check if any column is active
            const anyColumnActive = document.querySelector('.footer-column.active');
            if (anyColumnActive) {
                footer.classList.add('expanded');
            } else {
                footer.classList.remove('expanded');
            }
        });
    });
}); 
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav a');
    const content = document.getElementById('content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('id');
            loadContent(tabId);
        });
    });

    function loadContent(tabId) {
        fetch(`${tabId}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            });
    }
});

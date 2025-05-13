// Main JavaScript file for Spring Boot Web Demo

document.addEventListener('DOMContentLoaded', function() {
    console.log('Spring Security Demo loaded successfully!');
    
    // Display login time - only set it once when user logs in
    const loginTimeElement = document.getElementById('loginTime');
    if (loginTimeElement) {
        // Check if login time is already stored in session
        let storedLoginTime = sessionStorage.getItem('userLoginTime');
        
        // If no stored time exists, set current time as login time
        if (!storedLoginTime) {
            const now = new Date();
            storedLoginTime = now.toLocaleTimeString();
            sessionStorage.setItem('userLoginTime', storedLoginTime);
        }
        
        // Display the stored login time
        loginTimeElement.textContent = storedLoginTime;
    }
    
    // Add card animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Toggle theme functionality
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', function() {
            const body = document.body;
            
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                this.textContent = 'Dark Mode';
            } else {
                body.classList.add('dark-mode');
                this.textContent = 'Light Mode';
                
                // Add dark mode styles dynamically
                if (!document.getElementById('darkModeStyles')) {
                    const style = document.createElement('style');
                    style.id = 'darkModeStyles';
                    style.innerHTML = `
                        .dark-mode {
                            background-color: #333;
                            color: #f8f9fa;
                        }
                        .dark-mode .content-container, .dark-mode .card {
                            background-color: #444;
                            color: #f8f9fa;
                        }
                        .dark-mode .navbar {
                            background-color: #222 !important;
                        }
                        .dark-mode footer {
                            background-color: #222;
                            color: #f8f9fa;
                        }
                    `;
                    document.head.appendChild(style);
                }
            }
        });
    }
});
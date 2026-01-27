function updateClock() {
        const now = new Date();
        
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeElement = document.getElementById('time');
        timeElement.innerHTML = `${hours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds}`;
        
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const dateString = now.toLocaleDateString('en-US', options);
        
        document.getElementById('date').textContent = dateString;
    }
updateClock();
setInterval(updateClock, 1000);
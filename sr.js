let is12Hour = false;

function updateClock() {
        const now = new Date();
        
        let hrs = now.getHours();
        let ampm = '';
        
        if (is12Hour) {
            ampm = hrs >= 12 ? ' PM' : ' AM';
            hrs = hrs % 12;
            hrs = hrs ? hrs : 12;
        }
        
        const hoursStr = String(hrs).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeElement = document.getElementById('time');
        timeElement.innerHTML = `${hoursStr}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds}${ampm}`;
        
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const dateString = now.toLocaleDateString('en-US', options);
        
        document.getElementById('date').textContent = dateString;
    }

const formatToggle = document.getElementById('formatToggle');
formatToggle.addEventListener('change', function() {
    is12Hour = this.checked;
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);
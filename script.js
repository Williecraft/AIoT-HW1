function updateTime() {
    const timeDisplay = document.getElementById('current-time');
    if (!timeDisplay) return;

    const now = new Date();
    
    // Formatting time logically
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call and set interval
updateTime();
setInterval(updateTime, 1000);

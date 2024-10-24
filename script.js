document.getElementById('calculate-btn').addEventListener('click', calculateTime);

function calculateTime() {
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;

    if (!startTime || !endTime) {
        document.getElementById("result").innerText = "Please provide both start and end times.";
        return;
    }

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let diff = (end - start) / 1000 / 60; // difference in minutes
    if (diff < 0) {
        diff += 24 * 60; // handle times past midnight
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    const result = `${hours} hour(s) and ${minutes} minute(s)`;

    document.getElementById("result").innerText = `Time Difference: ${result}`;
}

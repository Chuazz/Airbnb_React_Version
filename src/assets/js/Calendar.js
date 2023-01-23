function RenderCalendar(selector, month, year, isCurr = false){
    const calendar = document.getElementById(selector);

    if(calendar){
        const day = new Date().getDate();
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfWeek = new Date(year, month, 0).getDay();
        const title = calendar.querySelector(".title");
        const months = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ];
        const days = calendar.querySelector(".days");

        title.innerHTML = `${months[month]} năm ${year}`;

        days.innerHTML = "";
        for(let i = firstDayOfWeek; i > 0; i--){
            days.innerHTML += `<p class="fade">${i}</p>`
        }

        for(let i = 1; i <= lastDayOfMonth; i++){
            if(isCurr){
                if(i < day){
                    days.innerHTML += `
                        <p class="cant-click">${i}</p>
                    `;
                }
                else{
                    days.innerHTML += `
                        <p>${i}</p>
                    `
                }
            }
            else{
                days.innerHTML += `<p>${i}</p>`
            }
        }
    }
}

export default RenderCalendar;
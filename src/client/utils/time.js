export function formatDate(date, months) {
    const fullDate = new Date(date);
    const day = fullDate.getDate();
    const monthIndex = fullDate.getMonth();

    return `${day} ${months[monthIndex]}`;
}

const save_me = document.getElementById('save')
const load_me = document.getElementById('load')

save_me.addEventListener('click', () => {
    const input = document.querySelector('input').value
    localStorage.setItem('myData', input)
    sessionStorage.setItem('myData', input)
})

load_me.addEventListener('click', () => {
    const data1 = localStorage.getItem('myData')
    const data2 = sessionStorage.getItem('myData')
    alert("From the localStorage: " + data1)
    alert("From the sessionStorage: " + data2)
})
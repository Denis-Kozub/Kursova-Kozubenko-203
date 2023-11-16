let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    let lastItem = items[items.length-1]
    let firstItem = items[0]
    document.querySelector('.slider').insertBefore(lastItem, firstItem)
})

const btn = document.querySelector('#button')

btn.addEventListener('mouseover', () => {
    document.querySelector('#button').style.backgroundColor = "#7300e6"
})

btn.addEventListener('mouseout', () => {
    document.querySelector('#button').style.backgroundColor = "black"
})

const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const rewards = document.querySelector('#rewards')
const giftCards = document.querySelector('#gift-cards')
const stores = document.querySelector('#stores')

home.addEventListener('mouseover', () => {
    document.querySelector('#home').style.color = "#8257E5"
})

menu.addEventListener('mouseover', () => {
    document.querySelector('#menu').style.color = "#8257E5"
})

rewards.addEventListener('mouseover', () => {
    document.querySelector('#rewards').style.color = "#8257E5"
})

giftCards.addEventListener('mouseover', () => {
    document.querySelector('#gift-cards').style.color = "#8257E5"
})

stores.addEventListener('mouseover', () => {
    document.querySelector('#stores').style.color = "#8257E5"
})

home.addEventListener('mouseout', () => {
    document.querySelector('#home').style.color = "#FFFFFF"
})

menu.addEventListener('mouseout', () => {
    document.querySelector('#menu').style.color = "#FFFFFF"
})

rewards.addEventListener('mouseout', () => {
    document.querySelector('#rewards').style.color = "#FFFFFF"
})

giftCards.addEventListener('mouseout', () => {
    document.querySelector('#gift-cards').style.color = "#FFFFFF"
})

stores.addEventListener('mouseout', () => {
    document.querySelector('#stores').style.color = "#FFFFFF"
})

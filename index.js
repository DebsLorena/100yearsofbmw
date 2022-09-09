'use strict';

const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

const navBar = document.querySelector('.navbar-nav');

const navbarToggle = () => navBar.classList.toggle('active');

hamburger.addEventListener('click', navbarToggle);
closeBtn.addEventListener('click', navbarToggle);

/*
const hamburger = document.getElementById('open-btn');

function navbarToggle () {
    const navBar = document.getElementById('navbar-nav');
    navBar.classList.toggle('active');
}

hamburger.addEventListener('click', navbarToggle);*/
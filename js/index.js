// Declare Variable

// Home Animation Scroll Variable
const caption = document.getElementById("caption");
const identityBox = document.querySelector(".identityBox");
const captionLine = document.getElementById("captionLine");
const benefitsExplain = document.getElementById("benefitsExplain");
const explainBox = document.querySelector(".explainBox");
const rightLy = document.getElementById("rightLayout");

// Our Package Animation Scroll Variable
const titlePack = document.getElementById("titlePackage");
const midPackage = document.getElementById("midPackage");
const boxContent = document.querySelectorAll("#boxContent");

// Call Us Animation Scroll Variable
const callTitle = document.getElementById("callUsTitle");
const paragraph = document.querySelector(".paragraph");
const callButton = document.getElementById("callUsButton");
const callLine = document.getElementById("callUsLine");

// Image Slider Variable

const firstImage = document.querySelector(".first");
const time = 4000;

let marginLeftCheck = 0;
let marginCount = 37.5;

// Animation Sroll

window.addEventListener('scroll', () => {

    const triggerElement = (window.innerHeight / 5) * 4;

    // Animation On Scroll in Section Home

    const captionCheck = caption.getBoundingClientRect().top;
    const identityBoxCheck = identityBox.getBoundingClientRect().top;
    const captionLineCheck = captionLine.getBoundingClientRect().top;
    const benefitsExplainCheck = benefitsExplain.getBoundingClientRect().top;
    const explainBoxCheck = explainBox.getBoundingClientRect().top;
    const rightLyCheck = rightLy.getBoundingClientRect().top;

    if(captionCheck < triggerElement){
        caption.classList.add("AOS");
    }
    if(identityBoxCheck < triggerElement){
        identityBox.classList.add("AOS");
    }
    if(captionLineCheck < triggerElement){
        captionLine.classList.add("AOS");
    }
    if(benefitsExplainCheck < triggerElement){
        benefitsExplain.classList.add("AOS");
    }
    if(explainBoxCheck < triggerElement){
        explainBox.classList.add("AOS");
    }
    if(rightLyCheck < triggerElement){
        rightLy.classList.add("AOS");
    }

    // Animation On Scroll in Section Our Package

    boxContent.forEach((box) => {
        const boxCheck = box.getBoundingClientRect().top;

        if(boxCheck < triggerElement){
            box.classList.add("AOS");
        }
    });

    const titlePackCheck = titlePack.getBoundingClientRect().top;
    const midPackageCheck = midPackage.getBoundingClientRect().top;

    if(titlePackCheck < triggerElement) {
        titlePack.classList.add("AOS");
    }
    if(midPackageCheck < triggerElement) {
        midPackage.classList.add("AOS");
    }

    // Animation On Scroll in Section Call Us

    const callTitleCheck = callTitle.getBoundingClientRect().top;
    const paragraphCheck = paragraph.getBoundingClientRect().top;
    const callButtonCheck = callButton.getBoundingClientRect().top;
    const callLineCheck = callLine.getBoundingClientRect().top;

    if(callTitleCheck < triggerElement) {
        callTitle.classList.add("AOS");
    }

    if(paragraphCheck < triggerElement) {
        paragraph.classList.add("AOS");
    }

    if(callButtonCheck < triggerElement) {
        callButton.classList.add("AOS");
    }

    if(callLineCheck < triggerElement) {
        callLine.classList.add("AOS");
    }

});

// Image Slider

setInterval(() => {
    if(marginLeftCheck <= -112.5 || marginLeftCheck == 0) {
        marginCount = -marginCount;
    }

    marginLeftCheck += marginCount;
    firstImage.style.marginLeft = `${marginLeftCheck}rem`;

}, time);

// Form Validation

const rightLayout = document.querySelector(".rightLayout");
const form = document.getElementById("formContact");
const username = document.getElementById("name");
const email = document.getElementById("email");
const option = document.getElementById("options");

const submit = document.getElementById("submit");
let countNums = 0;

const error = document.querySelectorAll(".error");
const input = document.querySelectorAll(".input-control");
const emailCheckError = document.getElementById("emailCheckError");
const usernameCheckError = document.getElementById("usernameCheckError");

submit.addEventListener('click', () => {
    countNums++;
});

form.addEventListener('click', (e) => {
    e.preventDefault();

    if(countNums > 0){
        validationCheck();
        countNums = 0;
    }
});

function errorCondition(indexFirst, indexSecond){
    indexFirst.style.display = "flex";
    indexSecond.classList.add("failed");
}

function successCondition(indexFirst, indexSecond){
    indexFirst.style.display = "none";
    indexSecond.classList.remove("failed")
    indexSecond.classList.add("success");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validationCheck = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const optionValue = option.value.trim();

    for(let i = 0; i < input.length; i++){
        for(let i = 0; i < error.length; i++){
            if(usernameValue === ''){
                errorCondition(error[0], input[0]);
                rightLayout.style.top = "-208px";
            } else if(usernameValue.length < 3){
                errorCondition(error[0], input[0]);
                usernameCheckError.innerText = "At least more than 2 characters";
                rightLayout.style.top = "-208px";
            } else {
                successCondition(error[0], input[0]);
            }
        
            if(emailValue === ''){
                errorCondition(error[1], input[1]);
                emailCheckError.innerText = "Email is required";
                rightLayout.style.top = "-208px";
            } else if(emailValue.length < 3){
                errorCondition(error[1], input[1]);
                emailCheckError.innerText = "At least more than 2 characters";
                rightLayout.style.top = "-208px";
            } else if(!isValidEmail(emailValue)){
                errorCondition(error[1], input[1]);
                emailCheckError.innerText = "Provide a valid email address";
                rightLayout.style.top = "-208px";
            } else {
                successCondition(error[1], input[1]);
            }

            if(optionValue === ''){
                errorCondition(error[2], input[2]);
                rightLayout.style.top = "-208px";
            } else {
                successCondition(error[2], input[2]);
                rightLayout.style.top = "-208px";
            }

            if(usernameValue === '' && emailValue === '' && optionValue === ''){
                rightLayout.style.top = "-184px";
            } else if(usernameValue === '' && emailValue === ''){
                rightLayout.style.top = "-196px";
            } else if(usernameValue === '' && optionValue === ''){
                rightLayout.style.top = "-196px";
            } else if(emailValue === '' && optionValue === ''){
                rightLayout.style.top = "-196px";
            }
        }   
    }
    if(usernameValue !== '' && emailValue !== '' && optionValue !== '') {
        alert("Thank You For Submiting");
    } else if(usernameValue.length < 3 || emailValue.length < 3 || optionValue === ''){
        alert("Please write correctly name, email, and select the option");
    }

}

// HumburgerMenu 

const humburgerMenu = document.querySelector("#humMenu");
const hiddenList = document.querySelectorAll(".hiddenLi");
let nums = 0;
let numsLi = 0;

humburgerMenu.addEventListener('click', () => {
    if(nums == 0){
        document.getElementById("hiddenUl").classList.add("active");
        document.getElementById("hidden").style.overflow = "visible";
        nums++;
    } else {
        document.getElementById("hiddenUl").classList.remove("active");
        document.getElementById("hidden").style.overflow = "hidden";
        nums = 0;
    }
});

hiddenList.forEach((boxLi) => {
    boxLi.addEventListener('click', () => {
        document.getElementById("hiddenUl").classList.remove("active");
        nums = 0;
    });
});
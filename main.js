//  Musbat bo'lsa musbat deb chiqsin bo'lmasa manfiy chiqsin.
let num = 5;
num > 0 ? console.log("Manfiy") : console.log("Musbat");

//  Foydalanuvchi 18 yoshga yetgan bo‘lsa, "Ruxsat berilgan" aks holda "Ruxsat berilmagan" deb chiqaruvchi shart yozing.
let age = 18;
age <= 18 ? console.log("Sizga ruxsat berilgan") : console.log("Sizga ruxsat berilmagan");

//  Harorat 0 darajadan past bo‘lsa "Sovuq", 0 va undan yuqori bo‘lsa "Iliq" deb chiqaruvchi shart yozing.
let temperature = 9;
num > 0 ? console.log("Iliq") : console.log("Sovuq");

//  Kiritilgan son juft bo‘lsa "Juft", aks holda "Toq" deb chiqaruvchi shart yozing.
let son = 7;
son % 2 === 0 ? console.log("Juft") : console.log("Toq");



//  Kiritilgan soat 12 dan kichik bo‘lsa "Ertalab", 12 va undan katta bo‘lsa "Kechki payt" deb chiqaruvchi shart yozing.
let hour = 12;
hour <= 12 ? console.log("Ertalab") : console.log("Kechki payt");



//  Foydalanuvchi haftaning kunini raqam sifatida kiritganda (1 - Dushanba, 2 - Seshanba...) shu kunga mos nomni chiqaruvchi shart yozing.
let day = 1;
switch (day) {
    case 1:
        console.log("Dushanba");

        break;

    case 1:
        console.log("Dushanba");

        break;

    case 2:
        console.log("Seshanba");

        break;

    case 3:
        console.log("Chorshanba");

        break;

    case 4:
        console.log("Payshanba");

        break;

    case 5:
        console.log("Juma");

        break;

    case 6:
        console.log("Shanba");

        break;

    case 7:
        console.log("Yakshanba");

        break;

    default:
        break;
}

//  Foydalanuvchi oy raqamini kiritganda (1 - Yanvar, 2 - Fevral...) shu oy nomini chiqaruvchi shart yozing.
let month = 8;
switch (month) {
    case 1:
        console.log("Yanvar");

        break;

    case 2:
        console.log("Fevral");

        break;

    case 3:
        console.log("Mart");

        break;

    case 4:
        console.log("Aprel");

        break;

    case 5:
        console.log("May");

        break;

    case 6:
        console.log("Iyun");

        break;

    case 7:
        console.log("Iyul");

        break;


    case 8:
        console.log("Avgust");


        break;

    case 9:
        console.log("Sentabr");

        break;

    case 10:
        console.log("Oktabr");

        break;

    case 11:
        console.log("Noyabr");

        break;

    case 12:
        console.log("Dekabr");

        break;

}

//  Foydalanuvchi baho kiritganda (1 - "Yomon", 2 - "Qoniqarli", 3 - "Yaxshi", 4 - "A'lo") mos baho nomini chiqaruvchi shart yozing.
let baho = 4;
switch (baho) {
    case 1:
        console.log("Yomon");

        break;
    case 2:
        console.log("Qoniqarli");

        break;
    case 3:
        console.log("Yaxshi");

        break;
    case 4:
        console.log("A'lo");

        break;


    default:
        break;
}



//  Foydalanuvchi kiritgan son 0 dan katta va 100 dan kichik bo‘lsa, "To‘g‘ri diapazon" deb chiqaruvchi shart
let inputValue1 = prompt("Son kiriting (0 < son < 100):");
let convertedValue1 = Number(inputValue1);
if (convertedValue1 > 0 && convertedValue1 < 100) {
    console.log("To‘g‘ri diapazon");
} else {
    console.log("Son 0 dan katta va 100 dan kichik bo‘lishi kerak.");
}

//  Harorat 0 dan kichik yoki 40 dan katta bo‘lsa, "Ehtiyot bo‘ling" deb chiqaruvchi shart
let tempInput = prompt("Haroratni kiriting:");
let temperatureValue = Number(tempInput);
if (temperatureValue < 0 || temperatureValue > 40) {
    console.log("Ehtiyot bo‘ling");
} else {
    console.log("Harorat normal.");
}

//  Foydalanuvchi kiritgan son musbat emas bo‘lsa, "Musbat emas" deb chiqaruvchi shart
let userNumInput = prompt("Son kiriting (musbat bo‘lishi kerak):");
let numConverted = Number(userNumInput);
if (numConverted <= 0) {
    console.log("Musbat emas");
} else {
    console.log("Musbat son kiritdingiz");
}

//  Foydalanuvchi 18 yoshga yetgan va haydovchilik guvohnomasi mavjud bo‘lsa, "Mashina haydashingiz mumkin" deb chiqaruvchi shart
let ageInput = prompt("Yoshingizni kiriting:");
let userAgeConverted = Number(ageInput);
let drivingLicenseInput = prompt("Haydovchilik guvohnomangiz bormi? (ha/yo‘q)");
let hasLicense = drivingLicenseInput.toLowerCase() === "ha";
if (userAgeConverted >= 18 && hasLicense) {
    console.log("Mashina haydashingiz mumkin");
} else {
    console.log("Sizga haydash uchun ruxsat berilmagan");
}

//  Foydalanuvchi kiritgan son juft yoki 0 ga teng bo‘lsa, "Juft yoki nol" deb chiqaruvchi shart
let inputForEven = prompt("Son kiriting:");
let numberForEvenCheck = Number(inputForEven);
if (numberForEvenCheck % 2 === 0 || numberForEvenCheck === 0) {
    console.log("Juft yoki nol");
} else {
    console.log("Bu son juft emas");
}

//  Foydalanuvchi kiritgan ikki son bir-biriga teng emas bo‘lsa, "Turlicha sonlar" deb chiqaruvchi shart
let firstValue = prompt("Birinchi sonni kiriting:");
let firstNumConverted = Number(firstValue);
let secondValue = prompt("Ikkinchi sonni kiriting:");
let secondNumConverted = Number(secondValue);
if (firstNumConverted !== secondNumConverted) {
    console.log("Turlicha sonlar");
} else {
    console.log("Sonlar teng");
}

//  Foydalanuvchi 5 yoki 10 ni kiritgan bo‘lsa, "Maxsus son" deb chiqaruvchi shart
let inputForSpecial = prompt("Son kiriting:");
let specialConvertedNumber = Number(inputForSpecial);
if (specialConvertedNumber === 5 || specialConvertedNumber === 10) {
    console.log("Maxsus son");
} else {
    console.log("Maxsus emas");
}

//  Foydalanuvchi haftaning kunini kiritganda, bu kun dam olish kuni yoki ish kuni ekanligini aniqlang
let weekDayInput = prompt("Haftaning kunini kiriting (dushanba, seshanba, ...):").toLowerCase();
if (weekDayInput === "shanba" || weekDayInput === "yakshanba") {
    console.log("Dam olish kuni");
} else {
    console.log("Ish kuni");
}

//  Son 1 dan katta va 50 dan kichik emas bo‘lsa, "To‘g‘ri emas" deb chiqaruvchi shart
let inputForRange = prompt("Son kiriting (1 < son < 50 bo‘lishi kerak emas):");
let numberForRangeCheck = Number(inputForRange);
if (numberForRangeCheck <= 1 || numberForRangeCheck >= 50) {
    console.log("To‘g‘ri emas");
} else {
    console.log("To‘g‘ri son");
}

//  Foydalanuvchi uch xil son kiritganda, ulardan hech biri bir-biriga teng emasligini tekshiring
let firstNumberForCheck = prompt("Birinchi sonni kiriting:");
let firstNumForCheckConverted = Number(firstNumberForCheck);
let secondNumberForCheck = prompt("Ikkinchi sonni kiriting:");
let secondNumForCheckConverted = Number(secondNumberForCheck);
let thirdNumberForCheck = prompt("Uchinchi sonni kiriting:");
let thirdNumForCheckConverted = Number(thirdNumberForCheck);
if (firstNumForCheckConverted !== secondNumForCheckConverted && firstNumForCheckConverted !== thirdNumForCheckConverted && secondNumForCheckConverted !== thirdNumForCheckConverted) {
    console.log("Sonlar bir-biriga teng emas");
} else {
    console.log("Ba'zi sonlar teng");
}






//  Foydalanuvchi kiritgan son 0 dan katta va 100 dan kichik bo‘lsa, "To‘g‘ri diapazon" deb chiqaruvchi shart
let inputNumber = prompt("Son kiriting (0 < son < 100):");
let userNumber = Number(inputNumber);
if (userNumber > 0 && userNumber < 100) {
    console.log("To‘g‘ri diapazon");
} else {
    console.log("Son 0 dan katta va 100 dan kichik bo‘lishi kerak.");
}

//  Harorat 0 dan kichik yoki 40 dan katta bo‘lsa, "Ehtiyot bo‘ling" deb chiqaruvchi shart
let inputTemperature = prompt("Haroratni kiriting:");
let currentTemperature = Number(inputTemperature);
if (currentTemperature < 0 || currentTemperature > 40) {
    console.log("Ehtiyot bo‘ling");
} else {
    console.log("Harorat normal.");
}

//  Foydalanuvchi kiritgan son musbat emas bo‘lsa, "Musbat emas" deb chiqaruvchi shart
let inputPositiveNumber = prompt("Son kiriting (musbat bo‘lishi kerak):");
let positiveNumber = Number(inputPositiveNumber);
if (positiveNumber <= 0) {
    console.log("Musbat emas");
} else {
    console.log("Musbat son kiritdingiz");
}

//  Foydalanuvchi 18 yoshga yetgan va haydovchilik guvohnomasi mavjud bo‘lsa, "Mashina haydashingiz mumkin" deb chiqaruvchi shart
let userAge = prompt("Yoshingizni kiriting:");
let hasDrivingLicense = prompt("Haydovchilik guvohnomangiz bormi? (ha/yo‘q)");
if (Number(userAge) >= 18 && hasDrivingLicense.toLowerCase() === "ha") {
    console.log("Mashina haydashingiz mumkin");
} else {
    console.log("Sizga haydash uchun ruxsat berilmagan");
}

//  Foydalanuvchi kiritgan son juft yoki 0 ga teng bo‘lsa, "Juft yoki nol" deb chiqaruvchi shart
let inputEvenNumber = prompt("Son kiriting:");
let evenNumber = Number(inputEvenNumber);
if (evenNumber % 2 === 0 || evenNumber === 0) {
    console.log("Juft yoki nol");
} else {
    console.log("Bu son juft emas");
}

//  Foydalanuvchi kiritgan ikki son bir-biriga teng emas bo‘lsa, "Turlicha sonlar" deb chiqaruvchi shart
let firstNumber = prompt("Birinchi sonni kiriting:");
let secondNumber = prompt("Ikkinchi sonni kiriting:");
if (Number(firstNumber) !== Number(secondNumber)) {
    console.log("Turlicha sonlar");
} else {
    console.log("Sonlar teng");
}

//  Foydalanuvchi 5 yoki 10 ni kiritgan bo‘lsa, "Maxsus son" deb chiqaruvchi shart
let specialNumber = prompt("Son kiriting:");
if (Number(specialNumber) === 5 || Number(specialNumber) === 10) {
    console.log("Maxsus son");
} else {
    console.log("Maxsus emas");
}

//  Foydalanuvchi haftaning kunini kiritganda, bu kun dam olish kuni yoki ish kuni ekanligini aniqlang
let inputDay = prompt("Haftaning kunini kiriting (dushanba, seshanba, ...):").toLowerCase();
if (inputDay === "shanba" || inputDay === "yakshanba") {
    console.log("Dam olish kuni");
} else {
    console.log("Ish kuni");
}

//  Son 1 dan katta va 50 dan kichik emas bo‘lsa, "To‘g‘ri emas" deb chiqaruvchi shart
let inputRangeNumber = prompt("Son kiriting (1 < son < 50 bo‘lishi kerak emas):");
let rangeNumber = Number(inputRangeNumber);
if (rangeNumber <= 1 || rangeNumber >= 50) {
    console.log("To‘g‘ri emas");
} else {
    console.log("To‘g‘ri son");
}

//  Foydalanuvchi uch xil son kiritganda, ulardan hech biri bir-biriga teng emasligini tekshiring
let firstInputNumber = prompt("Birinchi sonni kiriting:");
let secondInputNumber = prompt("Ikkinchi sonni kiriting:");
let thirdInputNumber = prompt("Uchinchi sonni kiriting:");
if (Number(firstInputNumber) !== Number(secondInputNumber) && Number(firstInputNumber) !== Number(thirdInputNumber) && Number(secondInputNumber) !== Number(thirdInputNumber)) {
    console.log("Sonlar bir-biriga teng emas");
} else {
    console.log("Ba'zi sonlar teng");
}



//  1 dan 10 gacha bo'lgan sonlarni chiqaruvchi sikl yozing.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  10 dan 1 gacha bo‘lgan sonlarni kamaytirish tartibida chiqaruvchi sikl yozing.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//  Faqat juft sonlarni 1 dan 20 gacha chiqaruvchi sikl yozing.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//  5 dan 50 gacha bo‘lgan sonlarning faqat toqlarini chiqaruvchi sikl yozing.
for (let i = 5; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//  1 dan 10 gacha bo‘lgan sonlarning yig‘indisini topuvchi sikl yozing.
let sum = 0; 

for (let i = 1; i <= 10; i++) {
    sum += i; 
}

console.log("Yig'indi:", sum); 


// Assalomu Aleykum ustoz men bu vazifani sal aralashtirib yozganman chunki tushunmagan joyimni tashlab ketgan edim keyin oxirida ishlab qoyganman.
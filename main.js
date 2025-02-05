// Ternary Operatorga Oid 5 Masala


// 1. Musbat bo'lsa musbat deb chiqsin bo'lmasa manfiy chiqsin.
let num = 5;
num > 0 ? console.log("Manfiy") : console.log("Musbat");

// 2. Foydalanuvchi 18 yoshga yetgan bo‘lsa, "Ruxsat berilgan" aks holda "Ruxsat berilmagan" deb chiqaruvchi shart yozing.
let age = 18;
age <= 18 ? console.log("Sizga ruxsat berilgan") : console.log("Sizga ruxsat berilmagan");

// 3. Harorat 0 darajadan past bo‘lsa "Sovuq", 0 va undan yuqori bo‘lsa "Iliq" deb chiqaruvchi shart yozing.
let temperature = 9;
num > 0 ? console.log("Iliq") : console.log("Sovuq");

// 4. Kiritilgan son juft bo‘lsa "Juft", aks holda "Toq" deb chiqaruvchi shart yozing.
let son = 7;
son % 2 === 0 ? console.log("Juft") : console.log("Toq");



// 5. Kiritilgan soat 12 dan kichik bo‘lsa "Ertalab", 12 va undan katta bo‘lsa "Kechki payt" deb chiqaruvchi shart yozing.
let hour = 12;
hour <= 12 ? console.log("Ertalab") : console.log("Kechki payt");



// Switch...case ga oid 3 Masala


// 1. Foydalanuvchi haftaning kunini raqam sifatida kiritganda (1 - Dushanba, 2 - Seshanba...) shu kunga mos nomni chiqaruvchi shart yozing.
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

// 2. Foydalanuvchi oy raqamini kiritganda (1 - Yanvar, 2 - Fevral...) shu oy nomini chiqaruvchi shart yozing.
let month = 1;
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

// 3. Foydalanuvchi baho kiritganda (1 - "Yomon", 2 - "Qoniqarli", 3 - "Yaxshi", 4 - "A'lo") mos baho nomini chiqaruvchi shart yozing.
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


// Type Conversionga oid 5 Masala
// 1. Foydalanuvchi kiritgan satrni butun songa aylantirib, uni ikki barobarga oshiring.


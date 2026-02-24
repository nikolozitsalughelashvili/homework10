//https://github.com/nikolozitsalughelashvili/homework10.git
//control
console.log(1);
// 1️ forEach – ფასების დაბეჭდვა
// გაქვს პროდუქტის ფასების მასივი:
// let prices = [15, 40, 25, 10];
// 🔹 დაბეჭდე თითოეული ფასი კონსოლში ტექსტით:
// Price: 15$
// ________________________________________
//შესრულება:

// let prices = [15, 40, 25, 10];
// prices.forEach((item) => console.log("Price: " + item + "$"));

// 2️ reduce – ჯამი
// let numbers = [5, 10, 15];
// 🔹 reduce გამოყენებით გამოთვალე ყველა რიცხვის ჯამი.
//შესრულება:
// let numbers = [5, 10, 15];
// let sum = numbers.reduce((sm, itm) => sm + itm);
// console.log(sum);

// 3️ map – ფასის გაზრდა
// let prices = [100, 200, 300];
// 🔹 შექმენი ახალი მასივი, სადაც თითოეული ფასი გაზრდილია 10%-ით.
// ________________________________________
// შესრულება:
// let prices = [100, 200, 300];
// let newPrices = prices.map((item) => item/10*11);
// console.log(newPrices);

// 4️ map – სახელების დიდი ასოებით
// let names = ["nika", "ana", "luka"];
// 🔹 შექმენი ახალი მასივი, სადაც ყველა სახელი იქნება დიდი ასოებით.
// ________________________________________
// შესრულება:
// let names = ["nika", "ana", "luka"];
// let newNames = names.map((item) => (item.toUpperCase()) );
// console.log(newNames);

// 5️ filter – სრულწლოვანები
// let ages = [12, 18, 25, 14, 30];
// 🔹 შექმენი ახალი მასივი, სადაც იქნება მხოლოდ 18 და მეტი ასაკის მომხმარებლები.
// ________________________________________
// შესრულება:
// let ages = [12, 18, 25, 14, 30];
// let newAges = ages.filter((age) => age >= 18);
// console.log(newAges);

// 6️ filter – ძვირიანი პროდუქტები
// let prices = [50, 120, 30, 200, 80];
// 🔹 დააბრუნე მხოლოდ ის ფასები, რომლებიც მეტია 100-ზე.
// ________________________________________
// შესრულება:
// let prices = [50, 120, 30, 200, 80];
// let newPrices = prices.filter((prc) => prc > 100);
// console.log(newPrices);

// 7️ sort – დალაგება ზრდადობით
// let numbers = [40, 10, 100, 25];
// 🔹 დაალაგე რიცხვები ზრდადობით.
// ________________________________________
// შესრულება:
// let numbers = [40, 10, 100, 25];
// let newNumbers = numbers.sort((n, m) => n - m);
// console.log(newNumbers);

// 8️ sort + reverse – კლებადობით
// let scores = [55, 90, 70, 100, 60];
// 🔹 დაალაგე ქულები კლებადობით.
// შესრულება:
// let scores = [55, 90, 70, 100, 60];
// let newScores = scores.sort((n, m) => m - n);
// console.log(newScores);

// 9️ some – არის თუ არა არასრულწლოვანი
// let ages = [22, 19, 17, 25];
// 🔹 შეამოწმე არის თუ არა მასივში ages ერთი არასრულწლოვანი მაინც (18-ზე ნაკლები).
// ________________________________________
// შესრულება:
// let ages = [22, 19, 17, 25];
// console.log(ages.some((smolage) => smolage < 18));

// 10 every – ყველა მომხმარებელი აქტიურია თუ არა
// let usersActive = [true, true, false, true];
// 🔹 შეამოწმე ყველა მომხმარებელი აქტიურია თუ არა.
// შესრულება:
// let usersActive = [true, true, false, true];
// console.log(usersActive.every((active) => active));

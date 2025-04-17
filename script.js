const questions = [
  {
    question: "<span class='lang-tr'>JavaScript’te bir değişken nasıl tanımlanır?</span><br><span class='lang-en'>How is a variable defined in JavaScript?</span>",
    options: [
      { text: "let x = 10;", value: "A", correct: true },
      { text: "variable x = 10;", value: "B", correct: false },
      { text: "x = 10;", value: "C", correct: false },
      { text: "define x = 10;", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>let x = 10;</strong><br>`let`, modern JavaScript’te değişken tanımlamak için kullanılan anahtar kelimedir. `var` eski bir yöntemdir, `const` sabitler içindir. `x = 10;` global değişken oluşturur ve 'use strict' modunda hata verir.</span><br><span class='lang-en'>Correct answer: <strong>let x = 10;</strong><br>`let` is the modern keyword for defining variables in JavaScript. `var` is outdated, `const` is for constants. `x = 10;` creates a global variable and errors in 'use strict' mode.</span>"
  },
  {
    question: "<span class='lang-tr'>Aşağıdakilerden hangisi bir veri türü değildir?</span><br><span class='lang-en'>Which of the following is not a data type?</span>",
    options: [
      { text: "String", value: "A", correct: false },
      { text: "Number", value: "B", correct: false },
      { text: "Function", value: "C", correct: true },
      { text: "Boolean", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>Function</strong><br>JavaScript’te veri türleri: string, number, boolean, object, null, undefined, symbol. Fonksiyonlar bir veri türü değil, nesne türü olarak kabul edilir.</span><br><span class='lang-en'>Correct answer: <strong>Function</strong><br>JavaScript data types: string, number, boolean, object, null, undefined, symbol. Functions are not a data type but considered an object type.</span>"
  },
  {
    question: "<span class='lang-tr'>\"5\" + 5 işleminin sonucu nedir?</span><br><span class='lang-en'>What is the result of \"5\" + 5?</span>",
    options: [
      { text: "10", value: "A", correct: false },
      { text: "\"55\"", value: "B", correct: true },
      { text: "25", value: "C", correct: false },
      { text: "\"5 + 5\"", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>\"55\"</strong><br>JavaScript’te `+` operatörü, bir string ile number birleştiğinde string birleştirme yapar. `\"5\" + 5` işlemi, 5’i string’e çevirir ve sonucu `\"55\"` olur.</span><br><span class='lang-en'>Correct answer: <strong>\"55\"</strong><br>In JavaScript, the `+` operator performs string concatenation when a string and number are combined. `\"5\" + 5` converts 5 to a string, resulting in `\"55\"`.</span>"
  },
  {
    question: "<span class='lang-tr'>Aşağıdakilerden hangisi bir dizi tanımlamaz?</span><br><span class='lang-en'>Which of the following does not define an array?</span>",
    options: [
      { text: "let arr = [1, 2, 3];", value: "A", correct: false },
      { text: "let arr = new Array(1, 2, 3);", value: "B", correct: false },
      { text: "let arr = {1, 2, 3};", value: "C", correct: true },
      { text: "let arr = [];", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>let arr = {1, 2, 3};</strong><br>`{1, 2, 3}` bir obje tanımlar, dizi değil. Diziler `[]` veya `new Array()` ile oluşturulur.</span><br><span class='lang-en'>Correct answer: <strong>let arr = {1, 2, 3};</strong><br>`{1, 2, 3}` defines an object, not an array. Arrays are created with `[]` or `new Array()`.</span>"
  },
  {
    question: "<span class='lang-tr'>Bir sayının çift olduğunu nasıl kontrol edersiniz?</span><br><span class='lang-en'>How do you check if a number is even?</span>",
    options: [
      { text: "number % 2 === 0", value: "A", correct: true },
      { text: "number / 2", value: "B", correct: false },
      { text: "number == even", value: "C", correct: false },
      { text: "number % 2", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>number % 2 === 0</strong><br>`%` operatörü, bir sayının başka bir sayıya bölümünden kalanını verir. Eğer `number % 2 === 0` ise, sayı çifttir.</span><br><span class='lang-en'>Correct answer: <strong>number % 2 === 0</strong><br>The `%` operator returns the remainder of division. If `number % 2 === 0`, the number is even.</span>"
  },
  {
    question: "<span class='lang-tr'>`typeof null` ne döndürür?</span><br><span class='lang-en'>What does `typeof null` return?</span>",
    options: [
      { text: "\"null\"", value: "A", correct: false },
      { text: "\"object\"", value: "B", correct: true },
      { text: "\"undefined\"", value: "C", correct: false },
      { text: "\"number\"", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>\"object\"</strong><br>`typeof null`, tarihi bir hata nedeniyle `\"object\"` döndürür. Aslında `null`, bir veri türüdür ve herhangi bir nesneye referans vermez.</span><br><span class='lang-en'>Correct answer: <strong>\"object\"</strong><br>`typeof null` returns `\"object\"` due to a historical bug. In reality, `null` is a data type representing no reference.</span>"
  },
  {
    question: "<span class='lang-tr'>Aşağıdakilerden hangisi bir fonksiyon tanımıdır?</span><br><span class='lang-en'>Which of the following is a function definition?</span>",
    options: [
      { text: "function myFunc() {}", value: "A", correct: true },
      { text: "let myFunc = [];", value: "B", correct: false },
      { text: "myFunc = {}", value: "C", correct: false },
      { text: "function = myFunc()", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>function myFunc() {}</strong><br>Fonksiyonlar, `function` anahtar kelimesiyle tanımlanır. Diğer seçenekler dizi, obje veya geçersiz syntax içerir.</span><br><span class='lang-en'>Correct answer: <strong>function myFunc() {}</strong><br>Functions are defined with the `function` keyword. Other options define arrays, objects, or invalid syntax.</span>"
  },
  {
    question: "<span class='lang-tr'>`if` koşulu nasıl yazılır?</span><br><span class='lang-en'>How is an `if` condition written?</span>",
    options: [
      { text: "if (x > 10) {}", value: "A", correct: true },
      { text: "if x > 10 {}", value: "B", correct: false },
      { text: "if (x > 10);", value: "C", correct: false },
      { text: "if {x > 10}", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>if (x > 10) {}</strong><br>`if` koşulları, parantez içinde bir ifade alır ve süslü parantezlerle kod bloğu tanımlar. Parantez zorunludur.</span><br><span class='lang-en'>Correct answer: <strong>if (x > 10) {}</strong><br>`if` conditions take an expression in parentheses and define a code block with curly braces. Parentheses are required.</span>"
  },
  {
    question: "<span class='lang-tr'>`===` ile `==` arasındaki fark nedir?</span><br><span class='lang-en'>What is the difference between `===` and `==`?</span>",
    options: [
      { text: "`===` veri türü ve değeri kontrol eder / checks both type and value", value: "A", correct: true },
      { text: "`==` sadece veri türünü kontrol eder / checks only the type", value: "B", correct: false },
      { text: "`===` sadece değeri kontrol eder / checks only the value", value: "C", correct: false },
      { text: "`==` veri türünü kontrol etmez / does not check the type", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>`===` veri türü ve değeri kontrol eder</strong><br>`===` katı eşitlik operatörüdür; hem değer hem tür eşleşmelidir. `==` tür dönüşümü yapar.</span><br><span class='lang-en'>Correct answer: <strong>`===` checks both type and value</strong><br>`===` is the strict equality operator; both value and type must match. `==` performs type coercion.</span>"
  },
  {
    question: "<span class='lang-tr'>Bir döngü nasıl yazılır?</span><br><span class='lang-en'>How is a loop written?</span>",
    options: [
      { text: "for (let i = 0; i < 5; i++) {}", value: "A", correct: true },
      { text: "for i = 0; i < 5; i++ {}", value: "B", correct: false },
      { text: "loop (i < 5) {}", value: "C", correct: false },
      { text: "for (i = 0; i < 5) {}", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>for (let i = 0; i < 5; i++) {}</strong><br>`for` döngüsü, başlangıç, koşul ve artırma ifadeleriyle tanımlanır. Parantez ve süslü parantez zorunludur.</span><br><span class='lang-en'>Correct answer: <strong>for (let i = 0; i < 5; i++) {}</strong><br>A `for` loop is defined with initialization, condition, and increment expressions. Parentheses and curly braces are required.</span>"
  },
  {
    question: "<span class='lang-tr'>Dizinin uzunluğunu nasıl bulursunuz?</span><br><span class='lang-en'>How do you find the length of an array?</span>",
    options: [
      { text: "array.length", value: "A", correct: true },
      { text: "array.size()", value: "B", correct: false },
      { text: "array.count", value: "C", correct: false },
      { text: "array.length()", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>array.length</strong><br>`length`, bir dizinin eleman sayısını döndüren bir özelliktir. `size()` veya `count` JS’de yoktur.</span><br><span class='lang-en'>Correct answer: <strong>array.length</strong><br>`length` is a property that returns the number of elements in an array. `size()` or `count` do not exist in JS.</span>"
  },
  {
    question: "<span class='lang-tr'>`undefined` ne anlama gelir?</span><br><span class='lang-en'>What does `undefined` mean?</span>",
    options: [
      { text: "Bir değişkenin tanımlı ama değer atanmamış olması / A variable is declared but not assigned a value", value: "A", correct: true },
      { text: "Bir değişkenin null olması / A variable is null", value: "B", correct: false },
      { text: "Bir fonksiyonun tanımlı olmaması / A function is not defined", value: "C", correct: false },
      { text: "Bir değişkenin string olması / A variable is a string", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>Bir değişkenin tanımlı ama değer atanmamış olması</strong><br>`undefined`, bir değişkenin tanımlı olduğu ancak bir değer atanmadığı durumdur.</span><br><span class='lang-en'>Correct answer: <strong>A variable is declared but not assigned a value</strong><br>`undefined` indicates a variable is declared but has not been assigned a value.</span>"
  },
  {
    question: "<span class='lang-tr'>Aşağıdakilerden hangisi bir string metodudur?</span><br><span class='lang-en'>Which of the following is a string method?</span>",
    options: [
      { text: "toUpperCase()", value: "A", correct: true },
      { text: "push()", value: "B", correct: false },
      { text: "sort()", value: "C", correct: false },
      { text: "map()", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>toUpperCase()</strong><br>`toUpperCase()`, bir string’i büyük harfe çevirir. Diğer seçenekler dizi metodlarıdır.</span><br><span class='lang-en'>Correct answer: <strong>toUpperCase()</strong><br>`toUpperCase()` converts a string to uppercase. Other options are array methods.</span>"
  },
  {
    question: "<span class='lang-tr'>`NaN` ne anlama gelir?</span><br><span class='lang-en'>What does `NaN` mean?</span>",
    options: [
      { text: "Not a Number", value: "A", correct: true },
      { text: "Null and Number", value: "B", correct: false },
      { text: "Negative Number", value: "C", correct: false },
      { text: "No Assignment", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>Not a Number</strong><br>`NaN`, matematiksel bir işlemin sayı üretemediği durumlarda ortaya çıkar (örneğin, `\"a\" * 2`).</span><br><span class='lang-en'>Correct answer: <strong>Not a Number</strong><br>`NaN` occurs when a mathematical operation cannot produce a number (e.g., `\"a\" * 2`).</span>"
  },
  {
    question: "<span class='lang-tr'>Bir fonksiyon nasıl çağrılır?</span><br><span class='lang-en'>How is a function called?</span>",
    options: [
      { text: "myFunc()", value: "A", correct: true },
      { text: "myFunc[]", value: "B", correct: false },
      { text: "myFunc{}", value: "C", correct: false },
      { text: "call myFunc", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>myFunc()</strong><br>Fonksiyonlar, adlarının sonuna parantez eklenerek çağrılır. Diğer syntax’lar geçersizdir.</span><br><span class='lang-en'>Correct answer: <strong>myFunc()</strong><br>Functions are called by adding parentheses after their name. Other syntaxes are invalid.</span>"
  },
  {
    question: "<span class='lang-tr'>`true` ve `false` hangi veri türündendir?</span><br><span class='lang-en'>What data type are `true` and `false`?</span>",
    options: [
      { text: "Boolean", value: "A", correct: true },
      { text: "String", value: "B", correct: false },
      { text: "Number", value: "C", correct: false },
      { text: "Object", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>Boolean</strong><br>`true` ve `false`, JavaScript’te boolean veri türünün değerleridir.</span><br><span class='lang-en'>Correct answer: <strong>Boolean</strong><br>`true` and `false` are values of the boolean data type in JavaScript.</span>"
  },
  {
    question: "<span class='lang-tr'>Aşağıdakilerden hangisi bir dizi metodudur?</span><br><span class='lang-en'>Which of the following is an array method?</span>",
    options: [
      { text: "push()", value: "A", correct: true },
      { text: "toString()", value: "B", correct: false },
      { text: "slice()", value: "C", correct: false },
      { text: "substring()", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>push()</strong><br>`push()`, bir diziye yeni eleman ekler. Diğer seçenekler string veya genel metodlardır.</span><br><span class='lang-en'>Correct answer: <strong>push()</strong><br>`push()` adds a new element to an array. Other options are string or general methods.</span>"
  },
  {
    question: "<span class='lang-tr'>`const` ile tanımlanan bir değişken yeniden atanabilir mi?</span><br><span class='lang-en'>Can a variable defined with `const` be reassigned?</span>",
    options: [
      { text: "Hayır / No", value: "A", correct: true },
      { text: "Evet / Yes", value: "B", correct: false },
      { text: "Sadece string ise / Only if it’s a string", value: "C", correct: false },
      { text: "Sadece number ise / Only if it’s a number", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>Hayır</strong><br>`const` ile tanımlanan değişkenler yeniden atanamaz, ancak içindeki obje veya dizi elemanları değiştirilebilir.</span><br><span class='lang-en'>Correct answer: <strong>No</strong><br>Variables defined with `const` cannot be reassigned, but their object or array elements can be modified.</span>"
  },
  {
    question: "<span class='lang-tr'>Bir değişkenin sayı olduğunu nasıl kontrol edersiniz?</span><br><span class='lang-en'>How do you check if a variable is a number?</span>",
    options: [
      { text: "typeof x === 'number'", value: "A", correct: true },
      { text: "x.isNumber()", value: "B", correct: false },
      { text: "x === number", value: "C", correct: false },
      { text: "typeof x === number", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>typeof x === 'number'</strong><br>`typeof` operatörü, bir değişkenin türünü string olarak döndürür. Sayılar için `\"number\"` döner.</span><br><span class='lang-en'>Correct answer: <strong>typeof x === 'number'</strong><br>The `typeof` operator returns the type as a string. For numbers, it returns `\"number\"`.</span>"
  },
  {
    question: "<span class='lang-tr'>`&&` operatörü ne yapar?</span><br><span class='lang-en'>What does the `&&` operator do?</span>",
    options: [
      { text: "Mantıksal VE / Logical AND", value: "A", correct: true },
      { text: "Mantıksal VEYA / Logical OR", value: "B", correct: false },
      { text: "Karşılaştırma / Comparison", value: "C", correct: false },
      { text: "Atama / Assignment", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>Mantıksal VE</strong><br>`&&` operatörü, her iki koşul da `true` ise `true` döndürür, aksi halde `false`.</span><br><span class='lang-en'>Correct answer: <strong>Logical AND</strong><br>The `&&` operator returns `true` if both conditions are `true`, otherwise `false`.</span>"
  },
  {
    question: "<span class='lang-tr'>Bir diziden eleman nasıl silinir?</span><br><span class='lang-en'>How do you remove an element from an array?</span>",
    options: [
      { text: "pop()", value: "A", correct: true },
      { text: "delete()", value: "B", correct: false },
      { text: "remove()", value: "C", correct: false },
      { text: "clear()", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>pop()</strong><br>`pop()`, dizinin son elemanını siler ve döndürür. Diğer seçenekler dizi için geçerli değildir.</span><br><span class='lang-en'>Correct answer: <strong>pop()</strong><br>`pop()` removes and returns the last element of an array. Other options are not valid for arrays.</span>"
  },
  {
    question: "<span class='lang-tr'>`null` ile `undefined` arasındaki fark nedir?</span><br><span class='lang-en'>What is the difference between `null` and `undefined`?</span>",
    options: [
      { text: "`null` bir değer yokluğunu, `undefined` tanımlı ama atanmamış değişkeni ifade eder / `null` indicates absence of value, `undefined` a declared but unassigned variable", value: "A", correct: true },
      { text: "`null` ve `undefined` aynıdır / `null` and `undefined` are the same", value: "B", correct: false },
      { text: "`null` bir string, `undefined` bir number’dır / `null` is a string, `undefined` is a number", value: "C", correct: false },
      { text: "`undefined` bir değer yokluğunu ifade eder / `undefined` indicates absence of value", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>`null` bir değer yokluğunu, `undefined` tanımlı ama atanmamış değişkeni ifade eder</strong><br>`null`, bilinçli olarak bir değerin olmadığını gösterir; `undefined`, bir değişkenin değer almadığını.</span><br><span class='lang-en'>Correct answer: <strong>`null` indicates absence of value, `undefined` a declared but unassigned variable</strong><br>`null` intentionally indicates no value; `undefined` means a variable has no assigned value.</span>"
  },
  {
    question: "<span class='lang-tr'>Bir string’in uzunluğunu nasıl bulursunuz?</span><br><span class='lang-en'>How do you find the length of a string?</span>",
    options: [
      { text: "str.length", value: "A", correct: true },
      { text: "str.size()", value: "B", correct: false },
      { text: "str.count", value: "C", correct: false },
      { text: "str.length()", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>str.length</strong><br>`length`, bir string’in karakter sayısını döndüren bir özelliktir.</span><br><span class='lang-en'>Correct answer: <strong>str.length</strong><br>`length` is a property that returns the number of characters in a string.</span>"
  },
  {
    question: "<span class='lang-tr'>Aşağıdakilerden hangisi bir karşılaştırma operatörü değildir?</span><br><span class='lang-en'>Which of the following is not a comparison operator?</span>",
    options: [
      { text: "=", value: "A", correct: true },
      { text: "==", value: "B", correct: false },
      { text: ">", value: "C", correct: false },
      { text: "!=", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>=</strong><br>`=` atama operatörüdür. `==`, `>`, `!=` karşılaştırma operatörleridir.</span><br><span class='lang-en'>Correct answer: <strong>=</strong><br>`=` is an assignment operator. `==`, `>`, `!=` are comparison operators.</span>"
  },
  {
    question: "<span class='lang-tr'>JavaScript’te yorum satırı nasıl yazılır?</span><br><span class='lang-en'>How is a comment written in JavaScript?</span>",
    options: [
      { text: "// Bu bir yorumdur / This is a comment", value: "A", correct: true },
      { text: "<!-- Bu bir yorumdur / This is a comment -->", value: "B", correct: false },
      { text: "# Bu bir yorumdur / This is a comment", value: "C", correct: false },
      { text: "/* Bu bir yorumdur / This is a comment", value: "D", correct: false },
    ],
    explanation: "<span class='lang-tr'>Doğru cevap: <strong>// Bu bir yorumdur</strong><br>`//` tek satırlık yorumlar için kullanılır. `/* */` çok satırlı yorumlar içindir.</span><br><span class='lang-en'>Correct answer: <strong>// This is a comment</strong><br>`//` is used for single-line comments. `/* */` is for multi-line comments.</span>"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const explanationEl = document.getElementById("explanation");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const questionCounterEl = document.getElementById("question-counter");

// Fisher-Yates shuffle algoritması
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerHTML = currentQuestion.question;
  optionsEl.innerHTML = "";
  explanationEl.innerHTML = "";
  resultEl.innerHTML = "";
  resultEl.classList.remove("show");
  explanationEl.classList.remove("show");
  nextBtn.style.display = "none";

  // Soru sayısını güncelle
  questionCounterEl.innerHTML = `<span class='lang-tr'>Soru ${currentQuestionIndex + 1}/${questions.length}</span><br><span class='lang-en'>Question ${currentQuestionIndex + 1}/${questions.length}</span>`;

  // Seçenekleri karıştır
  const shuffledOptions = shuffle([...currentQuestion.options]);
  shuffledOptions.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.setAttribute("aria-label", `Seçenek / Option ${option.value}: ${option.text}`);
    button.onclick = () => checkAnswer(option.value, option.correct);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(choice, isCorrect) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    score += 4;
    resultEl.innerHTML = "<span class='lang-tr'>✅ Tebrikler! Doğru cevap.</span><br><span class='lang-en'>✅ Congratulations! Correct answer.</span>";
    explanationEl.innerHTML = questions[currentQuestionIndex].explanation;
    explanationEl.classList.add("show");
  } else {
    score -= 2;
    resultEl.innerHTML = "<span class='lang-tr'>❌ Üzgünüm, yanlış cevap.</span><br><span class='lang-en'>❌ Sorry, wrong answer.</span>";
    // Doğru şıkkı bul ve vurgula
    const correctOption = questions[currentQuestionIndex].options.find(opt => opt.correct);
    buttons.forEach(btn => {
      if (btn.textContent === correctOption.text) {
        btn.style.backgroundColor = "#4caf50"; // Doğru şık yeşil
        btn.style.color = "white";
      }
    });
    explanationEl.innerHTML = questions[currentQuestionIndex].explanation;
    explanationEl.classList.add("show");
  }

  scoreEl.textContent = score;
  resultEl.classList.add("show");
  nextBtn.style.display = currentQuestionIndex < questions.length - 1 ? "block" : "none";

  if (currentQuestionIndex === questions.length - 1) {
    showFinalResult();
  }
}

function showFinalResult() {
  if (score > 80) {
    resultEl.innerHTML = "<span class='lang-tr'>🎉 Tebrikler! Harika bir skor!</span><br><span class='lang-en'>🎉 Congratulations! Awesome score!</span>";
    createConfetti();
  } else {
    resultEl.innerHTML = "<div class='failure-message'><span class='lang-tr'>😔 Biraz daha odaklanmalıyız!<br>Skorun: " + score + ". Tekrar deneyerek daha iyi yapabilirsin!</span><br><span class='lang-en'>😔 We need to focus more!<br>Your score: " + score + ". Try again to do better!</span></div>";
  }
}

function createConfetti() {
  const confettiContainer = document.getElementById("confetti");
  const colors = ["#f44336", "#2196f3", "#4caf50", "#ffeb3b", "#9c27b0", "#ff9800"];
  for (let i = 0; i < 250; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 7 + 8 + "px";
    confetti.style.height = confetti.style.width;
    confetti.style.animationDuration = (Math.random() * 1.5 + 1.5) + "s";
    confetti.style.setProperty("--drift", (Math.random() - 0.5) * 2);
    confettiContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
  // İkinci dalga için 500ms gecikme
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = Math.random() * 7 + 8 + "px";
      confetti.style.height = confetti.style.width;
      confetti.style.animationDuration = (Math.random() * 1.5 + 1.5) + "s";
      confetti.style.setProperty("--drift", (Math.random() - 0.5) * 2);
      confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }, 500);
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  }
};

loadQuestion();

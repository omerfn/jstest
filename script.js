const questions = [
  {
    question: "JavaScript’te bir değişken nasıl tanımlanır?",
    options: [
      { text: "let x = 10;", value: "A", correct: true },
      { text: "variable x = 10;", value: "B", correct: false },
      { text: "x = 10;", value: "C", correct: false },
      { text: "define x = 10;", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>let x = 10;</strong><br>`let`, modern JavaScript’te değişken tanımlamak için kullanılan anahtar kelimedir. `var` eski bir yöntemdir, `const` sabitler içindir. `x = 10;` global değişken oluşturur ve 'use strict' modunda hata verir."
  },
  {
    question: "Aşağıdakilerden hangisi bir veri türü değildir?",
    options: [
      { text: "String", value: "A", correct: false },
      { text: "Number", value: "B", correct: false },
      { text: "Function", value: "C", correct: true },
      { text: "Boolean", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>Function</strong><br>JavaScript’te veri türleri: string, number, boolean, object, null, undefined, symbol. Fonksiyonlar bir veri türü değil, nesne türü olarak kabul edilir."
  },
  {
    question: "\"5\" + 5 işleminin sonucu nedir?",
    options: [
      { text: "10", value: "A", correct: false },
      { text: "\"55\"", value: "B", correct: true },
      { text: "25", value: "C", correct: false },
      { text: "\"5 + 5\"", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>\"55\"</strong><br>JavaScript’te `+` operatörü, bir string ile number birleştiğinde string birleştirme yapar. `\"5\" + 5` işlemi, 5’i string’e çevirir ve sonucu `\"55\"` olur."
  },
  {
    question: "Aşağıdakilerden hangisi bir dizi tanımlamaz?",
    options: [
      { text: "let arr = [1, 2, 3];", value: "A", correct: false },
      { text: "let arr = new Array(1, 2, 3);", value: "B", correct: false },
      { text: "let arr = {1, 2, 3};", value: "C", correct: true },
      { text: "let arr = [];", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>let arr = {1, 2, 3};</strong><br>`{1, 2, 3}` bir obje tanımlar, dizi değil. Diziler `[]` veya `new Array()` ile oluşturulur."
  },
  {
    question: "Bir sayının çift olduğunu nasıl kontrol edersiniz?",
    options: [
      { text: "number % 2 === 0", value: "A", correct: true },
      { text: "number / 2", value: "B", correct: false },
      { text: "number == even", value: "C", correct: false },
      { text: "number % 2", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>number % 2 === 0</strong><br>`%` operatörü, bir sayının başka bir sayıya bölümünden kalanını verir. Eğer `number % 2 === 0` ise, sayı çifttir."
  },
  {
    question: "`typeof null` ne döndürür?",
    options: [
      { text: "\"null\"", value: "A", correct: false },
      { text: "\"object\"", value: "B", correct: true },
      { text: "\"undefined\"", value: "C", correct: false },
      { text: "\"number\"", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>\"object\"</strong><br>`typeof null`, tarihi bir hata nedeniyle `\"object\"` döndürür. Aslında `null`, bir veri türüdür ve herhangi bir nesneye referans vermez."
  },
  {
    question: "Aşağıdakilerden hangisi bir fonksiyon tanımıdır?",
    options: [
      { text: "function myFunc() {}", value: "A", correct: true },
      { text: "let myFunc = [];", value: "B", correct: false },
      { text: "myFunc = {}", value: "C", correct: false },
      { text: "function = myFunc()", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>function myFunc() {}</strong><br>Fonksiyonlar, `function` anahtar kelimesiyle tanımlanır. Diğer seçenekler dizi, obje veya geçersiz syntax içerir."
  },
  {
    question: "`if` koşulu nasıl yazılır?",
    options: [
      { text: "if (x > 10) {}", value: "A", correct: true },
      { text: "if x > 10 {}", value: "B", correct: false },
      { text: "if (x > 10);", value: "C", correct: false },
      { text: "if {x > 10}", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>if (x > 10) {}</strong><br>`if` koşulları, parantez içinde bir ifade alır ve süslü parantezlerle kod bloğu tanımlar. Parantez zorunludur."
  },
  {
    question: "`===` ile `==` arasındaki fark nedir?",
    options: [
      { text: "`===` veri türü ve değeri kontrol eder", value: "A", correct: true },
      { text: "`==` sadece veri türünü kontrol eder", value: "B", correct: false },
      { text: "`===` sadece değeri kontrol eder", value: "C", correct: false },
      { text: "`==` veri türünü kontrol etmez", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>`===` veri türü ve değeri kontrol eder</strong><br>`===` katı eşitlik operatörüdür; hem değer hem tür eşleşmelidir. `==` tür dönüşümü yapar."
  },
  {
    question: "Bir döngü nasıl yazılır?",
    options: [
      { text: "for (let i = 0; i < 5; i++) {}", value: "A", correct: true },
      { text: "for i = 0; i < 5; i++ {}", value: "B", correct: false },
      { text: "loop (i < 5) {}", value: "C", correct: false },
      { text: "for (i = 0; i < 5) {}", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>for (let i = 0; i < 5; i++) {}</strong><br>`for` döngüsü, başlangıç, koşul ve artırma ifadeleriyle tanımlanır. Parantez ve süslü parantez zorunludur."
  },
  {
    question: "Dizinin uzunluğunu nasıl bulursunuz?",
    options: [
      { text: "array.length", value: "A", correct: true },
      { text: "array.size()", value: "B", correct: false },
      { text: "array.count", value: "C", correct: false },
      { text: "array.length()", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>array.length</strong><br>`length`, bir dizinin eleman sayısını döndüren bir özelliktir. `size()` veya `count` JS’de yoktur."
  },
  {
    question: "`undefined` ne anlama gelir?",
    options: [
      { text: "Bir değişkenin tanımlı ama değer atanmamış olması", value: "A", correct: true },
      { text: "Bir değişkenin null olması", value: "B", correct: false },
      { text: "Bir fonksiyonun tanımlı olmaması", value: "C", correct: false },
      { text: "Bir değişkenin string olması", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>Bir değişkenin tanımlı ama değer atanmamış olması</strong><br>`undefined`, bir değişkenin tanımlı olduğu ancak bir değer atanmadığı durumdur."
  },
  {
    question: "Aşağıdakilerden hangisi bir string metodudur?",
    options: [
      { text: "toUpperCase()", value: "A", correct: true },
      { text: "push()", value: "B", correct: false },
      { text: "sort()", value: "C", correct: false },
      { text: "map()", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>toUpperCase()</strong><br>`toUpperCase()`, bir string’i büyük harfe çevirir. Diğer seçenekler dizi metodlarıdır."
  },
  {
    question: "`NaN` ne anlama gelir?",
    options: [
      { text: "Not a Number", value: "A", correct: true },
      { text: "Null and Number", value: "B", correct: false },
      { text: "Negative Number", value: "C", correct: false },
      { text: "No Assignment", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>Not a Number</strong><br>`NaN`, matematiksel bir işlemin sayı üretemediği durumlarda ortaya çıkar (örneğin, `\"a\" * 2`)."
  },
  {
    question: "Bir fonksiyon nasıl çağrılır?",
    options: [
      { text: "myFunc()", value: "A", correct: true },
      { text: "myFunc[]", value: "B", correct: false },
      { text: "myFunc{}", value: "C", correct: false },
      { text: "call myFunc", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>myFunc()</strong><br>Fonksiyonlar, adlarının sonuna parantez eklenerek çağrılır. Diğer syntax’lar geçersizdir."
  },
  {
    question: "`true` ve `false` hangi veri türündendir?",
    options: [
      { text: "Boolean", value: "A", correct: true },
      { text: "String", value: "B", correct: false },
      { text: "Number", value: "C", correct: false },
      { text: "Object", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>Boolean</strong><br>`true` ve `false`, JavaScript’te boolean veri türünün değerleridir."
  },
  {
    question: "Aşağıdakilerden hangisi bir dizi metodudur?",
    options: [
      { text: "push()", value: "A", correct: true },
      { text: "toString()", value: "B", correct: false },
      { text: "slice()", value: "C", correct: false },
      { text: "substring()", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>push()</strong><br>`push()`, bir diziye yeni eleman ekler. Diğer seçenekler string veya genel metodlardır."
  },
  {
    question: "`const` ile tanımlanan bir değişken yeniden atanabilir mi?",
    options: [
      { text: "Hayır", value: "A", correct: true },
      { text: "Evet", value: "B", correct: false },
      { text: "Sadece string ise", value: "C", correct: false },
      { text: "Sadece number ise", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>Hayır</strong><br>`const` ile tanımlanan değişkenler yeniden atanamaz, ancak içindeki obje veya dizi elemanları değiştirilebilir."
  },
  {
    question: "Bir değişkenin sayı olduğunu nasıl kontrol edersiniz?",
    options: [
      { text: "typeof x === 'number'", value: "A", correct: true },
      { text: "x.isNumber()", value: "B", correct: false },
      { text: "x === number", value: "C", correct: false },
      { text: "typeof x === number", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>typeof x === 'number'</strong><br>`typeof` operatörü, bir değişkenin türünü string olarak döndürür. Sayılar için `\"number\"` döner."
  },
  {
    question: "`&&` operatörü ne yapar?",
    options: [
      { text: "Mantıksal VE", value: "A", correct: true },
      { text: "Mantıksal VEYA", value: "B", correct: false },
      { text: "Karşılaştırma", value: "C", correct: false },
      { text: "Atama", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>Mantıksal VE</strong><br>`&&` operatörü, her iki koşul da `true` ise `true` döndürür, aksi halde `false`."
  },
  {
    question: "Bir diziden eleman nasıl silinir?",
    options: [
      { text: "pop()", value: "A", correct: true },
      { text: "delete()", value: "B", correct: false },
      { text: "remove()", value: "C", correct: false },
      { text: "clear()", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>pop()</strong><br>`pop()`, dizinin son elemanını siler ve döndürür. Diğer seçenekler dizi için geçerli değildir."
  },
  {
    question: "`null` ile `undefined` arasındaki fark nedir?",
    options: [
      { text: "`null` bir değer yokluğunu, `undefined` tanımlı ama atanmamış değişkeni ifade eder", value: "A", correct: true },
      { text: "`null` ve `undefined` aynıdır", value: "B", correct: false },
      { text: "`null` bir string, `undefined` bir number’dır", value: "C", correct: false },
      { text: "`undefined` bir değer yokluğunu ifade eder", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>`null` bir değer yokluğunu, `undefined` tanımlı ama atanmamış değişkeni ifade eder</strong><br>`null`, bilinçli olarak bir değerin olmadığını gösterir; `undefined`, bir değişkenin değer almadığını."
  },
  {
    question: "Bir string’in uzunluğunu nasıl bulursunuz?",
    options: [
      { text: "str.length", value: "A", correct: true },
      { text: "str.size()", value: "B", correct: false },
      { text: "str.count", value: "C", correct: false },
      { text: "str.length()", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>str.length</strong><br>`length`, bir string’in karakter sayısını döndüren bir özelliktir."
  },
  {
    question: "Aşağıdakilerden hangisi bir karşılaştırma operatörü değildir?",
    options: [
      { text: "=", value: "A", correct: true },
      { text: "==", value: "B", correct: false },
      { text: ">", value: "C", correct: false },
      { text: "!=", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>=</strong><br>`=` atama operatörüdür. `==`, `>`, `!=` karşılaştırma operatörleridir."
  },
  {
    question: "JavaScript’te yorum satırı nasıl yazılır?",
    options: [
      { text: "// Bu bir yorumdur", value: "A", correct: true },
      { text: "<!-- Bu bir yorumdur -->", value: "B", correct: false },
      { text: "# Bu bir yorumdur", value: "C", correct: false },
      { text: "/* Bu bir yorumdur", value: "D", correct: false },
    ],
    explanation: "Doğru cevap: <strong>// Bu bir yorumdur</strong><br>`//` tek satırlık yorumlar için kullanılır. `/* */` çok satırlı yorumlar içindir."
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
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  explanationEl.innerHTML = "";
  resultEl.textContent = "";
  resultEl.classList.remove("show");
  explanationEl.classList.remove("show");
  nextBtn.style.display = "none";

  // Seçenekleri karıştır
  const shuffledOptions = shuffle([...currentQuestion.options]);
  shuffledOptions.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.setAttribute("aria-label", `Seçenek ${option.value}: ${option.text}`);
    button.onclick = () => checkAnswer(option.value, option.correct);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(choice, isCorrect) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    score += 4;
    resultEl.textContent = "✅ Tebrikler! Doğru cevap.";
    resultEl.style.color = "green";
    explanationEl.innerHTML = questions[currentQuestionIndex].explanation;
    explanationEl.classList.add("show");
  } else {
    score -= 2;
    resultEl.textContent = "❌ Üzgünüm, yanlış cevap.";
    resultEl.style.color = "red";
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
    resultEl.innerHTML = "🎉 Tebrikler! Harika bir skor!";
    resultEl.style.color = "green";
    createConfetti();
  } else {
    resultEl.innerHTML = "<div class='failure-message'>😔 Biraz daha odaklanmalıyız!<br>Skorun: " + score + ". Tekrar deneyerek daha iyi yapabilirsin!</div>";
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
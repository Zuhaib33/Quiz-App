let questionData = [
  {
    question: "When did Pakistan gain independence?",
    a: "August 14, 1947",
    b: "March 23, 1947",
    c: "January 1, 1948",
    d: "December 25, 1947",
    correctAnswer: "August 14, 1947",
  },
  {
    question: "Who was the first Governor-General of Pakistan?",
    a: "Quaid-e-Azam Muhammad Ali Jinnah",
    b: "Liaquat Ali Khan",
    c: "Allama Iqbal",
    d: "Ayub Khan",
    correctAnswer: "Quaid-e-Azam Muhammad Ali Jinnah",
  },
  {
    question: "What is the national language of Pakistan?",
    a: "English",
    b: "Urdu",
    c: "Arabic",
    d: "Punjabi",
    correctAnswer: "Urdu",
  },
  {
    question: "Who was the first female Prime Minister of Pakistan?",
    a: "Fatima Jinnah",
    b: "Benazir Bhutto",
    c: "Hina Rabbani Khar",
    d: "Begum Rana Liaquat Ali Khan",
    correctAnswer: "Benazir Bhutto",
  },
  {
    question: "Which event is celebrated as Pakistan's Republic Day?",
    a: "August 14",
    b: "March 23",
    c: "January 1",
    d: "November 9",
    correctAnswer: "March 23",
  },
  {
    question: "In which year did Pakistan become a republic?",
    a: "1947",
    b: "1956",
    c: "1958",
    d: "1962",
    correctAnswer: "1956",
  },
  {
    question: "Who was the founder of the All India Muslim League?",
    a: "Allama Iqbal",
    b: "Liaquat Ali Khan",
    c: "Nawab Salimullah Khan",
    d: "Quaid-e-Azam Muhammad Ali Jinnah",
    correctAnswer: "Nawab Salimullah Khan",
  },
  {
    question: "Which war was fought between Pakistan and India in 1965?",
    a: "Indo-Pakistani War of 1965",
    b: "Indo-Pakistani War of 1971",
    c: "Kargil War",
    d: "War of Independence",
    correctAnswer: "Indo-Pakistani War of 1965",
  },
  {
    question: "Which country did Pakistan fight in the 1971 war?",
    a: "India",
    b: "Afghanistan",
    c: "Bangladesh",
    d: "Sri Lanka",
    correctAnswer: "India",
  },
  {
    question: "Who is known as the 'Father of the Nation' in Pakistan?",
    a: "Liaquat Ali Khan",
    b: "Quaid-e-Azam Muhammad Ali Jinnah",
    c: "Allama Iqbal",
    d: "Zulfiqar Ali Bhutto",
    correctAnswer: "Quaid-e-Azam Muhammad Ali Jinnah",
  },
  {
    question: "What was the first constitution of Pakistan?",
    a: "Constitution of 1947",
    b: "Constitution of 1956",
    c: "Constitution of 1962",
    d: "Constitution of 1973",
    correctAnswer: "Constitution of 1956",
  },
  {
    question: "Which city is the capital of Pakistan?",
    a: "Karachi",
    b: "Islamabad",
    c: "Lahore",
    d: "Rawalpindi",
    correctAnswer: "Islamabad",
  },
  {
    question: "In which year was Pakistan's first atomic bomb tested?",
    a: "1974",
    b: "1998",
    c: "1982",
    d: "1991",
    correctAnswer: "1998",
  },
  {
    question: "Who was the first President of Pakistan?",
    a: "Iskander Mirza",
    b: "Zulfikar Ali Bhutto",
    c: "Ghulam Muhammad",
    d: "Fazal Ilahi Chaudhry",
    correctAnswer: "Iskander Mirza",
  },
  {
    question: "What is the name of the Pakistan's largest dam?",
    a: "Mangla Dam",
    b: "Tarbela Dam",
    c: "Warsak Dam",
    d: "Kundian Dam",
    correctAnswer: "Tarbela Dam",
  },
  {
    question: "Which Pakistani leader's famous book is titled 'If I Am Assassinated'?",
    a: "Benazir Bhutto",
    b: "Zulfiqar Ali Bhutto",
    c: "Imran Khan",
    d: "Liaquat Ali Khan",
    correctAnswer: "Zulfiqar Ali Bhutto",
  },
  {
    question: "Which country was the first to recognize Pakistan's independence?",
    a: "United States",
    b: "United Kingdom",
    c: "Turkey",
    d: "Iran",
    correctAnswer: "Iran",
  },
  {
    question: "Who was the first Chief Martial Law Administrator of Pakistan?",
    a: "General Yahya Khan",
    b: "General Zia-ul-Haq",
    c: "General Ayub Khan",
    d: "General Pervez Musharraf",
    correctAnswer: "General Ayub Khan",
  }
];

let question = document.querySelector("h2");
let answers = document.querySelectorAll("label");
let input = document.querySelectorAll("input");
let index = 0;
//  for (let i=0; index<questionData.length; i++){
let putData = () => {
  question.innerHTML = `${index + 1}) ${questionData[index].question}`;
  answers[0].innerHTML = questionData[index].a;
  answers[1].innerHTML = questionData[index].b;
  answers[2].innerHTML = questionData[index].c;
  answers[3].innerHTML = questionData[index].d;

  input[0].value = questionData[index].a;
  input[1].value = questionData[index].b;
  input[2].value = questionData[index].c;
  input[3].value = questionData[index].d;
};
putData();

let submit = () => {
  let uerans = document.querySelector("input:checked").value;
  let corret = questionData[index].correctAnswer;
  let chkans = document.getElementById("chkans");
  let options = document.querySelectorAll(".options");
  if (uerans === corret) {
    chkans.innerHTML = "Correct Answer";
    chkans.style.color = "green";
    console.log("right");
    right++;
    let a = `Right Answer =${right} of ${total}`;
    document.getElementById("right").innerText = a;
  } else {
    console.log("wrong");
    chkans.innerHTML = "Wrong Answer";
    chkans.style.color = "red";
    wrong++;
  }
  for ( option of options) {
    option.checked = false;
  }
  index++;
  if (index > questionData.length - 1) {
    console.log("Quiz end");
    let box = document.querySelector("#box");
    box.style.display = "none";

    // this show the results
    let end = document.querySelector(".results");
    end.classList.remove("results");
    let li = document.querySelectorAll("li");
    li[0].innerText = `Total Number of Questions= ${total}`;
    li[1].innerText = `Total Number of Right Answer= ${right}`;
    li[2].innerText = `Total Number of Wrong Answer= ${wrong}`;
  } else {
    putData();
  }
};


let total = questionData.length;
let right = 0;
let wrong = 0;

//this answers the question

let pp = document.getElementById("pp");
let ansList = document.querySelector(".display");
function allAnswers() {
  ansList.style.display = "none";
  pp.style.display = "inline-block";
  for (let i = 0; i < questionData.length; i++) {
    let qus = document.createElement("li");
    let ans = document.createElement("p");
    qus.innerHTML = `${i + 1}) ${questionData[i].question}`;
    ans.innerHTML = questionData[i].correctAnswer;
    pp.appendChild(qus);
    pp.appendChild(ans);
    ans.style.color = "green";
  }
}



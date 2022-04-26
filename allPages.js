// .....................PAGE-1.......................

const pg1Exitbtn = document.querySelector(".pg1E-btn")
const p1Exit = document.querySelector(".p1exit")

var a;
function show_hide() {
    const pexit = document.querySelector('.pexit');
    if (a == 1) {
        pexit.style.display = "block";
        document.querySelector(".nav-container").classList.add('nav-container1')
        return a = 0;
    }

    else {
        pexit.style.display = "none";
        document.querySelector(".nav-container").classList.remove('nav-container1')
        return a = 1;
    }

}

// ....................................................

function redirect() {
    window.location.href = 'page-2.html';
}
function redirect2() {
    window.location.href = 'index.html';
}

// .........................................................

var optionsC_Hours;
var optionsGrade_list;

function appearance() {

    const creditHours = document.querySelector(".creditHours");
    var selectBox = document.createElement("select");
    creditHours.appendChild(selectBox);
    selectBox.id = 'selectBox-1';

    const grade = document.querySelector(".grade");
    var selectBox2 = document.createElement("select");
    grade.appendChild(selectBox2);
    selectBox2.id = 'selectBox-2';

    var optionList = ['C-Hours', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    var gradeList = ['Grade', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F']

    for (var i = 0; i < optionList.length; i++) {
        optionsC_Hours = document.createElement("option");
        selectBox.appendChild(optionsC_Hours)
        optionsC_Hours.value = optionList[i];
        optionsC_Hours.text = optionList[i]
    }
    for (var i = 0; i < gradeList.length; i++) {
        optionsGrade_list = document.createElement("option");
        selectBox2.appendChild(optionsGrade_list)
        optionsGrade_list.value = gradeList[i];
        optionsGrade_list.text = gradeList[i]
    }

}

// .....................................................

var selectBox = document.getElementById('selectBox');
var selectedText;
let selectedValue;
let count;
document.addEventListener('change', function () {
    selectedValue = parseInt(selectBox.options[selectBox.selectedIndex].value);
    selectedText = parseInt(selectBox.options[selectBox.selectedIndex].text);
    if (selectedValue) {
        redirect();
    }
})

appearance()


const pexit = document.querySelector('.pexit')
pexit.addEventListener('click', () => {
    pg1Exitbtn.style.color = 'red'
})



























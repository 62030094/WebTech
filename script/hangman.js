/*ประกาศตัวแปรอาเรย์ที่เก็บคำตอบ*/ 
var programming_languages = [

    "python",
   
    "javascript",
   
    "mongodb",
   
    "json",
   
    "java",
   
    "html",
   
    "css",
   
    "c",
   
    "csharp",
   
    "golang",
   
    "kotlin",
   
    "php",
   
    "sql",
   
    "ruby"
   
   ]
   /*ตัวแปรต่างๆ*/ 
   
   let answer = '';
   
   let maxWrong = 6;
   
   let mistakes = 0;
   
   let guessed = [];
   
   let wordStatus = null;
   /*สุ่มคำตอบที่ถูกต้องในอาเรย์ที่ประกาศ */
   function randomWord() {
   
     answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
   
   }
   /*สร้างปุ่มคำศัพท์ขึ้นมาที่เมื่อกดจะส่งค่าไปยังhandleGuess */
   function generateButtons() {
   
     let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
   
       `
   
         <button
   
           class="btn btn-lg btn-primary m-2"
   
           id='` + letter + `'
   
           onClick="handleGuess('` + letter + `')"
   
         >
   
           ` + letter + `
   
         </button>
   
       `).join('');
   
     document.getElementById('keyboard').innerHTML = buttonsHTML;
   
   }
   /*ทำการเช็คว่าคำศัพท์ที่กดมาถูกไหมหากถูกจะทำฟังก์ชั่นguessedWord และ checkIfGameWon แต่หากผิดจะ+1ค่าmistakes และทำฟังก์ชั่น updateMistakes checkIfGameLost และ  updateHangmanPicture */
   function handleGuess(chosenLetter) {
   
     guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
   
     document.getElementById(chosenLetter).setAttribute('disabled', true);
   
     if (answer.indexOf(chosenLetter) >= 0) {
   
       guessedWord();
   
       checkIfGameWon();
   
     } else if (answer.indexOf(chosenLetter) === -1) {
   
       mistakes++;
   
       updateMistakes();
   
       checkIfGameLost();
   
       updateHangmanPicture();
   
     }
   
   }
   /*อัพเดทรูปภาพ */
   function updateHangmanPicture() {
   
     document.getElementById('hangmanPic').src = '../PerosonalWeb/img/' + mistakes + '.jpg';
   
   }
   /*เช็คว่าwordStatusเท่ากับanswerหรือยัง หรือก็ถือชนะหรือยัง ถ้าใช่จะแสดงผล You Won!!! */
   function checkIfGameWon() {
   
     if (wordStatus === answer) {
   
       document.getElementById('keyboard').innerHTML = 'You Won!!!';
   
     }
   
   }
   /*เช็คว่า mistakesเท่ากับ maxWrong หรือยังหรือก็คือครบจำนวนที่ผิดได้หรือยัง ถ้าใช่จะแสดงผล You Lost และแสดงคำตอบที่ถูกต้อง */
   function checkIfGameLost() {
   
     if (mistakes === maxWrong) {
   
       document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
   
       document.getElementById('keyboard').innerHTML = 'You Lost!!!';
   
     }
   
   }
   /*กำหนดขีดที่เป็นตัวอักษรคำตอบ */
   function guessedWord() {
   
     wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
   
     document.getElementById('wordSpotlight').innerHTML = wordStatus;
   
   }
   /*อัพเดทจำนวนครั้งที่ผิด */
   
   function updateMistakes() {
   
     document.getElementById('mistakes').innerHTML = mistakes;
   
   }
   /*รีเซ็ตทุกอย่างเพื่อเริ่มใหม่ */
   function reset() {
   
     mistakes = 0;
   
     guessed = [];
   
     document.getElementById('hangmanPic').src = '../PerosonalWeb/img/0.jpg';
     
   
     randomWord();
   
     guessedWord();
   
     updateMistakes();
   
     generateButtons();
   
   }
   
   document.getElementById('maxWrong').innerHTML = maxWrong;
   
   randomWord();
   
   generateButtons();
   
   guessedWord();



let onchoose = 0;
let onchoose_time = 0;

//********************** setting the score element-********************

let score = -1;
const scorecount = document.getElementById("score");

$(document).ready(function(){
    $(".fa").click(function(){
        $(".popupoverlay, .popupcontent").addClass("active");
    });

    $(".cancel, .popupoverlay").click(function(){
        $(".popupoverlay, .popupcontent").removeClass("active");
    });

});

//***********************Setting the timer upper*********************

function timer(){

    var count = 10;
    var interval = setInterval(function(){

    document.getElementById('count').innerHTML = count;
    count--;

    if (count === -1){
        clearInterval(interval);
        timerunout();
        //document.getElementById('count').innerHTML = '0';
        
    };

    }, 1000);

    switch(onchoose){

        case 1:
            clearInterval(interval);
            break;

        case 2:
            clearInterval(interval);
            break;
            
        // file deepcode ignore DuplicateCaseBody: <no idea>
        case 3:
            clearInterval(interval);
            break; 
            
        case 4:
            clearInterval(interval);
            break; 
            
        case 5:
            clearInterval(interval);
            break; 

        case 6:
            clearInterval(interval);
            break; 
            
        case 7:
            clearInterval(interval);
            break; 
            
        case 8:
            clearInterval(interval);
            break; 
            
        case 9:
            clearInterval(interval);
            break;  

    };
};

//*************************Calling question and answer div****************************

const element = document.getElementById("options");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

// ********************creating divs for pop up when wrong or correct****************

const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const timediv = document.querySelector("timediv");


//************************Removing changes on page for following question**************

function removechanges(){

        // background color

    opt2.style.backgroundColor = "hsla(33, 100%, 88%, 0.5)";
    opt1.style.backgroundColor = "hsla(33, 100%, 88%, 0.5)"; 
    opt4.style.backgroundColor = "hsla(33, 100%, 88%, 0.5)";
    opt3.style.backgroundColor = "hsla(33, 100%, 88%, 0.5)";


//**********************Re-adjust border*************************

    opt1.style.border = "5px solid rgba(0, 0, 0, 0.3)"; 
    opt2.style.border = "5px solid rgba(0, 0, 0, 0.3)";
    opt3.style.border = "5px solid rgba(0, 0, 0, 0.3)";
    opt4.style.border = "5px solid rgba(0, 0, 0, 0.3)";

    opt1.style.borderRadius= "5px";
    opt2.style.borderRadius= "5px";
    opt3.style.borderRadius= "5px";
    opt4.style.borderRadius= "5px";

    // remove pop up
    div.remove();
    div1.remove();
    div2.remove();
    div3.remove();
    div4.remove();
    div5.remove();
    div6.remove();
    div7.remove();
    div8.remove();
    div9.remove();
        

    // stop button animation
    button.style.animation = "none"; 
    
    /* make timediv invisible */
    $(document).ready(function(){
        $(".timediv").removeClass("visible");
});
    
    //enable buttons for answers
    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;

    //reset timer
    timer();


};

//********************Apdating the score**************************


    function updatescore(){
        let upscore = score + 1;
        scorecount.innerHTML = upscore;
    };


// next button
const button = document.getElementById("nextbutton");

// when time runs out
function timerunout(){

    /* make timediv visible*/
    $(document).ready(function(){
            $(".timediv").addClass("visible");
    });
    
    
    //button style
    button.style.animation = "anim";
    button.style.animationDuration = "3s";
    button.style.animationIterationCount = "infinite";
    button.style.animationTimingFunction = "ease-in-out";
    button.disabled = false;

    // disable option buttons
    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;

    // remove pop up 
    setTimeout(() => {
        bioquestion.next();
    }, 10000);
           
};

function styleofpopupcorrect(){

    // next button
    button.style.animation = "anim";
    button.style.animationDuration = "3s";
    button.style.animationIterationCount = "infinite";
    button.style.animationTimingFunction = "ease-in-out";

    button.disabled = false;
    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;

};


function styleofpopupwrong(){

    // next button

    button.style.animation = "anim";
    button.style.animationDuration = "3s";
    button.style.animationIterationCount = "infinite";
    button.style.animationTimingFunction = "ease-in-out";

    button.disabled = false;
    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;
      
};


const bioquestion = {
    
    next: function(){



      switch(onchoose){

        case 0:
            if(onchoose_time === 1){
                bioquestion.two.random();
                resert();
                //removechanges();
            }else if(onchoose_time === 2){
                bioquestion.three.random();
                resert();
                //removechanges();
            }else if(onchoose_time === 3){
                bioquestion.fourth.random();
                resert();
                //removechanges();
            }else if(onchoose_time === 4){
                bioquestion.fifth.random();
                resert();
                //removechanges();
            }
            break;

        case 1:
            bioquestion.two.random();
            resert();
            break;

        case 2:
            bioquestion.three.random();
            resert();
            break;
            
        case 3:
            bioquestion.fourth.random();
            resert();
            break;

        case 4:
            bioquestion.fifth.random();
            resert();
            break;  
        
        case 5:
            bioquestion.sixth.random();
            resert();
            break;

        case 6:
            bioquestion.seventh.random();
            resert();
            break; 
            
        case 7:
            bioquestion.eighth.random();
            resert();
            break; 
            
        case 8:
            bioquestion.ninth.random();
            resert();
            break; 
            
        case 9:
            bioquestion.tenth.random();
            resert();
            break; 
          
        };

    },

    one: {


     random: function(){

        //next if onchoose = 0
        onchoose_time = 1;

        //remove div
        removechanges();
        bioquestion.one.order1();
        button.disabled = true;

        timer();

        },

        popwhencorrect: function(){

            // add div to state that they are correct
            const par = document.createElement("p");
            const heading = document.createElement("h3");
            const text = document.createTextNode("Correct!");
            const ans = document.createTextNode("Nutrition is the process of taking in food and converting it into energy and other vital nutrients required for life")
            const emoji = document.createTextNode("😀");

            // append to webpage

            element.appendChild(div);
            div.classList.add("correct")
            div.appendChild(heading);
            div.appendChild(par);
            heading.appendChild(text);
            heading.appendChild(emoji);
            par.appendChild(ans);

            styleofpopupcorrect();

            // update score
            score += 1;
            updatescore();

            // stop question timer
            onchoose = 1;
            
        },

        popwhenwrong: function(){

            // add div to state that they are correct
            const par = document.createElement("p");
            const heading = document.createElement("h3");
            const text = document.createTextNode("Wrong!");
            const ans = document.createTextNode("The correct answer is nutrition. It is the process of taking in food and converting it into energy and other vital nutrients required for life")
            const emoji = document.createTextNode("🙁");

            // append to webpage

            element.appendChild(div);
            div.classList.add("wrong");
            div.appendChild(heading);
            div.appendChild(par);
            heading.appendChild(text);
            heading.appendChild(emoji);
            par.appendChild(ans);

            styleofpopupwrong();

            // stop question timer
            onchoose = 1;

        },

        // option2 correct

        correct: function(){

            // change background color
            
            opt1.style.backgroundColor = "grey"; 
            opt2.style.backgroundColor = "lawngreen";
            opt4.style.backgroundColor = "grey";
            opt3.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.one.popwhencorrect();

            // next
            opt2.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

            
        },


        wrong1: function(){

            // change background color

            opt1.style.backgroundColor = "red";
            opt2.style.backgroundColor = "lawngreen";
            opt3.style.backgroundColor = "grey"; 
            opt4.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.one.popwhenwrong();

            // next

            opt1.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

        wrong2: function(){
            // change background color

            opt1.style.backgroundColor = "grey"; 
            opt2.style.backgroundColor = "lawngreen";
            opt3.style.backgroundColor = "red";
            opt4.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.one.popwhenwrong();

            // next

            opt3.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

        wrong3: function(){
            // change background color

            opt4.style.backgroundColor = "red";
            opt1.style.backgroundColor = "grey"; 
            opt2.style.backgroundColor = "lawngreen";
            opt3.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.one.popwhenwrong();

            // next

            opt4.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

//***********************Question and answers*************************************

        
        order1: function(){
        
            document.getElementById("question").innerHTML = "Which  characteristic  of  living  organisms is  the  taking  in <br> of  materials  for  energy,  growth  and development?";
            opt1.innerHTML = "Reproduction";
            opt2.innerHTML = "Nutrition";
            opt3.innerHTML = "Excretion";
            opt4.innerHTML = "Respiration";

            opt1.addEventListener("click", bioquestion.one.wrong1);
            opt2.addEventListener("click", bioquestion.one.correct);
            opt3.addEventListener("click", bioquestion.one.wrong2);
            opt4.addEventListener("click", bioquestion.one.wrong3);

        },

    },

    two: {

        popwhencorrect: function(){

            // add div to state that they are correct

            const heading = document.createElement("h3");
            const par = document.createElement("p");
            const text = document.createTextNode("Correct!");
            const ans = document.createTextNode("Ranunculus bulbosus and Ranunculus repens")
            const emoji = document.createTextNode("😀");

            // append to webpage

            element.appendChild(div1);
            div1.classList.add("correct");
            div1.appendChild(heading);
            div1.appendChild(par);
            div.remove();
            heading.appendChild(text);
            heading.appendChild(emoji);
            par.appendChild(ans);

            styleofpopupcorrect();

            updatescore();

            // stop question timer
            onchoose = 2;

        },

        popwhenwrong: function(){

            // add div to state that they are correct

            const heading = document.createElement("h3");
            const par = document.createElement("p");
            const text = document.createTextNode("Wrong!");
            const ans = document.createTextNode("The correct answer is Ranunculus bulbosus and Ranunculus repens")
            const emoji = document.createTextNode("🙁");

            // append to webpage

            element.appendChild(div1);
            div1.classList.add("wrong");
            div1.appendChild(heading);
            div1.appendChild(par);
            div.remove();
            heading.appendChild(text);
            heading.appendChild(emoji);
            par.appendChild(ans);

            styleofpopupwrong();

            // stop question timer
            onchoose = 2;

        },


        // option2 correct

        correct: function(){

            // change background color

            opt2.style.backgroundColor = "lawngreen";
            opt1.style.backgroundColor = "grey"; 
            opt4.style.backgroundColor = "grey";
            opt3.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.two.popwhencorrect();

            opt2.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

        
        wrong1: function(){

            // change background color

            opt1.style.backgroundColor = "red";
            opt3.style.backgroundColor = "grey"; 
            opt2.style.backgroundColor = "lawngreen";
            opt4.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.two.popwhenwrong();

            opt1.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

        wrong2: function(){
                // change background color

            opt3.style.backgroundColor = "red";
            opt1.style.backgroundColor = "grey"; 
            opt2.style.backgroundColor = "lawngreen";
            opt4.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.two.popwhenwrong();

            opt3.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

        wrong3: function(){
            // change background color

            opt4.style.backgroundColor = "red";
            opt1.style.backgroundColor = "grey"; 
            opt2.style.backgroundColor = "lawngreen";
            opt3.style.backgroundColor = "grey";

            borderRemove();

            bioquestion.two.popwhenwrong();

            opt4.addEventListener("click", setTimeout(() => {
                bioquestion.next();
            }, 60000));

        },

        order1: function(){
            document.getElementById("question").innerHTML = "Which pair of plant species belong to the same genus? ";
            opt1.innerHTML = "Juncus bulbosus and Ranunculus bulbosus";
            opt2.innerHTML = "Ranunculus bulbosus and Ranunculus repens";
            opt3.innerHTML = "Callisia repens and Juncus bulbosus";
            opt4.innerHTML = "Callisia repens and Ranunculus repens";

            opt1.addEventListener("click", bioquestion.two.wrong1);
            opt2.addEventListener("click", bioquestion.two.correct);
            opt3.addEventListener("click", bioquestion.two.wrong2);
            opt4.addEventListener("click", bioquestion.two.wrong3);

        },

        random: function(){

            //next if onchoose = 0
            onchoose_time = 2;

            document.getElementById("questionnum").innerHTML = "2 of 10 questions";

            removechanges();
                
            bioquestion.two.order1();
            button.disabled = true;

            //timer();
        }
    },

    three: {

            popwhencorrect: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Correct!");
                const ans = document.createTextNode("Nitrogen")
                const emoji = document.createTextNode("😀");

                // append to webpage

                element.appendChild(div2);
                div2.classList.add("correct");
                div2.appendChild(heading);
                div2.appendChild(par);
                div1.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupcorrect();

            
                updatescore();

                // stop question timer
                onchoose = 3;

                },

            popwhenwrong: function(){

            // add div to state that they are correct

            const heading = document.createElement("h3");
            const par = document.createElement("p");
            const text = document.createTextNode("Wrong!");
            const ans = document.createTextNode("The correct answer is Nitrogen")
            const emoji = document.createTextNode("🙁");

            // append to webpage

            element.appendChild(div2);
            div2.classList.add("wrong");
            div2.appendChild(heading);
            div2.appendChild(par);
            div1.remove();
            heading.appendChild(text);
            heading.appendChild(emoji);
            par.appendChild(ans);

            styleofpopupwrong();

            // stop question timer
            onchoose = 3;

            },


        // option2 correct

        correct: function(){

        // change background color

        opt2.style.backgroundColor = "lawngreen";
        opt1.style.backgroundColor = "grey"; 
        opt4.style.backgroundColor = "grey";
        opt3.style.backgroundColor = "grey";

        bioquestion.three.popwhencorrect();

        opt2.addEventListener("click", setTimeout(() => {
            bioquestion.next();
        }, 60000));

        },


            wrong1: function(){

                // change background color

                opt1.style.backgroundColor = "red";
                opt3.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt4.style.backgroundColor = "grey";

                bioquestion.three.popwhenwrong();

                opt1.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

            },

            wrong2: function(){
                    // change background color

                    opt3.style.backgroundColor = "red";
                    opt1.style.backgroundColor = "grey"; 
                    opt2.style.backgroundColor = "lawngreen";
                    opt4.style.backgroundColor = "grey";

                    bioquestion.three.popwhenwrong();

                    opt3.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

            },

            wrong3: function(){
                // change background color

                opt4.style.backgroundColor = "red";
                opt1.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt3.style.backgroundColor = "grey";

                bioquestion.three.popwhenwrong();

                opt4.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

            },

         
            order1: function(){
                document.getElementById("question").innerHTML = "Which element is found in proteins but is absent from fats?";
                opt1.innerHTML = "Hydrogen";
                opt2.innerHTML = "nitrogen";
                opt3.innerHTML = "Carbon";
                opt4.innerHTML = "Oxygen";

                opt1.addEventListener("click", bioquestion.three.wrong1);
                opt2.addEventListener("click", bioquestion.three.correct);
                opt3.addEventListener("click", bioquestion.three.wrong2);
                opt4.addEventListener("click", bioquestion.three.wrong3);

            },

           

            random: function(){
                //next if onchoose = 0
                onchoose_time = 3;

                    // add question number
                document.getElementById("questionnum").innerHTML = "3 of 10 questions";

                    // remove div 
                removechanges();

                bioquestion.three.order1();
                button.disabled = true;

                //timer();
            }
        },

 fourth: {

            popwhencorrect: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Correct!");
                const ans = document.createTextNode("The pH of the stomach is acidic.")
                const emoji = document.createTextNode("😀");

                // append to webpage

                element.appendChild(div3);
                div3.classList.add("correct");
                div3.appendChild(heading);
                div3.appendChild(par);
                div2.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupcorrect();

                updatescore();

                // stop question timer
                onchoose = 4;

                },

                popwhenwrong: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Wrong!");
                const ans = document.createTextNode("The correct answer is that the pH of the stomach is acidic.")
                const emoji = document.createTextNode("🙁");

                // append to webpage

                element.appendChild(div3);
                div3.classList.add("wrong");
                
                div3.appendChild(heading);
                div3.appendChild(par);
                div2.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupwrong();

                // stop question timer
                onchoose = 4;

                },

                // option2 correct

                correct: function(){

                // change background color

                opt2.style.backgroundColor = "lawngreen";
                opt1.style.backgroundColor = "grey"; 
                opt4.style.backgroundColor = "grey";
                opt3.style.backgroundColor = "grey";

                bioquestion.fourth.popwhencorrect();

                opt2.addEventListener("click", setTimeout(() => {
                bioquestion.next();
                }, 60000));

                },

               
                wrong1: function(){

                // change background color

                opt1.style.backgroundColor = "red";
                opt3.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt4.style.backgroundColor = "grey";

                bioquestion.fourth.popwhenwrong();

                opt1.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                wrong2: function(){
                    // change background color

                    opt3.style.backgroundColor = "red";
                    opt1.style.backgroundColor = "grey"; 
                    opt2.style.backgroundColor = "lawngreen";
                    opt4.style.backgroundColor = "grey";

                    bioquestion.fourth.popwhenwrong();

                    opt3.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                wrong3: function(){
                // change background color

                opt4.style.backgroundColor = "red";
                opt1.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt3.style.backgroundColor = "grey";

                bioquestion.fourth.popwhenwrong();

                opt4.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

               

            order1: function(){
                document.getElementById("question").innerHTML = "Why does salivary amylase not work in the stomach?";
                opt1.innerHTML = "The temperature of the stomach is 37 degrees celcius. ";
                opt2.innerHTML = "The pH of the stomach is acidic.";
                opt3.innerHTML = "It is produced in the mouth. ";
                opt4.innerHTML = "Starch is not present in the stomach. ";

                opt1.addEventListener("click", bioquestion.fourth.wrong1);
                opt2.addEventListener("click", bioquestion.fourth.correct);
                opt3.addEventListener("click", bioquestion.fourth.wrong2);
                opt4.addEventListener("click", bioquestion.fourth.wrong3);

                },

               
            random: function(){

                //next if onchoose = 0
                onchoose_time = 4;

                    // add question number
                document.getElementById("questionnum").innerHTML = "4 of 10 questions";

                    // remove div 
                removechanges();

                    //pick random question

                bioquestion.fourth.order1();
                button.disabled = true;
                
                //timer();
            }
        },

    fifth: {

            popwhencorrect: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Correct!");
                const ans = document.createTextNode("Brain")
                const emoji = document.createTextNode("😀");

                // append to webpage

                element.appendChild(div4);
                div4.classList.add("correct");
                div4.appendChild(heading);
                div4.appendChild(par);
                div3.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupcorrect();

               
                updatescore();

                // stop question timer
                onchoose = 5;

                },

                popwhenwrong: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Wrong!");
                const ans = document.createTextNode("The correct answer is brain.")
                const emoji = document.createTextNode("🙁");

                // append to webpage

                element.appendChild(div4);
                div4.classList.add("wrong");
                div4.appendChild(heading);
                div4.appendChild(par);
                div3.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupwrong();

                // stop question timer
                onchoose = 5;

                },


                // option2 correct

                correct: function(){

                // change background color

                opt2.style.backgroundColor = "lawngreen";
                opt1.style.backgroundColor = "grey"; 
                opt4.style.backgroundColor = "grey";
                opt3.style.backgroundColor = "grey";

                bioquestion.fifth.popwhencorrect();

                opt2.addEventListener("click", setTimeout(() => {
                bioquestion.next();
                }, 60000));

                },

                

                wrong1: function(){

                // change background color

                opt1.style.backgroundColor = "red";
                opt3.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt4.style.backgroundColor = "grey";

                bioquestion.fifth.popwhenwrong();

                opt1.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                wrong2: function(){
                    // change background color

                    opt3.style.backgroundColor = "red";
                    opt1.style.backgroundColor = "grey"; 
                    opt2.style.backgroundColor = "lawngreen";
                    opt4.style.backgroundColor = "grey";

                    bioquestion.fifth.popwhenwrong();

                    opt3.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                wrong3: function(){
                // change background color

                opt4.style.backgroundColor = "red";
                opt1.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt3.style.backgroundColor = "grey";

                bioquestion.fifth.popwhenwrong();

                opt4.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                order1: function(){
                document.getElementById("question").innerHTML = "Which organ detects the changes in the carbon dioxide concentration of the blood?";
                opt1.innerHTML = "Liver";
                opt2.innerHTML = "Brain";
                opt3.innerHTML = "Pancreas";
                opt4.innerHTML = "Lungs";

                opt1.addEventListener("click", bioquestion.fifth.wrong1);
                opt2.addEventListener("click", bioquestion.fifth.correct);
                opt3.addEventListener("click", bioquestion.fifth.wrong2);
                opt4.addEventListener("click", bioquestion.fifth.wrong3);

                },


            random: function(){
                    
                document.getElementById("questionnum").innerHTML = "5 of 10 questions";
                    
                removechanges();   

                bioquestion.fifth.order1();
                button.disabled = true;
                
                //timer();
            }
            },
            
    sixth: {


            popwhencorrect: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Correct!");
                const ans = document.createTextNode("Protein")
                const emoji = document.createTextNode("😀");

                // append to webpage

                element.appendChild(div5);
                div5.classList.add("correct");
                div5.appendChild(heading);
                div5.appendChild(par);
                div4.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupcorrect();

                updatescore();

                // stop question timer
                onchoose = 6;

                },

                popwhenwrong: function(){

                // add div to state that they are correct

                const heading = document.createElement("h3");
                const par = document.createElement("p");
                const text = document.createTextNode("Wrong!");
                const ans = document.createTextNode("The correct answer is Protein.")
                const emoji = document.createTextNode("🙁");

                // append to webpage

                element.appendChild(div5);
                div5.classList.add("wrong");
                div5.appendChild(heading);
                div5.appendChild(par);
                div4.remove();
                heading.appendChild(text);
                heading.appendChild(emoji);
                par.appendChild(ans);

                styleofpopupwrong();

                // stop question timer
                onchoose = 6;

                },


                // option2 correct

                correct: function(){

                // change background color

                opt2.style.backgroundColor = "lawngreen";
                opt1.style.backgroundColor = "grey"; 
                opt4.style.backgroundColor = "grey";
                opt3.style.backgroundColor = "grey";

                bioquestion.sixth.popwhencorrect();

                opt2.addEventListener("click", setTimeout(() => {
                bioquestion.next();
                }, 60000));

                },


                wrong1: function(){

                // change background color

                opt1.style.backgroundColor = "red";
                opt3.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt4.style.backgroundColor = "grey";

                bioquestion.sixth.popwhenwrong();

                opt1.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                wrong2: function(){
                    // change background color

                    opt3.style.backgroundColor = "red";
                    opt1.style.backgroundColor = "grey"; 
                    opt2.style.backgroundColor = "lawngreen";
                    opt4.style.backgroundColor = "grey";

                    bioquestion.sixth.popwhenwrong();

                    opt3.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

                wrong3: function(){
                // change background color

                opt4.style.backgroundColor = "red";
                opt1.style.backgroundColor = "grey"; 
                opt2.style.backgroundColor = "lawngreen";
                opt3.style.backgroundColor = "grey";

                bioquestion.sixth.popwhenwrong();

                opt4.addEventListener("click", setTimeout(() => {
                    bioquestion.next();
                }, 60000));

                },

            order1: function(){
                document.getElementById("question").innerHTML = "Which food type, when eaten in excess, will cause a rise in the urea content of urine?";
                opt1.innerHTML = "Carbohydrate";
                opt2.innerHTML = "Protein";
                opt3.innerHTML = "Mineral Salts";
                opt4.innerHTML = "Fat";

                opt1.addEventListener("click", bioquestion.sixth.wrong1);
                opt2.addEventListener("click", bioquestion.sixth.correct);
                opt3.addEventListener("click", bioquestion.sixth.wrong2);
                opt4.addEventListener("click", bioquestion.sixth.wrong3);

                },

                

                

            random: function(){

                // add question number
                document.getElementById("questionnum").innerHTML = "6 of 10 questions";

                // remove div 
                removechanges();

                //pick random question
        
                bioquestion.sixth.order1();
                button.disabled = true;

                //timer();
            }
            },

    seventh: {


popwhencorrect: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Correct!");
const ans = document.createTextNode("It is a depressant")
const emoji = document.createTextNode("😀");

// append to webpage

element.appendChild(div6);
div6.classList.add("correct");
div6.appendChild(heading);
div6.appendChild(par);
div5.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupcorrect();

updatescore();

// stop question timer
onchoose = 7;

},

popwhenwrong: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Wrong!");
const ans = document.createTextNode("The correct answer is that it is a depressant.")
const emoji = document.createTextNode("🙁");

// append to webpage

element.appendChild(div6);
div6.classList.add("wrong");
div6.appendChild(heading);
div6.appendChild(par);
div5.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupwrong();

// stop question timer
onchoose = 7;

},

// option2 correct

correct: function(){

// change background color

opt2.style.backgroundColor = "lawngreen";
opt1.style.backgroundColor = "grey"; 
opt4.style.backgroundColor = "grey";
opt3.style.backgroundColor = "grey";

bioquestion.seventh.popwhencorrect();

opt2.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

wrong1: function(){

// change background color

opt1.style.backgroundColor = "red";
opt3.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt4.style.backgroundColor = "grey";

bioquestion.seventh.popwhenwrong();

opt1.addEventListener("click", setTimeout(() => {
    bioquestion.next();
}, 60000));

},

wrong2: function(){
    // change background color

    opt3.style.backgroundColor = "red";
    opt1.style.backgroundColor = "grey"; 
    opt2.style.backgroundColor = "lawngreen";
    opt4.style.backgroundColor = "grey";

    bioquestion.seventh.popwhenwrong();

    opt3.addEventListener("click", setTimeout(() => {
    bioquestion.next();
}, 60000));

},

wrong3: function(){
// change background color

opt4.style.backgroundColor = "red";
opt1.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt3.style.backgroundColor = "grey";

bioquestion.seventh.popwhenwrong();

opt4.addEventListener("click", setTimeout(() => {
    bioquestion.next();
}, 60000));

},


order1: function(){
document.getElementById("question").innerHTML = "Alcohol is a drug. Which statement is correct? ";
opt1.innerHTML = "It reduces reaction times";
opt2.innerHTML = "It is a depressant.";
opt3.innerHTML = "It is not addictive";
opt4.innerHTML = "It can cause COPD";

opt1.addEventListener("click", bioquestion.seventh.wrong1);
opt2.addEventListener("click", bioquestion.seventh.correct);
opt3.addEventListener("click", bioquestion.seventh.wrong2);
opt4.addEventListener("click", bioquestion.seventh.wrong3);

},

random: function(){
    
// add question number
document.getElementById("questionnum").innerHTML = "7 of 10 questions";
// remove div 
removechanges();

bioquestion.seventh.order1();
button.disabled = true;

//timer();

}

},

    eighth: {

popwhencorrect: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Correct!");
const ans = document.createTextNode("Two haploid gamete nuclei fuse to form a diploid zygote")
const emoji = document.createTextNode("😀");

// append to webpage

element.appendChild(div7);
div7.classList.add("correct");
div7.appendChild(heading);
div7.appendChild(par);
div6.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupcorrect();

updatescore();

// stop question timer
onchoose = 8;

},

popwhenwrong: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Wrong!");
const ans = document.createTextNode("The correct answer is that two haploid gamete nuclei fuse to form a diploid zygote.")
const emoji = document.createTextNode("🙁");

// append to webpage

element.appendChild(div7);
div7.classList.add("wrong");
div7.appendChild(heading);
div7.appendChild(par);
div6.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupwrong();

// stop question timer
onchoose = 8;

},

// option2 correct

correct: function(){

// change background color

opt2.style.backgroundColor = "lawngreen";
opt1.style.backgroundColor = "grey"; 
opt4.style.backgroundColor = "grey";
opt3.style.backgroundColor = "grey";

bioquestion.eighth.popwhencorrect();

opt2.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

wrong1: function(){

// change background color

opt1.style.backgroundColor = "red";
opt3.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt4.style.backgroundColor = "grey";

bioquestion.eighth.popwhenwrong();

opt1.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

wrong2: function(){
// change background color

opt3.style.backgroundColor = "red";
opt1.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt4.style.backgroundColor = "grey";


bioquestion.eighth.popwhenwrong();

opt3.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

wrong3: function(){
// change background color

opt4.style.backgroundColor = "red";
opt1.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt3.style.backgroundColor = "grey";

bioquestion.eighth.popwhenwrong();

opt4.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

order1: function(){
document.getElementById("question").innerHTML = "Which statement about fertilisation is correct? ";
opt1.innerHTML = "Two diploid gamete nuclei fuse to form a haploid zygote";
opt2.innerHTML = "Two haploid gamete nuclei fuse to form a diploid zygote";
opt3.innerHTML = "One diploid gamete nucleus divides to form a haploid zygote";
opt4.innerHTML = "One haploid gamete nucleus divides to form a diploid zygote";

opt1.addEventListener("click", bioquestion.eighth.wrong1);
opt2.addEventListener("click", bioquestion.eighth.correct);
opt3.addEventListener("click", bioquestion.eighth.wrong2);
opt4.addEventListener("click", bioquestion.eighth.wrong3);

},


random: function(){

// add question number
document.getElementById("questionnum").innerHTML = "8 of 10 questions";
// remove div 
removechanges();
//pick random question

bioquestion.eighth.order1();
button.disabled = true;

//timer();

}

},

    ninth: {


popwhencorrect: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Correct!");
const ans = document.createTextNode("Restriction enzyme")
const emoji = document.createTextNode("😀");

// append to webpage

element.appendChild(div8);
div8.classList.add("correct");
div8.appendChild(heading);
div8.appendChild(par);
div7.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupcorrect();

updatescore();

// stop question timer
onchoose = 9;

},

popwhenwrong: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Wrong!");
const ans = document.createTextNode("The correct answer is restriction enzyme.")
const emoji = document.createTextNode("🙁");

// append to webpage

element.appendChild(div8);
div8.classList.add("wrong");
div8.appendChild(heading);
div8.appendChild(par);
div7.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupwrong();

// stop question timer
onchoose = 9;

},

// option2 correct

correct: function(){

// change background color

opt2.style.backgroundColor = "lawngreen";
opt1.style.backgroundColor = "grey"; 
opt4.style.backgroundColor = "grey";
opt3.style.backgroundColor = "grey";

bioquestion.ninth.popwhencorrect();

opt2.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},


wrong1: function(){

// change background color

opt1.style.backgroundColor = "red";
opt3.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt4.style.backgroundColor = "grey";

bioquestion.ninth.popwhenwrong();

opt1.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

wrong2: function(){
// change background color

opt3.style.backgroundColor = "red";
opt1.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt4.style.backgroundColor = "grey";

bioquestion.ninth.popwhenwrong();

opt3.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

wrong3: function(){
// change background color

opt4.style.backgroundColor = "red";
opt1.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt3.style.backgroundColor = "grey";

bioquestion.ninth.popwhenwrong();

opt4.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},

order1: function(){
document.getElementById("question").innerHTML = "Which enzyme is used to create complementary sticky ends in genetic engineering? ";
opt1.innerHTML = "Lipase";
opt2.innerHTML = "Restriction enzyme";
opt3.innerHTML = "Trypsin";
opt4.innerHTML = "DNA ligase ";

opt1.addEventListener("click", bioquestion.ninth.wrong1);
opt2.addEventListener("click", bioquestion.ninth.correct);
opt3.addEventListener("click", bioquestion.ninth.wrong2);
opt4.addEventListener("click", bioquestion.ninth.wrong3);

},

random: function(){

// add question number
document.getElementById("questionnum").innerHTML = "9 of 10 questions";

// remove div 
removechanges();

//pick random question

bioquestion.ninth.order1();
button.disabled = true;

//timer();

}

},

    tenth: {


popwhencorrect: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Correct!");
const ans = document.createTextNode("Reduced genetic variation")
const emoji = document.createTextNode("😀");

// append to webpage

element.appendChild(div9);
div9.classList.add("correct");
div9.appendChild(heading);
div9.appendChild(par);
div8.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupcorrect();

updatescore();
const scoreup = score + 1;
   

// stop question timer
onchoose = 10;

},

popwhenwrong: function(){

// add div to state that they are correct

const heading = document.createElement("h3");
const par = document.createElement("p");
const text = document.createTextNode("Wrong!");
const ans = document.createTextNode("The correct answer is reduced genetic variation.")
const emoji = document.createTextNode("🙁");

// append to webpage

element.appendChild(div8);
div9.classList.add("wrong");
div9.appendChild(heading);
div9.appendChild(par);
div8.remove();
heading.appendChild(text);
heading.appendChild(emoji);
par.appendChild(ans);

styleofpopupwrong();

const scoreup = score + 1;


// stop question timer
onchoose = 10;

},

// option2 correct

correct: function(){

// change background color

opt2.style.backgroundColor = "lawngreen";
opt1.style.backgroundColor = "grey"; 
opt4.style.backgroundColor = "grey";
opt3.style.backgroundColor = "grey";

bioquestion.tenth.popwhencorrect();

opt2.addEventListener("click", setTimeout(() => {
bioquestion.next();
}, 60000));

},


wrong1: function(){

// change background color

opt1.style.backgroundColor = "red";
opt3.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt4.style.backgroundColor = "grey";

bioquestion.tenth.popwhenwrong();

opt1.addEventListener("click", setTimeout(() => {
    bioquestion.next();
}, 60000));

},

wrong2: function(){
    // change background color

    opt3.style.backgroundColor = "red";
    opt1.style.backgroundColor = "grey"; 
    opt2.style.backgroundColor = "lawngreen";
    opt4.style.backgroundColor = "grey";

    bioquestion.tenth.popwhenwrong();

    opt3.addEventListener("click", setTimeout(() => {
    bioquestion.next();
}, 60000));

},

wrong3: function(){
// change background color

opt4.style.backgroundColor = "red";
opt1.style.backgroundColor = "grey"; 
opt2.style.backgroundColor = "lawngreen";
opt3.style.backgroundColor = "grey";

bioquestion.tenth.popwhenwrong();

opt4.addEventListener("click", setTimeout(() => {
    bioquestion.next();
}, 60000));

},


order1: function(){
document.getElementById("question").innerHTML = "Some fish populations have greatly reduced in size as a result of overfishing. What are the effects on a species of having a very small population size? ";
opt1.innerHTML = "Fewer genetic diseases ";
opt2.innerHTML = "Reduced genetic variation ";
opt3.innerHTML = "Better adapted to environmental changes";
opt4.innerHTML = "More competition for resources ";

opt1.addEventListener("click", bioquestion.tenth.wrong1);
opt2.addEventListener("click", bioquestion.tenth.correct);
opt3.addEventListener("click", bioquestion.tenth.wrong2);
opt4.addEventListener("click", bioquestion.tenth.wrong3);

},

random: function(){

// add question number
document.getElementById("questionnum").innerHTML = "10 of 10 questions";
// remove div 
removechanges();
//pick random question

bioquestion.tenth.order1();
button.disabled = true;


//timer();

}

},


};



//countdown
function overalltimer(){

// Get the countdown element
var countdown = document.getElementById("countdown");

// Set the total time in seconds
var totalTime = 2400;

// Every second...
var interval = setInterval(function(){
// Update the time remaining
updateTime();

// If time runs out, stop the countdown
if(totalTime == 0){
    clearInterval(interval);
    return;
}
}, 1000);


// Display the countdown
function displayTime(){
// Determine the number of minutes and seconds remaining
var minutes = Math.floor(totalTime / 60);
var seconds = totalTime % 60;

// Add a leading 0 to the number of seconds remaining if it's less than 10
if (seconds < 10){
    seconds = "0" + seconds;
}

// Split the number of minutes into two strings
var minutesString = minutes + "";
var minutesChunks = minutesString.split("");

// Split the number of seconds into two strings
var secondsString = seconds + "";
var secondsChunks = secondsString.split("");

// If the total time is 10 minutes or greater...
if (totalTime >= 600){
    // Add a leading 0 to the number of minutes remaining if it's less than 10
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    // Display the time remaining
    countdown.innerHTML = "<span>" + minutesChunks[0] + "</span>" + "<span>" + minutesChunks[1] + "</span>" + ":" + "<span>" + secondsChunks[0] + "</span>" + "<span>" + secondsChunks[1] + "</span>";
}
// If the total time is less than 10 minutes...
else {
    // Display the time remaining without a leading 0 on the number of minutes
    countdown.innerHTML = "<span>" + minutes + "</span>" + ":" + "<span>" + secondsChunks[0] + "</span>" + "<span>" + secondsChunks[1] + "</span>"
}        
}

// Update the time remaining
function updateTime(){
displayTime();
totalTime--;
}

// Start the countdown immediately on the initial pageload
updateTime();

};




  

/*---------------------------------------------------------------------
-----------------------------------------------------------------------

MODIFICATIONS DONE:

1. removed the border remover{   
    opt1.style.border = "none"; 
    opt2.style.border = "none";
    opt3.style.border = "none";
    opt4.style.border = "none"; }



2. Added extra comments to make code more readable

3. Removed div(correct and wrong arlet) styling created with javascript 

3. Reduced the anwser randomizer and the style funtions

-----------------------------------------------------------------------
-----------------------------------------------------------------------*/


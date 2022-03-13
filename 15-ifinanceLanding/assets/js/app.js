window.addEventListener("DOMContentLoaded", function(){
    const reviewPc = document.querySelector(".feedback-review__item-pc")
    const reviewComment = document.querySelector(".feedback-review__item-comment")
    const reviewGrade = document.querySelector(".feedback-review__item-star")
    const reviewName = document.querySelector(".feedback-review__item-name")
    const reviewSkill = document.querySelector(".feedback-review__item-skill")
    
    ////Btns
    const prevBtn = document.querySelector(".feedback-review__prev"),
    nextBtn = document.querySelector(".feedback-review__next");
    
    ////
    let clickCount = 0;
    

    prevBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        clickCount--; 
        useSetPerson();
    })
    
    nextBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        clickCount++;
        useSetPerson();
        
    })
    
    const reviewObj = [
        {
            id: 1,
            img: `assets/img/review/person-1.jpg`,
            name: "Regina Miles",
            comment: "Slate 1 helps you see how many more days you need to work to reach your financial goal for the month and year.",
            skill: "Designer",
            grade: 3
        },
        {
            id: 2,
            img: `assets/img/review/person-2.jpg`,
            name: "Samuela Lopez",
            comment: "Slate 2 helps you see how many more days you need to work to reach your financial goal for the month and year.",
            skill: "Designer",
            grade: 5
        },
        {
            id: 3,
            img: `assets/img/review/person-3.jpg`,
            name: "Carlo Capulete",
            comment: "Slate 3 helps you see how many more days you need to work to reach your financial goal for the month and year.",
            skill: "Designer",
            grade: 1
        },
        {
            id: 4,
            img: `assets/img/review/person-4.jpg`,
            name: "John Cage",
            comment: "Slate 4 helps you see how many more days you need to work to reach your financial goal for the month and year.",
            skill: "Designer",
            grade: 4
        }
    ]
    


    function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        }   
    }
    
    
    function setPerson(array, count, img, comment, grade, name, skill) {
        const target = array[count];
        
        img.src = target.img;
        comment.innerText = target.comment;
        
        if(target.grade){
            
            for(i = 0; i < 5; i++) {
                if(target.grade > i) {
                    const stars = document.createElement("i");
                    stars.classList.add("fas", "fa-star")
                    grade.appendChild(stars)
                }
                else if(target.grade == 0)  {
                    reateElement("i");
                    stars.classList.add("far", "fa-star")
                    grade.appendChild(stars)
                }
                else{
                    const stars = document.createElement("i");
                    stars.classList.add("far", "fa-star")
                    grade.appendChild(stars)
                }
                
                
            }
        }
        
        name.innerText = target.name;
        skill.innerText = target.skill;
    }
    
    function useSetPerson(){
        if(clickCount > reviewObj.length - 1 ) {
            clickCount = 0;
        } else if(clickCount < 0){
            clickCount = reviewObj.length - 1;
        }
        removeAllChildNodes(reviewGrade);
        setPerson(reviewObj, clickCount,reviewPc, reviewComment, reviewGrade, reviewName, reviewSkill)
    }
    useSetPerson();
    
    
})

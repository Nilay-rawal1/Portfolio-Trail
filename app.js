 const sections =document.querySelectorAll('.section');
 const sectbtns =document.querySelectorAll('.controlls');
 const sectbtn =document.querySelectorAll('.control');
 const allsections=document.querySelector('.main-content');

function pagetransition(){
    for(let i=0 ; i<sectbtn.length;i++){
        sectbtn[i].addEventListener('click',function(){
            let currentbtn=document.querySelectorAll('.active-btn'); 
            currentbtn[0].classList=currentbtn[0].className.replace('active-btn','');
            this.className += 'active-btn'
        })

    }
    //sections
    allsections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectbtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })


    //toogle theme
    const themebtn=document.querySelector('.theme-btn');
    themebtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode')
    })
   

    // app.js is the javaspricpt file includes function perform on index.html & style.css
    
}
pagetransition();


var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var imgs = Array.from (document.querySelectorAll(".item img"));//Array.from>>a3ml array mn nodeliste ely rag3a mn hna/wbltaly a2der ast5dem m3aha indexof
var nextBtn = document.getElementById("next"); 
var backBtn = document.getElementById("back");
var closeBtn = document.getElementById("close");
var currentIndex = 0;

for(var i=0; i<imgs.length;i++)
{

imgs[i].addEventListener("click", function(eventInfo){

    currentIndex = imgs.indexOf(eventInfo.target);//eventInfo.target>>btgeb el user das 3 anhe sora//hat mn el array ely asmo imgs rkm elsora ely dost 3leha
    //console.log(currentIndex);
    //["ahmed","mohamed","sayed","ibrahim"].indexOf("sayed");>> 2>>rkm sayed (2)
    var imgSrc = eventInfo.target.getAttribute("src");//ro7 L eventInfo>>goh target hatly Attribute ely asmo src w7toh f var asmh imgSrc
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`//ro7 goa lightBoxItem >>goa css f style bta3o>>blt7ded backgroundImage w7ot f url el var(imgSrc)
    lightBoxContainer.classList.replace("d-none","d-flex")
    //lightBoxContainer.style.display = "flex";
})
}

//slider
function nextSlide()
{
    currentIndex ++;//zodhole b 1 kol mara
    
    if(currentIndex == imgs.length)//lw (currentIndex)3dd el sor == (imgs.length)el sor kolha L7d (5)
    {
        currentIndex = 0;//arg3 tane LL sora rkm (0) 34an ebd2 mn el2wl
    }

    var imgSrc = imgs[currentIndex].getAttribute("src");//ro7 LL array (imgs) what src bta3 el sora ely dost 3leha
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`//ro7 goa lightBoxItem >>goa css f style bta3o>>blt7ded backgroundImage w7ot f url el var(imgSrc)ely hoa el src bta3 el sora ely dost 3leha
}

nextBtn.addEventListener("click",nextSlide);//lma ados 3 nextBtn >>call nextSlide function

//slider
function backSlide()//zorar el back
{
    currentIndex --;//n2s daemn b (1)

    if(currentIndex < 0)//Lma yb2a index <0
    {
        currentIndex = imgs.length -1;//ma2olt4 hna (5) 34an lw zot sor tany fa (imgs.length)a7sn
    }

    var imgSrc = imgs[currentIndex].getAttribute("src");//ro7 LL array (imgs) what src bta3 el sora ely dost 3leha
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`//ro7 goa lightBoxItem >>goa css f style bta3o>>blt7ded backgroundImage w7ot f url el var(imgSrc)ely hoa el src bta3 el sora ely dost 3leha
}

backBtn.addEventListener("click",backSlide);//lma ados 3 backBtn >>call backSlide function


//close slide
function closeSlide()
{
    lightBoxContainer.classList.replace("d-flex", "d-none");
}

closeBtn.addEventListener("click",closeSlide);


document.addEventListener("keydown",function(eventInfo)
{
    if(eventInfo.code == "ArrowRight")//ArrowRight >>shm emen
    {
        nextSlide();
    }
    else if(eventInfo.code == "ArrowLeft")//ArrowLeft >>shm 4mal
    {
        backSlide();
    }
    else if(eventInfo.code == "Escape")//Escape 
    {
        closeSlide();
    }
    //console.log(eventInfo.keyCode);
})
lightBoxContainer.addEventListener("click",function(e){//Lma ados 3la lightBoxContainer
    if(e.target != lightBoxItem && e.target != nextBtn && e.target != backBtn)//chick e.target>>eldosa ely dostha m4 elsora ,m4 nextBtn, m4 backBtn
    {
        closeSlide();
    }
})









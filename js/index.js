const week = document.querySelectorAll('.week');
const money = document.querySelectorAll('.money');

const datavalue =async()=>{
    try{
        const res= await fetch('data.json');
        const data=await res.json();
        getData(data)
}catch(error){
    console.log(error)
}
}


datavalue()
function getData(data) {
    data.map(item => {
        return money.forEach((money)=>{
            money.classList.add('hidden');
            money.textContent=`$ ${item.amount}`
        })
    })
}
week.forEach((e,index)=>{
    e.addEventListener('mouseenter',()=>{
    //    console.log(`Mouse entered week ${index + 1}` );
       if(money[index]){
        money[index].classList.remove('hidden')
       }
    })
    e.addEventListener('mouseleave',()=>{
    //    console.log(`Mouse entered week ${index + 1}` );
       if(money[index]){
        money[index].classList.add('hidden')
       }
    })
})
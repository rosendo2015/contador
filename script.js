const Increment = document.getElementById('increment')
const Decrement = document.getElementById('decrement')
const Reset = document.getElementById('reset')
let Total = document.getElementById('total')

Total = 0;

Increment.addEventListener('click', ()=>{
  document.getElementById('total').innerHTML = ++Total

});
Reset.addEventListener('click', ()=>{
  document.getElementById('total').innerHTML = Total = 0;
 
})

Decrement.addEventListener('click', ()=>{
  document.getElementById('total').innerHTML = --Total
  
});
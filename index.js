// const URL='https://timeapi.io/api/Time/current/zone?timeZone';
// // const axios=require(axios).default;

// var time=async(timeZone,place)=>{
//     var res=await fetch(`http://worldclockapi.com/api/json/utc/now`);
//     var data=await res.json();
//     console.log(data.currentDateTime);
// }

// time(`Europe`,`Amsterdam`);

// console.log(date.getHours());
// var clock = document.createElement("span");
// clock.className = "text-9xl border-8 border-teal-400 rounded-lg p-4 m-40";
// var bo = document.getElementById("x");
// bo.appendChild(clock);
setInterval(() => {
  // clock.innerText=``;
  const date = new Date();

  // digital clock
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;
//   clock.innerText = `${hours}:${minutes}:${seconds}`;

  var MyDiv1 = document.getElementById("demo");

  let hStick = document.getElementById("hStick");
  var degrees = 90+date.getHours() * 30+ date.getMinutes()/2  ;
  MyDiv1.innerHTML = degrees;
  hStick.className="flex justify-end w-[7.5rem] absolute  h-2 origin-right rotate-[" + MyDiv1.innerHTML + "deg]"

  let mStick = document.getElementById("mStick");
  var degrees = 90+date.getMinutes() * 6 ;
  MyDiv1.innerHTML = degrees;
  mStick.className="flex justify-end w-[7.5rem] absolute  h-2 origin-right rotate-[" + MyDiv1.innerHTML + "deg]"

  let sStick = document.getElementById("sStick");
  var degrees = 90+date.getSeconds() * 6 ;
  MyDiv1.innerHTML = degrees;
  sStick.className="flex justify-end w-[7.5rem] absolute  h-1 origin-right rotate-[" + MyDiv1.innerHTML + "deg]"
//   h.style.transform = "rotate(" + MyDiv1.innerHTML + "deg)";

  MyDiv1.style.display="none"
}, 1000);

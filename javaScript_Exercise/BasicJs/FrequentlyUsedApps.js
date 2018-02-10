// *** Please Notice that i have  2 versions ( simple one and realtime ) 
//     one after another so do check both.

console.log("This is basic version that do the given task");

const arr = ['u', 'x', 'u', 'c', 'a', 'c', 'c', 'c', 'c', 'a', 'e', 't', 'a', 'g', 't', 'a'];

function findMostFrequent() {

  let map = new Map();
  
  for(let index = 0; index < arr.length; index++) {

    if(!map.has(arr[index]))
      map.set(arr[index],1);
    else
      map.set(arr[index],map.get(arr[index]) + 1);

  }

  let max = map.get(arr[0]);
  let result = arr[0];
  
  for(let index = 1; index < arr.length; index++) {

    if(map.get(arr[index]) > max)
    {
      max = map.get(arr[index]);
      result = arr[index]
    }

  }

  console.log(result);
  console.log(max);
  
}

findMostFrequent();

// ---***---  ---***--- ---***---  ---***--- ---***---  ---***--- ---***---  ---***---

console.log("Here we have REALTIME example");

//  We all have mobile phones which are either android or ios or windows(nowadays rarely)
//  In mobile phones we have different types of applications and we have many applications that is not used. 
//  We can say that unused apps as garbage which is consumed our storage space. 
//  So we can use our this task to find that type of application and remove them from our device.
//  So here we will get data of all most frequently used apps and rarely used apps and take an appropriate actions.
//  So let's do that :D

const applications = ['Google Chrome', 'Opera', 'Browser', 'WhatsApp', 'Facebook', 'Instagram', 'Hike', 'WeChat']; //  This is the array that contains out mobile application.
const lastlyUsed = ['WhatsApp', 'Instagram', 'Facebook', 'WhatsApp', 'Google Chrome', 'Instagram', 'Facebook', 'WhatsApp', 'Instagram', 'Google Chrome', 'Facebook', 'WhatsApp', 'Google Chrome', 'WhatsApp', 'Facebook', 'Google Chrome', 'WhatsApp', 'Instagram', 'WhatsApp', 'Facebook', 'Google Chrome', 'WhatsApp', 'Facebook', 'Hike', 'Browser', 'Opera'] //  This array contains tracked data which is opened in our mobile phone. 

function trackAppFrequency(applications, lastlyUsed) {

  let trackFrequency = new Map();

  for(let index = 0; index < applications.length; index++)
    trackFrequency.set(applications[index], 0);


  for(let index = 0; index < lastlyUsed.length; index++)
    trackFrequency.set(lastlyUsed[index],trackFrequency.get(lastlyUsed[index]) + 1);


  for(let index=0; index<applications.length; index++)
    console.log(`${applications[index]}:  ` + trackFrequency.get(applications[index]));

}

trackAppFrequency(applications, lastlyUsed);

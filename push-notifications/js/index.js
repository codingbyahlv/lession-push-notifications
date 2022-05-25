//hämtar vår knapp
const buttonElem = document.querySelector("button")

//funktion för att få tillåtelse att skicka push notiser
async function turnOnNotifications() {
  //variabel för att lagra vårt svar från användaren. false som defaultvärde
  let notificationPermission = false;

  //fråga efter tillåtelse
  const permission = await Notification.requestPermission();
  console.log(permission)
  //om vi har tillåtelse (= granted) 
  if (permission === 'granted'){
    //sätt vårt permission till true
    notificationPermission = true;
  }

  //returnera vårt permission som nu är true/false
  return notificationPermission;
};

//funktion för att 
async function subscribeToPush(){
  //hämtar vår service-worker. primised
  const serviceWorker = await navigator.serviceWorker.ready;
  //
  const subscription = await serviceWorker.pushManager.subscribe({
    //skickar med ett objekt
    userVisibleOnly: true,
    applicationServerKey: 'BBplhidqNPeLGzhIeXbQf736vi_WOJA3_b8mPS_0a1IWE77wQzojHmgLRw9ks4AQ3NpbSrSOgaD9Sqw4ghTlVfA'
  })
  //stringifyar för att göra den enklare att kopiera i konsolen
  console.log(JSON.stringify(subscription))
};


buttonElem.addEventListener('click', async () => {
  //vid klick på knappen. Kalla på funktionen för att få permission. Får true eller false tillbaka som lagras i variabeln permission
  const permission = await turnOnNotifications();
  //om vi har tillåtelse
  if (permission){
    subscribeToPush()
  };
});

async function registerServiceWorker() {
  if ('serviceWorker' in navigator){
    await navigator.serviceWorker.register('../service-worker.js')
  }
}

window.addEventListener('load', () => {
  registerServiceWorker();
})



//VÅR BACKEND

//läser in vårt paket (npm install web-push)
const webPush = require('web-push');

//om man vill generera egna nycklar som behövs för push notiser (i konsolen node index.js så kommer det upp en private å en public)
// let keys = webPush.generateVAPIDKeys();
// console.log(keys);

//vi lägger våra nycklar i ett objekt som vi genererat
const keys = {
  PUBLIC_KEY:'BBplhidqNPeLGzhIeXbQf736vi_WOJA3_b8mPS_0a1IWE77wQzojHmgLRw9ks4AQ3NpbSrSOgaD9Sqw4ghTlVfA',
  PRIVATE_KEY:'2OyotRD5IRazhXht2LLdX6AfMlbHpvkyu1DMoFaTVns'
}

//vi lägger in vår epost
const email = 'ahl_85@outlook.com';

//sätter våra
webPush.setVapidDetails(
  `mailto:${email}`,
  keys.PUBLIC_KEY,
  keys.PRIVATE_KEY
)

//här ska det kopierade objektet vara som vi använder som snabbtest för att slippa skapa en db
//innehåller en endpoint till googles server som är unik för oss så google vet vart dom ska skicka pushnotiserna
const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cQaKY1vKjfU:APA91bF13UMTi1AovHmccjFWJbuHknz4ru7x6GoEr-LAKoG9gxqmfd8CZE70NX5E9ROqv1eS-CFMOYlLOZpkl-j9InVXhWRDcpMXpSwSCYKk5iUBgdl37zu-lyu9U2l0pxGkpEqIbVC3","expirationTime":null,"keys":{"p256dh":"BBVcO8vkZOQ6IDcH4-u-Sa8887BoLoM7iavrcwBN2MvtlvJU5TaXbca8pHBBx5777-qSx6_XwSx9hEmryq5RoiA","auth":"Lrp5AwKYP73CmsNGNag7nQ"}};

//härifrån triggar vi att sända ut vår push notis
//1. vart ska vi skicka den. objektet vi fick i subsribe
//2. det som ska stå i notisen
webPush.sendNotification(subscription, 'Detta är en pushnotis');
//testkör i konsolen med node index.js
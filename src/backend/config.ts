/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
config.ts (c) 2022
Desc: description
Created:  2022-04-30T14:22:54.868Z
Modified: 2022-04-30T15:54:03.718Z
*/

import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase
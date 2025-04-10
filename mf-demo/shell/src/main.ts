import { initFederation } from '@angular-architects/native-federation';

initFederation({
  orders: 'http://localhost:4300/remoteEntry.json',
  products: 'http://localhost:4400/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));

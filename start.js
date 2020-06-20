import Calendar from './calendar.js';
import WSAppServer from 'pia-ws-app';

(async () => {
  try {
    let apps = [ new Calendar() ];
    await new WSAppServer(apps).start();
  } catch (ex) {
    console.error(ex);
  }
})();

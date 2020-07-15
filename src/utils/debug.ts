import ImportCDNJS from 'import-cdn-js';

export default () =>
  new Promise(resolve => {
    if (window.location.href.includes('isDebug=true')) {
      ImportCDNJS('//cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js', 'VConsole').then(VConsole => {
        new VConsole();
        resolve();
      });
    } else {
      resolve();
    }
  });

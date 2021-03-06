import Debug from './utils/debug';
import { traceLog } from 'orcrist-utils';

window.onerror = (message, source, lineno, colno, error) => {
  const errorLog = `:::${message}:::${source}:::${lineno}:::${colno}:::`;
  console.log('errorLogerrorLogerrorLog:::::', errorLog);

  traceLog({
    log: encodeURIComponent(errorLog),
    scene: 'common',
  });
};

Debug && Debug();
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};


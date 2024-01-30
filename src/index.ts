import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
});

rc.token = { access_token: process.env.TOKEN };

const main = async () => {
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);
  await rc.restapi().account().extension().get();
  await rc.restapi().subscription().list();
};
main();

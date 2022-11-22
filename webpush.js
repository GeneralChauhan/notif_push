const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BOjAcc_zLnLOWUc-o0u3jv8d5wxRAqkW35DSg_PUXahk6QzvsPUaUUQID_LNM5yj4eaTgd2iu61iMHIzMU1ZNzg",
  privateKey: "CoZ1zSrzFNsr77QBk1-LFG3N_Q4OVf8bLXxJXF6rexg",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAAZ6ZiGfHV3tpztB8hcA692G1fVaFK5C4ZDczelXonaZytukcT7ztobJsZp3KDEF5OiiQBzOfyX%2fa0m%2baVEpUbDDq2CgmZ9w5SvfHUEW5h7mpLQU6XF3to9NUKpvz2vcVFZSXRnGOp1Z%2fiQcned%2fHwgJ7Tld24nI5DzTCBBbYmzuEVq39zF%2fTEQ2jp9m%2bPAhznX5m4x%2fJOtHgM17Krj4RBG%2bRJvHmZSwp9OdALPfYJx0hXvBEJjb7PfwKyf53Lq1rxQevsSTgUYDG%2fAkQZYK70DX6T6tZuENwKsmXRvkOBXKAz3lDYnVe8o24VXou2cqgyCbqE%2fVALKcPZybgr1NTO%2f",
  expirationTime: null,
  keys: {
    p256dh:
      "BCs9kLEgQPhvQRkgouufenTge-s2jffrVY6_K9SdNCWsD4_vPlMRq4fbmB1lQSSa5tMTR2mNp5qQBqOgASO7ZFQ",
    auth: "FE9OY41t9_K0ekGlpbemjg",
  },
};
// console.log(vapidKeys);

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

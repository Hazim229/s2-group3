# Shops

One file per member: `shops/<matric>.json`, added on your own `shop-<matric>` branch.

- Shape: `{ "id", "name", "location", "openHours", "isOpen", "menu": [ { "id", "name", "description", "price", "category", "available" } ] }`
- Every `id` starts with your matric: shop `2419247-my-restaurant`, items `2419247-my-1`, …
- After your pull request is merged and the Setup lead has made you a vendor:
  log in, open `/seed`, press **Seed** on your own shop. Check it in the Firestore console.

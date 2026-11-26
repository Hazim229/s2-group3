# s2-group3 · Section 2 · Group 03
Live: https://s2-group3.web.app

| Matric | Role | Shop | Feature | Branch | Folder |
|---|---|---|---|---|---|
| 2419247 | Setup lead | Kafe Mahallah Zubair | TBD | TBD | TBD |
| 2410509 | Member | Restoran Maju | TBD | TBD | TBD |
| 2417219 | Member | Pokpan's Kitchen | TBD | TBD | TBD |
| 2416443 | Member | Dinie Caffe | TBD | TBD | TBD |
| 2410687 | Member | Mahallah Uthman Cafeteria | TBD | TBD | TBD |

When you pick your feature, fill your row like this (no repeats in the group):
`| 2419247 | Setup lead | Kafe Mahallah Zubair | Ratings | feature-ratings | src/features/ratings |`

One CampusEats app with every member's shop, built together on GitHub and deployed on one
Firebase project (Spark plan). Base app: Week 5 starter (BICS 3301).

## Getting started

1. Accept the GitHub invite and clone the repo.
2. `npm install`
3. Copy `.env.example` to `.env.local` and paste the **group's** Firebase keys (shared privately by the Setup lead).
   `.env.local` must never be committed.
4. `npm run dev`

## How we work

- **Never push straight to `main`.** One branch per job: `shop-<matric>` (Week 9), `feature-<name>` (Weeks 10–12), `fix-<what>` (any time).
- Open a pull request; a groupmate reads it, runs it, comments, then merges.
- Commit messages start with your matric: `[2419247] Ratings: add stars`.
- Every file you write starts with a header comment: `// Feature: <name>` and `// Owner: <matric>`.
- Your rule goes in your own block in `firestore.rules`.
- Log AI use in `AI_USAGE.md`, one line per member per week.
- Put screenshots of your feature (as vendor and as student) in `docs/`.
- Your feature lives in `src/features/<name>/`.
- Only the Setup lead runs `firebase deploy`, from `main`, after a merge.

## Roles

- `users/{uid}.role` is `student` (default), `vendor` or `admin`. Only the admin changes roles.
- Each shop document `vendors/<matric>-<shop>` has `ownerUid` = that member's uid.
  A vendor may change only the shop whose `ownerUid` is their own uid.
- In your feature's rule, use `shopOwner(shopId)` to check that the signed-in user owns that shop.

## Releases

| Tag | Due | Contents |
|---|---|---|
| `v1.0` | Sun 13 Dec | All shops + every feature (screen, data, rule) on the live URL |
| `v1.1` | Sun 27 Dec | Installable PWA, every feature works offline |

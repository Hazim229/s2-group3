# CampusEats · s2-group3 (BICS 3301 Group Project)

One CampusEats app with every member's shop, built together on GitHub and deployed on one
Firebase project (Spark plan).

- **Group:** Section 2, Group 3
- **Repo:** `s2-group3`
- **Live URL:** _added at v1.0_
- **Base app:** Week 5 starter (BICS 3301)
- **Setup lead:** 2419247

## Members

| Matric | Shop | Feature | Branch | Folder |
|---|---|---|---|---|
| 2419247 | Kafe Mahallah Zubair | _TBD_ | `feature-<name>` | `src/features/<name>/` |
| 2410509 | Restoran Maju | _TBD_ | `feature-<name>` | `src/features/<name>/` |
| 2417219 | Pokpan's Kitchen | _TBD_ | `feature-<name>` | `src/features/<name>/` |
| 2416443 | Dinie Caffe | _TBD_ | `feature-<name>` | `src/features/<name>/` |
| 2410687 | Mahallah Uthman Cafeteria | _TBD_ | `feature-<name>` | `src/features/<name>/` |

No two members may pick the same feature.

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
- Only the Setup lead runs `firebase deploy`, from `main`, after a merge.

## Roles

- `users/{uid}.role` is `student` (default), `vendor` or `admin`. Only the admin changes roles.
- Each shop document `vendors/<matric>-<shop>` has `ownerUid` = that member's uid.
  A vendor may change only the shop whose `ownerUid` is their own uid.

## Releases

| Tag | Due | Contents |
|---|---|---|
| `v1.0` | Sun 13 Dec | All shops + every feature (screen, data, rule) on the live URL |
| `v1.1` | Sun 27 Dec | Installable PWA, every feature works offline |

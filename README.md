# TailTalk

The official Repo of Tail-talk, a social media platform for pet lovers...

This document should outline the project and track all phases of development as updates and changes are made.

To access more info on this project, here are a few links!

- Tailz Architecture Map
- Software Project Management Plan
- System Design Docs
- Technical Design Document

## Activate Project

Run the following command to activate dev run in the mono-repo

```sh
pnpm dev
```

## What's inside?

This Turborepo includes the following packages/apps:
- Golang Server (Tailz)
- Next js Frontend (Tailz)
- TS Server (Crater)


## Tech Stack 

Bundler → Turbo Monorepo

Frontend → 
```
React (Next js),
React Native,
TypeScript,
React-query,
Zustand,
Tailwind,
GraphQL

```

Backend → 
```
Golang,
Postgres,
TypeScript
```

Cloud → AWS


## Implementation Map x Requirements Phase

**Outline**

- Client Requirements (AWS)
- User Stories
- System Design + Architecture
- MonoRepo Mapping
- Build

**Auth-Service**

- Users should be able to signup and create an account with email and password
- MFA enabled via AWS Sync
- Users should be able to signup via gmail or phone number with confirmation texts
- Users should be able to reset passwords if forgotten to regain access to accounts
- PWA Style sessions?

**Messaging Service**

- Users should be able to send direct messages to people with open messaging permissions
- Users should be able to track message history on accounts
- Users should be able to delete conversations or clear history

**Feed/Posts Service**

- Users should be able to post media or text content on a public, curated feed
- Users should be able to see hearts, purrs and kisses on their posts
- Users should be able to search up public posts from other users or hide/block/suppress posts they don’t like
- Users should be able to bookmark posts
- Users should be able to share other people’s pet posts
- User should be able to customize feed based on preferences

**Subscribe System**

- Users should be able to subscribe to pets from their profile page
- Users should get feed priority on subscribed content
- Users should be able to follow/unfollow with an updated UI

**Swipe System**

- Get tailzy!
- Users should be able to swipe left or right on their favorite pet tail pictures
- Users should be able to set a default pet stream for the swipe mode
- Users should be able to match and unmatch other pets
- User should be able to make match profile public or private
- Users should be able to opt in/out of the swipe mode

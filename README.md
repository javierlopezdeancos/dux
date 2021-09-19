# Erre Ele
A Typescript  browser  URL manager

## Activity
[![License](https://img.shields.io/github/license/javierlopezdeancos/erre-ele?style=flat-square)](LICENSE)
![GitHub issues](https://img.shields.io/github/issues-raw/javierlopezdeancos/erre-ele?style=flat)
![GitHub all releases](https://img.shields.io/github/downloads/javierlopezdeancos/erre-ele/total)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/javierlopezdeancos/erre-ele/publish-erre-ele-in-npm-on-release)
![npm](https://img.shields.io/npm/v/erre-ele)

## Why?

Why not.

## Install

```
npm i erre-ele --save
```

## Usage

### Import

Import the ErreEle singleton instance:

```typescript
import rl from 'erre-ele';
```

### Interface
Review and use to your implementations how the IErreEle interface looks

```typescript
export interface IErreEle<S> {
  getParamFromURL: (pn: string) => string | null;
  getPathnameFromURL: () => string | null;
  go: (p: string, t?: string, s?: S) => void;
  subscribeOnPopState: (onPopState?: (e: PopStateEvent) => void) => void;
  setParam: (key: string, value: string) => void;
  getParam: (key: string) => void;
}
```

#### Generic
`<S>` State type to push in browser history.

#### Public API

| Public API           | Description                                  |
|----------------------|----------------------------------------------|
| getParamFromURL      | Get param value from URL                     |
| getPathnameFromURL   | Get path name from URL                       |
| go                   | Push in browser history                      |
| subscribeOnPopState  | Subscribe handler when pop state in history  |
| params               | URL params state                             |
| setParam             | Set new param state                          |
| getParam             | Get new param state                          |

### Usage

```typescript
// Browser URL "https://example.com/?foo=bar"

import rl from 'erre-ele';

const fooValue = rl.getParamFromURL('foo');  // bar
```

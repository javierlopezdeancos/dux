# Dux
A Typescript  browser  URL manager

## Activity
[![License](https://img.shields.io/github/license/javierlopezdeancos/dux?style=flat-square)](LICENSE)
![GitHub issues](https://img.shields.io/github/issues-raw/javierlopezdeancos/dux?style=flat)
![GitHub all releases](https://img.shields.io/github/downloads/javierlopezdeancos/dux/total)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/javierlopezdeancos/dux/publish-dux-in-npm-on-release)
![npm](https://img.shields.io/npm/v/dux)

## Why?

Why not.

## Install

```
npm i dux --save
```

## Usage

### Import

Import the Dux singleton instance:

```typescript
import dux from 'dux';
```

### Interface
Review and use to your implementations how the IDux interface looks

```typescript
export interface IDux<S> {
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

import dux from 'dux';

const fooValue = dux.getParamFromURL('foo');  // bar
```

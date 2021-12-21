export interface IErreEle<S> {
  getParamFromURL: (pn: string) => string | null;
  getPathnameFromURL: () => string | null;
  go: (p: string, t?: string, s?: S) => void;
  subscribeOnPopState: (onPopState?: (e: PopStateEvent) => void) => void;
  unSubscribeOnPopState: () => void;
  setParam: (key: string, value: string) => void;
  getParam: (key: string) => void;
}

export class ErreEle<S> implements IErreEle<S> {
  private _pathname: string;

  private _origin: string;

  private _params: Map<string, string>;

  constructor(private onPopState?: (e: PopStateEvent) => void) {
    this._pathname = '';
    this._origin = window?.location?.origin;
    this._params = new Map();
    this.subscribeOnPopState(this.onPopState);
  }

  public subscribeOnPopState(onPopState?: (e: PopStateEvent) => void): void {
    window.addEventListener('popstate', (event: PopStateEvent) => {
      if (onPopState) {
        onPopState(event);
      }
    });
  }

  public unSubscribeOnPopState(): void {
    if (this.onPopState) {
      window.removeEventListener('popstate', this.onPopState);
    }
  }

  public go(p: string, t = '', s = {}): void {
    window.history.pushState(s, t, p);
    this._pathname = p;
  }

  public get pathname(): string {
    return this._pathname;
  }

  public set pathname(p: string) {
    this._pathname = p;
  }

  public get params(): Map<string, string> {
    return this._params;
  }

  public set params(prms: Map<string, string>) {
    this._params = prms;
  }

  public setParam(key: string, value: string): void {
    this._params.set(key, value);
  }

  public getParam(key: string): void {
    this._params.get(key);
  }

  public get origin(): string {
    return this._origin;
  }

  public set origin(o: string) {
    this._origin = o;
  }

  public getParamFromURL(pn: string): string | null {
    const params = new URL(document.location.href).searchParams;
    const param = params?.get(pn);
    return param;
  }

  public setParamsFromURL(): void {
    const params: URLSearchParams = new URLSearchParams(document.location.href);

    if (params) {
      params.forEach((value: string, key: string) => {
        this._params.set(key, value);
      })
    }
  }

  public getPathnameFromURL(): string {
    return document.location.pathname;
  }

  public setOnPopState(onPopState?: (evt: PopStateEvent) => void): void {
    this.onPopState = onPopState;
    this.subscribeOnPopState(this.onPopState);
  }
}

export default new ErreEle();

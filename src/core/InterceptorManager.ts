import { RejectedFn, ResolvedFn } from "../types";

interface Interceptor<T> {
  resolved: ResolvedFn<T>;
  rejected?: RejectedFn;
}
export class InterceptorManager<T> {
  interceptors: Array<Interceptor<T> | null>;

  constructor() {
    this.interceptors = [];
  }
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    });
    return this.interceptors.length - 1;
  }

  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }
}

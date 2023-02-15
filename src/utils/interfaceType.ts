
export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
  key?: string
}

export interface CreateRouterType {
  routes?: RouteObject[],
  opts?: {
    basename?: string;
    window?: Window;
  }
}
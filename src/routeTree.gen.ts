/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as AboutImport } from './routes/about'
import { Route as TestImport } from './routes/test'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const CreditsIndexLazyImport = createFileRoute('/credits/')()
const LayoutDemoIndexLazyImport = createFileRoute('/_layout/demo/')()
const LayoutDemoIdLazyImport = createFileRoute('/_layout/demo/$id')()
const LayoutDemoDemo2IndexLazyImport = createFileRoute(
  '/_layout/demo/demo_2/'
)()

// Create/Update Routes

const TestRoute = TestImport.update({
  id: '/test',
  path: '/test',
  getParentRoute: () => rootRoute
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CreditsIndexLazyRoute = CreditsIndexLazyImport.update({
  id: '/credits/',
  path: '/credits/',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./routes/credits/index.lazy').then((d) => d.Route))

const LayoutDemoIndexLazyRoute = LayoutDemoIndexLazyImport.update({
  id: '/demo/',
  path: '/demo/',
  getParentRoute: () => LayoutRoute
} as any).lazy(() =>
  import('./routes/_layout/demo/index.lazy').then((d) => d.Route)
)

const LayoutDemoIdLazyRoute = LayoutDemoIdLazyImport.update({
  id: '/demo/$id',
  path: '/demo/$id',
  getParentRoute: () => LayoutRoute
} as any).lazy(() =>
  import('./routes/_layout/demo/$id.lazy').then((d) => d.Route)
)

const LayoutDemoDemo2IndexLazyRoute = LayoutDemoDemo2IndexLazyImport.update({
  id: '/demo/demo_2/',
  path: '/demo/demo_2/',
  getParentRoute: () => LayoutRoute
} as any).lazy(() =>
  import('./routes/_layout/demo/demo_2/index.lazy').then((d) => d.Route)
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestImport
      parentRoute: typeof rootRoute
    }
    '/credits/': {
      id: '/credits/'
      path: '/credits'
      fullPath: '/credits'
      preLoaderRoute: typeof CreditsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout/demo/$id': {
      id: '/_layout/demo/$id'
      path: '/demo/$id'
      fullPath: '/demo/$id'
      preLoaderRoute: typeof LayoutDemoIdLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/demo/': {
      id: '/_layout/demo/'
      path: '/demo'
      fullPath: '/demo'
      preLoaderRoute: typeof LayoutDemoIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/demo/demo_2/': {
      id: '/_layout/demo/demo_2/'
      path: '/demo/demo_2'
      fullPath: '/demo/demo_2'
      preLoaderRoute: typeof LayoutDemoDemo2IndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutDemoIdLazyRoute: typeof LayoutDemoIdLazyRoute
  LayoutDemoIndexLazyRoute: typeof LayoutDemoIndexLazyRoute
  LayoutDemoDemo2IndexLazyRoute: typeof LayoutDemoDemo2IndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutDemoIdLazyRoute: LayoutDemoIdLazyRoute,
  LayoutDemoIndexLazyRoute: LayoutDemoIndexLazyRoute,
  LayoutDemoDemo2IndexLazyRoute: LayoutDemoDemo2IndexLazyRoute
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/test': typeof TestRoute
  '/credits': typeof CreditsIndexLazyRoute
  '/demo/$id': typeof LayoutDemoIdLazyRoute
  '/demo': typeof LayoutDemoIndexLazyRoute
  '/demo/demo_2': typeof LayoutDemoDemo2IndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/test': typeof TestRoute
  '/credits': typeof CreditsIndexLazyRoute
  '/demo/$id': typeof LayoutDemoIdLazyRoute
  '/demo': typeof LayoutDemoIndexLazyRoute
  '/demo/demo_2': typeof LayoutDemoDemo2IndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/test': typeof TestRoute
  '/credits/': typeof CreditsIndexLazyRoute
  '/_layout/demo/$id': typeof LayoutDemoIdLazyRoute
  '/_layout/demo/': typeof LayoutDemoIndexLazyRoute
  '/_layout/demo/demo_2/': typeof LayoutDemoDemo2IndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/test'
    | '/credits'
    | '/demo/$id'
    | '/demo'
    | '/demo/demo_2'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/test'
    | '/credits'
    | '/demo/$id'
    | '/demo'
    | '/demo/demo_2'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/about'
    | '/test'
    | '/credits/'
    | '/_layout/demo/$id'
    | '/_layout/demo/'
    | '/_layout/demo/demo_2/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  AboutRoute: typeof AboutRoute
  TestRoute: typeof TestRoute
  CreditsIndexLazyRoute: typeof CreditsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LayoutRoute: LayoutRouteWithChildren,
  AboutRoute: AboutRoute,
  TestRoute: TestRoute,
  CreditsIndexLazyRoute: CreditsIndexLazyRoute
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/about",
        "/test",
        "/credits/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/demo/$id",
        "/_layout/demo/",
        "/_layout/demo/demo_2/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/test": {
      "filePath": "test.tsx"
    },
    "/credits/": {
      "filePath": "credits/index.lazy.tsx"
    },
    "/_layout/demo/$id": {
      "filePath": "_layout/demo/$id.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/demo/": {
      "filePath": "_layout/demo/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/demo/demo_2/": {
      "filePath": "_layout/demo/demo_2/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */

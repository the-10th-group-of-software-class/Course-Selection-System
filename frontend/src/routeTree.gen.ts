/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResetPasswordImport } from './routes/reset-password'
import { Route as RecoverPasswordImport } from './routes/recover-password'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutTeacherManagementImport } from './routes/_layout/teacher-management'
import { Route as LayoutStudentManagementImport } from './routes/_layout/student-management'
import { Route as LayoutSettingsImport } from './routes/_layout/settings'
import { Route as LayoutMyCoursesImport } from './routes/_layout/my-courses'
import { Route as LayoutItemsImport } from './routes/_layout/items'
import { Route as LayoutCoursesSelectionImport } from './routes/_layout/courses-selection'
import { Route as LayoutCoursesImport } from './routes/_layout/courses'
import { Route as LayoutCourseStudentImport } from './routes/_layout/course-student'
import { Route as LayoutCourseCommentImport } from './routes/_layout/course-comment'
import { Route as LayoutAdminImport } from './routes/_layout/admin'

// Create/Update Routes

const ResetPasswordRoute = ResetPasswordImport.update({
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const RecoverPasswordRoute = RecoverPasswordImport.update({
  path: '/recover-password',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutTeacherManagementRoute = LayoutTeacherManagementImport.update({
  path: '/teacher-management',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutStudentManagementRoute = LayoutStudentManagementImport.update({
  path: '/student-management',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSettingsRoute = LayoutSettingsImport.update({
  path: '/settings',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutMyCoursesRoute = LayoutMyCoursesImport.update({
  path: '/my-courses',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutItemsRoute = LayoutItemsImport.update({
  path: '/items',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCoursesSelectionRoute = LayoutCoursesSelectionImport.update({
  path: '/courses-selection',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCoursesRoute = LayoutCoursesImport.update({
  path: '/courses',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCourseStudentRoute = LayoutCourseStudentImport.update({
  path: '/course-student',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCourseCommentRoute = LayoutCourseCommentImport.update({
  path: '/course-comment',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminRoute = LayoutAdminImport.update({
  path: '/admin',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/recover-password': {
      preLoaderRoute: typeof RecoverPasswordImport
      parentRoute: typeof rootRoute
    }
    '/reset-password': {
      preLoaderRoute: typeof ResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/_layout/admin': {
      preLoaderRoute: typeof LayoutAdminImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/course-comment': {
      preLoaderRoute: typeof LayoutCourseCommentImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/course-student': {
      preLoaderRoute: typeof LayoutCourseStudentImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/courses': {
      preLoaderRoute: typeof LayoutCoursesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/courses-selection': {
      preLoaderRoute: typeof LayoutCoursesSelectionImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/items': {
      preLoaderRoute: typeof LayoutItemsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/my-courses': {
      preLoaderRoute: typeof LayoutMyCoursesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/settings': {
      preLoaderRoute: typeof LayoutSettingsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/student-management': {
      preLoaderRoute: typeof LayoutStudentManagementImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/teacher-management': {
      preLoaderRoute: typeof LayoutTeacherManagementImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutAdminRoute,
    LayoutCourseCommentRoute,
    LayoutCourseStudentRoute,
    LayoutCoursesRoute,
    LayoutCoursesSelectionRoute,
    LayoutItemsRoute,
    LayoutMyCoursesRoute,
    LayoutSettingsRoute,
    LayoutStudentManagementRoute,
    LayoutTeacherManagementRoute,
    LayoutIndexRoute,
  ]),
  LoginRoute,
  RecoverPasswordRoute,
  ResetPasswordRoute,
])

/* prettier-ignore-end */

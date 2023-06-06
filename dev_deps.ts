export { default as pluginFactory } from 'https://raw.githubusercontent.com/hyper63/hyper/hyper%40v4.1.0/packages/core/utils/plugin-schema.ts'
export { data as dataPort } from 'https://raw.githubusercontent.com/hyper63/hyper/hyper-port-data%40v2.1.0/packages/port-data/mod.ts'

// std lib deps
export { deferred } from 'https://deno.land/std@0.190.0/async/deferred.ts'
export {
  assert,
  assertEquals,
  assertObjectMatch,
  assertRejects,
  assertThrows,
} from 'https://deno.land/std@0.190.0/testing/asserts.ts'

// TODO: remove in lieu of npm client
export { MongoClient as DeprecatedClient } from 'https://deno.land/x/mongo@v0.29.0/mod.ts'
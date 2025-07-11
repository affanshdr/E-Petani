
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TemplateSurat
 * 
 */
export type TemplateSurat = $Result.DefaultSelection<Prisma.$TemplateSuratPayload>
/**
 * Model PengajuanSurat
 * 
 */
export type PengajuanSurat = $Result.DefaultSelection<Prisma.$PengajuanSuratPayload>
/**
 * Model Warga
 * 
 */
export type Warga = $Result.DefaultSelection<Prisma.$WargaPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Testing
 * 
 */
export type Testing = $Result.DefaultSelection<Prisma.$TestingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateSurat`: Exposes CRUD operations for the **TemplateSurat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateSurats
    * const templateSurats = await prisma.templateSurat.findMany()
    * ```
    */
  get templateSurat(): Prisma.TemplateSuratDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengajuanSurat`: Exposes CRUD operations for the **PengajuanSurat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PengajuanSurats
    * const pengajuanSurats = await prisma.pengajuanSurat.findMany()
    * ```
    */
  get pengajuanSurat(): Prisma.PengajuanSuratDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warga`: Exposes CRUD operations for the **Warga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wargas
    * const wargas = await prisma.warga.findMany()
    * ```
    */
  get warga(): Prisma.WargaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testing`: Exposes CRUD operations for the **Testing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testings
    * const testings = await prisma.testing.findMany()
    * ```
    */
  get testing(): Prisma.TestingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TemplateSurat: 'TemplateSurat',
    PengajuanSurat: 'PengajuanSurat',
    Warga: 'Warga',
    Admin: 'Admin',
    Testing: 'Testing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "templateSurat" | "pengajuanSurat" | "warga" | "admin" | "testing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TemplateSurat: {
        payload: Prisma.$TemplateSuratPayload<ExtArgs>
        fields: Prisma.TemplateSuratFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateSuratFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateSuratFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>
          }
          findFirst: {
            args: Prisma.TemplateSuratFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateSuratFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>
          }
          findMany: {
            args: Prisma.TemplateSuratFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>[]
          }
          create: {
            args: Prisma.TemplateSuratCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>
          }
          createMany: {
            args: Prisma.TemplateSuratCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateSuratCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>[]
          }
          delete: {
            args: Prisma.TemplateSuratDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>
          }
          update: {
            args: Prisma.TemplateSuratUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>
          }
          deleteMany: {
            args: Prisma.TemplateSuratDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateSuratUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateSuratUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>[]
          }
          upsert: {
            args: Prisma.TemplateSuratUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateSuratPayload>
          }
          aggregate: {
            args: Prisma.TemplateSuratAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateSurat>
          }
          groupBy: {
            args: Prisma.TemplateSuratGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateSuratGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateSuratCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateSuratCountAggregateOutputType> | number
          }
        }
      }
      PengajuanSurat: {
        payload: Prisma.$PengajuanSuratPayload<ExtArgs>
        fields: Prisma.PengajuanSuratFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengajuanSuratFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengajuanSuratFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>
          }
          findFirst: {
            args: Prisma.PengajuanSuratFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengajuanSuratFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>
          }
          findMany: {
            args: Prisma.PengajuanSuratFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>[]
          }
          create: {
            args: Prisma.PengajuanSuratCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>
          }
          createMany: {
            args: Prisma.PengajuanSuratCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PengajuanSuratCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>[]
          }
          delete: {
            args: Prisma.PengajuanSuratDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>
          }
          update: {
            args: Prisma.PengajuanSuratUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>
          }
          deleteMany: {
            args: Prisma.PengajuanSuratDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengajuanSuratUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PengajuanSuratUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>[]
          }
          upsert: {
            args: Prisma.PengajuanSuratUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengajuanSuratPayload>
          }
          aggregate: {
            args: Prisma.PengajuanSuratAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengajuanSurat>
          }
          groupBy: {
            args: Prisma.PengajuanSuratGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengajuanSuratGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengajuanSuratCountArgs<ExtArgs>
            result: $Utils.Optional<PengajuanSuratCountAggregateOutputType> | number
          }
        }
      }
      Warga: {
        payload: Prisma.$WargaPayload<ExtArgs>
        fields: Prisma.WargaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WargaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WargaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>
          }
          findFirst: {
            args: Prisma.WargaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WargaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>
          }
          findMany: {
            args: Prisma.WargaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>[]
          }
          create: {
            args: Prisma.WargaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>
          }
          createMany: {
            args: Prisma.WargaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WargaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>[]
          }
          delete: {
            args: Prisma.WargaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>
          }
          update: {
            args: Prisma.WargaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>
          }
          deleteMany: {
            args: Prisma.WargaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WargaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WargaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>[]
          }
          upsert: {
            args: Prisma.WargaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WargaPayload>
          }
          aggregate: {
            args: Prisma.WargaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarga>
          }
          groupBy: {
            args: Prisma.WargaGroupByArgs<ExtArgs>
            result: $Utils.Optional<WargaGroupByOutputType>[]
          }
          count: {
            args: Prisma.WargaCountArgs<ExtArgs>
            result: $Utils.Optional<WargaCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Testing: {
        payload: Prisma.$TestingPayload<ExtArgs>
        fields: Prisma.TestingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>
          }
          findFirst: {
            args: Prisma.TestingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>
          }
          findMany: {
            args: Prisma.TestingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>[]
          }
          create: {
            args: Prisma.TestingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>
          }
          createMany: {
            args: Prisma.TestingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>[]
          }
          delete: {
            args: Prisma.TestingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>
          }
          update: {
            args: Prisma.TestingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>
          }
          deleteMany: {
            args: Prisma.TestingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>[]
          }
          upsert: {
            args: Prisma.TestingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestingPayload>
          }
          aggregate: {
            args: Prisma.TestingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTesting>
          }
          groupBy: {
            args: Prisma.TestingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestingCountArgs<ExtArgs>
            result: $Utils.Optional<TestingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    templateSurat?: TemplateSuratOmit
    pengajuanSurat?: PengajuanSuratOmit
    warga?: WargaOmit
    admin?: AdminOmit
    testing?: TestingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model TemplateSurat
   */

  export type AggregateTemplateSurat = {
    _count: TemplateSuratCountAggregateOutputType | null
    _min: TemplateSuratMinAggregateOutputType | null
    _max: TemplateSuratMaxAggregateOutputType | null
  }

  export type TemplateSuratMinAggregateOutputType = {
    id: string | null
    judul: string | null
    terakhirDiubah: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateSuratMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    terakhirDiubah: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateSuratCountAggregateOutputType = {
    id: number
    judul: number
    terakhirDiubah: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateSuratMinAggregateInputType = {
    id?: true
    judul?: true
    terakhirDiubah?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateSuratMaxAggregateInputType = {
    id?: true
    judul?: true
    terakhirDiubah?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateSuratCountAggregateInputType = {
    id?: true
    judul?: true
    terakhirDiubah?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateSuratAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateSurat to aggregate.
     */
    where?: TemplateSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSurats to fetch.
     */
    orderBy?: TemplateSuratOrderByWithRelationInput | TemplateSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSurats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateSurats
    **/
    _count?: true | TemplateSuratCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateSuratMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateSuratMaxAggregateInputType
  }

  export type GetTemplateSuratAggregateType<T extends TemplateSuratAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateSurat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateSurat[P]>
      : GetScalarType<T[P], AggregateTemplateSurat[P]>
  }




  export type TemplateSuratGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateSuratWhereInput
    orderBy?: TemplateSuratOrderByWithAggregationInput | TemplateSuratOrderByWithAggregationInput[]
    by: TemplateSuratScalarFieldEnum[] | TemplateSuratScalarFieldEnum
    having?: TemplateSuratScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateSuratCountAggregateInputType | true
    _min?: TemplateSuratMinAggregateInputType
    _max?: TemplateSuratMaxAggregateInputType
  }

  export type TemplateSuratGroupByOutputType = {
    id: string
    judul: string
    terakhirDiubah: Date
    createdAt: Date
    updatedAt: Date
    _count: TemplateSuratCountAggregateOutputType | null
    _min: TemplateSuratMinAggregateOutputType | null
    _max: TemplateSuratMaxAggregateOutputType | null
  }

  type GetTemplateSuratGroupByPayload<T extends TemplateSuratGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateSuratGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateSuratGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateSuratGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateSuratGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSuratSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    terakhirDiubah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateSurat"]>

  export type TemplateSuratSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    terakhirDiubah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateSurat"]>

  export type TemplateSuratSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    terakhirDiubah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateSurat"]>

  export type TemplateSuratSelectScalar = {
    id?: boolean
    judul?: boolean
    terakhirDiubah?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateSuratOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "terakhirDiubah" | "createdAt" | "updatedAt", ExtArgs["result"]["templateSurat"]>

  export type $TemplateSuratPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateSurat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      terakhirDiubah: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateSurat"]>
    composites: {}
  }

  type TemplateSuratGetPayload<S extends boolean | null | undefined | TemplateSuratDefaultArgs> = $Result.GetResult<Prisma.$TemplateSuratPayload, S>

  type TemplateSuratCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateSuratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateSuratCountAggregateInputType | true
    }

  export interface TemplateSuratDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateSurat'], meta: { name: 'TemplateSurat' } }
    /**
     * Find zero or one TemplateSurat that matches the filter.
     * @param {TemplateSuratFindUniqueArgs} args - Arguments to find a TemplateSurat
     * @example
     * // Get one TemplateSurat
     * const templateSurat = await prisma.templateSurat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateSuratFindUniqueArgs>(args: SelectSubset<T, TemplateSuratFindUniqueArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateSurat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateSuratFindUniqueOrThrowArgs} args - Arguments to find a TemplateSurat
     * @example
     * // Get one TemplateSurat
     * const templateSurat = await prisma.templateSurat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateSuratFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateSuratFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateSurat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratFindFirstArgs} args - Arguments to find a TemplateSurat
     * @example
     * // Get one TemplateSurat
     * const templateSurat = await prisma.templateSurat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateSuratFindFirstArgs>(args?: SelectSubset<T, TemplateSuratFindFirstArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateSurat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratFindFirstOrThrowArgs} args - Arguments to find a TemplateSurat
     * @example
     * // Get one TemplateSurat
     * const templateSurat = await prisma.templateSurat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateSuratFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateSuratFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateSurats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateSurats
     * const templateSurats = await prisma.templateSurat.findMany()
     * 
     * // Get first 10 TemplateSurats
     * const templateSurats = await prisma.templateSurat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateSuratWithIdOnly = await prisma.templateSurat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateSuratFindManyArgs>(args?: SelectSubset<T, TemplateSuratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateSurat.
     * @param {TemplateSuratCreateArgs} args - Arguments to create a TemplateSurat.
     * @example
     * // Create one TemplateSurat
     * const TemplateSurat = await prisma.templateSurat.create({
     *   data: {
     *     // ... data to create a TemplateSurat
     *   }
     * })
     * 
     */
    create<T extends TemplateSuratCreateArgs>(args: SelectSubset<T, TemplateSuratCreateArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateSurats.
     * @param {TemplateSuratCreateManyArgs} args - Arguments to create many TemplateSurats.
     * @example
     * // Create many TemplateSurats
     * const templateSurat = await prisma.templateSurat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateSuratCreateManyArgs>(args?: SelectSubset<T, TemplateSuratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateSurats and returns the data saved in the database.
     * @param {TemplateSuratCreateManyAndReturnArgs} args - Arguments to create many TemplateSurats.
     * @example
     * // Create many TemplateSurats
     * const templateSurat = await prisma.templateSurat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateSurats and only return the `id`
     * const templateSuratWithIdOnly = await prisma.templateSurat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateSuratCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateSuratCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateSurat.
     * @param {TemplateSuratDeleteArgs} args - Arguments to delete one TemplateSurat.
     * @example
     * // Delete one TemplateSurat
     * const TemplateSurat = await prisma.templateSurat.delete({
     *   where: {
     *     // ... filter to delete one TemplateSurat
     *   }
     * })
     * 
     */
    delete<T extends TemplateSuratDeleteArgs>(args: SelectSubset<T, TemplateSuratDeleteArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateSurat.
     * @param {TemplateSuratUpdateArgs} args - Arguments to update one TemplateSurat.
     * @example
     * // Update one TemplateSurat
     * const templateSurat = await prisma.templateSurat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateSuratUpdateArgs>(args: SelectSubset<T, TemplateSuratUpdateArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateSurats.
     * @param {TemplateSuratDeleteManyArgs} args - Arguments to filter TemplateSurats to delete.
     * @example
     * // Delete a few TemplateSurats
     * const { count } = await prisma.templateSurat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateSuratDeleteManyArgs>(args?: SelectSubset<T, TemplateSuratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateSurats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateSurats
     * const templateSurat = await prisma.templateSurat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateSuratUpdateManyArgs>(args: SelectSubset<T, TemplateSuratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateSurats and returns the data updated in the database.
     * @param {TemplateSuratUpdateManyAndReturnArgs} args - Arguments to update many TemplateSurats.
     * @example
     * // Update many TemplateSurats
     * const templateSurat = await prisma.templateSurat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateSurats and only return the `id`
     * const templateSuratWithIdOnly = await prisma.templateSurat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateSuratUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateSuratUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateSurat.
     * @param {TemplateSuratUpsertArgs} args - Arguments to update or create a TemplateSurat.
     * @example
     * // Update or create a TemplateSurat
     * const templateSurat = await prisma.templateSurat.upsert({
     *   create: {
     *     // ... data to create a TemplateSurat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateSurat we want to update
     *   }
     * })
     */
    upsert<T extends TemplateSuratUpsertArgs>(args: SelectSubset<T, TemplateSuratUpsertArgs<ExtArgs>>): Prisma__TemplateSuratClient<$Result.GetResult<Prisma.$TemplateSuratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateSurats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratCountArgs} args - Arguments to filter TemplateSurats to count.
     * @example
     * // Count the number of TemplateSurats
     * const count = await prisma.templateSurat.count({
     *   where: {
     *     // ... the filter for the TemplateSurats we want to count
     *   }
     * })
    **/
    count<T extends TemplateSuratCountArgs>(
      args?: Subset<T, TemplateSuratCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateSuratCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateSurat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateSuratAggregateArgs>(args: Subset<T, TemplateSuratAggregateArgs>): Prisma.PrismaPromise<GetTemplateSuratAggregateType<T>>

    /**
     * Group by TemplateSurat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateSuratGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateSuratGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateSuratGroupByArgs['orderBy'] }
        : { orderBy?: TemplateSuratGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateSuratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateSuratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateSurat model
   */
  readonly fields: TemplateSuratFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateSurat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateSuratClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateSurat model
   */
  interface TemplateSuratFieldRefs {
    readonly id: FieldRef<"TemplateSurat", 'String'>
    readonly judul: FieldRef<"TemplateSurat", 'String'>
    readonly terakhirDiubah: FieldRef<"TemplateSurat", 'DateTime'>
    readonly createdAt: FieldRef<"TemplateSurat", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateSurat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateSurat findUnique
   */
  export type TemplateSuratFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * Filter, which TemplateSurat to fetch.
     */
    where: TemplateSuratWhereUniqueInput
  }

  /**
   * TemplateSurat findUniqueOrThrow
   */
  export type TemplateSuratFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * Filter, which TemplateSurat to fetch.
     */
    where: TemplateSuratWhereUniqueInput
  }

  /**
   * TemplateSurat findFirst
   */
  export type TemplateSuratFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * Filter, which TemplateSurat to fetch.
     */
    where?: TemplateSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSurats to fetch.
     */
    orderBy?: TemplateSuratOrderByWithRelationInput | TemplateSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateSurats.
     */
    cursor?: TemplateSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSurats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateSurats.
     */
    distinct?: TemplateSuratScalarFieldEnum | TemplateSuratScalarFieldEnum[]
  }

  /**
   * TemplateSurat findFirstOrThrow
   */
  export type TemplateSuratFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * Filter, which TemplateSurat to fetch.
     */
    where?: TemplateSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSurats to fetch.
     */
    orderBy?: TemplateSuratOrderByWithRelationInput | TemplateSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateSurats.
     */
    cursor?: TemplateSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSurats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateSurats.
     */
    distinct?: TemplateSuratScalarFieldEnum | TemplateSuratScalarFieldEnum[]
  }

  /**
   * TemplateSurat findMany
   */
  export type TemplateSuratFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * Filter, which TemplateSurats to fetch.
     */
    where?: TemplateSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateSurats to fetch.
     */
    orderBy?: TemplateSuratOrderByWithRelationInput | TemplateSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateSurats.
     */
    cursor?: TemplateSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateSurats.
     */
    skip?: number
    distinct?: TemplateSuratScalarFieldEnum | TemplateSuratScalarFieldEnum[]
  }

  /**
   * TemplateSurat create
   */
  export type TemplateSuratCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * The data needed to create a TemplateSurat.
     */
    data: XOR<TemplateSuratCreateInput, TemplateSuratUncheckedCreateInput>
  }

  /**
   * TemplateSurat createMany
   */
  export type TemplateSuratCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateSurats.
     */
    data: TemplateSuratCreateManyInput | TemplateSuratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateSurat createManyAndReturn
   */
  export type TemplateSuratCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateSurats.
     */
    data: TemplateSuratCreateManyInput | TemplateSuratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateSurat update
   */
  export type TemplateSuratUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * The data needed to update a TemplateSurat.
     */
    data: XOR<TemplateSuratUpdateInput, TemplateSuratUncheckedUpdateInput>
    /**
     * Choose, which TemplateSurat to update.
     */
    where: TemplateSuratWhereUniqueInput
  }

  /**
   * TemplateSurat updateMany
   */
  export type TemplateSuratUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateSurats.
     */
    data: XOR<TemplateSuratUpdateManyMutationInput, TemplateSuratUncheckedUpdateManyInput>
    /**
     * Filter which TemplateSurats to update
     */
    where?: TemplateSuratWhereInput
    /**
     * Limit how many TemplateSurats to update.
     */
    limit?: number
  }

  /**
   * TemplateSurat updateManyAndReturn
   */
  export type TemplateSuratUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * The data used to update TemplateSurats.
     */
    data: XOR<TemplateSuratUpdateManyMutationInput, TemplateSuratUncheckedUpdateManyInput>
    /**
     * Filter which TemplateSurats to update
     */
    where?: TemplateSuratWhereInput
    /**
     * Limit how many TemplateSurats to update.
     */
    limit?: number
  }

  /**
   * TemplateSurat upsert
   */
  export type TemplateSuratUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * The filter to search for the TemplateSurat to update in case it exists.
     */
    where: TemplateSuratWhereUniqueInput
    /**
     * In case the TemplateSurat found by the `where` argument doesn't exist, create a new TemplateSurat with this data.
     */
    create: XOR<TemplateSuratCreateInput, TemplateSuratUncheckedCreateInput>
    /**
     * In case the TemplateSurat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateSuratUpdateInput, TemplateSuratUncheckedUpdateInput>
  }

  /**
   * TemplateSurat delete
   */
  export type TemplateSuratDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
    /**
     * Filter which TemplateSurat to delete.
     */
    where: TemplateSuratWhereUniqueInput
  }

  /**
   * TemplateSurat deleteMany
   */
  export type TemplateSuratDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateSurats to delete
     */
    where?: TemplateSuratWhereInput
    /**
     * Limit how many TemplateSurats to delete.
     */
    limit?: number
  }

  /**
   * TemplateSurat without action
   */
  export type TemplateSuratDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateSurat
     */
    select?: TemplateSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateSurat
     */
    omit?: TemplateSuratOmit<ExtArgs> | null
  }


  /**
   * Model PengajuanSurat
   */

  export type AggregatePengajuanSurat = {
    _count: PengajuanSuratCountAggregateOutputType | null
    _avg: PengajuanSuratAvgAggregateOutputType | null
    _sum: PengajuanSuratSumAggregateOutputType | null
    _min: PengajuanSuratMinAggregateOutputType | null
    _max: PengajuanSuratMaxAggregateOutputType | null
  }

  export type PengajuanSuratAvgAggregateOutputType = {
    id: number | null
  }

  export type PengajuanSuratSumAggregateOutputType = {
    id: number | null
  }

  export type PengajuanSuratMinAggregateOutputType = {
    id: number | null
    nama_lengkap: string | null
    no_nik: string | null
    no_kk: string | null
    alamat: string | null
    keterangan: string | null
    jenis_surat: string | null
    file_ktp: string | null
    file_kk: string | null
    file_pengantar_rtrw: string | null
    file_surat_permohonan: string | null
    file_izin_usaha: string | null
    file_pas_foto: string | null
    file_pernyataan_tm: string | null
    file_rekening_listrik: string | null
    status: string | null
    no_pengajuan: string | null
    tanggal_pengajuan: Date | null
    tanggal_selesai: Date | null
    createdAt: Date | null
  }

  export type PengajuanSuratMaxAggregateOutputType = {
    id: number | null
    nama_lengkap: string | null
    no_nik: string | null
    no_kk: string | null
    alamat: string | null
    keterangan: string | null
    jenis_surat: string | null
    file_ktp: string | null
    file_kk: string | null
    file_pengantar_rtrw: string | null
    file_surat_permohonan: string | null
    file_izin_usaha: string | null
    file_pas_foto: string | null
    file_pernyataan_tm: string | null
    file_rekening_listrik: string | null
    status: string | null
    no_pengajuan: string | null
    tanggal_pengajuan: Date | null
    tanggal_selesai: Date | null
    createdAt: Date | null
  }

  export type PengajuanSuratCountAggregateOutputType = {
    id: number
    nama_lengkap: number
    no_nik: number
    no_kk: number
    alamat: number
    keterangan: number
    jenis_surat: number
    file_ktp: number
    file_kk: number
    file_pengantar_rtrw: number
    file_surat_permohonan: number
    file_izin_usaha: number
    file_pas_foto: number
    file_pernyataan_tm: number
    file_rekening_listrik: number
    status: number
    no_pengajuan: number
    tanggal_pengajuan: number
    tanggal_selesai: number
    createdAt: number
    _all: number
  }


  export type PengajuanSuratAvgAggregateInputType = {
    id?: true
  }

  export type PengajuanSuratSumAggregateInputType = {
    id?: true
  }

  export type PengajuanSuratMinAggregateInputType = {
    id?: true
    nama_lengkap?: true
    no_nik?: true
    no_kk?: true
    alamat?: true
    keterangan?: true
    jenis_surat?: true
    file_ktp?: true
    file_kk?: true
    file_pengantar_rtrw?: true
    file_surat_permohonan?: true
    file_izin_usaha?: true
    file_pas_foto?: true
    file_pernyataan_tm?: true
    file_rekening_listrik?: true
    status?: true
    no_pengajuan?: true
    tanggal_pengajuan?: true
    tanggal_selesai?: true
    createdAt?: true
  }

  export type PengajuanSuratMaxAggregateInputType = {
    id?: true
    nama_lengkap?: true
    no_nik?: true
    no_kk?: true
    alamat?: true
    keterangan?: true
    jenis_surat?: true
    file_ktp?: true
    file_kk?: true
    file_pengantar_rtrw?: true
    file_surat_permohonan?: true
    file_izin_usaha?: true
    file_pas_foto?: true
    file_pernyataan_tm?: true
    file_rekening_listrik?: true
    status?: true
    no_pengajuan?: true
    tanggal_pengajuan?: true
    tanggal_selesai?: true
    createdAt?: true
  }

  export type PengajuanSuratCountAggregateInputType = {
    id?: true
    nama_lengkap?: true
    no_nik?: true
    no_kk?: true
    alamat?: true
    keterangan?: true
    jenis_surat?: true
    file_ktp?: true
    file_kk?: true
    file_pengantar_rtrw?: true
    file_surat_permohonan?: true
    file_izin_usaha?: true
    file_pas_foto?: true
    file_pernyataan_tm?: true
    file_rekening_listrik?: true
    status?: true
    no_pengajuan?: true
    tanggal_pengajuan?: true
    tanggal_selesai?: true
    createdAt?: true
    _all?: true
  }

  export type PengajuanSuratAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PengajuanSurat to aggregate.
     */
    where?: PengajuanSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengajuanSurats to fetch.
     */
    orderBy?: PengajuanSuratOrderByWithRelationInput | PengajuanSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengajuanSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengajuanSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengajuanSurats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PengajuanSurats
    **/
    _count?: true | PengajuanSuratCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengajuanSuratAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengajuanSuratSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengajuanSuratMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengajuanSuratMaxAggregateInputType
  }

  export type GetPengajuanSuratAggregateType<T extends PengajuanSuratAggregateArgs> = {
        [P in keyof T & keyof AggregatePengajuanSurat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengajuanSurat[P]>
      : GetScalarType<T[P], AggregatePengajuanSurat[P]>
  }




  export type PengajuanSuratGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengajuanSuratWhereInput
    orderBy?: PengajuanSuratOrderByWithAggregationInput | PengajuanSuratOrderByWithAggregationInput[]
    by: PengajuanSuratScalarFieldEnum[] | PengajuanSuratScalarFieldEnum
    having?: PengajuanSuratScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengajuanSuratCountAggregateInputType | true
    _avg?: PengajuanSuratAvgAggregateInputType
    _sum?: PengajuanSuratSumAggregateInputType
    _min?: PengajuanSuratMinAggregateInputType
    _max?: PengajuanSuratMaxAggregateInputType
  }

  export type PengajuanSuratGroupByOutputType = {
    id: number
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    keterangan: string
    jenis_surat: string
    file_ktp: string | null
    file_kk: string | null
    file_pengantar_rtrw: string | null
    file_surat_permohonan: string | null
    file_izin_usaha: string | null
    file_pas_foto: string | null
    file_pernyataan_tm: string | null
    file_rekening_listrik: string | null
    status: string
    no_pengajuan: string | null
    tanggal_pengajuan: Date
    tanggal_selesai: Date | null
    createdAt: Date
    _count: PengajuanSuratCountAggregateOutputType | null
    _avg: PengajuanSuratAvgAggregateOutputType | null
    _sum: PengajuanSuratSumAggregateOutputType | null
    _min: PengajuanSuratMinAggregateOutputType | null
    _max: PengajuanSuratMaxAggregateOutputType | null
  }

  type GetPengajuanSuratGroupByPayload<T extends PengajuanSuratGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengajuanSuratGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengajuanSuratGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengajuanSuratGroupByOutputType[P]>
            : GetScalarType<T[P], PengajuanSuratGroupByOutputType[P]>
        }
      >
    >


  export type PengajuanSuratSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    keterangan?: boolean
    jenis_surat?: boolean
    file_ktp?: boolean
    file_kk?: boolean
    file_pengantar_rtrw?: boolean
    file_surat_permohonan?: boolean
    file_izin_usaha?: boolean
    file_pas_foto?: boolean
    file_pernyataan_tm?: boolean
    file_rekening_listrik?: boolean
    status?: boolean
    no_pengajuan?: boolean
    tanggal_pengajuan?: boolean
    tanggal_selesai?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pengajuanSurat"]>

  export type PengajuanSuratSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    keterangan?: boolean
    jenis_surat?: boolean
    file_ktp?: boolean
    file_kk?: boolean
    file_pengantar_rtrw?: boolean
    file_surat_permohonan?: boolean
    file_izin_usaha?: boolean
    file_pas_foto?: boolean
    file_pernyataan_tm?: boolean
    file_rekening_listrik?: boolean
    status?: boolean
    no_pengajuan?: boolean
    tanggal_pengajuan?: boolean
    tanggal_selesai?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pengajuanSurat"]>

  export type PengajuanSuratSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    keterangan?: boolean
    jenis_surat?: boolean
    file_ktp?: boolean
    file_kk?: boolean
    file_pengantar_rtrw?: boolean
    file_surat_permohonan?: boolean
    file_izin_usaha?: boolean
    file_pas_foto?: boolean
    file_pernyataan_tm?: boolean
    file_rekening_listrik?: boolean
    status?: boolean
    no_pengajuan?: boolean
    tanggal_pengajuan?: boolean
    tanggal_selesai?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pengajuanSurat"]>

  export type PengajuanSuratSelectScalar = {
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    keterangan?: boolean
    jenis_surat?: boolean
    file_ktp?: boolean
    file_kk?: boolean
    file_pengantar_rtrw?: boolean
    file_surat_permohonan?: boolean
    file_izin_usaha?: boolean
    file_pas_foto?: boolean
    file_pernyataan_tm?: boolean
    file_rekening_listrik?: boolean
    status?: boolean
    no_pengajuan?: boolean
    tanggal_pengajuan?: boolean
    tanggal_selesai?: boolean
    createdAt?: boolean
  }

  export type PengajuanSuratOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_lengkap" | "no_nik" | "no_kk" | "alamat" | "keterangan" | "jenis_surat" | "file_ktp" | "file_kk" | "file_pengantar_rtrw" | "file_surat_permohonan" | "file_izin_usaha" | "file_pas_foto" | "file_pernyataan_tm" | "file_rekening_listrik" | "status" | "no_pengajuan" | "tanggal_pengajuan" | "tanggal_selesai" | "createdAt", ExtArgs["result"]["pengajuanSurat"]>

  export type $PengajuanSuratPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PengajuanSurat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_lengkap: string
      no_nik: string
      no_kk: string
      alamat: string
      keterangan: string
      jenis_surat: string
      file_ktp: string | null
      file_kk: string | null
      file_pengantar_rtrw: string | null
      file_surat_permohonan: string | null
      file_izin_usaha: string | null
      file_pas_foto: string | null
      file_pernyataan_tm: string | null
      file_rekening_listrik: string | null
      status: string
      no_pengajuan: string | null
      tanggal_pengajuan: Date
      tanggal_selesai: Date | null
      createdAt: Date
    }, ExtArgs["result"]["pengajuanSurat"]>
    composites: {}
  }

  type PengajuanSuratGetPayload<S extends boolean | null | undefined | PengajuanSuratDefaultArgs> = $Result.GetResult<Prisma.$PengajuanSuratPayload, S>

  type PengajuanSuratCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengajuanSuratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengajuanSuratCountAggregateInputType | true
    }

  export interface PengajuanSuratDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PengajuanSurat'], meta: { name: 'PengajuanSurat' } }
    /**
     * Find zero or one PengajuanSurat that matches the filter.
     * @param {PengajuanSuratFindUniqueArgs} args - Arguments to find a PengajuanSurat
     * @example
     * // Get one PengajuanSurat
     * const pengajuanSurat = await prisma.pengajuanSurat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengajuanSuratFindUniqueArgs>(args: SelectSubset<T, PengajuanSuratFindUniqueArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PengajuanSurat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengajuanSuratFindUniqueOrThrowArgs} args - Arguments to find a PengajuanSurat
     * @example
     * // Get one PengajuanSurat
     * const pengajuanSurat = await prisma.pengajuanSurat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengajuanSuratFindUniqueOrThrowArgs>(args: SelectSubset<T, PengajuanSuratFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PengajuanSurat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratFindFirstArgs} args - Arguments to find a PengajuanSurat
     * @example
     * // Get one PengajuanSurat
     * const pengajuanSurat = await prisma.pengajuanSurat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengajuanSuratFindFirstArgs>(args?: SelectSubset<T, PengajuanSuratFindFirstArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PengajuanSurat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratFindFirstOrThrowArgs} args - Arguments to find a PengajuanSurat
     * @example
     * // Get one PengajuanSurat
     * const pengajuanSurat = await prisma.pengajuanSurat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengajuanSuratFindFirstOrThrowArgs>(args?: SelectSubset<T, PengajuanSuratFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PengajuanSurats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PengajuanSurats
     * const pengajuanSurats = await prisma.pengajuanSurat.findMany()
     * 
     * // Get first 10 PengajuanSurats
     * const pengajuanSurats = await prisma.pengajuanSurat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pengajuanSuratWithIdOnly = await prisma.pengajuanSurat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PengajuanSuratFindManyArgs>(args?: SelectSubset<T, PengajuanSuratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PengajuanSurat.
     * @param {PengajuanSuratCreateArgs} args - Arguments to create a PengajuanSurat.
     * @example
     * // Create one PengajuanSurat
     * const PengajuanSurat = await prisma.pengajuanSurat.create({
     *   data: {
     *     // ... data to create a PengajuanSurat
     *   }
     * })
     * 
     */
    create<T extends PengajuanSuratCreateArgs>(args: SelectSubset<T, PengajuanSuratCreateArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PengajuanSurats.
     * @param {PengajuanSuratCreateManyArgs} args - Arguments to create many PengajuanSurats.
     * @example
     * // Create many PengajuanSurats
     * const pengajuanSurat = await prisma.pengajuanSurat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengajuanSuratCreateManyArgs>(args?: SelectSubset<T, PengajuanSuratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PengajuanSurats and returns the data saved in the database.
     * @param {PengajuanSuratCreateManyAndReturnArgs} args - Arguments to create many PengajuanSurats.
     * @example
     * // Create many PengajuanSurats
     * const pengajuanSurat = await prisma.pengajuanSurat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PengajuanSurats and only return the `id`
     * const pengajuanSuratWithIdOnly = await prisma.pengajuanSurat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PengajuanSuratCreateManyAndReturnArgs>(args?: SelectSubset<T, PengajuanSuratCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PengajuanSurat.
     * @param {PengajuanSuratDeleteArgs} args - Arguments to delete one PengajuanSurat.
     * @example
     * // Delete one PengajuanSurat
     * const PengajuanSurat = await prisma.pengajuanSurat.delete({
     *   where: {
     *     // ... filter to delete one PengajuanSurat
     *   }
     * })
     * 
     */
    delete<T extends PengajuanSuratDeleteArgs>(args: SelectSubset<T, PengajuanSuratDeleteArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PengajuanSurat.
     * @param {PengajuanSuratUpdateArgs} args - Arguments to update one PengajuanSurat.
     * @example
     * // Update one PengajuanSurat
     * const pengajuanSurat = await prisma.pengajuanSurat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengajuanSuratUpdateArgs>(args: SelectSubset<T, PengajuanSuratUpdateArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PengajuanSurats.
     * @param {PengajuanSuratDeleteManyArgs} args - Arguments to filter PengajuanSurats to delete.
     * @example
     * // Delete a few PengajuanSurats
     * const { count } = await prisma.pengajuanSurat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengajuanSuratDeleteManyArgs>(args?: SelectSubset<T, PengajuanSuratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PengajuanSurats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PengajuanSurats
     * const pengajuanSurat = await prisma.pengajuanSurat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengajuanSuratUpdateManyArgs>(args: SelectSubset<T, PengajuanSuratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PengajuanSurats and returns the data updated in the database.
     * @param {PengajuanSuratUpdateManyAndReturnArgs} args - Arguments to update many PengajuanSurats.
     * @example
     * // Update many PengajuanSurats
     * const pengajuanSurat = await prisma.pengajuanSurat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PengajuanSurats and only return the `id`
     * const pengajuanSuratWithIdOnly = await prisma.pengajuanSurat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PengajuanSuratUpdateManyAndReturnArgs>(args: SelectSubset<T, PengajuanSuratUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PengajuanSurat.
     * @param {PengajuanSuratUpsertArgs} args - Arguments to update or create a PengajuanSurat.
     * @example
     * // Update or create a PengajuanSurat
     * const pengajuanSurat = await prisma.pengajuanSurat.upsert({
     *   create: {
     *     // ... data to create a PengajuanSurat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PengajuanSurat we want to update
     *   }
     * })
     */
    upsert<T extends PengajuanSuratUpsertArgs>(args: SelectSubset<T, PengajuanSuratUpsertArgs<ExtArgs>>): Prisma__PengajuanSuratClient<$Result.GetResult<Prisma.$PengajuanSuratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PengajuanSurats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratCountArgs} args - Arguments to filter PengajuanSurats to count.
     * @example
     * // Count the number of PengajuanSurats
     * const count = await prisma.pengajuanSurat.count({
     *   where: {
     *     // ... the filter for the PengajuanSurats we want to count
     *   }
     * })
    **/
    count<T extends PengajuanSuratCountArgs>(
      args?: Subset<T, PengajuanSuratCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengajuanSuratCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PengajuanSurat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PengajuanSuratAggregateArgs>(args: Subset<T, PengajuanSuratAggregateArgs>): Prisma.PrismaPromise<GetPengajuanSuratAggregateType<T>>

    /**
     * Group by PengajuanSurat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengajuanSuratGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PengajuanSuratGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengajuanSuratGroupByArgs['orderBy'] }
        : { orderBy?: PengajuanSuratGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PengajuanSuratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengajuanSuratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PengajuanSurat model
   */
  readonly fields: PengajuanSuratFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PengajuanSurat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengajuanSuratClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PengajuanSurat model
   */
  interface PengajuanSuratFieldRefs {
    readonly id: FieldRef<"PengajuanSurat", 'Int'>
    readonly nama_lengkap: FieldRef<"PengajuanSurat", 'String'>
    readonly no_nik: FieldRef<"PengajuanSurat", 'String'>
    readonly no_kk: FieldRef<"PengajuanSurat", 'String'>
    readonly alamat: FieldRef<"PengajuanSurat", 'String'>
    readonly keterangan: FieldRef<"PengajuanSurat", 'String'>
    readonly jenis_surat: FieldRef<"PengajuanSurat", 'String'>
    readonly file_ktp: FieldRef<"PengajuanSurat", 'String'>
    readonly file_kk: FieldRef<"PengajuanSurat", 'String'>
    readonly file_pengantar_rtrw: FieldRef<"PengajuanSurat", 'String'>
    readonly file_surat_permohonan: FieldRef<"PengajuanSurat", 'String'>
    readonly file_izin_usaha: FieldRef<"PengajuanSurat", 'String'>
    readonly file_pas_foto: FieldRef<"PengajuanSurat", 'String'>
    readonly file_pernyataan_tm: FieldRef<"PengajuanSurat", 'String'>
    readonly file_rekening_listrik: FieldRef<"PengajuanSurat", 'String'>
    readonly status: FieldRef<"PengajuanSurat", 'String'>
    readonly no_pengajuan: FieldRef<"PengajuanSurat", 'String'>
    readonly tanggal_pengajuan: FieldRef<"PengajuanSurat", 'DateTime'>
    readonly tanggal_selesai: FieldRef<"PengajuanSurat", 'DateTime'>
    readonly createdAt: FieldRef<"PengajuanSurat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PengajuanSurat findUnique
   */
  export type PengajuanSuratFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * Filter, which PengajuanSurat to fetch.
     */
    where: PengajuanSuratWhereUniqueInput
  }

  /**
   * PengajuanSurat findUniqueOrThrow
   */
  export type PengajuanSuratFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * Filter, which PengajuanSurat to fetch.
     */
    where: PengajuanSuratWhereUniqueInput
  }

  /**
   * PengajuanSurat findFirst
   */
  export type PengajuanSuratFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * Filter, which PengajuanSurat to fetch.
     */
    where?: PengajuanSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengajuanSurats to fetch.
     */
    orderBy?: PengajuanSuratOrderByWithRelationInput | PengajuanSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PengajuanSurats.
     */
    cursor?: PengajuanSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengajuanSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengajuanSurats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengajuanSurats.
     */
    distinct?: PengajuanSuratScalarFieldEnum | PengajuanSuratScalarFieldEnum[]
  }

  /**
   * PengajuanSurat findFirstOrThrow
   */
  export type PengajuanSuratFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * Filter, which PengajuanSurat to fetch.
     */
    where?: PengajuanSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengajuanSurats to fetch.
     */
    orderBy?: PengajuanSuratOrderByWithRelationInput | PengajuanSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PengajuanSurats.
     */
    cursor?: PengajuanSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengajuanSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengajuanSurats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengajuanSurats.
     */
    distinct?: PengajuanSuratScalarFieldEnum | PengajuanSuratScalarFieldEnum[]
  }

  /**
   * PengajuanSurat findMany
   */
  export type PengajuanSuratFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * Filter, which PengajuanSurats to fetch.
     */
    where?: PengajuanSuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengajuanSurats to fetch.
     */
    orderBy?: PengajuanSuratOrderByWithRelationInput | PengajuanSuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PengajuanSurats.
     */
    cursor?: PengajuanSuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengajuanSurats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengajuanSurats.
     */
    skip?: number
    distinct?: PengajuanSuratScalarFieldEnum | PengajuanSuratScalarFieldEnum[]
  }

  /**
   * PengajuanSurat create
   */
  export type PengajuanSuratCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * The data needed to create a PengajuanSurat.
     */
    data: XOR<PengajuanSuratCreateInput, PengajuanSuratUncheckedCreateInput>
  }

  /**
   * PengajuanSurat createMany
   */
  export type PengajuanSuratCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PengajuanSurats.
     */
    data: PengajuanSuratCreateManyInput | PengajuanSuratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PengajuanSurat createManyAndReturn
   */
  export type PengajuanSuratCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * The data used to create many PengajuanSurats.
     */
    data: PengajuanSuratCreateManyInput | PengajuanSuratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PengajuanSurat update
   */
  export type PengajuanSuratUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * The data needed to update a PengajuanSurat.
     */
    data: XOR<PengajuanSuratUpdateInput, PengajuanSuratUncheckedUpdateInput>
    /**
     * Choose, which PengajuanSurat to update.
     */
    where: PengajuanSuratWhereUniqueInput
  }

  /**
   * PengajuanSurat updateMany
   */
  export type PengajuanSuratUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PengajuanSurats.
     */
    data: XOR<PengajuanSuratUpdateManyMutationInput, PengajuanSuratUncheckedUpdateManyInput>
    /**
     * Filter which PengajuanSurats to update
     */
    where?: PengajuanSuratWhereInput
    /**
     * Limit how many PengajuanSurats to update.
     */
    limit?: number
  }

  /**
   * PengajuanSurat updateManyAndReturn
   */
  export type PengajuanSuratUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * The data used to update PengajuanSurats.
     */
    data: XOR<PengajuanSuratUpdateManyMutationInput, PengajuanSuratUncheckedUpdateManyInput>
    /**
     * Filter which PengajuanSurats to update
     */
    where?: PengajuanSuratWhereInput
    /**
     * Limit how many PengajuanSurats to update.
     */
    limit?: number
  }

  /**
   * PengajuanSurat upsert
   */
  export type PengajuanSuratUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * The filter to search for the PengajuanSurat to update in case it exists.
     */
    where: PengajuanSuratWhereUniqueInput
    /**
     * In case the PengajuanSurat found by the `where` argument doesn't exist, create a new PengajuanSurat with this data.
     */
    create: XOR<PengajuanSuratCreateInput, PengajuanSuratUncheckedCreateInput>
    /**
     * In case the PengajuanSurat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengajuanSuratUpdateInput, PengajuanSuratUncheckedUpdateInput>
  }

  /**
   * PengajuanSurat delete
   */
  export type PengajuanSuratDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
    /**
     * Filter which PengajuanSurat to delete.
     */
    where: PengajuanSuratWhereUniqueInput
  }

  /**
   * PengajuanSurat deleteMany
   */
  export type PengajuanSuratDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PengajuanSurats to delete
     */
    where?: PengajuanSuratWhereInput
    /**
     * Limit how many PengajuanSurats to delete.
     */
    limit?: number
  }

  /**
   * PengajuanSurat without action
   */
  export type PengajuanSuratDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengajuanSurat
     */
    select?: PengajuanSuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengajuanSurat
     */
    omit?: PengajuanSuratOmit<ExtArgs> | null
  }


  /**
   * Model Warga
   */

  export type AggregateWarga = {
    _count: WargaCountAggregateOutputType | null
    _avg: WargaAvgAggregateOutputType | null
    _sum: WargaSumAggregateOutputType | null
    _min: WargaMinAggregateOutputType | null
    _max: WargaMaxAggregateOutputType | null
  }

  export type WargaAvgAggregateOutputType = {
    id: number | null
  }

  export type WargaSumAggregateOutputType = {
    id: number | null
  }

  export type WargaMinAggregateOutputType = {
    id: number | null
    nama_lengkap: string | null
    no_nik: string | null
    no_kk: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WargaMaxAggregateOutputType = {
    id: number | null
    nama_lengkap: string | null
    no_nik: string | null
    no_kk: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WargaCountAggregateOutputType = {
    id: number
    nama_lengkap: number
    no_nik: number
    no_kk: number
    alamat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WargaAvgAggregateInputType = {
    id?: true
  }

  export type WargaSumAggregateInputType = {
    id?: true
  }

  export type WargaMinAggregateInputType = {
    id?: true
    nama_lengkap?: true
    no_nik?: true
    no_kk?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WargaMaxAggregateInputType = {
    id?: true
    nama_lengkap?: true
    no_nik?: true
    no_kk?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WargaCountAggregateInputType = {
    id?: true
    nama_lengkap?: true
    no_nik?: true
    no_kk?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WargaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warga to aggregate.
     */
    where?: WargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wargas to fetch.
     */
    orderBy?: WargaOrderByWithRelationInput | WargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wargas
    **/
    _count?: true | WargaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WargaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WargaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WargaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WargaMaxAggregateInputType
  }

  export type GetWargaAggregateType<T extends WargaAggregateArgs> = {
        [P in keyof T & keyof AggregateWarga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarga[P]>
      : GetScalarType<T[P], AggregateWarga[P]>
  }




  export type WargaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WargaWhereInput
    orderBy?: WargaOrderByWithAggregationInput | WargaOrderByWithAggregationInput[]
    by: WargaScalarFieldEnum[] | WargaScalarFieldEnum
    having?: WargaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WargaCountAggregateInputType | true
    _avg?: WargaAvgAggregateInputType
    _sum?: WargaSumAggregateInputType
    _min?: WargaMinAggregateInputType
    _max?: WargaMaxAggregateInputType
  }

  export type WargaGroupByOutputType = {
    id: number
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    createdAt: Date
    updatedAt: Date
    _count: WargaCountAggregateOutputType | null
    _avg: WargaAvgAggregateOutputType | null
    _sum: WargaSumAggregateOutputType | null
    _min: WargaMinAggregateOutputType | null
    _max: WargaMaxAggregateOutputType | null
  }

  type GetWargaGroupByPayload<T extends WargaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WargaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WargaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WargaGroupByOutputType[P]>
            : GetScalarType<T[P], WargaGroupByOutputType[P]>
        }
      >
    >


  export type WargaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warga"]>

  export type WargaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warga"]>

  export type WargaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warga"]>

  export type WargaSelectScalar = {
    id?: boolean
    nama_lengkap?: boolean
    no_nik?: boolean
    no_kk?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WargaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_lengkap" | "no_nik" | "no_kk" | "alamat" | "createdAt" | "updatedAt", ExtArgs["result"]["warga"]>

  export type $WargaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warga"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_lengkap: string
      no_nik: string
      no_kk: string
      alamat: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warga"]>
    composites: {}
  }

  type WargaGetPayload<S extends boolean | null | undefined | WargaDefaultArgs> = $Result.GetResult<Prisma.$WargaPayload, S>

  type WargaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WargaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WargaCountAggregateInputType | true
    }

  export interface WargaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warga'], meta: { name: 'Warga' } }
    /**
     * Find zero or one Warga that matches the filter.
     * @param {WargaFindUniqueArgs} args - Arguments to find a Warga
     * @example
     * // Get one Warga
     * const warga = await prisma.warga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WargaFindUniqueArgs>(args: SelectSubset<T, WargaFindUniqueArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WargaFindUniqueOrThrowArgs} args - Arguments to find a Warga
     * @example
     * // Get one Warga
     * const warga = await prisma.warga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WargaFindUniqueOrThrowArgs>(args: SelectSubset<T, WargaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaFindFirstArgs} args - Arguments to find a Warga
     * @example
     * // Get one Warga
     * const warga = await prisma.warga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WargaFindFirstArgs>(args?: SelectSubset<T, WargaFindFirstArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaFindFirstOrThrowArgs} args - Arguments to find a Warga
     * @example
     * // Get one Warga
     * const warga = await prisma.warga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WargaFindFirstOrThrowArgs>(args?: SelectSubset<T, WargaFindFirstOrThrowArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wargas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wargas
     * const wargas = await prisma.warga.findMany()
     * 
     * // Get first 10 Wargas
     * const wargas = await prisma.warga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wargaWithIdOnly = await prisma.warga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WargaFindManyArgs>(args?: SelectSubset<T, WargaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warga.
     * @param {WargaCreateArgs} args - Arguments to create a Warga.
     * @example
     * // Create one Warga
     * const Warga = await prisma.warga.create({
     *   data: {
     *     // ... data to create a Warga
     *   }
     * })
     * 
     */
    create<T extends WargaCreateArgs>(args: SelectSubset<T, WargaCreateArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wargas.
     * @param {WargaCreateManyArgs} args - Arguments to create many Wargas.
     * @example
     * // Create many Wargas
     * const warga = await prisma.warga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WargaCreateManyArgs>(args?: SelectSubset<T, WargaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wargas and returns the data saved in the database.
     * @param {WargaCreateManyAndReturnArgs} args - Arguments to create many Wargas.
     * @example
     * // Create many Wargas
     * const warga = await prisma.warga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wargas and only return the `id`
     * const wargaWithIdOnly = await prisma.warga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WargaCreateManyAndReturnArgs>(args?: SelectSubset<T, WargaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warga.
     * @param {WargaDeleteArgs} args - Arguments to delete one Warga.
     * @example
     * // Delete one Warga
     * const Warga = await prisma.warga.delete({
     *   where: {
     *     // ... filter to delete one Warga
     *   }
     * })
     * 
     */
    delete<T extends WargaDeleteArgs>(args: SelectSubset<T, WargaDeleteArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warga.
     * @param {WargaUpdateArgs} args - Arguments to update one Warga.
     * @example
     * // Update one Warga
     * const warga = await prisma.warga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WargaUpdateArgs>(args: SelectSubset<T, WargaUpdateArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wargas.
     * @param {WargaDeleteManyArgs} args - Arguments to filter Wargas to delete.
     * @example
     * // Delete a few Wargas
     * const { count } = await prisma.warga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WargaDeleteManyArgs>(args?: SelectSubset<T, WargaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wargas
     * const warga = await prisma.warga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WargaUpdateManyArgs>(args: SelectSubset<T, WargaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wargas and returns the data updated in the database.
     * @param {WargaUpdateManyAndReturnArgs} args - Arguments to update many Wargas.
     * @example
     * // Update many Wargas
     * const warga = await prisma.warga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wargas and only return the `id`
     * const wargaWithIdOnly = await prisma.warga.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WargaUpdateManyAndReturnArgs>(args: SelectSubset<T, WargaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warga.
     * @param {WargaUpsertArgs} args - Arguments to update or create a Warga.
     * @example
     * // Update or create a Warga
     * const warga = await prisma.warga.upsert({
     *   create: {
     *     // ... data to create a Warga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warga we want to update
     *   }
     * })
     */
    upsert<T extends WargaUpsertArgs>(args: SelectSubset<T, WargaUpsertArgs<ExtArgs>>): Prisma__WargaClient<$Result.GetResult<Prisma.$WargaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaCountArgs} args - Arguments to filter Wargas to count.
     * @example
     * // Count the number of Wargas
     * const count = await prisma.warga.count({
     *   where: {
     *     // ... the filter for the Wargas we want to count
     *   }
     * })
    **/
    count<T extends WargaCountArgs>(
      args?: Subset<T, WargaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WargaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WargaAggregateArgs>(args: Subset<T, WargaAggregateArgs>): Prisma.PrismaPromise<GetWargaAggregateType<T>>

    /**
     * Group by Warga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WargaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WargaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WargaGroupByArgs['orderBy'] }
        : { orderBy?: WargaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WargaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWargaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warga model
   */
  readonly fields: WargaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WargaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warga model
   */
  interface WargaFieldRefs {
    readonly id: FieldRef<"Warga", 'Int'>
    readonly nama_lengkap: FieldRef<"Warga", 'String'>
    readonly no_nik: FieldRef<"Warga", 'String'>
    readonly no_kk: FieldRef<"Warga", 'String'>
    readonly alamat: FieldRef<"Warga", 'String'>
    readonly createdAt: FieldRef<"Warga", 'DateTime'>
    readonly updatedAt: FieldRef<"Warga", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warga findUnique
   */
  export type WargaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * Filter, which Warga to fetch.
     */
    where: WargaWhereUniqueInput
  }

  /**
   * Warga findUniqueOrThrow
   */
  export type WargaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * Filter, which Warga to fetch.
     */
    where: WargaWhereUniqueInput
  }

  /**
   * Warga findFirst
   */
  export type WargaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * Filter, which Warga to fetch.
     */
    where?: WargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wargas to fetch.
     */
    orderBy?: WargaOrderByWithRelationInput | WargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wargas.
     */
    cursor?: WargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wargas.
     */
    distinct?: WargaScalarFieldEnum | WargaScalarFieldEnum[]
  }

  /**
   * Warga findFirstOrThrow
   */
  export type WargaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * Filter, which Warga to fetch.
     */
    where?: WargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wargas to fetch.
     */
    orderBy?: WargaOrderByWithRelationInput | WargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wargas.
     */
    cursor?: WargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wargas.
     */
    distinct?: WargaScalarFieldEnum | WargaScalarFieldEnum[]
  }

  /**
   * Warga findMany
   */
  export type WargaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * Filter, which Wargas to fetch.
     */
    where?: WargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wargas to fetch.
     */
    orderBy?: WargaOrderByWithRelationInput | WargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wargas.
     */
    cursor?: WargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wargas.
     */
    skip?: number
    distinct?: WargaScalarFieldEnum | WargaScalarFieldEnum[]
  }

  /**
   * Warga create
   */
  export type WargaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * The data needed to create a Warga.
     */
    data: XOR<WargaCreateInput, WargaUncheckedCreateInput>
  }

  /**
   * Warga createMany
   */
  export type WargaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wargas.
     */
    data: WargaCreateManyInput | WargaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warga createManyAndReturn
   */
  export type WargaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * The data used to create many Wargas.
     */
    data: WargaCreateManyInput | WargaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warga update
   */
  export type WargaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * The data needed to update a Warga.
     */
    data: XOR<WargaUpdateInput, WargaUncheckedUpdateInput>
    /**
     * Choose, which Warga to update.
     */
    where: WargaWhereUniqueInput
  }

  /**
   * Warga updateMany
   */
  export type WargaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wargas.
     */
    data: XOR<WargaUpdateManyMutationInput, WargaUncheckedUpdateManyInput>
    /**
     * Filter which Wargas to update
     */
    where?: WargaWhereInput
    /**
     * Limit how many Wargas to update.
     */
    limit?: number
  }

  /**
   * Warga updateManyAndReturn
   */
  export type WargaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * The data used to update Wargas.
     */
    data: XOR<WargaUpdateManyMutationInput, WargaUncheckedUpdateManyInput>
    /**
     * Filter which Wargas to update
     */
    where?: WargaWhereInput
    /**
     * Limit how many Wargas to update.
     */
    limit?: number
  }

  /**
   * Warga upsert
   */
  export type WargaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * The filter to search for the Warga to update in case it exists.
     */
    where: WargaWhereUniqueInput
    /**
     * In case the Warga found by the `where` argument doesn't exist, create a new Warga with this data.
     */
    create: XOR<WargaCreateInput, WargaUncheckedCreateInput>
    /**
     * In case the Warga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WargaUpdateInput, WargaUncheckedUpdateInput>
  }

  /**
   * Warga delete
   */
  export type WargaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
    /**
     * Filter which Warga to delete.
     */
    where: WargaWhereUniqueInput
  }

  /**
   * Warga deleteMany
   */
  export type WargaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wargas to delete
     */
    where?: WargaWhereInput
    /**
     * Limit how many Wargas to delete.
     */
    limit?: number
  }

  /**
   * Warga without action
   */
  export type WargaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warga
     */
    select?: WargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warga
     */
    omit?: WargaOmit<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Testing
   */

  export type AggregateTesting = {
    _count: TestingCountAggregateOutputType | null
    _avg: TestingAvgAggregateOutputType | null
    _sum: TestingSumAggregateOutputType | null
    _min: TestingMinAggregateOutputType | null
    _max: TestingMaxAggregateOutputType | null
  }

  export type TestingAvgAggregateOutputType = {
    id: number | null
  }

  export type TestingSumAggregateOutputType = {
    id: number | null
  }

  export type TestingMinAggregateOutputType = {
    id: number | null
    nama: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TestingMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TestingCountAggregateOutputType = {
    id: number
    nama: number
    status: number
    createdAt: number
    _all: number
  }


  export type TestingAvgAggregateInputType = {
    id?: true
  }

  export type TestingSumAggregateInputType = {
    id?: true
  }

  export type TestingMinAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    createdAt?: true
  }

  export type TestingMaxAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    createdAt?: true
  }

  export type TestingCountAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TestingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testing to aggregate.
     */
    where?: TestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testings to fetch.
     */
    orderBy?: TestingOrderByWithRelationInput | TestingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testings
    **/
    _count?: true | TestingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestingMaxAggregateInputType
  }

  export type GetTestingAggregateType<T extends TestingAggregateArgs> = {
        [P in keyof T & keyof AggregateTesting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTesting[P]>
      : GetScalarType<T[P], AggregateTesting[P]>
  }




  export type TestingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestingWhereInput
    orderBy?: TestingOrderByWithAggregationInput | TestingOrderByWithAggregationInput[]
    by: TestingScalarFieldEnum[] | TestingScalarFieldEnum
    having?: TestingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestingCountAggregateInputType | true
    _avg?: TestingAvgAggregateInputType
    _sum?: TestingSumAggregateInputType
    _min?: TestingMinAggregateInputType
    _max?: TestingMaxAggregateInputType
  }

  export type TestingGroupByOutputType = {
    id: number
    nama: string
    status: string
    createdAt: Date
    _count: TestingCountAggregateOutputType | null
    _avg: TestingAvgAggregateOutputType | null
    _sum: TestingSumAggregateOutputType | null
    _min: TestingMinAggregateOutputType | null
    _max: TestingMaxAggregateOutputType | null
  }

  type GetTestingGroupByPayload<T extends TestingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestingGroupByOutputType[P]>
            : GetScalarType<T[P], TestingGroupByOutputType[P]>
        }
      >
    >


  export type TestingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testing"]>

  export type TestingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testing"]>

  export type TestingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testing"]>

  export type TestingSelectScalar = {
    id?: boolean
    nama?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TestingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "status" | "createdAt", ExtArgs["result"]["testing"]>

  export type $TestingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["testing"]>
    composites: {}
  }

  type TestingGetPayload<S extends boolean | null | undefined | TestingDefaultArgs> = $Result.GetResult<Prisma.$TestingPayload, S>

  type TestingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestingCountAggregateInputType | true
    }

  export interface TestingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testing'], meta: { name: 'Testing' } }
    /**
     * Find zero or one Testing that matches the filter.
     * @param {TestingFindUniqueArgs} args - Arguments to find a Testing
     * @example
     * // Get one Testing
     * const testing = await prisma.testing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestingFindUniqueArgs>(args: SelectSubset<T, TestingFindUniqueArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestingFindUniqueOrThrowArgs} args - Arguments to find a Testing
     * @example
     * // Get one Testing
     * const testing = await prisma.testing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestingFindUniqueOrThrowArgs>(args: SelectSubset<T, TestingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingFindFirstArgs} args - Arguments to find a Testing
     * @example
     * // Get one Testing
     * const testing = await prisma.testing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestingFindFirstArgs>(args?: SelectSubset<T, TestingFindFirstArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingFindFirstOrThrowArgs} args - Arguments to find a Testing
     * @example
     * // Get one Testing
     * const testing = await prisma.testing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestingFindFirstOrThrowArgs>(args?: SelectSubset<T, TestingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testings
     * const testings = await prisma.testing.findMany()
     * 
     * // Get first 10 Testings
     * const testings = await prisma.testing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testingWithIdOnly = await prisma.testing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestingFindManyArgs>(args?: SelectSubset<T, TestingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testing.
     * @param {TestingCreateArgs} args - Arguments to create a Testing.
     * @example
     * // Create one Testing
     * const Testing = await prisma.testing.create({
     *   data: {
     *     // ... data to create a Testing
     *   }
     * })
     * 
     */
    create<T extends TestingCreateArgs>(args: SelectSubset<T, TestingCreateArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testings.
     * @param {TestingCreateManyArgs} args - Arguments to create many Testings.
     * @example
     * // Create many Testings
     * const testing = await prisma.testing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestingCreateManyArgs>(args?: SelectSubset<T, TestingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testings and returns the data saved in the database.
     * @param {TestingCreateManyAndReturnArgs} args - Arguments to create many Testings.
     * @example
     * // Create many Testings
     * const testing = await prisma.testing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testings and only return the `id`
     * const testingWithIdOnly = await prisma.testing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestingCreateManyAndReturnArgs>(args?: SelectSubset<T, TestingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testing.
     * @param {TestingDeleteArgs} args - Arguments to delete one Testing.
     * @example
     * // Delete one Testing
     * const Testing = await prisma.testing.delete({
     *   where: {
     *     // ... filter to delete one Testing
     *   }
     * })
     * 
     */
    delete<T extends TestingDeleteArgs>(args: SelectSubset<T, TestingDeleteArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testing.
     * @param {TestingUpdateArgs} args - Arguments to update one Testing.
     * @example
     * // Update one Testing
     * const testing = await prisma.testing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestingUpdateArgs>(args: SelectSubset<T, TestingUpdateArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testings.
     * @param {TestingDeleteManyArgs} args - Arguments to filter Testings to delete.
     * @example
     * // Delete a few Testings
     * const { count } = await prisma.testing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestingDeleteManyArgs>(args?: SelectSubset<T, TestingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testings
     * const testing = await prisma.testing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestingUpdateManyArgs>(args: SelectSubset<T, TestingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testings and returns the data updated in the database.
     * @param {TestingUpdateManyAndReturnArgs} args - Arguments to update many Testings.
     * @example
     * // Update many Testings
     * const testing = await prisma.testing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testings and only return the `id`
     * const testingWithIdOnly = await prisma.testing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestingUpdateManyAndReturnArgs>(args: SelectSubset<T, TestingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testing.
     * @param {TestingUpsertArgs} args - Arguments to update or create a Testing.
     * @example
     * // Update or create a Testing
     * const testing = await prisma.testing.upsert({
     *   create: {
     *     // ... data to create a Testing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testing we want to update
     *   }
     * })
     */
    upsert<T extends TestingUpsertArgs>(args: SelectSubset<T, TestingUpsertArgs<ExtArgs>>): Prisma__TestingClient<$Result.GetResult<Prisma.$TestingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingCountArgs} args - Arguments to filter Testings to count.
     * @example
     * // Count the number of Testings
     * const count = await prisma.testing.count({
     *   where: {
     *     // ... the filter for the Testings we want to count
     *   }
     * })
    **/
    count<T extends TestingCountArgs>(
      args?: Subset<T, TestingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestingAggregateArgs>(args: Subset<T, TestingAggregateArgs>): Prisma.PrismaPromise<GetTestingAggregateType<T>>

    /**
     * Group by Testing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestingGroupByArgs['orderBy'] }
        : { orderBy?: TestingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testing model
   */
  readonly fields: TestingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testing model
   */
  interface TestingFieldRefs {
    readonly id: FieldRef<"Testing", 'Int'>
    readonly nama: FieldRef<"Testing", 'String'>
    readonly status: FieldRef<"Testing", 'String'>
    readonly createdAt: FieldRef<"Testing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testing findUnique
   */
  export type TestingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * Filter, which Testing to fetch.
     */
    where: TestingWhereUniqueInput
  }

  /**
   * Testing findUniqueOrThrow
   */
  export type TestingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * Filter, which Testing to fetch.
     */
    where: TestingWhereUniqueInput
  }

  /**
   * Testing findFirst
   */
  export type TestingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * Filter, which Testing to fetch.
     */
    where?: TestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testings to fetch.
     */
    orderBy?: TestingOrderByWithRelationInput | TestingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testings.
     */
    cursor?: TestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testings.
     */
    distinct?: TestingScalarFieldEnum | TestingScalarFieldEnum[]
  }

  /**
   * Testing findFirstOrThrow
   */
  export type TestingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * Filter, which Testing to fetch.
     */
    where?: TestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testings to fetch.
     */
    orderBy?: TestingOrderByWithRelationInput | TestingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testings.
     */
    cursor?: TestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testings.
     */
    distinct?: TestingScalarFieldEnum | TestingScalarFieldEnum[]
  }

  /**
   * Testing findMany
   */
  export type TestingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * Filter, which Testings to fetch.
     */
    where?: TestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testings to fetch.
     */
    orderBy?: TestingOrderByWithRelationInput | TestingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testings.
     */
    cursor?: TestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testings.
     */
    skip?: number
    distinct?: TestingScalarFieldEnum | TestingScalarFieldEnum[]
  }

  /**
   * Testing create
   */
  export type TestingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * The data needed to create a Testing.
     */
    data: XOR<TestingCreateInput, TestingUncheckedCreateInput>
  }

  /**
   * Testing createMany
   */
  export type TestingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testings.
     */
    data: TestingCreateManyInput | TestingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testing createManyAndReturn
   */
  export type TestingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * The data used to create many Testings.
     */
    data: TestingCreateManyInput | TestingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testing update
   */
  export type TestingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * The data needed to update a Testing.
     */
    data: XOR<TestingUpdateInput, TestingUncheckedUpdateInput>
    /**
     * Choose, which Testing to update.
     */
    where: TestingWhereUniqueInput
  }

  /**
   * Testing updateMany
   */
  export type TestingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testings.
     */
    data: XOR<TestingUpdateManyMutationInput, TestingUncheckedUpdateManyInput>
    /**
     * Filter which Testings to update
     */
    where?: TestingWhereInput
    /**
     * Limit how many Testings to update.
     */
    limit?: number
  }

  /**
   * Testing updateManyAndReturn
   */
  export type TestingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * The data used to update Testings.
     */
    data: XOR<TestingUpdateManyMutationInput, TestingUncheckedUpdateManyInput>
    /**
     * Filter which Testings to update
     */
    where?: TestingWhereInput
    /**
     * Limit how many Testings to update.
     */
    limit?: number
  }

  /**
   * Testing upsert
   */
  export type TestingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * The filter to search for the Testing to update in case it exists.
     */
    where: TestingWhereUniqueInput
    /**
     * In case the Testing found by the `where` argument doesn't exist, create a new Testing with this data.
     */
    create: XOR<TestingCreateInput, TestingUncheckedCreateInput>
    /**
     * In case the Testing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestingUpdateInput, TestingUncheckedUpdateInput>
  }

  /**
   * Testing delete
   */
  export type TestingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
    /**
     * Filter which Testing to delete.
     */
    where: TestingWhereUniqueInput
  }

  /**
   * Testing deleteMany
   */
  export type TestingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testings to delete
     */
    where?: TestingWhereInput
    /**
     * Limit how many Testings to delete.
     */
    limit?: number
  }

  /**
   * Testing without action
   */
  export type TestingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testing
     */
    select?: TestingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testing
     */
    omit?: TestingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TemplateSuratScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    terakhirDiubah: 'terakhirDiubah',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateSuratScalarFieldEnum = (typeof TemplateSuratScalarFieldEnum)[keyof typeof TemplateSuratScalarFieldEnum]


  export const PengajuanSuratScalarFieldEnum: {
    id: 'id',
    nama_lengkap: 'nama_lengkap',
    no_nik: 'no_nik',
    no_kk: 'no_kk',
    alamat: 'alamat',
    keterangan: 'keterangan',
    jenis_surat: 'jenis_surat',
    file_ktp: 'file_ktp',
    file_kk: 'file_kk',
    file_pengantar_rtrw: 'file_pengantar_rtrw',
    file_surat_permohonan: 'file_surat_permohonan',
    file_izin_usaha: 'file_izin_usaha',
    file_pas_foto: 'file_pas_foto',
    file_pernyataan_tm: 'file_pernyataan_tm',
    file_rekening_listrik: 'file_rekening_listrik',
    status: 'status',
    no_pengajuan: 'no_pengajuan',
    tanggal_pengajuan: 'tanggal_pengajuan',
    tanggal_selesai: 'tanggal_selesai',
    createdAt: 'createdAt'
  };

  export type PengajuanSuratScalarFieldEnum = (typeof PengajuanSuratScalarFieldEnum)[keyof typeof PengajuanSuratScalarFieldEnum]


  export const WargaScalarFieldEnum: {
    id: 'id',
    nama_lengkap: 'nama_lengkap',
    no_nik: 'no_nik',
    no_kk: 'no_kk',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WargaScalarFieldEnum = (typeof WargaScalarFieldEnum)[keyof typeof WargaScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TestingScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TestingScalarFieldEnum = (typeof TestingScalarFieldEnum)[keyof typeof TestingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type TemplateSuratWhereInput = {
    AND?: TemplateSuratWhereInput | TemplateSuratWhereInput[]
    OR?: TemplateSuratWhereInput[]
    NOT?: TemplateSuratWhereInput | TemplateSuratWhereInput[]
    id?: StringFilter<"TemplateSurat"> | string
    judul?: StringFilter<"TemplateSurat"> | string
    terakhirDiubah?: DateTimeFilter<"TemplateSurat"> | Date | string
    createdAt?: DateTimeFilter<"TemplateSurat"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateSurat"> | Date | string
  }

  export type TemplateSuratOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    terakhirDiubah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateSuratWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateSuratWhereInput | TemplateSuratWhereInput[]
    OR?: TemplateSuratWhereInput[]
    NOT?: TemplateSuratWhereInput | TemplateSuratWhereInput[]
    judul?: StringFilter<"TemplateSurat"> | string
    terakhirDiubah?: DateTimeFilter<"TemplateSurat"> | Date | string
    createdAt?: DateTimeFilter<"TemplateSurat"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateSurat"> | Date | string
  }, "id">

  export type TemplateSuratOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    terakhirDiubah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateSuratCountOrderByAggregateInput
    _max?: TemplateSuratMaxOrderByAggregateInput
    _min?: TemplateSuratMinOrderByAggregateInput
  }

  export type TemplateSuratScalarWhereWithAggregatesInput = {
    AND?: TemplateSuratScalarWhereWithAggregatesInput | TemplateSuratScalarWhereWithAggregatesInput[]
    OR?: TemplateSuratScalarWhereWithAggregatesInput[]
    NOT?: TemplateSuratScalarWhereWithAggregatesInput | TemplateSuratScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateSurat"> | string
    judul?: StringWithAggregatesFilter<"TemplateSurat"> | string
    terakhirDiubah?: DateTimeWithAggregatesFilter<"TemplateSurat"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TemplateSurat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateSurat"> | Date | string
  }

  export type PengajuanSuratWhereInput = {
    AND?: PengajuanSuratWhereInput | PengajuanSuratWhereInput[]
    OR?: PengajuanSuratWhereInput[]
    NOT?: PengajuanSuratWhereInput | PengajuanSuratWhereInput[]
    id?: IntFilter<"PengajuanSurat"> | number
    nama_lengkap?: StringFilter<"PengajuanSurat"> | string
    no_nik?: StringFilter<"PengajuanSurat"> | string
    no_kk?: StringFilter<"PengajuanSurat"> | string
    alamat?: StringFilter<"PengajuanSurat"> | string
    keterangan?: StringFilter<"PengajuanSurat"> | string
    jenis_surat?: StringFilter<"PengajuanSurat"> | string
    file_ktp?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_kk?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_pengantar_rtrw?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_surat_permohonan?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_izin_usaha?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_pas_foto?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_pernyataan_tm?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_rekening_listrik?: StringNullableFilter<"PengajuanSurat"> | string | null
    status?: StringFilter<"PengajuanSurat"> | string
    no_pengajuan?: StringNullableFilter<"PengajuanSurat"> | string | null
    tanggal_pengajuan?: DateTimeFilter<"PengajuanSurat"> | Date | string
    tanggal_selesai?: DateTimeNullableFilter<"PengajuanSurat"> | Date | string | null
    createdAt?: DateTimeFilter<"PengajuanSurat"> | Date | string
  }

  export type PengajuanSuratOrderByWithRelationInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    keterangan?: SortOrder
    jenis_surat?: SortOrder
    file_ktp?: SortOrderInput | SortOrder
    file_kk?: SortOrderInput | SortOrder
    file_pengantar_rtrw?: SortOrderInput | SortOrder
    file_surat_permohonan?: SortOrderInput | SortOrder
    file_izin_usaha?: SortOrderInput | SortOrder
    file_pas_foto?: SortOrderInput | SortOrder
    file_pernyataan_tm?: SortOrderInput | SortOrder
    file_rekening_listrik?: SortOrderInput | SortOrder
    status?: SortOrder
    no_pengajuan?: SortOrderInput | SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_selesai?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PengajuanSuratWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PengajuanSuratWhereInput | PengajuanSuratWhereInput[]
    OR?: PengajuanSuratWhereInput[]
    NOT?: PengajuanSuratWhereInput | PengajuanSuratWhereInput[]
    nama_lengkap?: StringFilter<"PengajuanSurat"> | string
    no_nik?: StringFilter<"PengajuanSurat"> | string
    no_kk?: StringFilter<"PengajuanSurat"> | string
    alamat?: StringFilter<"PengajuanSurat"> | string
    keterangan?: StringFilter<"PengajuanSurat"> | string
    jenis_surat?: StringFilter<"PengajuanSurat"> | string
    file_ktp?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_kk?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_pengantar_rtrw?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_surat_permohonan?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_izin_usaha?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_pas_foto?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_pernyataan_tm?: StringNullableFilter<"PengajuanSurat"> | string | null
    file_rekening_listrik?: StringNullableFilter<"PengajuanSurat"> | string | null
    status?: StringFilter<"PengajuanSurat"> | string
    no_pengajuan?: StringNullableFilter<"PengajuanSurat"> | string | null
    tanggal_pengajuan?: DateTimeFilter<"PengajuanSurat"> | Date | string
    tanggal_selesai?: DateTimeNullableFilter<"PengajuanSurat"> | Date | string | null
    createdAt?: DateTimeFilter<"PengajuanSurat"> | Date | string
  }, "id">

  export type PengajuanSuratOrderByWithAggregationInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    keterangan?: SortOrder
    jenis_surat?: SortOrder
    file_ktp?: SortOrderInput | SortOrder
    file_kk?: SortOrderInput | SortOrder
    file_pengantar_rtrw?: SortOrderInput | SortOrder
    file_surat_permohonan?: SortOrderInput | SortOrder
    file_izin_usaha?: SortOrderInput | SortOrder
    file_pas_foto?: SortOrderInput | SortOrder
    file_pernyataan_tm?: SortOrderInput | SortOrder
    file_rekening_listrik?: SortOrderInput | SortOrder
    status?: SortOrder
    no_pengajuan?: SortOrderInput | SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_selesai?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PengajuanSuratCountOrderByAggregateInput
    _avg?: PengajuanSuratAvgOrderByAggregateInput
    _max?: PengajuanSuratMaxOrderByAggregateInput
    _min?: PengajuanSuratMinOrderByAggregateInput
    _sum?: PengajuanSuratSumOrderByAggregateInput
  }

  export type PengajuanSuratScalarWhereWithAggregatesInput = {
    AND?: PengajuanSuratScalarWhereWithAggregatesInput | PengajuanSuratScalarWhereWithAggregatesInput[]
    OR?: PengajuanSuratScalarWhereWithAggregatesInput[]
    NOT?: PengajuanSuratScalarWhereWithAggregatesInput | PengajuanSuratScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PengajuanSurat"> | number
    nama_lengkap?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    no_nik?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    no_kk?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    alamat?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    keterangan?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    jenis_surat?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    file_ktp?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_kk?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_pengantar_rtrw?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_surat_permohonan?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_izin_usaha?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_pas_foto?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_pernyataan_tm?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    file_rekening_listrik?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    status?: StringWithAggregatesFilter<"PengajuanSurat"> | string
    no_pengajuan?: StringNullableWithAggregatesFilter<"PengajuanSurat"> | string | null
    tanggal_pengajuan?: DateTimeWithAggregatesFilter<"PengajuanSurat"> | Date | string
    tanggal_selesai?: DateTimeNullableWithAggregatesFilter<"PengajuanSurat"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PengajuanSurat"> | Date | string
  }

  export type WargaWhereInput = {
    AND?: WargaWhereInput | WargaWhereInput[]
    OR?: WargaWhereInput[]
    NOT?: WargaWhereInput | WargaWhereInput[]
    id?: IntFilter<"Warga"> | number
    nama_lengkap?: StringFilter<"Warga"> | string
    no_nik?: StringFilter<"Warga"> | string
    no_kk?: StringFilter<"Warga"> | string
    alamat?: StringFilter<"Warga"> | string
    createdAt?: DateTimeFilter<"Warga"> | Date | string
    updatedAt?: DateTimeFilter<"Warga"> | Date | string
  }

  export type WargaOrderByWithRelationInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WargaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    no_nik?: string
    AND?: WargaWhereInput | WargaWhereInput[]
    OR?: WargaWhereInput[]
    NOT?: WargaWhereInput | WargaWhereInput[]
    nama_lengkap?: StringFilter<"Warga"> | string
    no_kk?: StringFilter<"Warga"> | string
    alamat?: StringFilter<"Warga"> | string
    createdAt?: DateTimeFilter<"Warga"> | Date | string
    updatedAt?: DateTimeFilter<"Warga"> | Date | string
  }, "id" | "no_nik">

  export type WargaOrderByWithAggregationInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WargaCountOrderByAggregateInput
    _avg?: WargaAvgOrderByAggregateInput
    _max?: WargaMaxOrderByAggregateInput
    _min?: WargaMinOrderByAggregateInput
    _sum?: WargaSumOrderByAggregateInput
  }

  export type WargaScalarWhereWithAggregatesInput = {
    AND?: WargaScalarWhereWithAggregatesInput | WargaScalarWhereWithAggregatesInput[]
    OR?: WargaScalarWhereWithAggregatesInput[]
    NOT?: WargaScalarWhereWithAggregatesInput | WargaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warga"> | number
    nama_lengkap?: StringWithAggregatesFilter<"Warga"> | string
    no_nik?: StringWithAggregatesFilter<"Warga"> | string
    no_kk?: StringWithAggregatesFilter<"Warga"> | string
    alamat?: StringWithAggregatesFilter<"Warga"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warga"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warga"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type TestingWhereInput = {
    AND?: TestingWhereInput | TestingWhereInput[]
    OR?: TestingWhereInput[]
    NOT?: TestingWhereInput | TestingWhereInput[]
    id?: IntFilter<"Testing"> | number
    nama?: StringFilter<"Testing"> | string
    status?: StringFilter<"Testing"> | string
    createdAt?: DateTimeFilter<"Testing"> | Date | string
  }

  export type TestingOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TestingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestingWhereInput | TestingWhereInput[]
    OR?: TestingWhereInput[]
    NOT?: TestingWhereInput | TestingWhereInput[]
    nama?: StringFilter<"Testing"> | string
    status?: StringFilter<"Testing"> | string
    createdAt?: DateTimeFilter<"Testing"> | Date | string
  }, "id">

  export type TestingOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TestingCountOrderByAggregateInput
    _avg?: TestingAvgOrderByAggregateInput
    _max?: TestingMaxOrderByAggregateInput
    _min?: TestingMinOrderByAggregateInput
    _sum?: TestingSumOrderByAggregateInput
  }

  export type TestingScalarWhereWithAggregatesInput = {
    AND?: TestingScalarWhereWithAggregatesInput | TestingScalarWhereWithAggregatesInput[]
    OR?: TestingScalarWhereWithAggregatesInput[]
    NOT?: TestingScalarWhereWithAggregatesInput | TestingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Testing"> | number
    nama?: StringWithAggregatesFilter<"Testing"> | string
    status?: StringWithAggregatesFilter<"Testing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Testing"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateSuratCreateInput = {
    id?: string
    judul: string
    terakhirDiubah: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateSuratUncheckedCreateInput = {
    id?: string
    judul: string
    terakhirDiubah: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateSuratUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    terakhirDiubah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateSuratUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    terakhirDiubah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateSuratCreateManyInput = {
    id?: string
    judul: string
    terakhirDiubah: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateSuratUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    terakhirDiubah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateSuratUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    terakhirDiubah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengajuanSuratCreateInput = {
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    keterangan: string
    jenis_surat: string
    file_ktp?: string | null
    file_kk?: string | null
    file_pengantar_rtrw?: string | null
    file_surat_permohonan?: string | null
    file_izin_usaha?: string | null
    file_pas_foto?: string | null
    file_pernyataan_tm?: string | null
    file_rekening_listrik?: string | null
    status?: string
    no_pengajuan?: string | null
    tanggal_pengajuan?: Date | string
    tanggal_selesai?: Date | string | null
    createdAt?: Date | string
  }

  export type PengajuanSuratUncheckedCreateInput = {
    id?: number
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    keterangan: string
    jenis_surat: string
    file_ktp?: string | null
    file_kk?: string | null
    file_pengantar_rtrw?: string | null
    file_surat_permohonan?: string | null
    file_izin_usaha?: string | null
    file_pas_foto?: string | null
    file_pernyataan_tm?: string | null
    file_rekening_listrik?: string | null
    status?: string
    no_pengajuan?: string | null
    tanggal_pengajuan?: Date | string
    tanggal_selesai?: Date | string | null
    createdAt?: Date | string
  }

  export type PengajuanSuratUpdateInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    jenis_surat?: StringFieldUpdateOperationsInput | string
    file_ktp?: NullableStringFieldUpdateOperationsInput | string | null
    file_kk?: NullableStringFieldUpdateOperationsInput | string | null
    file_pengantar_rtrw?: NullableStringFieldUpdateOperationsInput | string | null
    file_surat_permohonan?: NullableStringFieldUpdateOperationsInput | string | null
    file_izin_usaha?: NullableStringFieldUpdateOperationsInput | string | null
    file_pas_foto?: NullableStringFieldUpdateOperationsInput | string | null
    file_pernyataan_tm?: NullableStringFieldUpdateOperationsInput | string | null
    file_rekening_listrik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    no_pengajuan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengajuanSuratUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    jenis_surat?: StringFieldUpdateOperationsInput | string
    file_ktp?: NullableStringFieldUpdateOperationsInput | string | null
    file_kk?: NullableStringFieldUpdateOperationsInput | string | null
    file_pengantar_rtrw?: NullableStringFieldUpdateOperationsInput | string | null
    file_surat_permohonan?: NullableStringFieldUpdateOperationsInput | string | null
    file_izin_usaha?: NullableStringFieldUpdateOperationsInput | string | null
    file_pas_foto?: NullableStringFieldUpdateOperationsInput | string | null
    file_pernyataan_tm?: NullableStringFieldUpdateOperationsInput | string | null
    file_rekening_listrik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    no_pengajuan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengajuanSuratCreateManyInput = {
    id?: number
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    keterangan: string
    jenis_surat: string
    file_ktp?: string | null
    file_kk?: string | null
    file_pengantar_rtrw?: string | null
    file_surat_permohonan?: string | null
    file_izin_usaha?: string | null
    file_pas_foto?: string | null
    file_pernyataan_tm?: string | null
    file_rekening_listrik?: string | null
    status?: string
    no_pengajuan?: string | null
    tanggal_pengajuan?: Date | string
    tanggal_selesai?: Date | string | null
    createdAt?: Date | string
  }

  export type PengajuanSuratUpdateManyMutationInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    jenis_surat?: StringFieldUpdateOperationsInput | string
    file_ktp?: NullableStringFieldUpdateOperationsInput | string | null
    file_kk?: NullableStringFieldUpdateOperationsInput | string | null
    file_pengantar_rtrw?: NullableStringFieldUpdateOperationsInput | string | null
    file_surat_permohonan?: NullableStringFieldUpdateOperationsInput | string | null
    file_izin_usaha?: NullableStringFieldUpdateOperationsInput | string | null
    file_pas_foto?: NullableStringFieldUpdateOperationsInput | string | null
    file_pernyataan_tm?: NullableStringFieldUpdateOperationsInput | string | null
    file_rekening_listrik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    no_pengajuan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengajuanSuratUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    jenis_surat?: StringFieldUpdateOperationsInput | string
    file_ktp?: NullableStringFieldUpdateOperationsInput | string | null
    file_kk?: NullableStringFieldUpdateOperationsInput | string | null
    file_pengantar_rtrw?: NullableStringFieldUpdateOperationsInput | string | null
    file_surat_permohonan?: NullableStringFieldUpdateOperationsInput | string | null
    file_izin_usaha?: NullableStringFieldUpdateOperationsInput | string | null
    file_pas_foto?: NullableStringFieldUpdateOperationsInput | string | null
    file_pernyataan_tm?: NullableStringFieldUpdateOperationsInput | string | null
    file_rekening_listrik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    no_pengajuan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WargaCreateInput = {
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WargaUncheckedCreateInput = {
    id?: number
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WargaUpdateInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WargaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WargaCreateManyInput = {
    id?: number
    nama_lengkap: string
    no_nik: string
    no_kk: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WargaUpdateManyMutationInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WargaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_nik?: StringFieldUpdateOperationsInput | string
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    email: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TestingCreateInput = {
    nama: string
    status?: string
    createdAt?: Date | string
  }

  export type TestingUncheckedCreateInput = {
    id?: number
    nama: string
    status?: string
    createdAt?: Date | string
  }

  export type TestingUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestingCreateManyInput = {
    id?: number
    nama: string
    status?: string
    createdAt?: Date | string
  }

  export type TestingUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TemplateSuratCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    terakhirDiubah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateSuratMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    terakhirDiubah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateSuratMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    terakhirDiubah?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PengajuanSuratCountOrderByAggregateInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    keterangan?: SortOrder
    jenis_surat?: SortOrder
    file_ktp?: SortOrder
    file_kk?: SortOrder
    file_pengantar_rtrw?: SortOrder
    file_surat_permohonan?: SortOrder
    file_izin_usaha?: SortOrder
    file_pas_foto?: SortOrder
    file_pernyataan_tm?: SortOrder
    file_rekening_listrik?: SortOrder
    status?: SortOrder
    no_pengajuan?: SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_selesai?: SortOrder
    createdAt?: SortOrder
  }

  export type PengajuanSuratAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PengajuanSuratMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    keterangan?: SortOrder
    jenis_surat?: SortOrder
    file_ktp?: SortOrder
    file_kk?: SortOrder
    file_pengantar_rtrw?: SortOrder
    file_surat_permohonan?: SortOrder
    file_izin_usaha?: SortOrder
    file_pas_foto?: SortOrder
    file_pernyataan_tm?: SortOrder
    file_rekening_listrik?: SortOrder
    status?: SortOrder
    no_pengajuan?: SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_selesai?: SortOrder
    createdAt?: SortOrder
  }

  export type PengajuanSuratMinOrderByAggregateInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    keterangan?: SortOrder
    jenis_surat?: SortOrder
    file_ktp?: SortOrder
    file_kk?: SortOrder
    file_pengantar_rtrw?: SortOrder
    file_surat_permohonan?: SortOrder
    file_izin_usaha?: SortOrder
    file_pas_foto?: SortOrder
    file_pernyataan_tm?: SortOrder
    file_rekening_listrik?: SortOrder
    status?: SortOrder
    no_pengajuan?: SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_selesai?: SortOrder
    createdAt?: SortOrder
  }

  export type PengajuanSuratSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WargaCountOrderByAggregateInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WargaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WargaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WargaMinOrderByAggregateInput = {
    id?: SortOrder
    nama_lengkap?: SortOrder
    no_nik?: SortOrder
    no_kk?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WargaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestingCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TestingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestingMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TestingMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TestingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatMember
 * 
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model SeenMessage
 * 
 */
export type SeenMessage = $Result.DefaultSelection<Prisma.$SeenMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ON_VACATION: 'ON_VACATION',
  AT_WORK: 'AT_WORK',
  IN_MEETING: 'IN_MEETING',
  AVAILABLE: 'AVAILABLE',
  AWAY: 'AWAY',
  BUSY: 'BUSY',
  DO_NOT_DISTURB: 'DO_NOT_DISTURB',
  AT_GYM: 'AT_GYM',
  AT_HOME: 'AT_HOME',
  TRAVELING: 'TRAVELING',
  SLEEPING: 'SLEEPING',
  IN_CLASS: 'IN_CLASS',
  STUDYING: 'STUDYING',
  AT_COFFEE_SHOP: 'AT_COFFEE_SHOP',
  OUT_FOR_LUNCH: 'OUT_FOR_LUNCH',
  OFFLINE: 'OFFLINE',
  AT_DOCTOR: 'AT_DOCTOR',
  ON_CALL: 'ON_CALL',
  IN_CONFERENCE: 'IN_CONFERENCE',
  TAKING_BREAK: 'TAKING_BREAK',
  ON_TRIP: 'ON_TRIP',
  AT_PARTY: 'AT_PARTY',
  IN_TRANSIT: 'IN_TRANSIT',
  ON_HOLIDAY: 'ON_HOLIDAY',
  WORKING_REMOTELY: 'WORKING_REMOTELY'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ChatType: {
  private: 'private',
  group: 'group',
  channel: 'channel'
};

export type ChatType = (typeof ChatType)[keyof typeof ChatType]


export const Role: {
  owner: 'owner',
  admin: 'admin',
  member: 'member'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MessageType: {
  text: 'text',
  image: 'image',
  video: 'video',
  audio: 'audio',
  file: 'file',
  sticker: 'sticker',
  system: 'system'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ChatType = $Enums.ChatType

export const ChatType: typeof $Enums.ChatType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

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
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMember`: Exposes CRUD operations for the **ChatMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMembers
    * const chatMembers = await prisma.chatMember.findMany()
    * ```
    */
  get chatMember(): Prisma.ChatMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seenMessage`: Exposes CRUD operations for the **SeenMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeenMessages
    * const seenMessages = await prisma.seenMessage.findMany()
    * ```
    */
  get seenMessage(): Prisma.SeenMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Chat: 'Chat',
    ChatMember: 'ChatMember',
    Message: 'Message',
    Reaction: 'Reaction',
    SeenMessage: 'SeenMessage'
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
      modelProps: "user" | "chat" | "chatMember" | "message" | "reaction" | "seenMessage"
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
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatMember: {
        payload: Prisma.$ChatMemberPayload<ExtArgs>
        fields: Prisma.ChatMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findMany: {
            args: Prisma.ChatMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          create: {
            args: Prisma.ChatMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          createMany: {
            args: Prisma.ChatMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          update: {
            args: Prisma.ChatMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMember>
          }
          groupBy: {
            args: Prisma.ChatMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      SeenMessage: {
        payload: Prisma.$SeenMessagePayload<ExtArgs>
        fields: Prisma.SeenMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeenMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeenMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          findFirst: {
            args: Prisma.SeenMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeenMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          findMany: {
            args: Prisma.SeenMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>[]
          }
          create: {
            args: Prisma.SeenMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          createMany: {
            args: Prisma.SeenMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeenMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>[]
          }
          delete: {
            args: Prisma.SeenMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          update: {
            args: Prisma.SeenMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          deleteMany: {
            args: Prisma.SeenMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeenMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeenMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>[]
          }
          upsert: {
            args: Prisma.SeenMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          aggregate: {
            args: Prisma.SeenMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeenMessage>
          }
          groupBy: {
            args: Prisma.SeenMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeenMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeenMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SeenMessageCountAggregateOutputType> | number
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
    chat?: ChatOmit
    chatMember?: ChatMemberOmit
    message?: MessageOmit
    reaction?: ReactionOmit
    seenMessage?: SeenMessageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chats: number
    ownedChats: number
    ChatMember: number
    Message: number
    Reaction: number
    SeenMessage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    ownedChats?: boolean | UserCountOutputTypeCountOwnedChatsArgs
    ChatMember?: boolean | UserCountOutputTypeCountChatMemberArgs
    Message?: boolean | UserCountOutputTypeCountMessageArgs
    Reaction?: boolean | UserCountOutputTypeCountReactionArgs
    SeenMessage?: boolean | UserCountOutputTypeCountSeenMessageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeenMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeenMessageWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    users: number
    messages: number
    members: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ChatCountOutputTypeCountUsersArgs
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    members?: boolean | ChatCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    replies: number
    reactions: number
    seenBy: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | MessageCountOutputTypeCountRepliesArgs
    reactions?: boolean | MessageCountOutputTypeCountReactionsArgs
    seenBy?: boolean | MessageCountOutputTypeCountSeenByArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountSeenByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeenMessageWhereInput
  }


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
    stars: number | null
  }

  export type UserSumAggregateOutputType = {
    stars: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phomeNumber: string | null
    profileImage: string | null
    lastActive: Date | null
    ghostMode: boolean | null
    bio: string | null
    stars: number | null
    status: string | null
    isVerified: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phomeNumber: string | null
    profileImage: string | null
    lastActive: Date | null
    ghostMode: boolean | null
    bio: string | null
    stars: number | null
    status: string | null
    isVerified: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstName: number
    lastName: number
    email: number
    phomeNumber: number
    profileImage: number
    lastActive: number
    ghostMode: number
    bio: number
    stars: number
    status: number
    isVerified: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    stars?: true
  }

  export type UserSumAggregateInputType = {
    stars?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    phomeNumber?: true
    profileImage?: true
    lastActive?: true
    ghostMode?: true
    bio?: true
    stars?: true
    status?: true
    isVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    phomeNumber?: true
    profileImage?: true
    lastActive?: true
    ghostMode?: true
    bio?: true
    stars?: true
    status?: true
    isVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    phomeNumber?: true
    profileImage?: true
    lastActive?: true
    ghostMode?: true
    bio?: true
    stars?: true
    status?: true
    isVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    username: string
    firstName: string | null
    lastName: string | null
    email: string | null
    phomeNumber: string | null
    profileImage: string | null
    lastActive: Date | null
    ghostMode: boolean
    bio: string | null
    stars: number
    status: string | null
    isVerified: boolean
    password: string
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phomeNumber?: boolean
    profileImage?: boolean
    lastActive?: boolean
    ghostMode?: boolean
    bio?: boolean
    stars?: boolean
    status?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chats?: boolean | User$chatsArgs<ExtArgs>
    ownedChats?: boolean | User$ownedChatsArgs<ExtArgs>
    ChatMember?: boolean | User$ChatMemberArgs<ExtArgs>
    Message?: boolean | User$MessageArgs<ExtArgs>
    Reaction?: boolean | User$ReactionArgs<ExtArgs>
    SeenMessage?: boolean | User$SeenMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phomeNumber?: boolean
    profileImage?: boolean
    lastActive?: boolean
    ghostMode?: boolean
    bio?: boolean
    stars?: boolean
    status?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phomeNumber?: boolean
    profileImage?: boolean
    lastActive?: boolean
    ghostMode?: boolean
    bio?: boolean
    stars?: boolean
    status?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phomeNumber?: boolean
    profileImage?: boolean
    lastActive?: boolean
    ghostMode?: boolean
    bio?: boolean
    stars?: boolean
    status?: boolean
    isVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "firstName" | "lastName" | "email" | "phomeNumber" | "profileImage" | "lastActive" | "ghostMode" | "bio" | "stars" | "status" | "isVerified" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | User$chatsArgs<ExtArgs>
    ownedChats?: boolean | User$ownedChatsArgs<ExtArgs>
    ChatMember?: boolean | User$ChatMemberArgs<ExtArgs>
    Message?: boolean | User$MessageArgs<ExtArgs>
    Reaction?: boolean | User$ReactionArgs<ExtArgs>
    SeenMessage?: boolean | User$SeenMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chats: Prisma.$ChatPayload<ExtArgs>[]
      ownedChats: Prisma.$ChatPayload<ExtArgs>[]
      ChatMember: Prisma.$ChatMemberPayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
      Reaction: Prisma.$ReactionPayload<ExtArgs>[]
      SeenMessage: Prisma.$SeenMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      firstName: string | null
      lastName: string | null
      email: string | null
      phomeNumber: string | null
      profileImage: string | null
      lastActive: Date | null
      ghostMode: boolean
      bio: string | null
      stars: number
      status: string | null
      isVerified: boolean
      password: string
      createdAt: Date
      updatedAt: Date
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
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedChats<T extends User$ownedChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMember<T extends User$ChatMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Message<T extends User$MessageArgs<ExtArgs> = {}>(args?: Subset<T, User$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reaction<T extends User$ReactionArgs<ExtArgs> = {}>(args?: Subset<T, User$ReactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SeenMessage<T extends User$SeenMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$SeenMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phomeNumber: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly ghostMode: FieldRef<"User", 'Boolean'>
    readonly bio: FieldRef<"User", 'String'>
    readonly stars: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.ownedChats
   */
  export type User$ownedChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.ChatMember
   */
  export type User$ChatMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * User.Message
   */
  export type User$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.Reaction
   */
  export type User$ReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.SeenMessage
   */
  export type User$SeenMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    where?: SeenMessageWhereInput
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    cursor?: SeenMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    type: $Enums.ChatType | null
    title: string | null
    description: string | null
    chatImage: string | null
    handle: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
    inviteLink: string | null
    pinnedMessageId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ChatType | null
    title: string | null
    description: string | null
    chatImage: string | null
    handle: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
    inviteLink: string | null
    pinnedMessageId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    chatImage: number
    handle: number
    ownerId: number
    createdAt: number
    updatedAt: number
    isPublic: number
    inviteLink: number
    pinnedMessageId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    chatImage?: true
    handle?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    inviteLink?: true
    pinnedMessageId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    chatImage?: true
    handle?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    inviteLink?: true
    pinnedMessageId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    chatImage?: true
    handle?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    inviteLink?: true
    pinnedMessageId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    type: $Enums.ChatType
    title: string | null
    description: string | null
    chatImage: string | null
    handle: string | null
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    isPublic: boolean
    inviteLink: string | null
    pinnedMessageId: string | null
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    chatImage?: boolean
    handle?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    inviteLink?: boolean
    pinnedMessageId?: boolean
    owner?: boolean | Chat$ownerArgs<ExtArgs>
    users?: boolean | Chat$usersArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    chatImage?: boolean
    handle?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    inviteLink?: boolean
    pinnedMessageId?: boolean
    owner?: boolean | Chat$ownerArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    chatImage?: boolean
    handle?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    inviteLink?: boolean
    pinnedMessageId?: boolean
    owner?: boolean | Chat$ownerArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    chatImage?: boolean
    handle?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    inviteLink?: boolean
    pinnedMessageId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "chatImage" | "handle" | "ownerId" | "createdAt" | "updatedAt" | "isPublic" | "inviteLink" | "pinnedMessageId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Chat$ownerArgs<ExtArgs>
    users?: boolean | Chat$usersArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Chat$ownerArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Chat$ownerArgs<ExtArgs>
    pinnedMessage?: boolean | Chat$pinnedMessageArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      pinnedMessage: Prisma.$MessagePayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
      members: Prisma.$ChatMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ChatType
      title: string | null
      description: string | null
      chatImage: string | null
      handle: string | null
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
      isPublic: boolean
      inviteLink: string | null
      pinnedMessageId: string | null
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Chat$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Chat$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Chat$usersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pinnedMessage<T extends Chat$pinnedMessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$pinnedMessageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Chat$membersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly type: FieldRef<"Chat", 'ChatType'>
    readonly title: FieldRef<"Chat", 'String'>
    readonly description: FieldRef<"Chat", 'String'>
    readonly chatImage: FieldRef<"Chat", 'String'>
    readonly handle: FieldRef<"Chat", 'String'>
    readonly ownerId: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
    readonly isPublic: FieldRef<"Chat", 'Boolean'>
    readonly inviteLink: FieldRef<"Chat", 'String'>
    readonly pinnedMessageId: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.owner
   */
  export type Chat$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Chat.users
   */
  export type Chat$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Chat.pinnedMessage
   */
  export type Chat$pinnedMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat.members
   */
  export type Chat$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatMember
   */

  export type AggregateChatMember = {
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  export type ChatMemberMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    userId: string | null
    role: $Enums.Role | null
    isMuted: boolean | null
    joinedAt: Date | null
  }

  export type ChatMemberMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    userId: string | null
    role: $Enums.Role | null
    isMuted: boolean | null
    joinedAt: Date | null
  }

  export type ChatMemberCountAggregateOutputType = {
    id: number
    chatId: number
    userId: number
    role: number
    isMuted: number
    joinedAt: number
    _all: number
  }


  export type ChatMemberMinAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    role?: true
    isMuted?: true
    joinedAt?: true
  }

  export type ChatMemberMaxAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    role?: true
    isMuted?: true
    joinedAt?: true
  }

  export type ChatMemberCountAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    role?: true
    isMuted?: true
    joinedAt?: true
    _all?: true
  }

  export type ChatMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMember to aggregate.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMembers
    **/
    _count?: true | ChatMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMemberMaxAggregateInputType
  }

  export type GetChatMemberAggregateType<T extends ChatMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMember[P]>
      : GetScalarType<T[P], AggregateChatMember[P]>
  }




  export type ChatMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithAggregationInput | ChatMemberOrderByWithAggregationInput[]
    by: ChatMemberScalarFieldEnum[] | ChatMemberScalarFieldEnum
    having?: ChatMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMemberCountAggregateInputType | true
    _min?: ChatMemberMinAggregateInputType
    _max?: ChatMemberMaxAggregateInputType
  }

  export type ChatMemberGroupByOutputType = {
    id: string
    chatId: string
    userId: string
    role: $Enums.Role
    isMuted: boolean
    joinedAt: Date
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  type GetChatMemberGroupByPayload<T extends ChatMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    isMuted?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    isMuted?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    isMuted?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectScalar = {
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    isMuted?: boolean
    joinedAt?: boolean
  }

  export type ChatMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "userId" | "role" | "isMuted" | "joinedAt", ExtArgs["result"]["chatMember"]>
  export type ChatMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMember"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      userId: string
      role: $Enums.Role
      isMuted: boolean
      joinedAt: Date
    }, ExtArgs["result"]["chatMember"]>
    composites: {}
  }

  type ChatMemberGetPayload<S extends boolean | null | undefined | ChatMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatMemberPayload, S>

  type ChatMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMemberCountAggregateInputType | true
    }

  export interface ChatMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMember'], meta: { name: 'ChatMember' } }
    /**
     * Find zero or one ChatMember that matches the filter.
     * @param {ChatMemberFindUniqueArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMemberFindUniqueArgs>(args: SelectSubset<T, ChatMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMemberFindFirstArgs>(args?: SelectSubset<T, ChatMemberFindFirstArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMembers
     * const chatMembers = await prisma.chatMember.findMany()
     * 
     * // Get first 10 ChatMembers
     * const chatMembers = await prisma.chatMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMemberFindManyArgs>(args?: SelectSubset<T, ChatMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMember.
     * @param {ChatMemberCreateArgs} args - Arguments to create a ChatMember.
     * @example
     * // Create one ChatMember
     * const ChatMember = await prisma.chatMember.create({
     *   data: {
     *     // ... data to create a ChatMember
     *   }
     * })
     * 
     */
    create<T extends ChatMemberCreateArgs>(args: SelectSubset<T, ChatMemberCreateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMembers.
     * @param {ChatMemberCreateManyArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMemberCreateManyArgs>(args?: SelectSubset<T, ChatMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMembers and returns the data saved in the database.
     * @param {ChatMemberCreateManyAndReturnArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMembers and only return the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMember.
     * @param {ChatMemberDeleteArgs} args - Arguments to delete one ChatMember.
     * @example
     * // Delete one ChatMember
     * const ChatMember = await prisma.chatMember.delete({
     *   where: {
     *     // ... filter to delete one ChatMember
     *   }
     * })
     * 
     */
    delete<T extends ChatMemberDeleteArgs>(args: SelectSubset<T, ChatMemberDeleteArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMember.
     * @param {ChatMemberUpdateArgs} args - Arguments to update one ChatMember.
     * @example
     * // Update one ChatMember
     * const chatMember = await prisma.chatMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMemberUpdateArgs>(args: SelectSubset<T, ChatMemberUpdateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMembers.
     * @param {ChatMemberDeleteManyArgs} args - Arguments to filter ChatMembers to delete.
     * @example
     * // Delete a few ChatMembers
     * const { count } = await prisma.chatMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMemberDeleteManyArgs>(args?: SelectSubset<T, ChatMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMemberUpdateManyArgs>(args: SelectSubset<T, ChatMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers and returns the data updated in the database.
     * @param {ChatMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatMembers.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMembers and only return the `id`
     * const chatMemberWithIdOnly = await prisma.chatMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMember.
     * @param {ChatMemberUpsertArgs} args - Arguments to update or create a ChatMember.
     * @example
     * // Update or create a ChatMember
     * const chatMember = await prisma.chatMember.upsert({
     *   create: {
     *     // ... data to create a ChatMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMember we want to update
     *   }
     * })
     */
    upsert<T extends ChatMemberUpsertArgs>(args: SelectSubset<T, ChatMemberUpsertArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberCountArgs} args - Arguments to filter ChatMembers to count.
     * @example
     * // Count the number of ChatMembers
     * const count = await prisma.chatMember.count({
     *   where: {
     *     // ... the filter for the ChatMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatMemberCountArgs>(
      args?: Subset<T, ChatMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMemberAggregateArgs>(args: Subset<T, ChatMemberAggregateArgs>): Prisma.PrismaPromise<GetChatMemberAggregateType<T>>

    /**
     * Group by ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberGroupByArgs} args - Group by arguments.
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
      T extends ChatMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMember model
   */
  readonly fields: ChatMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMember model
   */
  interface ChatMemberFieldRefs {
    readonly id: FieldRef<"ChatMember", 'String'>
    readonly chatId: FieldRef<"ChatMember", 'String'>
    readonly userId: FieldRef<"ChatMember", 'String'>
    readonly role: FieldRef<"ChatMember", 'Role'>
    readonly isMuted: FieldRef<"ChatMember", 'Boolean'>
    readonly joinedAt: FieldRef<"ChatMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMember findUnique
   */
  export type ChatMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findUniqueOrThrow
   */
  export type ChatMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findFirst
   */
  export type ChatMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findFirstOrThrow
   */
  export type ChatMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findMany
   */
  export type ChatMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember create
   */
  export type ChatMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMember.
     */
    data: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
  }

  /**
   * ChatMember createMany
   */
  export type ChatMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMember createManyAndReturn
   */
  export type ChatMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember update
   */
  export type ChatMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMember.
     */
    data: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatMember to update.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember updateMany
   */
  export type ChatMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
  }

  /**
   * ChatMember updateManyAndReturn
   */
  export type ChatMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember upsert
   */
  export type ChatMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMember to update in case it exists.
     */
    where: ChatMemberWhereUniqueInput
    /**
     * In case the ChatMember found by the `where` argument doesn't exist, create a new ChatMember with this data.
     */
    create: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
    /**
     * In case the ChatMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
  }

  /**
   * ChatMember delete
   */
  export type ChatMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatMember to delete.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember deleteMany
   */
  export type ChatMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to delete
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatMember without action
   */
  export type ChatMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    senderId: string | null
    content: string | null
    messageType: $Enums.MessageType | null
    mediaThumbnail: string | null
    repliedToId: string | null
    isEdited: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    senderId: string | null
    content: string | null
    messageType: $Enums.MessageType | null
    mediaThumbnail: string | null
    repliedToId: string | null
    isEdited: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    senderId: number
    content: number
    messageType: number
    mediaUrls: number
    mediaThumbnail: number
    repliedToId: number
    isEdited: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    content?: true
    messageType?: true
    mediaThumbnail?: true
    repliedToId?: true
    isEdited?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    content?: true
    messageType?: true
    mediaThumbnail?: true
    repliedToId?: true
    isEdited?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    content?: true
    messageType?: true
    mediaUrls?: true
    mediaThumbnail?: true
    repliedToId?: true
    isEdited?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    chatId: string
    senderId: string
    content: string | null
    messageType: $Enums.MessageType
    mediaUrls: string[]
    mediaThumbnail: string | null
    repliedToId: string | null
    isEdited: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    messageType?: boolean
    mediaUrls?: boolean
    mediaThumbnail?: boolean
    repliedToId?: boolean
    isEdited?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    repliedTo?: boolean | Message$repliedToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    seenBy?: boolean | Message$seenByArgs<ExtArgs>
    pinnedByChat?: boolean | Message$pinnedByChatArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    messageType?: boolean
    mediaUrls?: boolean
    mediaThumbnail?: boolean
    repliedToId?: boolean
    isEdited?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    repliedTo?: boolean | Message$repliedToArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    messageType?: boolean
    mediaUrls?: boolean
    mediaThumbnail?: boolean
    repliedToId?: boolean
    isEdited?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    repliedTo?: boolean | Message$repliedToArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    messageType?: boolean
    mediaUrls?: boolean
    mediaThumbnail?: boolean
    repliedToId?: boolean
    isEdited?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "senderId" | "content" | "messageType" | "mediaUrls" | "mediaThumbnail" | "repliedToId" | "isEdited" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    repliedTo?: boolean | Message$repliedToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    seenBy?: boolean | Message$seenByArgs<ExtArgs>
    pinnedByChat?: boolean | Message$pinnedByChatArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    repliedTo?: boolean | Message$repliedToArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    repliedTo?: boolean | Message$repliedToArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      repliedTo: Prisma.$MessagePayload<ExtArgs> | null
      replies: Prisma.$MessagePayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      seenBy: Prisma.$SeenMessagePayload<ExtArgs>[]
      pinnedByChat: Prisma.$ChatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      senderId: string
      content: string | null
      messageType: $Enums.MessageType
      mediaUrls: string[]
      mediaThumbnail: string | null
      repliedToId: string | null
      isEdited: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repliedTo<T extends Message$repliedToArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliedToArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Message$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Message$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Message$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seenBy<T extends Message$seenByArgs<ExtArgs> = {}>(args?: Subset<T, Message$seenByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pinnedByChat<T extends Message$pinnedByChatArgs<ExtArgs> = {}>(args?: Subset<T, Message$pinnedByChatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly messageType: FieldRef<"Message", 'MessageType'>
    readonly mediaUrls: FieldRef<"Message", 'String[]'>
    readonly mediaThumbnail: FieldRef<"Message", 'String'>
    readonly repliedToId: FieldRef<"Message", 'String'>
    readonly isEdited: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.repliedTo
   */
  export type Message$repliedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Message.replies
   */
  export type Message$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message.reactions
   */
  export type Message$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Message.seenBy
   */
  export type Message$seenByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    where?: SeenMessageWhereInput
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    cursor?: SeenMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * Message.pinnedByChat
   */
  export type Message$pinnedByChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    emoji: string | null
    userId: string | null
    messageId: string | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    emoji: string | null
    userId: string | null
    messageId: string | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    emoji: number
    userId: number
    messageId: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    messageId?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    messageId?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    messageId?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    emoji: string
    userId: string
    messageId: string
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    messageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    messageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    messageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    emoji?: boolean
    userId?: boolean
    messageId?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emoji" | "userId" | "messageId", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emoji: string
      userId: string
      messageId: string
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
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
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly emoji: FieldRef<"Reaction", 'String'>
    readonly userId: FieldRef<"Reaction", 'String'>
    readonly messageId: FieldRef<"Reaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model SeenMessage
   */

  export type AggregateSeenMessage = {
    _count: SeenMessageCountAggregateOutputType | null
    _min: SeenMessageMinAggregateOutputType | null
    _max: SeenMessageMaxAggregateOutputType | null
  }

  export type SeenMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    messageId: string | null
    seenAt: Date | null
  }

  export type SeenMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    messageId: string | null
    seenAt: Date | null
  }

  export type SeenMessageCountAggregateOutputType = {
    id: number
    userId: number
    messageId: number
    seenAt: number
    _all: number
  }


  export type SeenMessageMinAggregateInputType = {
    id?: true
    userId?: true
    messageId?: true
    seenAt?: true
  }

  export type SeenMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    messageId?: true
    seenAt?: true
  }

  export type SeenMessageCountAggregateInputType = {
    id?: true
    userId?: true
    messageId?: true
    seenAt?: true
    _all?: true
  }

  export type SeenMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeenMessage to aggregate.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeenMessages
    **/
    _count?: true | SeenMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeenMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeenMessageMaxAggregateInputType
  }

  export type GetSeenMessageAggregateType<T extends SeenMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSeenMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeenMessage[P]>
      : GetScalarType<T[P], AggregateSeenMessage[P]>
  }




  export type SeenMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeenMessageWhereInput
    orderBy?: SeenMessageOrderByWithAggregationInput | SeenMessageOrderByWithAggregationInput[]
    by: SeenMessageScalarFieldEnum[] | SeenMessageScalarFieldEnum
    having?: SeenMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeenMessageCountAggregateInputType | true
    _min?: SeenMessageMinAggregateInputType
    _max?: SeenMessageMaxAggregateInputType
  }

  export type SeenMessageGroupByOutputType = {
    id: string
    userId: string
    messageId: string
    seenAt: Date
    _count: SeenMessageCountAggregateOutputType | null
    _min: SeenMessageMinAggregateOutputType | null
    _max: SeenMessageMaxAggregateOutputType | null
  }

  type GetSeenMessageGroupByPayload<T extends SeenMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeenMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeenMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeenMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SeenMessageGroupByOutputType[P]>
        }
      >
    >


  export type SeenMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    messageId?: boolean
    seenAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seenMessage"]>

  export type SeenMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    messageId?: boolean
    seenAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seenMessage"]>

  export type SeenMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    messageId?: boolean
    seenAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seenMessage"]>

  export type SeenMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    messageId?: boolean
    seenAt?: boolean
  }

  export type SeenMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "messageId" | "seenAt", ExtArgs["result"]["seenMessage"]>
  export type SeenMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type SeenMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type SeenMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $SeenMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeenMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      messageId: string
      seenAt: Date
    }, ExtArgs["result"]["seenMessage"]>
    composites: {}
  }

  type SeenMessageGetPayload<S extends boolean | null | undefined | SeenMessageDefaultArgs> = $Result.GetResult<Prisma.$SeenMessagePayload, S>

  type SeenMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeenMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeenMessageCountAggregateInputType | true
    }

  export interface SeenMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeenMessage'], meta: { name: 'SeenMessage' } }
    /**
     * Find zero or one SeenMessage that matches the filter.
     * @param {SeenMessageFindUniqueArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeenMessageFindUniqueArgs>(args: SelectSubset<T, SeenMessageFindUniqueArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeenMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeenMessageFindUniqueOrThrowArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeenMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SeenMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeenMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageFindFirstArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeenMessageFindFirstArgs>(args?: SelectSubset<T, SeenMessageFindFirstArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeenMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageFindFirstOrThrowArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeenMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SeenMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeenMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeenMessages
     * const seenMessages = await prisma.seenMessage.findMany()
     * 
     * // Get first 10 SeenMessages
     * const seenMessages = await prisma.seenMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seenMessageWithIdOnly = await prisma.seenMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeenMessageFindManyArgs>(args?: SelectSubset<T, SeenMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeenMessage.
     * @param {SeenMessageCreateArgs} args - Arguments to create a SeenMessage.
     * @example
     * // Create one SeenMessage
     * const SeenMessage = await prisma.seenMessage.create({
     *   data: {
     *     // ... data to create a SeenMessage
     *   }
     * })
     * 
     */
    create<T extends SeenMessageCreateArgs>(args: SelectSubset<T, SeenMessageCreateArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeenMessages.
     * @param {SeenMessageCreateManyArgs} args - Arguments to create many SeenMessages.
     * @example
     * // Create many SeenMessages
     * const seenMessage = await prisma.seenMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeenMessageCreateManyArgs>(args?: SelectSubset<T, SeenMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeenMessages and returns the data saved in the database.
     * @param {SeenMessageCreateManyAndReturnArgs} args - Arguments to create many SeenMessages.
     * @example
     * // Create many SeenMessages
     * const seenMessage = await prisma.seenMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeenMessages and only return the `id`
     * const seenMessageWithIdOnly = await prisma.seenMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeenMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SeenMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeenMessage.
     * @param {SeenMessageDeleteArgs} args - Arguments to delete one SeenMessage.
     * @example
     * // Delete one SeenMessage
     * const SeenMessage = await prisma.seenMessage.delete({
     *   where: {
     *     // ... filter to delete one SeenMessage
     *   }
     * })
     * 
     */
    delete<T extends SeenMessageDeleteArgs>(args: SelectSubset<T, SeenMessageDeleteArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeenMessage.
     * @param {SeenMessageUpdateArgs} args - Arguments to update one SeenMessage.
     * @example
     * // Update one SeenMessage
     * const seenMessage = await prisma.seenMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeenMessageUpdateArgs>(args: SelectSubset<T, SeenMessageUpdateArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeenMessages.
     * @param {SeenMessageDeleteManyArgs} args - Arguments to filter SeenMessages to delete.
     * @example
     * // Delete a few SeenMessages
     * const { count } = await prisma.seenMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeenMessageDeleteManyArgs>(args?: SelectSubset<T, SeenMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeenMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeenMessages
     * const seenMessage = await prisma.seenMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeenMessageUpdateManyArgs>(args: SelectSubset<T, SeenMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeenMessages and returns the data updated in the database.
     * @param {SeenMessageUpdateManyAndReturnArgs} args - Arguments to update many SeenMessages.
     * @example
     * // Update many SeenMessages
     * const seenMessage = await prisma.seenMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeenMessages and only return the `id`
     * const seenMessageWithIdOnly = await prisma.seenMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeenMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SeenMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeenMessage.
     * @param {SeenMessageUpsertArgs} args - Arguments to update or create a SeenMessage.
     * @example
     * // Update or create a SeenMessage
     * const seenMessage = await prisma.seenMessage.upsert({
     *   create: {
     *     // ... data to create a SeenMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeenMessage we want to update
     *   }
     * })
     */
    upsert<T extends SeenMessageUpsertArgs>(args: SelectSubset<T, SeenMessageUpsertArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeenMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageCountArgs} args - Arguments to filter SeenMessages to count.
     * @example
     * // Count the number of SeenMessages
     * const count = await prisma.seenMessage.count({
     *   where: {
     *     // ... the filter for the SeenMessages we want to count
     *   }
     * })
    **/
    count<T extends SeenMessageCountArgs>(
      args?: Subset<T, SeenMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeenMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeenMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeenMessageAggregateArgs>(args: Subset<T, SeenMessageAggregateArgs>): Prisma.PrismaPromise<GetSeenMessageAggregateType<T>>

    /**
     * Group by SeenMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageGroupByArgs} args - Group by arguments.
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
      T extends SeenMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeenMessageGroupByArgs['orderBy'] }
        : { orderBy?: SeenMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeenMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeenMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeenMessage model
   */
  readonly fields: SeenMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeenMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeenMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeenMessage model
   */
  interface SeenMessageFieldRefs {
    readonly id: FieldRef<"SeenMessage", 'String'>
    readonly userId: FieldRef<"SeenMessage", 'String'>
    readonly messageId: FieldRef<"SeenMessage", 'String'>
    readonly seenAt: FieldRef<"SeenMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeenMessage findUnique
   */
  export type SeenMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage findUniqueOrThrow
   */
  export type SeenMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage findFirst
   */
  export type SeenMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeenMessages.
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeenMessages.
     */
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * SeenMessage findFirstOrThrow
   */
  export type SeenMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeenMessages.
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeenMessages.
     */
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * SeenMessage findMany
   */
  export type SeenMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessages to fetch.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeenMessages.
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * SeenMessage create
   */
  export type SeenMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SeenMessage.
     */
    data: XOR<SeenMessageCreateInput, SeenMessageUncheckedCreateInput>
  }

  /**
   * SeenMessage createMany
   */
  export type SeenMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeenMessages.
     */
    data: SeenMessageCreateManyInput | SeenMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeenMessage createManyAndReturn
   */
  export type SeenMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SeenMessages.
     */
    data: SeenMessageCreateManyInput | SeenMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeenMessage update
   */
  export type SeenMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SeenMessage.
     */
    data: XOR<SeenMessageUpdateInput, SeenMessageUncheckedUpdateInput>
    /**
     * Choose, which SeenMessage to update.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage updateMany
   */
  export type SeenMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeenMessages.
     */
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyInput>
    /**
     * Filter which SeenMessages to update
     */
    where?: SeenMessageWhereInput
    /**
     * Limit how many SeenMessages to update.
     */
    limit?: number
  }

  /**
   * SeenMessage updateManyAndReturn
   */
  export type SeenMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * The data used to update SeenMessages.
     */
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyInput>
    /**
     * Filter which SeenMessages to update
     */
    where?: SeenMessageWhereInput
    /**
     * Limit how many SeenMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeenMessage upsert
   */
  export type SeenMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SeenMessage to update in case it exists.
     */
    where: SeenMessageWhereUniqueInput
    /**
     * In case the SeenMessage found by the `where` argument doesn't exist, create a new SeenMessage with this data.
     */
    create: XOR<SeenMessageCreateInput, SeenMessageUncheckedCreateInput>
    /**
     * In case the SeenMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeenMessageUpdateInput, SeenMessageUncheckedUpdateInput>
  }

  /**
   * SeenMessage delete
   */
  export type SeenMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter which SeenMessage to delete.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage deleteMany
   */
  export type SeenMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeenMessages to delete
     */
    where?: SeenMessageWhereInput
    /**
     * Limit how many SeenMessages to delete.
     */
    limit?: number
  }

  /**
   * SeenMessage without action
   */
  export type SeenMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
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
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phomeNumber: 'phomeNumber',
    profileImage: 'profileImage',
    lastActive: 'lastActive',
    ghostMode: 'ghostMode',
    bio: 'bio',
    stars: 'stars',
    status: 'status',
    isVerified: 'isVerified',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    chatImage: 'chatImage',
    handle: 'handle',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isPublic: 'isPublic',
    inviteLink: 'inviteLink',
    pinnedMessageId: 'pinnedMessageId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatMemberScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    userId: 'userId',
    role: 'role',
    isMuted: 'isMuted',
    joinedAt: 'joinedAt'
  };

  export type ChatMemberScalarFieldEnum = (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    senderId: 'senderId',
    content: 'content',
    messageType: 'messageType',
    mediaUrls: 'mediaUrls',
    mediaThumbnail: 'mediaThumbnail',
    repliedToId: 'repliedToId',
    isEdited: 'isEdited',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    emoji: 'emoji',
    userId: 'userId',
    messageId: 'messageId'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const SeenMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    messageId: 'messageId',
    seenAt: 'seenAt'
  };

  export type SeenMessageScalarFieldEnum = (typeof SeenMessageScalarFieldEnum)[keyof typeof SeenMessageScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ChatType'
   */
  export type EnumChatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatType'>
    


  /**
   * Reference to a field of type 'ChatType[]'
   */
  export type ListEnumChatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatType[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phomeNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    ghostMode?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    stars?: IntFilter<"User"> | number
    status?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chats?: ChatListRelationFilter
    ownedChats?: ChatListRelationFilter
    ChatMember?: ChatMemberListRelationFilter
    Message?: MessageListRelationFilter
    Reaction?: ReactionListRelationFilter
    SeenMessage?: SeenMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phomeNumber?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    ghostMode?: SortOrder
    bio?: SortOrderInput | SortOrder
    stars?: SortOrder
    status?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    ownedChats?: ChatOrderByRelationAggregateInput
    ChatMember?: ChatMemberOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
    Reaction?: ReactionOrderByRelationAggregateInput
    SeenMessage?: SeenMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    phomeNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    ghostMode?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    stars?: IntFilter<"User"> | number
    status?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chats?: ChatListRelationFilter
    ownedChats?: ChatListRelationFilter
    ChatMember?: ChatMemberListRelationFilter
    Message?: MessageListRelationFilter
    Reaction?: ReactionListRelationFilter
    SeenMessage?: SeenMessageListRelationFilter
  }, "id" | "username" | "email" | "phomeNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phomeNumber?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    ghostMode?: SortOrder
    bio?: SortOrderInput | SortOrder
    stars?: SortOrder
    status?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phomeNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastActive?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    ghostMode?: BoolWithAggregatesFilter<"User"> | boolean
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    stars?: IntWithAggregatesFilter<"User"> | number
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    type?: EnumChatTypeFilter<"Chat"> | $Enums.ChatType
    title?: StringNullableFilter<"Chat"> | string | null
    description?: StringNullableFilter<"Chat"> | string | null
    chatImage?: StringNullableFilter<"Chat"> | string | null
    handle?: StringNullableFilter<"Chat"> | string | null
    ownerId?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    isPublic?: BoolFilter<"Chat"> | boolean
    inviteLink?: StringNullableFilter<"Chat"> | string | null
    pinnedMessageId?: StringNullableFilter<"Chat"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
    pinnedMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    messages?: MessageListRelationFilter
    members?: ChatMemberListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    chatImage?: SortOrderInput | SortOrder
    handle?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    inviteLink?: SortOrderInput | SortOrder
    pinnedMessageId?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    pinnedMessage?: MessageOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    members?: ChatMemberOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    handle?: string
    inviteLink?: string
    pinnedMessageId?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    type?: EnumChatTypeFilter<"Chat"> | $Enums.ChatType
    title?: StringNullableFilter<"Chat"> | string | null
    description?: StringNullableFilter<"Chat"> | string | null
    chatImage?: StringNullableFilter<"Chat"> | string | null
    ownerId?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    isPublic?: BoolFilter<"Chat"> | boolean
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
    pinnedMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    messages?: MessageListRelationFilter
    members?: ChatMemberListRelationFilter
  }, "id" | "handle" | "inviteLink" | "pinnedMessageId">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    chatImage?: SortOrderInput | SortOrder
    handle?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    inviteLink?: SortOrderInput | SortOrder
    pinnedMessageId?: SortOrderInput | SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    type?: EnumChatTypeWithAggregatesFilter<"Chat"> | $Enums.ChatType
    title?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    description?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    chatImage?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    handle?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    ownerId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Chat"> | boolean
    inviteLink?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    pinnedMessageId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
  }

  export type ChatMemberWhereInput = {
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    role?: EnumRoleFilter<"ChatMember"> | $Enums.Role
    isMuted?: BoolFilter<"ChatMember"> | boolean
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMemberOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    joinedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId_userId?: ChatMemberChatIdUserIdCompoundUniqueInput
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    chatId?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    role?: EnumRoleFilter<"ChatMember"> | $Enums.Role
    isMuted?: BoolFilter<"ChatMember"> | boolean
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "chatId_userId">

  export type ChatMemberOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    joinedAt?: SortOrder
    _count?: ChatMemberCountOrderByAggregateInput
    _max?: ChatMemberMaxOrderByAggregateInput
    _min?: ChatMemberMinOrderByAggregateInput
  }

  export type ChatMemberScalarWhereWithAggregatesInput = {
    AND?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    OR?: ChatMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMember"> | string
    chatId?: StringWithAggregatesFilter<"ChatMember"> | string
    userId?: StringWithAggregatesFilter<"ChatMember"> | string
    role?: EnumRoleWithAggregatesFilter<"ChatMember"> | $Enums.Role
    isMuted?: BoolWithAggregatesFilter<"ChatMember"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    messageType?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    mediaUrls?: StringNullableListFilter<"Message">
    mediaThumbnail?: StringNullableFilter<"Message"> | string | null
    repliedToId?: StringNullableFilter<"Message"> | string | null
    isEdited?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    repliedTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    reactions?: ReactionListRelationFilter
    seenBy?: SeenMessageListRelationFilter
    pinnedByChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrderInput | SortOrder
    messageType?: SortOrder
    mediaUrls?: SortOrder
    mediaThumbnail?: SortOrderInput | SortOrder
    repliedToId?: SortOrderInput | SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    repliedTo?: MessageOrderByWithRelationInput
    replies?: MessageOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    seenBy?: SeenMessageOrderByRelationAggregateInput
    pinnedByChat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    messageType?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    mediaUrls?: StringNullableListFilter<"Message">
    mediaThumbnail?: StringNullableFilter<"Message"> | string | null
    repliedToId?: StringNullableFilter<"Message"> | string | null
    isEdited?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    repliedTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    reactions?: ReactionListRelationFilter
    seenBy?: SeenMessageListRelationFilter
    pinnedByChat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrderInput | SortOrder
    messageType?: SortOrder
    mediaUrls?: SortOrder
    mediaThumbnail?: SortOrderInput | SortOrder
    repliedToId?: SortOrderInput | SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    messageType?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    mediaUrls?: StringNullableListFilter<"Message">
    mediaThumbnail?: StringNullableWithAggregatesFilter<"Message"> | string | null
    repliedToId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    isEdited?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: StringFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    messageId?: StringFilter<"Reaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    user?: UserOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_messageId_emoji?: ReactionUserIdMessageIdEmojiCompoundUniqueInput
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    emoji?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    messageId?: StringFilter<"Reaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "id" | "userId_messageId_emoji">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reaction"> | string
    emoji?: StringWithAggregatesFilter<"Reaction"> | string
    userId?: StringWithAggregatesFilter<"Reaction"> | string
    messageId?: StringWithAggregatesFilter<"Reaction"> | string
  }

  export type SeenMessageWhereInput = {
    AND?: SeenMessageWhereInput | SeenMessageWhereInput[]
    OR?: SeenMessageWhereInput[]
    NOT?: SeenMessageWhereInput | SeenMessageWhereInput[]
    id?: StringFilter<"SeenMessage"> | string
    userId?: StringFilter<"SeenMessage"> | string
    messageId?: StringFilter<"SeenMessage"> | string
    seenAt?: DateTimeFilter<"SeenMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type SeenMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    seenAt?: SortOrder
    user?: UserOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type SeenMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_messageId?: SeenMessageUserIdMessageIdCompoundUniqueInput
    AND?: SeenMessageWhereInput | SeenMessageWhereInput[]
    OR?: SeenMessageWhereInput[]
    NOT?: SeenMessageWhereInput | SeenMessageWhereInput[]
    userId?: StringFilter<"SeenMessage"> | string
    messageId?: StringFilter<"SeenMessage"> | string
    seenAt?: DateTimeFilter<"SeenMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "id" | "userId_messageId">

  export type SeenMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    seenAt?: SortOrder
    _count?: SeenMessageCountOrderByAggregateInput
    _max?: SeenMessageMaxOrderByAggregateInput
    _min?: SeenMessageMinOrderByAggregateInput
  }

  export type SeenMessageScalarWhereWithAggregatesInput = {
    AND?: SeenMessageScalarWhereWithAggregatesInput | SeenMessageScalarWhereWithAggregatesInput[]
    OR?: SeenMessageScalarWhereWithAggregatesInput[]
    NOT?: SeenMessageScalarWhereWithAggregatesInput | SeenMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeenMessage"> | string
    userId?: StringWithAggregatesFilter<"SeenMessage"> | string
    messageId?: StringWithAggregatesFilter<"SeenMessage"> | string
    seenAt?: DateTimeWithAggregatesFilter<"SeenMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUsersInput
    ownedChats?: ChatCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    Reaction?: ReactionCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    ownedChats?: ChatUncheckedCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    Reaction?: ReactionUncheckedCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUncheckedUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedChatsInput
    users?: UserCreateNestedManyWithoutChatsInput
    pinnedMessage?: MessageCreateNestedOneWithoutPinnedByChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedChatsNestedInput
    users?: UserUpdateManyWithoutChatsNestedInput
    pinnedMessage?: MessageUpdateOneWithoutPinnedByChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMemberCreateInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutChatMemberInput
  }

  export type ChatMemberUncheckedCreateInput = {
    id?: string
    chatId: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
  }

  export type ChatMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutChatMemberNestedInput
  }

  export type ChatMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateManyInput = {
    id?: string
    chatId: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
  }

  export type ChatMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessageInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateInput = {
    id?: string
    emoji: string
    user: UserCreateNestedOneWithoutReactionInput
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    emoji: string
    userId: string
    messageId: string
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReactionNestedInput
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionCreateManyInput = {
    id?: string
    emoji: string
    userId: string
    messageId: string
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type SeenMessageCreateInput = {
    id?: string
    seenAt?: Date | string
    user: UserCreateNestedOneWithoutSeenMessageInput
    message: MessageCreateNestedOneWithoutSeenByInput
  }

  export type SeenMessageUncheckedCreateInput = {
    id?: string
    userId: string
    messageId: string
    seenAt?: Date | string
  }

  export type SeenMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSeenMessageNestedInput
    message?: MessageUpdateOneRequiredWithoutSeenByNestedInput
  }

  export type SeenMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageCreateManyInput = {
    id?: string
    userId: string
    messageId: string
    seenAt?: Date | string
  }

  export type SeenMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ChatMemberListRelationFilter = {
    every?: ChatMemberWhereInput
    some?: ChatMemberWhereInput
    none?: ChatMemberWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type SeenMessageListRelationFilter = {
    every?: SeenMessageWhereInput
    some?: SeenMessageWhereInput
    none?: SeenMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeenMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phomeNumber?: SortOrder
    profileImage?: SortOrder
    lastActive?: SortOrder
    ghostMode?: SortOrder
    bio?: SortOrder
    stars?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phomeNumber?: SortOrder
    profileImage?: SortOrder
    lastActive?: SortOrder
    ghostMode?: SortOrder
    bio?: SortOrder
    stars?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phomeNumber?: SortOrder
    profileImage?: SortOrder
    lastActive?: SortOrder
    ghostMode?: SortOrder
    bio?: SortOrder
    stars?: SortOrder
    status?: SortOrder
    isVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    stars?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumChatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatType | EnumChatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatTypeFilter<$PrismaModel> | $Enums.ChatType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chatImage?: SortOrder
    handle?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    inviteLink?: SortOrder
    pinnedMessageId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chatImage?: SortOrder
    handle?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    inviteLink?: SortOrder
    pinnedMessageId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chatImage?: SortOrder
    handle?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    inviteLink?: SortOrder
    pinnedMessageId?: SortOrder
  }

  export type EnumChatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatType | EnumChatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatTypeFilter<$PrismaModel>
    _max?: NestedEnumChatTypeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatMemberChatIdUserIdCompoundUniqueInput = {
    chatId: string
    userId: string
  }

  export type ChatMemberCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatMemberMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ChatNullableScalarRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    mediaUrls?: SortOrder
    mediaThumbnail?: SortOrder
    repliedToId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    mediaThumbnail?: SortOrder
    repliedToId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    mediaThumbnail?: SortOrder
    repliedToId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type ReactionUserIdMessageIdEmojiCompoundUniqueInput = {
    userId: string
    messageId: string
    emoji: string
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
  }

  export type SeenMessageUserIdMessageIdCompoundUniqueInput = {
    userId: string
    messageId: string
  }

  export type SeenMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    seenAt?: SortOrder
  }

  export type SeenMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    seenAt?: SortOrder
  }

  export type SeenMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    seenAt?: SortOrder
  }

  export type ChatCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChatCreateWithoutOwnerInput, ChatUncheckedCreateWithoutOwnerInput> | ChatCreateWithoutOwnerInput[] | ChatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerInput | ChatCreateOrConnectWithoutOwnerInput[]
    createMany?: ChatCreateManyOwnerInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type SeenMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChatCreateWithoutOwnerInput, ChatUncheckedCreateWithoutOwnerInput> | ChatCreateWithoutOwnerInput[] | ChatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerInput | ChatCreateOrConnectWithoutOwnerInput[]
    createMany?: ChatCreateManyOwnerInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type SeenMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type ChatUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUsersInput | ChatUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUsersInput | ChatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUsersInput | ChatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChatCreateWithoutOwnerInput, ChatUncheckedCreateWithoutOwnerInput> | ChatCreateWithoutOwnerInput[] | ChatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerInput | ChatCreateOrConnectWithoutOwnerInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOwnerInput | ChatUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChatCreateManyOwnerInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOwnerInput | ChatUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOwnerInput | ChatUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type SeenMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutUserInput | SeenMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutUserInput | SeenMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutUserInput | SeenMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput> | ChatCreateWithoutUsersInput[] | ChatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | ChatCreateOrConnectWithoutUsersInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUsersInput | ChatUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUsersInput | ChatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUsersInput | ChatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChatCreateWithoutOwnerInput, ChatUncheckedCreateWithoutOwnerInput> | ChatCreateWithoutOwnerInput[] | ChatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOwnerInput | ChatCreateOrConnectWithoutOwnerInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOwnerInput | ChatUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChatCreateManyOwnerInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOwnerInput | ChatUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOwnerInput | ChatUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type SeenMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutUserInput | SeenMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutUserInput | SeenMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutUserInput | SeenMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedChatsInput = {
    create?: XOR<UserCreateWithoutOwnedChatsInput, UserUncheckedCreateWithoutOwnedChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageCreateNestedOneWithoutPinnedByChatInput = {
    create?: XOR<MessageCreateWithoutPinnedByChatInput, MessageUncheckedCreateWithoutPinnedByChatInput>
    connectOrCreate?: MessageCreateOrConnectWithoutPinnedByChatInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type EnumChatTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChatType
  }

  export type UserUpdateOneWithoutOwnedChatsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedChatsInput, UserUncheckedCreateWithoutOwnedChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedChatsInput
    upsert?: UserUpsertWithoutOwnedChatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedChatsInput, UserUpdateWithoutOwnedChatsInput>, UserUncheckedUpdateWithoutOwnedChatsInput>
  }

  export type UserUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUpdateOneWithoutPinnedByChatNestedInput = {
    create?: XOR<MessageCreateWithoutPinnedByChatInput, MessageUncheckedCreateWithoutPinnedByChatInput>
    connectOrCreate?: MessageCreateOrConnectWithoutPinnedByChatInput
    upsert?: MessageUpsertWithoutPinnedByChatInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutPinnedByChatInput, MessageUpdateWithoutPinnedByChatInput>, MessageUncheckedUpdateWithoutPinnedByChatInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMemberUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMemberInput = {
    create?: XOR<UserCreateWithoutChatMemberInput, UserUncheckedCreateWithoutChatMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMemberInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ChatUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    upsert?: ChatUpsertWithoutMembersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMembersInput, ChatUpdateWithoutMembersInput>, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutChatMemberNestedInput = {
    create?: XOR<UserCreateWithoutChatMemberInput, UserUncheckedCreateWithoutChatMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMemberInput
    upsert?: UserUpsertWithoutChatMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMemberInput, UserUpdateWithoutChatMemberInput>, UserUncheckedUpdateWithoutChatMemberInput>
  }

  export type MessageCreatemediaUrlsInput = {
    set: string[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessageInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutRepliedToInput = {
    create?: XOR<MessageCreateWithoutRepliedToInput, MessageUncheckedCreateWithoutRepliedToInput> | MessageCreateWithoutRepliedToInput[] | MessageUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRepliedToInput | MessageCreateOrConnectWithoutRepliedToInput[]
    createMany?: MessageCreateManyRepliedToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type SeenMessageCreateNestedManyWithoutMessageInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type ChatCreateNestedOneWithoutPinnedMessageInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutRepliedToInput = {
    create?: XOR<MessageCreateWithoutRepliedToInput, MessageUncheckedCreateWithoutRepliedToInput> | MessageCreateWithoutRepliedToInput[] | MessageUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRepliedToInput | MessageCreateOrConnectWithoutRepliedToInput[]
    createMany?: MessageCreateManyRepliedToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type SeenMessageUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedOneWithoutPinnedMessageInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type MessageUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    upsert?: UserUpsertWithoutMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageInput, UserUpdateWithoutMessageInput>, UserUncheckedUpdateWithoutMessageInput>
  }

  export type MessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    upsert?: MessageUpsertWithoutRepliesInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutRepliesInput, MessageUpdateWithoutRepliesInput>, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateManyWithoutRepliedToNestedInput = {
    create?: XOR<MessageCreateWithoutRepliedToInput, MessageUncheckedCreateWithoutRepliedToInput> | MessageCreateWithoutRepliedToInput[] | MessageUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRepliedToInput | MessageCreateOrConnectWithoutRepliedToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRepliedToInput | MessageUpsertWithWhereUniqueWithoutRepliedToInput[]
    createMany?: MessageCreateManyRepliedToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRepliedToInput | MessageUpdateWithWhereUniqueWithoutRepliedToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRepliedToInput | MessageUpdateManyWithWhereWithoutRepliedToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutMessageInput | ReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutMessageInput | ReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutMessageInput | ReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type SeenMessageUpdateManyWithoutMessageNestedInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutMessageInput | SeenMessageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutMessageInput | SeenMessageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutMessageInput | SeenMessageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type ChatUpdateOneWithoutPinnedMessageNestedInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    upsert?: ChatUpsertWithoutPinnedMessageInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutPinnedMessageInput, ChatUpdateWithoutPinnedMessageInput>, ChatUncheckedUpdateWithoutPinnedMessageInput>
  }

  export type MessageUncheckedUpdateManyWithoutRepliedToNestedInput = {
    create?: XOR<MessageCreateWithoutRepliedToInput, MessageUncheckedCreateWithoutRepliedToInput> | MessageCreateWithoutRepliedToInput[] | MessageUncheckedCreateWithoutRepliedToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRepliedToInput | MessageCreateOrConnectWithoutRepliedToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRepliedToInput | MessageUpsertWithWhereUniqueWithoutRepliedToInput[]
    createMany?: MessageCreateManyRepliedToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRepliedToInput | MessageUpdateWithWhereUniqueWithoutRepliedToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRepliedToInput | MessageUpdateManyWithWhereWithoutRepliedToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutMessageInput | ReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutMessageInput | ReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutMessageInput | ReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type SeenMessageUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutMessageInput | SeenMessageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutMessageInput | SeenMessageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutMessageInput | SeenMessageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput = {
    create?: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutPinnedMessageInput
    upsert?: ChatUpsertWithoutPinnedMessageInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutPinnedMessageInput, ChatUpdateWithoutPinnedMessageInput>, ChatUncheckedUpdateWithoutPinnedMessageInput>
  }

  export type UserCreateNestedOneWithoutReactionInput = {
    create?: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutReactionsInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionNestedInput = {
    create?: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionInput
    upsert?: UserUpsertWithoutReactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionInput, UserUpdateWithoutReactionInput>, UserUncheckedUpdateWithoutReactionInput>
  }

  export type MessageUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    upsert?: MessageUpsertWithoutReactionsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReactionsInput, MessageUpdateWithoutReactionsInput>, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutSeenMessageInput = {
    create?: XOR<UserCreateWithoutSeenMessageInput, UserUncheckedCreateWithoutSeenMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeenMessageInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutSeenByInput = {
    create?: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSeenByInput
    connect?: MessageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSeenMessageNestedInput = {
    create?: XOR<UserCreateWithoutSeenMessageInput, UserUncheckedCreateWithoutSeenMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeenMessageInput
    upsert?: UserUpsertWithoutSeenMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeenMessageInput, UserUpdateWithoutSeenMessageInput>, UserUncheckedUpdateWithoutSeenMessageInput>
  }

  export type MessageUpdateOneRequiredWithoutSeenByNestedInput = {
    create?: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSeenByInput
    upsert?: MessageUpsertWithoutSeenByInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutSeenByInput, MessageUpdateWithoutSeenByInput>, MessageUncheckedUpdateWithoutSeenByInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumChatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatType | EnumChatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatTypeFilter<$PrismaModel> | $Enums.ChatType
  }

  export type NestedEnumChatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatType | EnumChatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatType[] | ListEnumChatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatTypeFilter<$PrismaModel>
    _max?: NestedEnumChatTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type ChatCreateWithoutUsersInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedChatsInput
    pinnedMessage?: MessageCreateNestedOneWithoutPinnedByChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUsersInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUsersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type ChatCreateWithoutOwnerInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    users?: UserCreateNestedManyWithoutChatsInput
    pinnedMessage?: MessageCreateNestedOneWithoutPinnedByChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutOwnerInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutOwnerInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutOwnerInput, ChatUncheckedCreateWithoutOwnerInput>
  }

  export type ChatCreateManyOwnerInputEnvelope = {
    data: ChatCreateManyOwnerInput | ChatCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateWithoutUserInput = {
    id?: string
    chatId: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberCreateManyUserInputEnvelope = {
    data: ChatMemberCreateManyUserInput | ChatMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    chatId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutUserInput = {
    id?: string
    emoji: string
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    id?: string
    emoji: string
    messageId: string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SeenMessageCreateWithoutUserInput = {
    id?: string
    seenAt?: Date | string
    message: MessageCreateNestedOneWithoutSeenByInput
  }

  export type SeenMessageUncheckedCreateWithoutUserInput = {
    id?: string
    messageId: string
    seenAt?: Date | string
  }

  export type SeenMessageCreateOrConnectWithoutUserInput = {
    where: SeenMessageWhereUniqueInput
    create: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput>
  }

  export type SeenMessageCreateManyUserInputEnvelope = {
    data: SeenMessageCreateManyUserInput | SeenMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type ChatUpdateManyWithWhereWithoutUsersInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    type?: EnumChatTypeFilter<"Chat"> | $Enums.ChatType
    title?: StringNullableFilter<"Chat"> | string | null
    description?: StringNullableFilter<"Chat"> | string | null
    chatImage?: StringNullableFilter<"Chat"> | string | null
    handle?: StringNullableFilter<"Chat"> | string | null
    ownerId?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    isPublic?: BoolFilter<"Chat"> | boolean
    inviteLink?: StringNullableFilter<"Chat"> | string | null
    pinnedMessageId?: StringNullableFilter<"Chat"> | string | null
  }

  export type ChatUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutOwnerInput, ChatUncheckedUpdateWithoutOwnerInput>
    create: XOR<ChatCreateWithoutOwnerInput, ChatUncheckedCreateWithoutOwnerInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutOwnerInput, ChatUncheckedUpdateWithoutOwnerInput>
  }

  export type ChatUpdateManyWithWhereWithoutOwnerInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMemberScalarWhereInput = {
    AND?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    OR?: ChatMemberScalarWhereInput[]
    NOT?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
    userId?: StringFilter<"ChatMember"> | string
    role?: EnumRoleFilter<"ChatMember"> | $Enums.Role
    isMuted?: BoolFilter<"ChatMember"> | boolean
    joinedAt?: DateTimeFilter<"ChatMember"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    messageType?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    mediaUrls?: StringNullableListFilter<"Message">
    mediaThumbnail?: StringNullableFilter<"Message"> | string | null
    repliedToId?: StringNullableFilter<"Message"> | string | null
    isEdited?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: StringFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    messageId?: StringFilter<"Reaction"> | string
  }

  export type SeenMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: SeenMessageWhereUniqueInput
    update: XOR<SeenMessageUpdateWithoutUserInput, SeenMessageUncheckedUpdateWithoutUserInput>
    create: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput>
  }

  export type SeenMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: SeenMessageWhereUniqueInput
    data: XOR<SeenMessageUpdateWithoutUserInput, SeenMessageUncheckedUpdateWithoutUserInput>
  }

  export type SeenMessageUpdateManyWithWhereWithoutUserInput = {
    where: SeenMessageScalarWhereInput
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type SeenMessageScalarWhereInput = {
    AND?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
    OR?: SeenMessageScalarWhereInput[]
    NOT?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
    id?: StringFilter<"SeenMessage"> | string
    userId?: StringFilter<"SeenMessage"> | string
    messageId?: StringFilter<"SeenMessage"> | string
    seenAt?: DateTimeFilter<"SeenMessage"> | Date | string
  }

  export type UserCreateWithoutOwnedChatsInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUsersInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    Reaction?: ReactionCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedChatsInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    Reaction?: ReactionUncheckedCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedChatsInput, UserUncheckedCreateWithoutOwnedChatsInput>
  }

  export type UserCreateWithoutChatsInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedChats?: ChatCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    Reaction?: ReactionCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedChats?: ChatUncheckedCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    Reaction?: ReactionUncheckedCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutPinnedByChatInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessageInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutPinnedByChatInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutPinnedByChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutPinnedByChatInput, MessageUncheckedCreateWithoutPinnedByChatInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutMessageInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutChatInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChatMemberInput
  }

  export type ChatMemberUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
  }

  export type ChatMemberCreateOrConnectWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberCreateManyChatInputEnvelope = {
    data: ChatMemberCreateManyChatInput | ChatMemberCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedChatsInput = {
    update: XOR<UserUpdateWithoutOwnedChatsInput, UserUncheckedUpdateWithoutOwnedChatsInput>
    create: XOR<UserCreateWithoutOwnedChatsInput, UserUncheckedCreateWithoutOwnedChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedChatsInput, UserUncheckedUpdateWithoutOwnedChatsInput>
  }

  export type UserUpdateWithoutOwnedChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phomeNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    ghostMode?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    stars?: IntFilter<"User"> | number
    status?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type MessageUpsertWithoutPinnedByChatInput = {
    update: XOR<MessageUpdateWithoutPinnedByChatInput, MessageUncheckedUpdateWithoutPinnedByChatInput>
    create: XOR<MessageCreateWithoutPinnedByChatInput, MessageUncheckedCreateWithoutPinnedByChatInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutPinnedByChatInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutPinnedByChatInput, MessageUncheckedUpdateWithoutPinnedByChatInput>
  }

  export type MessageUpdateWithoutPinnedByChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutPinnedByChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutChatInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutMembersInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedChatsInput
    users?: UserCreateNestedManyWithoutChatsInput
    pinnedMessage?: MessageCreateNestedOneWithoutPinnedByChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutChatMemberInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUsersInput
    ownedChats?: ChatCreateNestedManyWithoutOwnerInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    Reaction?: ReactionCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMemberInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    ownedChats?: ChatUncheckedCreateNestedManyWithoutOwnerInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    Reaction?: ReactionUncheckedCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMemberInput, UserUncheckedCreateWithoutChatMemberInput>
  }

  export type ChatUpsertWithoutMembersInput = {
    update: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type ChatUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedChatsNestedInput
    users?: UserUpdateManyWithoutChatsNestedInput
    pinnedMessage?: MessageUpdateOneWithoutPinnedByChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutChatMemberInput = {
    update: XOR<UserUpdateWithoutChatMemberInput, UserUncheckedUpdateWithoutChatMemberInput>
    create: XOR<UserCreateWithoutChatMemberInput, UserUncheckedCreateWithoutChatMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMemberInput, UserUncheckedUpdateWithoutChatMemberInput>
  }

  export type UserUpdateWithoutChatMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUpdateManyWithoutOwnerNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUncheckedUpdateManyWithoutOwnerNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedChatsInput
    users?: UserCreateNestedManyWithoutChatsInput
    pinnedMessage?: MessageCreateNestedOneWithoutPinnedByChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessageInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUsersInput
    ownedChats?: ChatCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Reaction?: ReactionCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessageInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    ownedChats?: ChatUncheckedCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Reaction?: ReactionUncheckedCreateNestedManyWithoutUserInput
    SeenMessage?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
  }

  export type MessageCreateWithoutRepliesInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessageInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageCreateOrConnectWithoutRepliesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type MessageCreateWithoutRepliedToInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessageInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateWithoutRepliedToInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageCreateOrConnectWithoutRepliedToInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliedToInput, MessageUncheckedCreateWithoutRepliedToInput>
  }

  export type MessageCreateManyRepliedToInputEnvelope = {
    data: MessageCreateManyRepliedToInput | MessageCreateManyRepliedToInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutMessageInput = {
    id?: string
    emoji: string
    user: UserCreateNestedOneWithoutReactionInput
  }

  export type ReactionUncheckedCreateWithoutMessageInput = {
    id?: string
    emoji: string
    userId: string
  }

  export type ReactionCreateOrConnectWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput>
  }

  export type ReactionCreateManyMessageInputEnvelope = {
    data: ReactionCreateManyMessageInput | ReactionCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type SeenMessageCreateWithoutMessageInput = {
    id?: string
    seenAt?: Date | string
    user: UserCreateNestedOneWithoutSeenMessageInput
  }

  export type SeenMessageUncheckedCreateWithoutMessageInput = {
    id?: string
    userId: string
    seenAt?: Date | string
  }

  export type SeenMessageCreateOrConnectWithoutMessageInput = {
    where: SeenMessageWhereUniqueInput
    create: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput>
  }

  export type SeenMessageCreateManyMessageInputEnvelope = {
    data: SeenMessageCreateManyMessageInput | SeenMessageCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutPinnedMessageInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedChatsInput
    users?: UserCreateNestedManyWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
    members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutPinnedMessageInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutPinnedMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedChatsNestedInput
    users?: UserUpdateManyWithoutChatsNestedInput
    pinnedMessage?: MessageUpdateOneWithoutPinnedByChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutMessageInput = {
    update: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Reaction?: ReactionUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUncheckedUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Reaction?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithoutRepliesInput = {
    update: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutRepliedToInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRepliedToInput, MessageUncheckedUpdateWithoutRepliedToInput>
    create: XOR<MessageCreateWithoutRepliedToInput, MessageUncheckedCreateWithoutRepliedToInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRepliedToInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRepliedToInput, MessageUncheckedUpdateWithoutRepliedToInput>
  }

  export type MessageUpdateManyWithWhereWithoutRepliedToInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRepliedToInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutMessageInput, ReactionUncheckedUpdateWithoutMessageInput>
    create: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutMessageInput, ReactionUncheckedUpdateWithoutMessageInput>
  }

  export type ReactionUpdateManyWithWhereWithoutMessageInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutMessageInput>
  }

  export type SeenMessageUpsertWithWhereUniqueWithoutMessageInput = {
    where: SeenMessageWhereUniqueInput
    update: XOR<SeenMessageUpdateWithoutMessageInput, SeenMessageUncheckedUpdateWithoutMessageInput>
    create: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput>
  }

  export type SeenMessageUpdateWithWhereUniqueWithoutMessageInput = {
    where: SeenMessageWhereUniqueInput
    data: XOR<SeenMessageUpdateWithoutMessageInput, SeenMessageUncheckedUpdateWithoutMessageInput>
  }

  export type SeenMessageUpdateManyWithWhereWithoutMessageInput = {
    where: SeenMessageScalarWhereInput
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyWithoutMessageInput>
  }

  export type ChatUpsertWithoutPinnedMessageInput = {
    update: XOR<ChatUpdateWithoutPinnedMessageInput, ChatUncheckedUpdateWithoutPinnedMessageInput>
    create: XOR<ChatCreateWithoutPinnedMessageInput, ChatUncheckedCreateWithoutPinnedMessageInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutPinnedMessageInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutPinnedMessageInput, ChatUncheckedUpdateWithoutPinnedMessageInput>
  }

  export type ChatUpdateWithoutPinnedMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedChatsNestedInput
    users?: UserUpdateManyWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutPinnedMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutReactionInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUsersInput
    ownedChats?: ChatCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    SeenMessage?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    ownedChats?: ChatUncheckedCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    SeenMessage?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
  }

  export type MessageCreateWithoutReactionsInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessageInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateWithoutReactionsInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageCreateOrConnectWithoutReactionsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionInput = {
    update: XOR<UserUpdateWithoutReactionInput, UserUncheckedUpdateWithoutReactionInput>
    create: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionInput, UserUncheckedUpdateWithoutReactionInput>
  }

  export type UserUpdateWithoutReactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    SeenMessage?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUncheckedUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    SeenMessage?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithoutReactionsInput = {
    update: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReactionsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type MessageUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type UserCreateWithoutSeenMessageInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUsersInput
    ownedChats?: ChatCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    Reaction?: ReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeenMessageInput = {
    id?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phomeNumber?: string | null
    profileImage?: string | null
    lastActive?: Date | string | null
    ghostMode?: boolean
    bio?: string | null
    stars?: number
    status?: string | null
    isVerified?: boolean
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    ownedChats?: ChatUncheckedCreateNestedManyWithoutOwnerInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    Reaction?: ReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeenMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeenMessageInput, UserUncheckedCreateWithoutSeenMessageInput>
  }

  export type MessageCreateWithoutSeenByInput = {
    id?: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessageInput
    repliedTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageUncheckedCreateWithoutSeenByInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutRepliedToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pinnedByChat?: ChatUncheckedCreateNestedOneWithoutPinnedMessageInput
  }

  export type MessageCreateOrConnectWithoutSeenByInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
  }

  export type UserUpsertWithoutSeenMessageInput = {
    update: XOR<UserUpdateWithoutSeenMessageInput, UserUncheckedUpdateWithoutSeenMessageInput>
    create: XOR<UserCreateWithoutSeenMessageInput, UserUncheckedCreateWithoutSeenMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeenMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeenMessageInput, UserUncheckedUpdateWithoutSeenMessageInput>
  }

  export type UserUpdateWithoutSeenMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeenMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    ownedChats?: ChatUncheckedUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithoutSeenByInput = {
    update: XOR<MessageUpdateWithoutSeenByInput, MessageUncheckedUpdateWithoutSeenByInput>
    create: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutSeenByInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutSeenByInput, MessageUncheckedUpdateWithoutSeenByInput>
  }

  export type MessageUpdateWithoutSeenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSeenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type ChatCreateManyOwnerInput = {
    id?: string
    type: $Enums.ChatType
    title?: string | null
    description?: string | null
    chatImage?: string | null
    handle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    inviteLink?: string | null
    pinnedMessageId?: string | null
  }

  export type ChatMemberCreateManyUserInput = {
    id?: string
    chatId: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    chatId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateManyUserInput = {
    id?: string
    emoji: string
    messageId: string
  }

  export type SeenMessageCreateManyUserInput = {
    id?: string
    messageId: string
    seenAt?: Date | string
  }

  export type ChatUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedChatsNestedInput
    pinnedMessage?: MessageUpdateOneWithoutPinnedByChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutChatsNestedInput
    pinnedMessage?: MessageUpdateOneWithoutPinnedByChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChatTypeFieldUpdateOperationsInput | $Enums.ChatType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatImage?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    pinnedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type SeenMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutSeenByNestedInput
  }

  export type SeenMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    repliedToId?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMemberCreateManyChatInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    joinedAt?: Date | string
  }

  export type UserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedChats?: ChatUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedChats?: ChatUncheckedUpdateManyWithoutOwnerNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    Reaction?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    SeenMessage?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ghostMode?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    repliedTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    repliedToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMemberNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyRepliedToInput = {
    id?: string
    chatId: string
    senderId: string
    content?: string | null
    messageType?: $Enums.MessageType
    mediaUrls?: MessageCreatemediaUrlsInput | string[]
    mediaThumbnail?: string | null
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateManyMessageInput = {
    id?: string
    emoji: string
    userId: string
  }

  export type SeenMessageCreateManyMessageInput = {
    id?: string
    userId: string
    seenAt?: Date | string
  }

  export type MessageUpdateWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    replies?: MessageUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutRepliedToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
    pinnedByChat?: ChatUncheckedUpdateOneWithoutPinnedMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRepliedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrls?: MessageUpdatemediaUrlsInput | string[]
    mediaThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReactionNestedInput
  }

  export type ReactionUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SeenMessageUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSeenMessageNestedInput
  }

  export type SeenMessageUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
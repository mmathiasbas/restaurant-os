
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Carta
 * 
 */
export type Carta = $Result.DefaultSelection<Prisma.$CartaPayload>
/**
 * Model Mesa
 * 
 */
export type Mesa = $Result.DefaultSelection<Prisma.$MesaPayload>
/**
 * Model Orden
 * 
 */
export type Orden = $Result.DefaultSelection<Prisma.$OrdenPayload>
/**
 * Model OrdenItem
 * 
 */
export type OrdenItem = $Result.DefaultSelection<Prisma.$OrdenItemPayload>
/**
 * Model Jornada
 * 
 */
export type Jornada = $Result.DefaultSelection<Prisma.$JornadaPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model Actividad
 * 
 */
export type Actividad = $Result.DefaultSelection<Prisma.$ActividadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoMesa: {
  vacia: 'vacia',
  ocupada: 'ocupada',
  lista: 'lista',
  por_pagar: 'por_pagar'
};

export type EstadoMesa = (typeof EstadoMesa)[keyof typeof EstadoMesa]


export const EstadoOrden: {
  pendiente: 'pendiente',
  en_preparacion: 'en_preparacion',
  lista: 'lista',
  entregada: 'entregada',
  pagada: 'pagada',
  cancelada: 'cancelada'
};

export type EstadoOrden = (typeof EstadoOrden)[keyof typeof EstadoOrden]


export const Rol: {
  administrador: 'administrador',
  cocinero: 'cocinero',
  mesero: 'mesero',
  cajero: 'cajero'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const EstadoJornada: {
  abierto: 'abierto',
  cerrado: 'cerrado'
};

export type EstadoJornada = (typeof EstadoJornada)[keyof typeof EstadoJornada]

}

export type EstadoMesa = $Enums.EstadoMesa

export const EstadoMesa: typeof $Enums.EstadoMesa

export type EstadoOrden = $Enums.EstadoOrden

export const EstadoOrden: typeof $Enums.EstadoOrden

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type EstadoJornada = $Enums.EstadoJornada

export const EstadoJornada: typeof $Enums.EstadoJornada

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carta`: Exposes CRUD operations for the **Carta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartas
    * const cartas = await prisma.carta.findMany()
    * ```
    */
  get carta(): Prisma.CartaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesa`: Exposes CRUD operations for the **Mesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesas
    * const mesas = await prisma.mesa.findMany()
    * ```
    */
  get mesa(): Prisma.MesaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orden`: Exposes CRUD operations for the **Orden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ordens
    * const ordens = await prisma.orden.findMany()
    * ```
    */
  get orden(): Prisma.OrdenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenItem`: Exposes CRUD operations for the **OrdenItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenItems
    * const ordenItems = await prisma.ordenItem.findMany()
    * ```
    */
  get ordenItem(): Prisma.OrdenItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jornada`: Exposes CRUD operations for the **Jornada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jornadas
    * const jornadas = await prisma.jornada.findMany()
    * ```
    */
  get jornada(): Prisma.JornadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actividad`: Exposes CRUD operations for the **Actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actividads
    * const actividads = await prisma.actividad.findMany()
    * ```
    */
  get actividad(): Prisma.ActividadDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Carta: 'Carta',
    Mesa: 'Mesa',
    Orden: 'Orden',
    OrdenItem: 'OrdenItem',
    Jornada: 'Jornada',
    Venta: 'Venta',
    Actividad: 'Actividad'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "carta" | "mesa" | "orden" | "ordenItem" | "jornada" | "venta" | "actividad"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Carta: {
        payload: Prisma.$CartaPayload<ExtArgs>
        fields: Prisma.CartaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          findFirst: {
            args: Prisma.CartaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          findMany: {
            args: Prisma.CartaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          create: {
            args: Prisma.CartaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          createMany: {
            args: Prisma.CartaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          delete: {
            args: Prisma.CartaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          update: {
            args: Prisma.CartaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          deleteMany: {
            args: Prisma.CartaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          upsert: {
            args: Prisma.CartaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          aggregate: {
            args: Prisma.CartaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarta>
          }
          groupBy: {
            args: Prisma.CartaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartaCountArgs<ExtArgs>
            result: $Utils.Optional<CartaCountAggregateOutputType> | number
          }
        }
      }
      Mesa: {
        payload: Prisma.$MesaPayload<ExtArgs>
        fields: Prisma.MesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findFirst: {
            args: Prisma.MesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findMany: {
            args: Prisma.MesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          create: {
            args: Prisma.MesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          createMany: {
            args: Prisma.MesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          delete: {
            args: Prisma.MesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          update: {
            args: Prisma.MesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          deleteMany: {
            args: Prisma.MesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MesaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          upsert: {
            args: Prisma.MesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          aggregate: {
            args: Prisma.MesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesa>
          }
          groupBy: {
            args: Prisma.MesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesaCountArgs<ExtArgs>
            result: $Utils.Optional<MesaCountAggregateOutputType> | number
          }
        }
      }
      Orden: {
        payload: Prisma.$OrdenPayload<ExtArgs>
        fields: Prisma.OrdenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findFirst: {
            args: Prisma.OrdenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findMany: {
            args: Prisma.OrdenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          create: {
            args: Prisma.OrdenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          createMany: {
            args: Prisma.OrdenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          delete: {
            args: Prisma.OrdenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          update: {
            args: Prisma.OrdenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          deleteMany: {
            args: Prisma.OrdenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          upsert: {
            args: Prisma.OrdenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          aggregate: {
            args: Prisma.OrdenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrden>
          }
          groupBy: {
            args: Prisma.OrdenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCountAggregateOutputType> | number
          }
        }
      }
      OrdenItem: {
        payload: Prisma.$OrdenItemPayload<ExtArgs>
        fields: Prisma.OrdenItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          findFirst: {
            args: Prisma.OrdenItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          findMany: {
            args: Prisma.OrdenItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>[]
          }
          create: {
            args: Prisma.OrdenItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          createMany: {
            args: Prisma.OrdenItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>[]
          }
          delete: {
            args: Prisma.OrdenItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          update: {
            args: Prisma.OrdenItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          deleteMany: {
            args: Prisma.OrdenItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>[]
          }
          upsert: {
            args: Prisma.OrdenItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          aggregate: {
            args: Prisma.OrdenItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenItem>
          }
          groupBy: {
            args: Prisma.OrdenItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenItemCountAggregateOutputType> | number
          }
        }
      }
      Jornada: {
        payload: Prisma.$JornadaPayload<ExtArgs>
        fields: Prisma.JornadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JornadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JornadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          findFirst: {
            args: Prisma.JornadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JornadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          findMany: {
            args: Prisma.JornadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          create: {
            args: Prisma.JornadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          createMany: {
            args: Prisma.JornadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JornadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          delete: {
            args: Prisma.JornadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          update: {
            args: Prisma.JornadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          deleteMany: {
            args: Prisma.JornadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JornadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JornadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          upsert: {
            args: Prisma.JornadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          aggregate: {
            args: Prisma.JornadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJornada>
          }
          groupBy: {
            args: Prisma.JornadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JornadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JornadaCountArgs<ExtArgs>
            result: $Utils.Optional<JornadaCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      Actividad: {
        payload: Prisma.$ActividadPayload<ExtArgs>
        fields: Prisma.ActividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          findFirst: {
            args: Prisma.ActividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          findMany: {
            args: Prisma.ActividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          create: {
            args: Prisma.ActividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          createMany: {
            args: Prisma.ActividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActividadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          delete: {
            args: Prisma.ActividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          update: {
            args: Prisma.ActividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          deleteMany: {
            args: Prisma.ActividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActividadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          upsert: {
            args: Prisma.ActividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          aggregate: {
            args: Prisma.ActividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActividad>
          }
          groupBy: {
            args: Prisma.ActividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActividadCountArgs<ExtArgs>
            result: $Utils.Optional<ActividadCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    carta?: CartaOmit
    mesa?: MesaOmit
    orden?: OrdenOmit
    ordenItem?: OrdenItemOmit
    jornada?: JornadaOmit
    venta?: VentaOmit
    actividad?: ActividadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Ordenes: number
    ventas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ordenes?: boolean | UsuarioCountOutputTypeCountOrdenesArgs
    ventas?: boolean | UsuarioCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type CartaCountOutputType
   */

  export type CartaCountOutputType = {
    orden_items: number
  }

  export type CartaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden_items?: boolean | CartaCountOutputTypeCountOrden_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartaCountOutputType without action
   */
  export type CartaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartaCountOutputType
     */
    select?: CartaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartaCountOutputType without action
   */
  export type CartaCountOutputTypeCountOrden_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenItemWhereInput
  }


  /**
   * Count Type MesaCountOutputType
   */

  export type MesaCountOutputType = {
    ordenes: number
  }

  export type MesaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | MesaCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesaCountOutputType
     */
    select?: MesaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
  }


  /**
   * Count Type OrdenCountOutputType
   */

  export type OrdenCountOutputType = {
    items: number
  }

  export type OrdenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrdenCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCountOutputType
     */
    select?: OrdenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    rol: $Enums.Rol | null
    telefono: string | null
    correo: string | null
    contrasena: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    rol: $Enums.Rol | null
    telefono: string | null
    correo: string | null
    contrasena: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    rol: number
    telefono: number
    correo: number
    contrasena: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    rol?: true
    telefono?: true
    correo?: true
    contrasena?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    rol?: true
    telefono?: true
    correo?: true
    contrasena?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    rol?: true
    telefono?: true
    correo?: true
    contrasena?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    rol: $Enums.Rol
    telefono: string | null
    correo: string
    contrasena: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    rol?: boolean
    telefono?: boolean
    correo?: boolean
    contrasena?: boolean
    Ordenes?: boolean | Usuario$OrdenesArgs<ExtArgs>
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    rol?: boolean
    telefono?: boolean
    correo?: boolean
    contrasena?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    rol?: boolean
    telefono?: boolean
    correo?: boolean
    contrasena?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    rol?: boolean
    telefono?: boolean
    correo?: boolean
    contrasena?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "rol" | "telefono" | "correo" | "contrasena", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ordenes?: boolean | Usuario$OrdenesArgs<ExtArgs>
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Ordenes: Prisma.$OrdenPayload<ExtArgs>[]
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      rol: $Enums.Rol
      telefono: string | null
      correo: string
      contrasena: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ordenes<T extends Usuario$OrdenesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$OrdenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventas<T extends Usuario$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Ordenes
   */
  export type Usuario$OrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    cursor?: OrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Usuario.ventas
   */
  export type Usuario$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Carta
   */

  export type AggregateCarta = {
    _count: CartaCountAggregateOutputType | null
    _avg: CartaAvgAggregateOutputType | null
    _sum: CartaSumAggregateOutputType | null
    _min: CartaMinAggregateOutputType | null
    _max: CartaMaxAggregateOutputType | null
  }

  export type CartaAvgAggregateOutputType = {
    id_plato: number | null
    precio: Decimal | null
    stock: number | null
  }

  export type CartaSumAggregateOutputType = {
    id_plato: number | null
    precio: Decimal | null
    stock: number | null
  }

  export type CartaMinAggregateOutputType = {
    id_plato: number | null
    nombre: string | null
    ingredientes: string | null
    precio: Decimal | null
    stock: number | null
  }

  export type CartaMaxAggregateOutputType = {
    id_plato: number | null
    nombre: string | null
    ingredientes: string | null
    precio: Decimal | null
    stock: number | null
  }

  export type CartaCountAggregateOutputType = {
    id_plato: number
    nombre: number
    ingredientes: number
    precio: number
    stock: number
    _all: number
  }


  export type CartaAvgAggregateInputType = {
    id_plato?: true
    precio?: true
    stock?: true
  }

  export type CartaSumAggregateInputType = {
    id_plato?: true
    precio?: true
    stock?: true
  }

  export type CartaMinAggregateInputType = {
    id_plato?: true
    nombre?: true
    ingredientes?: true
    precio?: true
    stock?: true
  }

  export type CartaMaxAggregateInputType = {
    id_plato?: true
    nombre?: true
    ingredientes?: true
    precio?: true
    stock?: true
  }

  export type CartaCountAggregateInputType = {
    id_plato?: true
    nombre?: true
    ingredientes?: true
    precio?: true
    stock?: true
    _all?: true
  }

  export type CartaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carta to aggregate.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cartas
    **/
    _count?: true | CartaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartaMaxAggregateInputType
  }

  export type GetCartaAggregateType<T extends CartaAggregateArgs> = {
        [P in keyof T & keyof AggregateCarta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarta[P]>
      : GetScalarType<T[P], AggregateCarta[P]>
  }




  export type CartaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaWhereInput
    orderBy?: CartaOrderByWithAggregationInput | CartaOrderByWithAggregationInput[]
    by: CartaScalarFieldEnum[] | CartaScalarFieldEnum
    having?: CartaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartaCountAggregateInputType | true
    _avg?: CartaAvgAggregateInputType
    _sum?: CartaSumAggregateInputType
    _min?: CartaMinAggregateInputType
    _max?: CartaMaxAggregateInputType
  }

  export type CartaGroupByOutputType = {
    id_plato: number
    nombre: string
    ingredientes: string | null
    precio: Decimal
    stock: number
    _count: CartaCountAggregateOutputType | null
    _avg: CartaAvgAggregateOutputType | null
    _sum: CartaSumAggregateOutputType | null
    _min: CartaMinAggregateOutputType | null
    _max: CartaMaxAggregateOutputType | null
  }

  type GetCartaGroupByPayload<T extends CartaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartaGroupByOutputType[P]>
            : GetScalarType<T[P], CartaGroupByOutputType[P]>
        }
      >
    >


  export type CartaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plato?: boolean
    nombre?: boolean
    ingredientes?: boolean
    precio?: boolean
    stock?: boolean
    orden_items?: boolean | Carta$orden_itemsArgs<ExtArgs>
    _count?: boolean | CartaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carta"]>

  export type CartaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plato?: boolean
    nombre?: boolean
    ingredientes?: boolean
    precio?: boolean
    stock?: boolean
  }, ExtArgs["result"]["carta"]>

  export type CartaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plato?: boolean
    nombre?: boolean
    ingredientes?: boolean
    precio?: boolean
    stock?: boolean
  }, ExtArgs["result"]["carta"]>

  export type CartaSelectScalar = {
    id_plato?: boolean
    nombre?: boolean
    ingredientes?: boolean
    precio?: boolean
    stock?: boolean
  }

  export type CartaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_plato" | "nombre" | "ingredientes" | "precio" | "stock", ExtArgs["result"]["carta"]>
  export type CartaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden_items?: boolean | Carta$orden_itemsArgs<ExtArgs>
    _count?: boolean | CartaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CartaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CartaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carta"
    objects: {
      orden_items: Prisma.$OrdenItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_plato: number
      nombre: string
      ingredientes: string | null
      precio: Prisma.Decimal
      stock: number
    }, ExtArgs["result"]["carta"]>
    composites: {}
  }

  type CartaGetPayload<S extends boolean | null | undefined | CartaDefaultArgs> = $Result.GetResult<Prisma.$CartaPayload, S>

  type CartaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartaCountAggregateInputType | true
    }

  export interface CartaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carta'], meta: { name: 'Carta' } }
    /**
     * Find zero or one Carta that matches the filter.
     * @param {CartaFindUniqueArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartaFindUniqueArgs>(args: SelectSubset<T, CartaFindUniqueArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartaFindUniqueOrThrowArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartaFindUniqueOrThrowArgs>(args: SelectSubset<T, CartaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindFirstArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartaFindFirstArgs>(args?: SelectSubset<T, CartaFindFirstArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindFirstOrThrowArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartaFindFirstOrThrowArgs>(args?: SelectSubset<T, CartaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartas
     * const cartas = await prisma.carta.findMany()
     * 
     * // Get first 10 Cartas
     * const cartas = await prisma.carta.findMany({ take: 10 })
     * 
     * // Only select the `id_plato`
     * const cartaWithId_platoOnly = await prisma.carta.findMany({ select: { id_plato: true } })
     * 
     */
    findMany<T extends CartaFindManyArgs>(args?: SelectSubset<T, CartaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carta.
     * @param {CartaCreateArgs} args - Arguments to create a Carta.
     * @example
     * // Create one Carta
     * const Carta = await prisma.carta.create({
     *   data: {
     *     // ... data to create a Carta
     *   }
     * })
     * 
     */
    create<T extends CartaCreateArgs>(args: SelectSubset<T, CartaCreateArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartas.
     * @param {CartaCreateManyArgs} args - Arguments to create many Cartas.
     * @example
     * // Create many Cartas
     * const carta = await prisma.carta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartaCreateManyArgs>(args?: SelectSubset<T, CartaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cartas and returns the data saved in the database.
     * @param {CartaCreateManyAndReturnArgs} args - Arguments to create many Cartas.
     * @example
     * // Create many Cartas
     * const carta = await prisma.carta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cartas and only return the `id_plato`
     * const cartaWithId_platoOnly = await prisma.carta.createManyAndReturn({
     *   select: { id_plato: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartaCreateManyAndReturnArgs>(args?: SelectSubset<T, CartaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carta.
     * @param {CartaDeleteArgs} args - Arguments to delete one Carta.
     * @example
     * // Delete one Carta
     * const Carta = await prisma.carta.delete({
     *   where: {
     *     // ... filter to delete one Carta
     *   }
     * })
     * 
     */
    delete<T extends CartaDeleteArgs>(args: SelectSubset<T, CartaDeleteArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carta.
     * @param {CartaUpdateArgs} args - Arguments to update one Carta.
     * @example
     * // Update one Carta
     * const carta = await prisma.carta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartaUpdateArgs>(args: SelectSubset<T, CartaUpdateArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartas.
     * @param {CartaDeleteManyArgs} args - Arguments to filter Cartas to delete.
     * @example
     * // Delete a few Cartas
     * const { count } = await prisma.carta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartaDeleteManyArgs>(args?: SelectSubset<T, CartaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartas
     * const carta = await prisma.carta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartaUpdateManyArgs>(args: SelectSubset<T, CartaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartas and returns the data updated in the database.
     * @param {CartaUpdateManyAndReturnArgs} args - Arguments to update many Cartas.
     * @example
     * // Update many Cartas
     * const carta = await prisma.carta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cartas and only return the `id_plato`
     * const cartaWithId_platoOnly = await prisma.carta.updateManyAndReturn({
     *   select: { id_plato: true },
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
    updateManyAndReturn<T extends CartaUpdateManyAndReturnArgs>(args: SelectSubset<T, CartaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carta.
     * @param {CartaUpsertArgs} args - Arguments to update or create a Carta.
     * @example
     * // Update or create a Carta
     * const carta = await prisma.carta.upsert({
     *   create: {
     *     // ... data to create a Carta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carta we want to update
     *   }
     * })
     */
    upsert<T extends CartaUpsertArgs>(args: SelectSubset<T, CartaUpsertArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaCountArgs} args - Arguments to filter Cartas to count.
     * @example
     * // Count the number of Cartas
     * const count = await prisma.carta.count({
     *   where: {
     *     // ... the filter for the Cartas we want to count
     *   }
     * })
    **/
    count<T extends CartaCountArgs>(
      args?: Subset<T, CartaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartaAggregateArgs>(args: Subset<T, CartaAggregateArgs>): Prisma.PrismaPromise<GetCartaAggregateType<T>>

    /**
     * Group by Carta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaGroupByArgs} args - Group by arguments.
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
      T extends CartaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartaGroupByArgs['orderBy'] }
        : { orderBy?: CartaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carta model
   */
  readonly fields: CartaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden_items<T extends Carta$orden_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Carta$orden_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carta model
   */
  interface CartaFieldRefs {
    readonly id_plato: FieldRef<"Carta", 'Int'>
    readonly nombre: FieldRef<"Carta", 'String'>
    readonly ingredientes: FieldRef<"Carta", 'String'>
    readonly precio: FieldRef<"Carta", 'Decimal'>
    readonly stock: FieldRef<"Carta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carta findUnique
   */
  export type CartaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta findUniqueOrThrow
   */
  export type CartaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta findFirst
   */
  export type CartaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta findFirstOrThrow
   */
  export type CartaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta findMany
   */
  export type CartaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Cartas to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta create
   */
  export type CartaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The data needed to create a Carta.
     */
    data: XOR<CartaCreateInput, CartaUncheckedCreateInput>
  }

  /**
   * Carta createMany
   */
  export type CartaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartas.
     */
    data: CartaCreateManyInput | CartaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carta createManyAndReturn
   */
  export type CartaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * The data used to create many Cartas.
     */
    data: CartaCreateManyInput | CartaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carta update
   */
  export type CartaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The data needed to update a Carta.
     */
    data: XOR<CartaUpdateInput, CartaUncheckedUpdateInput>
    /**
     * Choose, which Carta to update.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta updateMany
   */
  export type CartaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartas.
     */
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyInput>
    /**
     * Filter which Cartas to update
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to update.
     */
    limit?: number
  }

  /**
   * Carta updateManyAndReturn
   */
  export type CartaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * The data used to update Cartas.
     */
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyInput>
    /**
     * Filter which Cartas to update
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to update.
     */
    limit?: number
  }

  /**
   * Carta upsert
   */
  export type CartaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The filter to search for the Carta to update in case it exists.
     */
    where: CartaWhereUniqueInput
    /**
     * In case the Carta found by the `where` argument doesn't exist, create a new Carta with this data.
     */
    create: XOR<CartaCreateInput, CartaUncheckedCreateInput>
    /**
     * In case the Carta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartaUpdateInput, CartaUncheckedUpdateInput>
  }

  /**
   * Carta delete
   */
  export type CartaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter which Carta to delete.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta deleteMany
   */
  export type CartaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartas to delete
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to delete.
     */
    limit?: number
  }

  /**
   * Carta.orden_items
   */
  export type Carta$orden_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    where?: OrdenItemWhereInput
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    cursor?: OrdenItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * Carta without action
   */
  export type CartaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
  }


  /**
   * Model Mesa
   */

  export type AggregateMesa = {
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  export type MesaAvgAggregateOutputType = {
    id_mesa: number | null
  }

  export type MesaSumAggregateOutputType = {
    id_mesa: number | null
  }

  export type MesaMinAggregateOutputType = {
    id_mesa: number | null
    estado: $Enums.EstadoMesa | null
  }

  export type MesaMaxAggregateOutputType = {
    id_mesa: number | null
    estado: $Enums.EstadoMesa | null
  }

  export type MesaCountAggregateOutputType = {
    id_mesa: number
    estado: number
    _all: number
  }


  export type MesaAvgAggregateInputType = {
    id_mesa?: true
  }

  export type MesaSumAggregateInputType = {
    id_mesa?: true
  }

  export type MesaMinAggregateInputType = {
    id_mesa?: true
    estado?: true
  }

  export type MesaMaxAggregateInputType = {
    id_mesa?: true
    estado?: true
  }

  export type MesaCountAggregateInputType = {
    id_mesa?: true
    estado?: true
    _all?: true
  }

  export type MesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesa to aggregate.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesas
    **/
    _count?: true | MesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesaMaxAggregateInputType
  }

  export type GetMesaAggregateType<T extends MesaAggregateArgs> = {
        [P in keyof T & keyof AggregateMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesa[P]>
      : GetScalarType<T[P], AggregateMesa[P]>
  }




  export type MesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesaWhereInput
    orderBy?: MesaOrderByWithAggregationInput | MesaOrderByWithAggregationInput[]
    by: MesaScalarFieldEnum[] | MesaScalarFieldEnum
    having?: MesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesaCountAggregateInputType | true
    _avg?: MesaAvgAggregateInputType
    _sum?: MesaSumAggregateInputType
    _min?: MesaMinAggregateInputType
    _max?: MesaMaxAggregateInputType
  }

  export type MesaGroupByOutputType = {
    id_mesa: number
    estado: $Enums.EstadoMesa
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  type GetMesaGroupByPayload<T extends MesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesaGroupByOutputType[P]>
            : GetScalarType<T[P], MesaGroupByOutputType[P]>
        }
      >
    >


  export type MesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mesa?: boolean
    estado?: boolean
    ordenes?: boolean | Mesa$ordenesArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mesa?: boolean
    estado?: boolean
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mesa?: boolean
    estado?: boolean
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectScalar = {
    id_mesa?: boolean
    estado?: boolean
  }

  export type MesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mesa" | "estado", ExtArgs["result"]["mesa"]>
  export type MesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | Mesa$ordenesArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MesaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MesaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesa"
    objects: {
      ordenes: Prisma.$OrdenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mesa: number
      estado: $Enums.EstadoMesa
    }, ExtArgs["result"]["mesa"]>
    composites: {}
  }

  type MesaGetPayload<S extends boolean | null | undefined | MesaDefaultArgs> = $Result.GetResult<Prisma.$MesaPayload, S>

  type MesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesaCountAggregateInputType | true
    }

  export interface MesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesa'], meta: { name: 'Mesa' } }
    /**
     * Find zero or one Mesa that matches the filter.
     * @param {MesaFindUniqueArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesaFindUniqueArgs>(args: SelectSubset<T, MesaFindUniqueArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesaFindUniqueOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesaFindUniqueOrThrowArgs>(args: SelectSubset<T, MesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesaFindFirstArgs>(args?: SelectSubset<T, MesaFindFirstArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesaFindFirstOrThrowArgs>(args?: SelectSubset<T, MesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesas
     * const mesas = await prisma.mesa.findMany()
     * 
     * // Get first 10 Mesas
     * const mesas = await prisma.mesa.findMany({ take: 10 })
     * 
     * // Only select the `id_mesa`
     * const mesaWithId_mesaOnly = await prisma.mesa.findMany({ select: { id_mesa: true } })
     * 
     */
    findMany<T extends MesaFindManyArgs>(args?: SelectSubset<T, MesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesa.
     * @param {MesaCreateArgs} args - Arguments to create a Mesa.
     * @example
     * // Create one Mesa
     * const Mesa = await prisma.mesa.create({
     *   data: {
     *     // ... data to create a Mesa
     *   }
     * })
     * 
     */
    create<T extends MesaCreateArgs>(args: SelectSubset<T, MesaCreateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesas.
     * @param {MesaCreateManyArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesaCreateManyArgs>(args?: SelectSubset<T, MesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesas and returns the data saved in the database.
     * @param {MesaCreateManyAndReturnArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesas and only return the `id_mesa`
     * const mesaWithId_mesaOnly = await prisma.mesa.createManyAndReturn({
     *   select: { id_mesa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MesaCreateManyAndReturnArgs>(args?: SelectSubset<T, MesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesa.
     * @param {MesaDeleteArgs} args - Arguments to delete one Mesa.
     * @example
     * // Delete one Mesa
     * const Mesa = await prisma.mesa.delete({
     *   where: {
     *     // ... filter to delete one Mesa
     *   }
     * })
     * 
     */
    delete<T extends MesaDeleteArgs>(args: SelectSubset<T, MesaDeleteArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesa.
     * @param {MesaUpdateArgs} args - Arguments to update one Mesa.
     * @example
     * // Update one Mesa
     * const mesa = await prisma.mesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesaUpdateArgs>(args: SelectSubset<T, MesaUpdateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesas.
     * @param {MesaDeleteManyArgs} args - Arguments to filter Mesas to delete.
     * @example
     * // Delete a few Mesas
     * const { count } = await prisma.mesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesaDeleteManyArgs>(args?: SelectSubset<T, MesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesaUpdateManyArgs>(args: SelectSubset<T, MesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas and returns the data updated in the database.
     * @param {MesaUpdateManyAndReturnArgs} args - Arguments to update many Mesas.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesas and only return the `id_mesa`
     * const mesaWithId_mesaOnly = await prisma.mesa.updateManyAndReturn({
     *   select: { id_mesa: true },
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
    updateManyAndReturn<T extends MesaUpdateManyAndReturnArgs>(args: SelectSubset<T, MesaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesa.
     * @param {MesaUpsertArgs} args - Arguments to update or create a Mesa.
     * @example
     * // Update or create a Mesa
     * const mesa = await prisma.mesa.upsert({
     *   create: {
     *     // ... data to create a Mesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesa we want to update
     *   }
     * })
     */
    upsert<T extends MesaUpsertArgs>(args: SelectSubset<T, MesaUpsertArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaCountArgs} args - Arguments to filter Mesas to count.
     * @example
     * // Count the number of Mesas
     * const count = await prisma.mesa.count({
     *   where: {
     *     // ... the filter for the Mesas we want to count
     *   }
     * })
    **/
    count<T extends MesaCountArgs>(
      args?: Subset<T, MesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MesaAggregateArgs>(args: Subset<T, MesaAggregateArgs>): Prisma.PrismaPromise<GetMesaAggregateType<T>>

    /**
     * Group by Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaGroupByArgs} args - Group by arguments.
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
      T extends MesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesaGroupByArgs['orderBy'] }
        : { orderBy?: MesaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesa model
   */
  readonly fields: MesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordenes<T extends Mesa$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Mesa$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mesa model
   */
  interface MesaFieldRefs {
    readonly id_mesa: FieldRef<"Mesa", 'Int'>
    readonly estado: FieldRef<"Mesa", 'EstadoMesa'>
  }
    

  // Custom InputTypes
  /**
   * Mesa findUnique
   */
  export type MesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findUniqueOrThrow
   */
  export type MesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findFirst
   */
  export type MesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findFirstOrThrow
   */
  export type MesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findMany
   */
  export type MesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesas to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa create
   */
  export type MesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mesa.
     */
    data: XOR<MesaCreateInput, MesaUncheckedCreateInput>
  }

  /**
   * Mesa createMany
   */
  export type MesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa createManyAndReturn
   */
  export type MesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa update
   */
  export type MesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mesa.
     */
    data: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
    /**
     * Choose, which Mesa to update.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa updateMany
   */
  export type MesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa updateManyAndReturn
   */
  export type MesaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa upsert
   */
  export type MesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mesa to update in case it exists.
     */
    where: MesaWhereUniqueInput
    /**
     * In case the Mesa found by the `where` argument doesn't exist, create a new Mesa with this data.
     */
    create: XOR<MesaCreateInput, MesaUncheckedCreateInput>
    /**
     * In case the Mesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
  }

  /**
   * Mesa delete
   */
  export type MesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter which Mesa to delete.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa deleteMany
   */
  export type MesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesas to delete
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to delete.
     */
    limit?: number
  }

  /**
   * Mesa.ordenes
   */
  export type Mesa$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    cursor?: OrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Mesa without action
   */
  export type MesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
  }


  /**
   * Model Orden
   */

  export type AggregateOrden = {
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  export type OrdenAvgAggregateOutputType = {
    id_orden: number | null
    id_mesero: number | null
    id_mesa: number | null
    precio_total: Decimal | null
  }

  export type OrdenSumAggregateOutputType = {
    id_orden: number | null
    id_mesero: number | null
    id_mesa: number | null
    precio_total: Decimal | null
  }

  export type OrdenMinAggregateOutputType = {
    id_orden: number | null
    id_mesero: number | null
    id_mesa: number | null
    precio_total: Decimal | null
    estado: $Enums.EstadoOrden | null
    fecha_hora: Date | null
  }

  export type OrdenMaxAggregateOutputType = {
    id_orden: number | null
    id_mesero: number | null
    id_mesa: number | null
    precio_total: Decimal | null
    estado: $Enums.EstadoOrden | null
    fecha_hora: Date | null
  }

  export type OrdenCountAggregateOutputType = {
    id_orden: number
    id_mesero: number
    id_mesa: number
    precio_total: number
    estado: number
    fecha_hora: number
    _all: number
  }


  export type OrdenAvgAggregateInputType = {
    id_orden?: true
    id_mesero?: true
    id_mesa?: true
    precio_total?: true
  }

  export type OrdenSumAggregateInputType = {
    id_orden?: true
    id_mesero?: true
    id_mesa?: true
    precio_total?: true
  }

  export type OrdenMinAggregateInputType = {
    id_orden?: true
    id_mesero?: true
    id_mesa?: true
    precio_total?: true
    estado?: true
    fecha_hora?: true
  }

  export type OrdenMaxAggregateInputType = {
    id_orden?: true
    id_mesero?: true
    id_mesa?: true
    precio_total?: true
    estado?: true
    fecha_hora?: true
  }

  export type OrdenCountAggregateInputType = {
    id_orden?: true
    id_mesero?: true
    id_mesa?: true
    precio_total?: true
    estado?: true
    fecha_hora?: true
    _all?: true
  }

  export type OrdenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orden to aggregate.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ordens
    **/
    _count?: true | OrdenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenMaxAggregateInputType
  }

  export type GetOrdenAggregateType<T extends OrdenAggregateArgs> = {
        [P in keyof T & keyof AggregateOrden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrden[P]>
      : GetScalarType<T[P], AggregateOrden[P]>
  }




  export type OrdenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithAggregationInput | OrdenOrderByWithAggregationInput[]
    by: OrdenScalarFieldEnum[] | OrdenScalarFieldEnum
    having?: OrdenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCountAggregateInputType | true
    _avg?: OrdenAvgAggregateInputType
    _sum?: OrdenSumAggregateInputType
    _min?: OrdenMinAggregateInputType
    _max?: OrdenMaxAggregateInputType
  }

  export type OrdenGroupByOutputType = {
    id_orden: number
    id_mesero: number
    id_mesa: number
    precio_total: Decimal
    estado: $Enums.EstadoOrden
    fecha_hora: Date
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  type GetOrdenGroupByPayload<T extends OrdenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenGroupByOutputType[P]>
        }
      >
    >


  export type OrdenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orden?: boolean
    id_mesero?: boolean
    id_mesa?: boolean
    precio_total?: boolean
    estado?: boolean
    fecha_hora?: boolean
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
    items?: boolean | Orden$itemsArgs<ExtArgs>
    venta?: boolean | Orden$ventaArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orden?: boolean
    id_mesero?: boolean
    id_mesa?: boolean
    precio_total?: boolean
    estado?: boolean
    fecha_hora?: boolean
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orden?: boolean
    id_mesero?: boolean
    id_mesa?: boolean
    precio_total?: boolean
    estado?: boolean
    fecha_hora?: boolean
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectScalar = {
    id_orden?: boolean
    id_mesero?: boolean
    id_mesa?: boolean
    precio_total?: boolean
    estado?: boolean
    fecha_hora?: boolean
  }

  export type OrdenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_orden" | "id_mesero" | "id_mesa" | "precio_total" | "estado" | "fecha_hora", ExtArgs["result"]["orden"]>
  export type OrdenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
    items?: boolean | Orden$itemsArgs<ExtArgs>
    venta?: boolean | Orden$ventaArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }
  export type OrdenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    mesa?: boolean | MesaDefaultArgs<ExtArgs>
  }

  export type $OrdenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orden"
    objects: {
      mesero: Prisma.$UsuarioPayload<ExtArgs>
      mesa: Prisma.$MesaPayload<ExtArgs>
      items: Prisma.$OrdenItemPayload<ExtArgs>[]
      venta: Prisma.$VentaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_orden: number
      id_mesero: number
      id_mesa: number
      precio_total: Prisma.Decimal
      estado: $Enums.EstadoOrden
      fecha_hora: Date
    }, ExtArgs["result"]["orden"]>
    composites: {}
  }

  type OrdenGetPayload<S extends boolean | null | undefined | OrdenDefaultArgs> = $Result.GetResult<Prisma.$OrdenPayload, S>

  type OrdenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCountAggregateInputType | true
    }

  export interface OrdenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orden'], meta: { name: 'Orden' } }
    /**
     * Find zero or one Orden that matches the filter.
     * @param {OrdenFindUniqueArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenFindUniqueArgs>(args: SelectSubset<T, OrdenFindUniqueArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenFindUniqueOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenFindFirstArgs>(args?: SelectSubset<T, OrdenFindFirstArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ordens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ordens
     * const ordens = await prisma.orden.findMany()
     * 
     * // Get first 10 Ordens
     * const ordens = await prisma.orden.findMany({ take: 10 })
     * 
     * // Only select the `id_orden`
     * const ordenWithId_ordenOnly = await prisma.orden.findMany({ select: { id_orden: true } })
     * 
     */
    findMany<T extends OrdenFindManyArgs>(args?: SelectSubset<T, OrdenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orden.
     * @param {OrdenCreateArgs} args - Arguments to create a Orden.
     * @example
     * // Create one Orden
     * const Orden = await prisma.orden.create({
     *   data: {
     *     // ... data to create a Orden
     *   }
     * })
     * 
     */
    create<T extends OrdenCreateArgs>(args: SelectSubset<T, OrdenCreateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ordens.
     * @param {OrdenCreateManyArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCreateManyArgs>(args?: SelectSubset<T, OrdenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ordens and returns the data saved in the database.
     * @param {OrdenCreateManyAndReturnArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ordens and only return the `id_orden`
     * const ordenWithId_ordenOnly = await prisma.orden.createManyAndReturn({
     *   select: { id_orden: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orden.
     * @param {OrdenDeleteArgs} args - Arguments to delete one Orden.
     * @example
     * // Delete one Orden
     * const Orden = await prisma.orden.delete({
     *   where: {
     *     // ... filter to delete one Orden
     *   }
     * })
     * 
     */
    delete<T extends OrdenDeleteArgs>(args: SelectSubset<T, OrdenDeleteArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orden.
     * @param {OrdenUpdateArgs} args - Arguments to update one Orden.
     * @example
     * // Update one Orden
     * const orden = await prisma.orden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenUpdateArgs>(args: SelectSubset<T, OrdenUpdateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ordens.
     * @param {OrdenDeleteManyArgs} args - Arguments to filter Ordens to delete.
     * @example
     * // Delete a few Ordens
     * const { count } = await prisma.orden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenDeleteManyArgs>(args?: SelectSubset<T, OrdenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenUpdateManyArgs>(args: SelectSubset<T, OrdenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens and returns the data updated in the database.
     * @param {OrdenUpdateManyAndReturnArgs} args - Arguments to update many Ordens.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ordens and only return the `id_orden`
     * const ordenWithId_ordenOnly = await prisma.orden.updateManyAndReturn({
     *   select: { id_orden: true },
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
    updateManyAndReturn<T extends OrdenUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orden.
     * @param {OrdenUpsertArgs} args - Arguments to update or create a Orden.
     * @example
     * // Update or create a Orden
     * const orden = await prisma.orden.upsert({
     *   create: {
     *     // ... data to create a Orden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orden we want to update
     *   }
     * })
     */
    upsert<T extends OrdenUpsertArgs>(args: SelectSubset<T, OrdenUpsertArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCountArgs} args - Arguments to filter Ordens to count.
     * @example
     * // Count the number of Ordens
     * const count = await prisma.orden.count({
     *   where: {
     *     // ... the filter for the Ordens we want to count
     *   }
     * })
    **/
    count<T extends OrdenCountArgs>(
      args?: Subset<T, OrdenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenAggregateArgs>(args: Subset<T, OrdenAggregateArgs>): Prisma.PrismaPromise<GetOrdenAggregateType<T>>

    /**
     * Group by Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenGroupByArgs} args - Group by arguments.
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
      T extends OrdenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenGroupByArgs['orderBy'] }
        : { orderBy?: OrdenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orden model
   */
  readonly fields: OrdenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesero<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mesa<T extends MesaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MesaDefaultArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Orden$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orden$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venta<T extends Orden$ventaArgs<ExtArgs> = {}>(args?: Subset<T, Orden$ventaArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orden model
   */
  interface OrdenFieldRefs {
    readonly id_orden: FieldRef<"Orden", 'Int'>
    readonly id_mesero: FieldRef<"Orden", 'Int'>
    readonly id_mesa: FieldRef<"Orden", 'Int'>
    readonly precio_total: FieldRef<"Orden", 'Decimal'>
    readonly estado: FieldRef<"Orden", 'EstadoOrden'>
    readonly fecha_hora: FieldRef<"Orden", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orden findUnique
   */
  export type OrdenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findUniqueOrThrow
   */
  export type OrdenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findFirst
   */
  export type OrdenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findFirstOrThrow
   */
  export type OrdenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findMany
   */
  export type OrdenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Ordens to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden create
   */
  export type OrdenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to create a Orden.
     */
    data: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
  }

  /**
   * Orden createMany
   */
  export type OrdenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orden createManyAndReturn
   */
  export type OrdenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orden update
   */
  export type OrdenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to update a Orden.
     */
    data: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
    /**
     * Choose, which Orden to update.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden updateMany
   */
  export type OrdenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
  }

  /**
   * Orden updateManyAndReturn
   */
  export type OrdenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orden upsert
   */
  export type OrdenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The filter to search for the Orden to update in case it exists.
     */
    where: OrdenWhereUniqueInput
    /**
     * In case the Orden found by the `where` argument doesn't exist, create a new Orden with this data.
     */
    create: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
    /**
     * In case the Orden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
  }

  /**
   * Orden delete
   */
  export type OrdenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter which Orden to delete.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden deleteMany
   */
  export type OrdenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ordens to delete
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to delete.
     */
    limit?: number
  }

  /**
   * Orden.items
   */
  export type Orden$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    where?: OrdenItemWhereInput
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    cursor?: OrdenItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * Orden.venta
   */
  export type Orden$ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
  }

  /**
   * Orden without action
   */
  export type OrdenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
  }


  /**
   * Model OrdenItem
   */

  export type AggregateOrdenItem = {
    _count: OrdenItemCountAggregateOutputType | null
    _avg: OrdenItemAvgAggregateOutputType | null
    _sum: OrdenItemSumAggregateOutputType | null
    _min: OrdenItemMinAggregateOutputType | null
    _max: OrdenItemMaxAggregateOutputType | null
  }

  export type OrdenItemAvgAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_plato: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type OrdenItemSumAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_plato: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type OrdenItemMinAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_plato: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type OrdenItemMaxAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_plato: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
  }

  export type OrdenItemCountAggregateOutputType = {
    id: number
    id_orden: number
    id_plato: number
    cantidad: number
    precio_unitario: number
    _all: number
  }


  export type OrdenItemAvgAggregateInputType = {
    id?: true
    id_orden?: true
    id_plato?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type OrdenItemSumAggregateInputType = {
    id?: true
    id_orden?: true
    id_plato?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type OrdenItemMinAggregateInputType = {
    id?: true
    id_orden?: true
    id_plato?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type OrdenItemMaxAggregateInputType = {
    id?: true
    id_orden?: true
    id_plato?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type OrdenItemCountAggregateInputType = {
    id?: true
    id_orden?: true
    id_plato?: true
    cantidad?: true
    precio_unitario?: true
    _all?: true
  }

  export type OrdenItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenItem to aggregate.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenItems
    **/
    _count?: true | OrdenItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenItemMaxAggregateInputType
  }

  export type GetOrdenItemAggregateType<T extends OrdenItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenItem[P]>
      : GetScalarType<T[P], AggregateOrdenItem[P]>
  }




  export type OrdenItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenItemWhereInput
    orderBy?: OrdenItemOrderByWithAggregationInput | OrdenItemOrderByWithAggregationInput[]
    by: OrdenItemScalarFieldEnum[] | OrdenItemScalarFieldEnum
    having?: OrdenItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenItemCountAggregateInputType | true
    _avg?: OrdenItemAvgAggregateInputType
    _sum?: OrdenItemSumAggregateInputType
    _min?: OrdenItemMinAggregateInputType
    _max?: OrdenItemMaxAggregateInputType
  }

  export type OrdenItemGroupByOutputType = {
    id: number
    id_orden: number
    id_plato: number
    cantidad: number
    precio_unitario: Decimal
    _count: OrdenItemCountAggregateOutputType | null
    _avg: OrdenItemAvgAggregateOutputType | null
    _sum: OrdenItemSumAggregateOutputType | null
    _min: OrdenItemMinAggregateOutputType | null
    _max: OrdenItemMaxAggregateOutputType | null
  }

  type GetOrdenItemGroupByPayload<T extends OrdenItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenItemGroupByOutputType[P]>
        }
      >
    >


  export type OrdenItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orden?: boolean
    id_plato?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    plato?: boolean | CartaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenItem"]>

  export type OrdenItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orden?: boolean
    id_plato?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    plato?: boolean | CartaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenItem"]>

  export type OrdenItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orden?: boolean
    id_plato?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    plato?: boolean | CartaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenItem"]>

  export type OrdenItemSelectScalar = {
    id?: boolean
    id_orden?: boolean
    id_plato?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
  }

  export type OrdenItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_orden" | "id_plato" | "cantidad" | "precio_unitario", ExtArgs["result"]["ordenItem"]>
  export type OrdenItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    plato?: boolean | CartaDefaultArgs<ExtArgs>
  }
  export type OrdenItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    plato?: boolean | CartaDefaultArgs<ExtArgs>
  }
  export type OrdenItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    plato?: boolean | CartaDefaultArgs<ExtArgs>
  }

  export type $OrdenItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenItem"
    objects: {
      orden: Prisma.$OrdenPayload<ExtArgs>
      plato: Prisma.$CartaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_orden: number
      id_plato: number
      cantidad: number
      precio_unitario: Prisma.Decimal
    }, ExtArgs["result"]["ordenItem"]>
    composites: {}
  }

  type OrdenItemGetPayload<S extends boolean | null | undefined | OrdenItemDefaultArgs> = $Result.GetResult<Prisma.$OrdenItemPayload, S>

  type OrdenItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenItemCountAggregateInputType | true
    }

  export interface OrdenItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenItem'], meta: { name: 'OrdenItem' } }
    /**
     * Find zero or one OrdenItem that matches the filter.
     * @param {OrdenItemFindUniqueArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenItemFindUniqueArgs>(args: SelectSubset<T, OrdenItemFindUniqueArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenItemFindUniqueOrThrowArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemFindFirstArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenItemFindFirstArgs>(args?: SelectSubset<T, OrdenItemFindFirstArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemFindFirstOrThrowArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenItems
     * const ordenItems = await prisma.ordenItem.findMany()
     * 
     * // Get first 10 OrdenItems
     * const ordenItems = await prisma.ordenItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenItemWithIdOnly = await prisma.ordenItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenItemFindManyArgs>(args?: SelectSubset<T, OrdenItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenItem.
     * @param {OrdenItemCreateArgs} args - Arguments to create a OrdenItem.
     * @example
     * // Create one OrdenItem
     * const OrdenItem = await prisma.ordenItem.create({
     *   data: {
     *     // ... data to create a OrdenItem
     *   }
     * })
     * 
     */
    create<T extends OrdenItemCreateArgs>(args: SelectSubset<T, OrdenItemCreateArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenItems.
     * @param {OrdenItemCreateManyArgs} args - Arguments to create many OrdenItems.
     * @example
     * // Create many OrdenItems
     * const ordenItem = await prisma.ordenItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenItemCreateManyArgs>(args?: SelectSubset<T, OrdenItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenItems and returns the data saved in the database.
     * @param {OrdenItemCreateManyAndReturnArgs} args - Arguments to create many OrdenItems.
     * @example
     * // Create many OrdenItems
     * const ordenItem = await prisma.ordenItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenItems and only return the `id`
     * const ordenItemWithIdOnly = await prisma.ordenItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenItem.
     * @param {OrdenItemDeleteArgs} args - Arguments to delete one OrdenItem.
     * @example
     * // Delete one OrdenItem
     * const OrdenItem = await prisma.ordenItem.delete({
     *   where: {
     *     // ... filter to delete one OrdenItem
     *   }
     * })
     * 
     */
    delete<T extends OrdenItemDeleteArgs>(args: SelectSubset<T, OrdenItemDeleteArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenItem.
     * @param {OrdenItemUpdateArgs} args - Arguments to update one OrdenItem.
     * @example
     * // Update one OrdenItem
     * const ordenItem = await prisma.ordenItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenItemUpdateArgs>(args: SelectSubset<T, OrdenItemUpdateArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenItems.
     * @param {OrdenItemDeleteManyArgs} args - Arguments to filter OrdenItems to delete.
     * @example
     * // Delete a few OrdenItems
     * const { count } = await prisma.ordenItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenItemDeleteManyArgs>(args?: SelectSubset<T, OrdenItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenItems
     * const ordenItem = await prisma.ordenItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenItemUpdateManyArgs>(args: SelectSubset<T, OrdenItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenItems and returns the data updated in the database.
     * @param {OrdenItemUpdateManyAndReturnArgs} args - Arguments to update many OrdenItems.
     * @example
     * // Update many OrdenItems
     * const ordenItem = await prisma.ordenItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenItems and only return the `id`
     * const ordenItemWithIdOnly = await prisma.ordenItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdenItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenItem.
     * @param {OrdenItemUpsertArgs} args - Arguments to update or create a OrdenItem.
     * @example
     * // Update or create a OrdenItem
     * const ordenItem = await prisma.ordenItem.upsert({
     *   create: {
     *     // ... data to create a OrdenItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenItem we want to update
     *   }
     * })
     */
    upsert<T extends OrdenItemUpsertArgs>(args: SelectSubset<T, OrdenItemUpsertArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemCountArgs} args - Arguments to filter OrdenItems to count.
     * @example
     * // Count the number of OrdenItems
     * const count = await prisma.ordenItem.count({
     *   where: {
     *     // ... the filter for the OrdenItems we want to count
     *   }
     * })
    **/
    count<T extends OrdenItemCountArgs>(
      args?: Subset<T, OrdenItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenItemAggregateArgs>(args: Subset<T, OrdenItemAggregateArgs>): Prisma.PrismaPromise<GetOrdenItemAggregateType<T>>

    /**
     * Group by OrdenItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemGroupByArgs} args - Group by arguments.
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
      T extends OrdenItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenItemGroupByArgs['orderBy'] }
        : { orderBy?: OrdenItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenItem model
   */
  readonly fields: OrdenItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden<T extends OrdenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenDefaultArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plato<T extends CartaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartaDefaultArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrdenItem model
   */
  interface OrdenItemFieldRefs {
    readonly id: FieldRef<"OrdenItem", 'Int'>
    readonly id_orden: FieldRef<"OrdenItem", 'Int'>
    readonly id_plato: FieldRef<"OrdenItem", 'Int'>
    readonly cantidad: FieldRef<"OrdenItem", 'Int'>
    readonly precio_unitario: FieldRef<"OrdenItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * OrdenItem findUnique
   */
  export type OrdenItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem findUniqueOrThrow
   */
  export type OrdenItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem findFirst
   */
  export type OrdenItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenItems.
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenItems.
     */
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * OrdenItem findFirstOrThrow
   */
  export type OrdenItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenItems.
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenItems.
     */
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * OrdenItem findMany
   */
  export type OrdenItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItems to fetch.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenItems.
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenItems.
     */
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * OrdenItem create
   */
  export type OrdenItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenItem.
     */
    data: XOR<OrdenItemCreateInput, OrdenItemUncheckedCreateInput>
  }

  /**
   * OrdenItem createMany
   */
  export type OrdenItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenItems.
     */
    data: OrdenItemCreateManyInput | OrdenItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenItem createManyAndReturn
   */
  export type OrdenItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenItems.
     */
    data: OrdenItemCreateManyInput | OrdenItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenItem update
   */
  export type OrdenItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenItem.
     */
    data: XOR<OrdenItemUpdateInput, OrdenItemUncheckedUpdateInput>
    /**
     * Choose, which OrdenItem to update.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem updateMany
   */
  export type OrdenItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenItems.
     */
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyInput>
    /**
     * Filter which OrdenItems to update
     */
    where?: OrdenItemWhereInput
    /**
     * Limit how many OrdenItems to update.
     */
    limit?: number
  }

  /**
   * OrdenItem updateManyAndReturn
   */
  export type OrdenItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * The data used to update OrdenItems.
     */
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyInput>
    /**
     * Filter which OrdenItems to update
     */
    where?: OrdenItemWhereInput
    /**
     * Limit how many OrdenItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenItem upsert
   */
  export type OrdenItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenItem to update in case it exists.
     */
    where: OrdenItemWhereUniqueInput
    /**
     * In case the OrdenItem found by the `where` argument doesn't exist, create a new OrdenItem with this data.
     */
    create: XOR<OrdenItemCreateInput, OrdenItemUncheckedCreateInput>
    /**
     * In case the OrdenItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenItemUpdateInput, OrdenItemUncheckedUpdateInput>
  }

  /**
   * OrdenItem delete
   */
  export type OrdenItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter which OrdenItem to delete.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem deleteMany
   */
  export type OrdenItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenItems to delete
     */
    where?: OrdenItemWhereInput
    /**
     * Limit how many OrdenItems to delete.
     */
    limit?: number
  }

  /**
   * OrdenItem without action
   */
  export type OrdenItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
  }


  /**
   * Model Jornada
   */

  export type AggregateJornada = {
    _count: JornadaCountAggregateOutputType | null
    _avg: JornadaAvgAggregateOutputType | null
    _sum: JornadaSumAggregateOutputType | null
    _min: JornadaMinAggregateOutputType | null
    _max: JornadaMaxAggregateOutputType | null
  }

  export type JornadaAvgAggregateOutputType = {
    id: number | null
  }

  export type JornadaSumAggregateOutputType = {
    id: number | null
  }

  export type JornadaMinAggregateOutputType = {
    id: number | null
    fecha_apertura: Date | null
    fecha_cierre: Date | null
    estado: $Enums.EstadoJornada | null
  }

  export type JornadaMaxAggregateOutputType = {
    id: number | null
    fecha_apertura: Date | null
    fecha_cierre: Date | null
    estado: $Enums.EstadoJornada | null
  }

  export type JornadaCountAggregateOutputType = {
    id: number
    fecha_apertura: number
    fecha_cierre: number
    estado: number
    _all: number
  }


  export type JornadaAvgAggregateInputType = {
    id?: true
  }

  export type JornadaSumAggregateInputType = {
    id?: true
  }

  export type JornadaMinAggregateInputType = {
    id?: true
    fecha_apertura?: true
    fecha_cierre?: true
    estado?: true
  }

  export type JornadaMaxAggregateInputType = {
    id?: true
    fecha_apertura?: true
    fecha_cierre?: true
    estado?: true
  }

  export type JornadaCountAggregateInputType = {
    id?: true
    fecha_apertura?: true
    fecha_cierre?: true
    estado?: true
    _all?: true
  }

  export type JornadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jornada to aggregate.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jornadas
    **/
    _count?: true | JornadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JornadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JornadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JornadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JornadaMaxAggregateInputType
  }

  export type GetJornadaAggregateType<T extends JornadaAggregateArgs> = {
        [P in keyof T & keyof AggregateJornada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJornada[P]>
      : GetScalarType<T[P], AggregateJornada[P]>
  }




  export type JornadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithAggregationInput | JornadaOrderByWithAggregationInput[]
    by: JornadaScalarFieldEnum[] | JornadaScalarFieldEnum
    having?: JornadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JornadaCountAggregateInputType | true
    _avg?: JornadaAvgAggregateInputType
    _sum?: JornadaSumAggregateInputType
    _min?: JornadaMinAggregateInputType
    _max?: JornadaMaxAggregateInputType
  }

  export type JornadaGroupByOutputType = {
    id: number
    fecha_apertura: Date
    fecha_cierre: Date | null
    estado: $Enums.EstadoJornada
    _count: JornadaCountAggregateOutputType | null
    _avg: JornadaAvgAggregateOutputType | null
    _sum: JornadaSumAggregateOutputType | null
    _min: JornadaMinAggregateOutputType | null
    _max: JornadaMaxAggregateOutputType | null
  }

  type GetJornadaGroupByPayload<T extends JornadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JornadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JornadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JornadaGroupByOutputType[P]>
            : GetScalarType<T[P], JornadaGroupByOutputType[P]>
        }
      >
    >


  export type JornadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_apertura?: boolean
    fecha_cierre?: boolean
    estado?: boolean
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_apertura?: boolean
    fecha_cierre?: boolean
    estado?: boolean
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_apertura?: boolean
    fecha_cierre?: boolean
    estado?: boolean
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectScalar = {
    id?: boolean
    fecha_apertura?: boolean
    fecha_cierre?: boolean
    estado?: boolean
  }

  export type JornadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha_apertura" | "fecha_cierre" | "estado", ExtArgs["result"]["jornada"]>

  export type $JornadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jornada"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha_apertura: Date
      fecha_cierre: Date | null
      estado: $Enums.EstadoJornada
    }, ExtArgs["result"]["jornada"]>
    composites: {}
  }

  type JornadaGetPayload<S extends boolean | null | undefined | JornadaDefaultArgs> = $Result.GetResult<Prisma.$JornadaPayload, S>

  type JornadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JornadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JornadaCountAggregateInputType | true
    }

  export interface JornadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jornada'], meta: { name: 'Jornada' } }
    /**
     * Find zero or one Jornada that matches the filter.
     * @param {JornadaFindUniqueArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JornadaFindUniqueArgs>(args: SelectSubset<T, JornadaFindUniqueArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jornada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JornadaFindUniqueOrThrowArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JornadaFindUniqueOrThrowArgs>(args: SelectSubset<T, JornadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jornada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindFirstArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JornadaFindFirstArgs>(args?: SelectSubset<T, JornadaFindFirstArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jornada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindFirstOrThrowArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JornadaFindFirstOrThrowArgs>(args?: SelectSubset<T, JornadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jornadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jornadas
     * const jornadas = await prisma.jornada.findMany()
     * 
     * // Get first 10 Jornadas
     * const jornadas = await prisma.jornada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jornadaWithIdOnly = await prisma.jornada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JornadaFindManyArgs>(args?: SelectSubset<T, JornadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jornada.
     * @param {JornadaCreateArgs} args - Arguments to create a Jornada.
     * @example
     * // Create one Jornada
     * const Jornada = await prisma.jornada.create({
     *   data: {
     *     // ... data to create a Jornada
     *   }
     * })
     * 
     */
    create<T extends JornadaCreateArgs>(args: SelectSubset<T, JornadaCreateArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jornadas.
     * @param {JornadaCreateManyArgs} args - Arguments to create many Jornadas.
     * @example
     * // Create many Jornadas
     * const jornada = await prisma.jornada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JornadaCreateManyArgs>(args?: SelectSubset<T, JornadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jornadas and returns the data saved in the database.
     * @param {JornadaCreateManyAndReturnArgs} args - Arguments to create many Jornadas.
     * @example
     * // Create many Jornadas
     * const jornada = await prisma.jornada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jornadas and only return the `id`
     * const jornadaWithIdOnly = await prisma.jornada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JornadaCreateManyAndReturnArgs>(args?: SelectSubset<T, JornadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jornada.
     * @param {JornadaDeleteArgs} args - Arguments to delete one Jornada.
     * @example
     * // Delete one Jornada
     * const Jornada = await prisma.jornada.delete({
     *   where: {
     *     // ... filter to delete one Jornada
     *   }
     * })
     * 
     */
    delete<T extends JornadaDeleteArgs>(args: SelectSubset<T, JornadaDeleteArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jornada.
     * @param {JornadaUpdateArgs} args - Arguments to update one Jornada.
     * @example
     * // Update one Jornada
     * const jornada = await prisma.jornada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JornadaUpdateArgs>(args: SelectSubset<T, JornadaUpdateArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jornadas.
     * @param {JornadaDeleteManyArgs} args - Arguments to filter Jornadas to delete.
     * @example
     * // Delete a few Jornadas
     * const { count } = await prisma.jornada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JornadaDeleteManyArgs>(args?: SelectSubset<T, JornadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jornadas
     * const jornada = await prisma.jornada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JornadaUpdateManyArgs>(args: SelectSubset<T, JornadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jornadas and returns the data updated in the database.
     * @param {JornadaUpdateManyAndReturnArgs} args - Arguments to update many Jornadas.
     * @example
     * // Update many Jornadas
     * const jornada = await prisma.jornada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jornadas and only return the `id`
     * const jornadaWithIdOnly = await prisma.jornada.updateManyAndReturn({
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
    updateManyAndReturn<T extends JornadaUpdateManyAndReturnArgs>(args: SelectSubset<T, JornadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jornada.
     * @param {JornadaUpsertArgs} args - Arguments to update or create a Jornada.
     * @example
     * // Update or create a Jornada
     * const jornada = await prisma.jornada.upsert({
     *   create: {
     *     // ... data to create a Jornada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jornada we want to update
     *   }
     * })
     */
    upsert<T extends JornadaUpsertArgs>(args: SelectSubset<T, JornadaUpsertArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaCountArgs} args - Arguments to filter Jornadas to count.
     * @example
     * // Count the number of Jornadas
     * const count = await prisma.jornada.count({
     *   where: {
     *     // ... the filter for the Jornadas we want to count
     *   }
     * })
    **/
    count<T extends JornadaCountArgs>(
      args?: Subset<T, JornadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JornadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JornadaAggregateArgs>(args: Subset<T, JornadaAggregateArgs>): Prisma.PrismaPromise<GetJornadaAggregateType<T>>

    /**
     * Group by Jornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaGroupByArgs} args - Group by arguments.
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
      T extends JornadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JornadaGroupByArgs['orderBy'] }
        : { orderBy?: JornadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JornadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJornadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jornada model
   */
  readonly fields: JornadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jornada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JornadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Jornada model
   */
  interface JornadaFieldRefs {
    readonly id: FieldRef<"Jornada", 'Int'>
    readonly fecha_apertura: FieldRef<"Jornada", 'DateTime'>
    readonly fecha_cierre: FieldRef<"Jornada", 'DateTime'>
    readonly estado: FieldRef<"Jornada", 'EstadoJornada'>
  }
    

  // Custom InputTypes
  /**
   * Jornada findUnique
   */
  export type JornadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada findUniqueOrThrow
   */
  export type JornadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada findFirst
   */
  export type JornadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada findFirstOrThrow
   */
  export type JornadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada findMany
   */
  export type JornadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Filter, which Jornadas to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada create
   */
  export type JornadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data needed to create a Jornada.
     */
    data?: XOR<JornadaCreateInput, JornadaUncheckedCreateInput>
  }

  /**
   * Jornada createMany
   */
  export type JornadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jornadas.
     */
    data: JornadaCreateManyInput | JornadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jornada createManyAndReturn
   */
  export type JornadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data used to create many Jornadas.
     */
    data: JornadaCreateManyInput | JornadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jornada update
   */
  export type JornadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data needed to update a Jornada.
     */
    data: XOR<JornadaUpdateInput, JornadaUncheckedUpdateInput>
    /**
     * Choose, which Jornada to update.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada updateMany
   */
  export type JornadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jornadas.
     */
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyInput>
    /**
     * Filter which Jornadas to update
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to update.
     */
    limit?: number
  }

  /**
   * Jornada updateManyAndReturn
   */
  export type JornadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data used to update Jornadas.
     */
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyInput>
    /**
     * Filter which Jornadas to update
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to update.
     */
    limit?: number
  }

  /**
   * Jornada upsert
   */
  export type JornadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The filter to search for the Jornada to update in case it exists.
     */
    where: JornadaWhereUniqueInput
    /**
     * In case the Jornada found by the `where` argument doesn't exist, create a new Jornada with this data.
     */
    create: XOR<JornadaCreateInput, JornadaUncheckedCreateInput>
    /**
     * In case the Jornada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JornadaUpdateInput, JornadaUncheckedUpdateInput>
  }

  /**
   * Jornada delete
   */
  export type JornadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Filter which Jornada to delete.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada deleteMany
   */
  export type JornadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jornadas to delete
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to delete.
     */
    limit?: number
  }

  /**
   * Jornada without action
   */
  export type JornadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_cajero: number | null
    monto: Decimal | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_cajero: number | null
    monto: Decimal | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_cajero: number | null
    monto: Decimal | null
    metodo_pago: string | null
    fecha: Date | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    id_orden: number | null
    id_cajero: number | null
    monto: Decimal | null
    metodo_pago: string | null
    fecha: Date | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    id_orden: number
    id_cajero: number
    monto: number
    metodo_pago: number
    fecha: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    id_orden?: true
    id_cajero?: true
    monto?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    id_orden?: true
    id_cajero?: true
    monto?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    id_orden?: true
    id_cajero?: true
    monto?: true
    metodo_pago?: true
    fecha?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    id_orden?: true
    id_cajero?: true
    monto?: true
    metodo_pago?: true
    fecha?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    id_orden?: true
    id_cajero?: true
    monto?: true
    metodo_pago?: true
    fecha?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    id_orden: number
    id_cajero: number
    monto: Decimal
    metodo_pago: string
    fecha: Date
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orden?: boolean
    id_cajero?: boolean
    monto?: boolean
    metodo_pago?: boolean
    fecha?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    cajero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orden?: boolean
    id_cajero?: boolean
    monto?: boolean
    metodo_pago?: boolean
    fecha?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    cajero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orden?: boolean
    id_cajero?: boolean
    monto?: boolean
    metodo_pago?: boolean
    fecha?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    cajero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    id_orden?: boolean
    id_cajero?: boolean
    monto?: boolean
    metodo_pago?: boolean
    fecha?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_orden" | "id_cajero" | "monto" | "metodo_pago" | "fecha", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    cajero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    cajero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    cajero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      orden: Prisma.$OrdenPayload<ExtArgs>
      cajero: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_orden: number
      id_cajero: number
      monto: Prisma.Decimal
      metodo_pago: string
      fecha: Date
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
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
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
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
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden<T extends OrdenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenDefaultArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cajero<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly id_orden: FieldRef<"Venta", 'Int'>
    readonly id_cajero: FieldRef<"Venta", 'Int'>
    readonly monto: FieldRef<"Venta", 'Decimal'>
    readonly metodo_pago: FieldRef<"Venta", 'String'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model Actividad
   */

  export type AggregateActividad = {
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  export type ActividadAvgAggregateOutputType = {
    id: number | null
  }

  export type ActividadSumAggregateOutputType = {
    id: number | null
  }

  export type ActividadMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    descripcion: string | null
    fecha: Date | null
  }

  export type ActividadMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    descripcion: string | null
    fecha: Date | null
  }

  export type ActividadCountAggregateOutputType = {
    id: number
    tipo: number
    descripcion: number
    fecha: number
    _all: number
  }


  export type ActividadAvgAggregateInputType = {
    id?: true
  }

  export type ActividadSumAggregateInputType = {
    id?: true
  }

  export type ActividadMinAggregateInputType = {
    id?: true
    tipo?: true
    descripcion?: true
    fecha?: true
  }

  export type ActividadMaxAggregateInputType = {
    id?: true
    tipo?: true
    descripcion?: true
    fecha?: true
  }

  export type ActividadCountAggregateInputType = {
    id?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    _all?: true
  }

  export type ActividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actividad to aggregate.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actividads
    **/
    _count?: true | ActividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActividadMaxAggregateInputType
  }

  export type GetActividadAggregateType<T extends ActividadAggregateArgs> = {
        [P in keyof T & keyof AggregateActividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActividad[P]>
      : GetScalarType<T[P], AggregateActividad[P]>
  }




  export type ActividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActividadWhereInput
    orderBy?: ActividadOrderByWithAggregationInput | ActividadOrderByWithAggregationInput[]
    by: ActividadScalarFieldEnum[] | ActividadScalarFieldEnum
    having?: ActividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActividadCountAggregateInputType | true
    _avg?: ActividadAvgAggregateInputType
    _sum?: ActividadSumAggregateInputType
    _min?: ActividadMinAggregateInputType
    _max?: ActividadMaxAggregateInputType
  }

  export type ActividadGroupByOutputType = {
    id: number
    tipo: string
    descripcion: string
    fecha: Date
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  type GetActividadGroupByPayload<T extends ActividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActividadGroupByOutputType[P]>
            : GetScalarType<T[P], ActividadGroupByOutputType[P]>
        }
      >
    >


  export type ActividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectScalar = {
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
  }

  export type ActividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "descripcion" | "fecha", ExtArgs["result"]["actividad"]>

  export type $ActividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actividad"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      descripcion: string
      fecha: Date
    }, ExtArgs["result"]["actividad"]>
    composites: {}
  }

  type ActividadGetPayload<S extends boolean | null | undefined | ActividadDefaultArgs> = $Result.GetResult<Prisma.$ActividadPayload, S>

  type ActividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActividadCountAggregateInputType | true
    }

  export interface ActividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actividad'], meta: { name: 'Actividad' } }
    /**
     * Find zero or one Actividad that matches the filter.
     * @param {ActividadFindUniqueArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActividadFindUniqueArgs>(args: SelectSubset<T, ActividadFindUniqueArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActividadFindUniqueOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActividadFindUniqueOrThrowArgs>(args: SelectSubset<T, ActividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindFirstArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActividadFindFirstArgs>(args?: SelectSubset<T, ActividadFindFirstArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindFirstOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActividadFindFirstOrThrowArgs>(args?: SelectSubset<T, ActividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actividads
     * const actividads = await prisma.actividad.findMany()
     * 
     * // Get first 10 Actividads
     * const actividads = await prisma.actividad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actividadWithIdOnly = await prisma.actividad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActividadFindManyArgs>(args?: SelectSubset<T, ActividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actividad.
     * @param {ActividadCreateArgs} args - Arguments to create a Actividad.
     * @example
     * // Create one Actividad
     * const Actividad = await prisma.actividad.create({
     *   data: {
     *     // ... data to create a Actividad
     *   }
     * })
     * 
     */
    create<T extends ActividadCreateArgs>(args: SelectSubset<T, ActividadCreateArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actividads.
     * @param {ActividadCreateManyArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActividadCreateManyArgs>(args?: SelectSubset<T, ActividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actividads and returns the data saved in the database.
     * @param {ActividadCreateManyAndReturnArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actividads and only return the `id`
     * const actividadWithIdOnly = await prisma.actividad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActividadCreateManyAndReturnArgs>(args?: SelectSubset<T, ActividadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actividad.
     * @param {ActividadDeleteArgs} args - Arguments to delete one Actividad.
     * @example
     * // Delete one Actividad
     * const Actividad = await prisma.actividad.delete({
     *   where: {
     *     // ... filter to delete one Actividad
     *   }
     * })
     * 
     */
    delete<T extends ActividadDeleteArgs>(args: SelectSubset<T, ActividadDeleteArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actividad.
     * @param {ActividadUpdateArgs} args - Arguments to update one Actividad.
     * @example
     * // Update one Actividad
     * const actividad = await prisma.actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActividadUpdateArgs>(args: SelectSubset<T, ActividadUpdateArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actividads.
     * @param {ActividadDeleteManyArgs} args - Arguments to filter Actividads to delete.
     * @example
     * // Delete a few Actividads
     * const { count } = await prisma.actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActividadDeleteManyArgs>(args?: SelectSubset<T, ActividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActividadUpdateManyArgs>(args: SelectSubset<T, ActividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads and returns the data updated in the database.
     * @param {ActividadUpdateManyAndReturnArgs} args - Arguments to update many Actividads.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actividads and only return the `id`
     * const actividadWithIdOnly = await prisma.actividad.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActividadUpdateManyAndReturnArgs>(args: SelectSubset<T, ActividadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actividad.
     * @param {ActividadUpsertArgs} args - Arguments to update or create a Actividad.
     * @example
     * // Update or create a Actividad
     * const actividad = await prisma.actividad.upsert({
     *   create: {
     *     // ... data to create a Actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actividad we want to update
     *   }
     * })
     */
    upsert<T extends ActividadUpsertArgs>(args: SelectSubset<T, ActividadUpsertArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadCountArgs} args - Arguments to filter Actividads to count.
     * @example
     * // Count the number of Actividads
     * const count = await prisma.actividad.count({
     *   where: {
     *     // ... the filter for the Actividads we want to count
     *   }
     * })
    **/
    count<T extends ActividadCountArgs>(
      args?: Subset<T, ActividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActividadAggregateArgs>(args: Subset<T, ActividadAggregateArgs>): Prisma.PrismaPromise<GetActividadAggregateType<T>>

    /**
     * Group by Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadGroupByArgs} args - Group by arguments.
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
      T extends ActividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActividadGroupByArgs['orderBy'] }
        : { orderBy?: ActividadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actividad model
   */
  readonly fields: ActividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Actividad model
   */
  interface ActividadFieldRefs {
    readonly id: FieldRef<"Actividad", 'Int'>
    readonly tipo: FieldRef<"Actividad", 'String'>
    readonly descripcion: FieldRef<"Actividad", 'String'>
    readonly fecha: FieldRef<"Actividad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Actividad findUnique
   */
  export type ActividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad findUniqueOrThrow
   */
  export type ActividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad findFirst
   */
  export type ActividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad findFirstOrThrow
   */
  export type ActividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad findMany
   */
  export type ActividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Filter, which Actividads to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad create
   */
  export type ActividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data needed to create a Actividad.
     */
    data: XOR<ActividadCreateInput, ActividadUncheckedCreateInput>
  }

  /**
   * Actividad createMany
   */
  export type ActividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actividads.
     */
    data: ActividadCreateManyInput | ActividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actividad createManyAndReturn
   */
  export type ActividadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data used to create many Actividads.
     */
    data: ActividadCreateManyInput | ActividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actividad update
   */
  export type ActividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data needed to update a Actividad.
     */
    data: XOR<ActividadUpdateInput, ActividadUncheckedUpdateInput>
    /**
     * Choose, which Actividad to update.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad updateMany
   */
  export type ActividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actividads.
     */
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyInput>
    /**
     * Filter which Actividads to update
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to update.
     */
    limit?: number
  }

  /**
   * Actividad updateManyAndReturn
   */
  export type ActividadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data used to update Actividads.
     */
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyInput>
    /**
     * Filter which Actividads to update
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to update.
     */
    limit?: number
  }

  /**
   * Actividad upsert
   */
  export type ActividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The filter to search for the Actividad to update in case it exists.
     */
    where: ActividadWhereUniqueInput
    /**
     * In case the Actividad found by the `where` argument doesn't exist, create a new Actividad with this data.
     */
    create: XOR<ActividadCreateInput, ActividadUncheckedCreateInput>
    /**
     * In case the Actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActividadUpdateInput, ActividadUncheckedUpdateInput>
  }

  /**
   * Actividad delete
   */
  export type ActividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Filter which Actividad to delete.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad deleteMany
   */
  export type ActividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actividads to delete
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to delete.
     */
    limit?: number
  }

  /**
   * Actividad without action
   */
  export type ActividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    rol: 'rol',
    telefono: 'telefono',
    correo: 'correo',
    contrasena: 'contrasena'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CartaScalarFieldEnum: {
    id_plato: 'id_plato',
    nombre: 'nombre',
    ingredientes: 'ingredientes',
    precio: 'precio',
    stock: 'stock'
  };

  export type CartaScalarFieldEnum = (typeof CartaScalarFieldEnum)[keyof typeof CartaScalarFieldEnum]


  export const MesaScalarFieldEnum: {
    id_mesa: 'id_mesa',
    estado: 'estado'
  };

  export type MesaScalarFieldEnum = (typeof MesaScalarFieldEnum)[keyof typeof MesaScalarFieldEnum]


  export const OrdenScalarFieldEnum: {
    id_orden: 'id_orden',
    id_mesero: 'id_mesero',
    id_mesa: 'id_mesa',
    precio_total: 'precio_total',
    estado: 'estado',
    fecha_hora: 'fecha_hora'
  };

  export type OrdenScalarFieldEnum = (typeof OrdenScalarFieldEnum)[keyof typeof OrdenScalarFieldEnum]


  export const OrdenItemScalarFieldEnum: {
    id: 'id',
    id_orden: 'id_orden',
    id_plato: 'id_plato',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario'
  };

  export type OrdenItemScalarFieldEnum = (typeof OrdenItemScalarFieldEnum)[keyof typeof OrdenItemScalarFieldEnum]


  export const JornadaScalarFieldEnum: {
    id: 'id',
    fecha_apertura: 'fecha_apertura',
    fecha_cierre: 'fecha_cierre',
    estado: 'estado'
  };

  export type JornadaScalarFieldEnum = (typeof JornadaScalarFieldEnum)[keyof typeof JornadaScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    id_orden: 'id_orden',
    id_cajero: 'id_cajero',
    monto: 'monto',
    metodo_pago: 'metodo_pago',
    fecha: 'fecha'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const ActividadScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    descripcion: 'descripcion',
    fecha: 'fecha'
  };

  export type ActividadScalarFieldEnum = (typeof ActividadScalarFieldEnum)[keyof typeof ActividadScalarFieldEnum]


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
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'EstadoMesa'
   */
  export type EnumEstadoMesaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoMesa'>
    


  /**
   * Reference to a field of type 'EstadoMesa[]'
   */
  export type ListEnumEstadoMesaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoMesa[]'>
    


  /**
   * Reference to a field of type 'EstadoOrden'
   */
  export type EnumEstadoOrdenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoOrden'>
    


  /**
   * Reference to a field of type 'EstadoOrden[]'
   */
  export type ListEnumEstadoOrdenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoOrden[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoJornada'
   */
  export type EnumEstadoJornadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoJornada'>
    


  /**
   * Reference to a field of type 'EstadoJornada[]'
   */
  export type ListEnumEstadoJornadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoJornada[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    telefono?: StringNullableFilter<"Usuario"> | string | null
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    Ordenes?: OrdenListRelationFilter
    ventas?: VentaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    Ordenes?: OrdenOrderByRelationAggregateInput
    ventas?: VentaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    telefono?: StringNullableFilter<"Usuario"> | string | null
    contrasena?: StringFilter<"Usuario"> | string
    Ordenes?: OrdenListRelationFilter
    ventas?: VentaListRelationFilter
  }, "id_usuario" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type CartaWhereInput = {
    AND?: CartaWhereInput | CartaWhereInput[]
    OR?: CartaWhereInput[]
    NOT?: CartaWhereInput | CartaWhereInput[]
    id_plato?: IntFilter<"Carta"> | number
    nombre?: StringFilter<"Carta"> | string
    ingredientes?: StringNullableFilter<"Carta"> | string | null
    precio?: DecimalFilter<"Carta"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Carta"> | number
    orden_items?: OrdenItemListRelationFilter
  }

  export type CartaOrderByWithRelationInput = {
    id_plato?: SortOrder
    nombre?: SortOrder
    ingredientes?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    orden_items?: OrdenItemOrderByRelationAggregateInput
  }

  export type CartaWhereUniqueInput = Prisma.AtLeast<{
    id_plato?: number
    AND?: CartaWhereInput | CartaWhereInput[]
    OR?: CartaWhereInput[]
    NOT?: CartaWhereInput | CartaWhereInput[]
    nombre?: StringFilter<"Carta"> | string
    ingredientes?: StringNullableFilter<"Carta"> | string | null
    precio?: DecimalFilter<"Carta"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Carta"> | number
    orden_items?: OrdenItemListRelationFilter
  }, "id_plato">

  export type CartaOrderByWithAggregationInput = {
    id_plato?: SortOrder
    nombre?: SortOrder
    ingredientes?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    _count?: CartaCountOrderByAggregateInput
    _avg?: CartaAvgOrderByAggregateInput
    _max?: CartaMaxOrderByAggregateInput
    _min?: CartaMinOrderByAggregateInput
    _sum?: CartaSumOrderByAggregateInput
  }

  export type CartaScalarWhereWithAggregatesInput = {
    AND?: CartaScalarWhereWithAggregatesInput | CartaScalarWhereWithAggregatesInput[]
    OR?: CartaScalarWhereWithAggregatesInput[]
    NOT?: CartaScalarWhereWithAggregatesInput | CartaScalarWhereWithAggregatesInput[]
    id_plato?: IntWithAggregatesFilter<"Carta"> | number
    nombre?: StringWithAggregatesFilter<"Carta"> | string
    ingredientes?: StringNullableWithAggregatesFilter<"Carta"> | string | null
    precio?: DecimalWithAggregatesFilter<"Carta"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Carta"> | number
  }

  export type MesaWhereInput = {
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    id_mesa?: IntFilter<"Mesa"> | number
    estado?: EnumEstadoMesaFilter<"Mesa"> | $Enums.EstadoMesa
    ordenes?: OrdenListRelationFilter
  }

  export type MesaOrderByWithRelationInput = {
    id_mesa?: SortOrder
    estado?: SortOrder
    ordenes?: OrdenOrderByRelationAggregateInput
  }

  export type MesaWhereUniqueInput = Prisma.AtLeast<{
    id_mesa?: number
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    estado?: EnumEstadoMesaFilter<"Mesa"> | $Enums.EstadoMesa
    ordenes?: OrdenListRelationFilter
  }, "id_mesa">

  export type MesaOrderByWithAggregationInput = {
    id_mesa?: SortOrder
    estado?: SortOrder
    _count?: MesaCountOrderByAggregateInput
    _avg?: MesaAvgOrderByAggregateInput
    _max?: MesaMaxOrderByAggregateInput
    _min?: MesaMinOrderByAggregateInput
    _sum?: MesaSumOrderByAggregateInput
  }

  export type MesaScalarWhereWithAggregatesInput = {
    AND?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    OR?: MesaScalarWhereWithAggregatesInput[]
    NOT?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    id_mesa?: IntWithAggregatesFilter<"Mesa"> | number
    estado?: EnumEstadoMesaWithAggregatesFilter<"Mesa"> | $Enums.EstadoMesa
  }

  export type OrdenWhereInput = {
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    id_orden?: IntFilter<"Orden"> | number
    id_mesero?: IntFilter<"Orden"> | number
    id_mesa?: IntFilter<"Orden"> | number
    precio_total?: DecimalFilter<"Orden"> | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFilter<"Orden"> | $Enums.EstadoOrden
    fecha_hora?: DateTimeFilter<"Orden"> | Date | string
    mesero?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
    items?: OrdenItemListRelationFilter
    venta?: XOR<VentaNullableScalarRelationFilter, VentaWhereInput> | null
  }

  export type OrdenOrderByWithRelationInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
    estado?: SortOrder
    fecha_hora?: SortOrder
    mesero?: UsuarioOrderByWithRelationInput
    mesa?: MesaOrderByWithRelationInput
    items?: OrdenItemOrderByRelationAggregateInput
    venta?: VentaOrderByWithRelationInput
  }

  export type OrdenWhereUniqueInput = Prisma.AtLeast<{
    id_orden?: number
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    id_mesero?: IntFilter<"Orden"> | number
    id_mesa?: IntFilter<"Orden"> | number
    precio_total?: DecimalFilter<"Orden"> | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFilter<"Orden"> | $Enums.EstadoOrden
    fecha_hora?: DateTimeFilter<"Orden"> | Date | string
    mesero?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
    items?: OrdenItemListRelationFilter
    venta?: XOR<VentaNullableScalarRelationFilter, VentaWhereInput> | null
  }, "id_orden">

  export type OrdenOrderByWithAggregationInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
    estado?: SortOrder
    fecha_hora?: SortOrder
    _count?: OrdenCountOrderByAggregateInput
    _avg?: OrdenAvgOrderByAggregateInput
    _max?: OrdenMaxOrderByAggregateInput
    _min?: OrdenMinOrderByAggregateInput
    _sum?: OrdenSumOrderByAggregateInput
  }

  export type OrdenScalarWhereWithAggregatesInput = {
    AND?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    OR?: OrdenScalarWhereWithAggregatesInput[]
    NOT?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    id_orden?: IntWithAggregatesFilter<"Orden"> | number
    id_mesero?: IntWithAggregatesFilter<"Orden"> | number
    id_mesa?: IntWithAggregatesFilter<"Orden"> | number
    precio_total?: DecimalWithAggregatesFilter<"Orden"> | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenWithAggregatesFilter<"Orden"> | $Enums.EstadoOrden
    fecha_hora?: DateTimeWithAggregatesFilter<"Orden"> | Date | string
  }

  export type OrdenItemWhereInput = {
    AND?: OrdenItemWhereInput | OrdenItemWhereInput[]
    OR?: OrdenItemWhereInput[]
    NOT?: OrdenItemWhereInput | OrdenItemWhereInput[]
    id?: IntFilter<"OrdenItem"> | number
    id_orden?: IntFilter<"OrdenItem"> | number
    id_plato?: IntFilter<"OrdenItem"> | number
    cantidad?: IntFilter<"OrdenItem"> | number
    precio_unitario?: DecimalFilter<"OrdenItem"> | Decimal | DecimalJsLike | number | string
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    plato?: XOR<CartaScalarRelationFilter, CartaWhereInput>
  }

  export type OrdenItemOrderByWithRelationInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    orden?: OrdenOrderByWithRelationInput
    plato?: CartaOrderByWithRelationInput
  }

  export type OrdenItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdenItemWhereInput | OrdenItemWhereInput[]
    OR?: OrdenItemWhereInput[]
    NOT?: OrdenItemWhereInput | OrdenItemWhereInput[]
    id_orden?: IntFilter<"OrdenItem"> | number
    id_plato?: IntFilter<"OrdenItem"> | number
    cantidad?: IntFilter<"OrdenItem"> | number
    precio_unitario?: DecimalFilter<"OrdenItem"> | Decimal | DecimalJsLike | number | string
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    plato?: XOR<CartaScalarRelationFilter, CartaWhereInput>
  }, "id">

  export type OrdenItemOrderByWithAggregationInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    _count?: OrdenItemCountOrderByAggregateInput
    _avg?: OrdenItemAvgOrderByAggregateInput
    _max?: OrdenItemMaxOrderByAggregateInput
    _min?: OrdenItemMinOrderByAggregateInput
    _sum?: OrdenItemSumOrderByAggregateInput
  }

  export type OrdenItemScalarWhereWithAggregatesInput = {
    AND?: OrdenItemScalarWhereWithAggregatesInput | OrdenItemScalarWhereWithAggregatesInput[]
    OR?: OrdenItemScalarWhereWithAggregatesInput[]
    NOT?: OrdenItemScalarWhereWithAggregatesInput | OrdenItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrdenItem"> | number
    id_orden?: IntWithAggregatesFilter<"OrdenItem"> | number
    id_plato?: IntWithAggregatesFilter<"OrdenItem"> | number
    cantidad?: IntWithAggregatesFilter<"OrdenItem"> | number
    precio_unitario?: DecimalWithAggregatesFilter<"OrdenItem"> | Decimal | DecimalJsLike | number | string
  }

  export type JornadaWhereInput = {
    AND?: JornadaWhereInput | JornadaWhereInput[]
    OR?: JornadaWhereInput[]
    NOT?: JornadaWhereInput | JornadaWhereInput[]
    id?: IntFilter<"Jornada"> | number
    fecha_apertura?: DateTimeFilter<"Jornada"> | Date | string
    fecha_cierre?: DateTimeNullableFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaFilter<"Jornada"> | $Enums.EstadoJornada
  }

  export type JornadaOrderByWithRelationInput = {
    id?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrderInput | SortOrder
    estado?: SortOrder
  }

  export type JornadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JornadaWhereInput | JornadaWhereInput[]
    OR?: JornadaWhereInput[]
    NOT?: JornadaWhereInput | JornadaWhereInput[]
    fecha_apertura?: DateTimeFilter<"Jornada"> | Date | string
    fecha_cierre?: DateTimeNullableFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaFilter<"Jornada"> | $Enums.EstadoJornada
  }, "id">

  export type JornadaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: JornadaCountOrderByAggregateInput
    _avg?: JornadaAvgOrderByAggregateInput
    _max?: JornadaMaxOrderByAggregateInput
    _min?: JornadaMinOrderByAggregateInput
    _sum?: JornadaSumOrderByAggregateInput
  }

  export type JornadaScalarWhereWithAggregatesInput = {
    AND?: JornadaScalarWhereWithAggregatesInput | JornadaScalarWhereWithAggregatesInput[]
    OR?: JornadaScalarWhereWithAggregatesInput[]
    NOT?: JornadaScalarWhereWithAggregatesInput | JornadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jornada"> | number
    fecha_apertura?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    fecha_cierre?: DateTimeNullableWithAggregatesFilter<"Jornada"> | Date | string | null
    estado?: EnumEstadoJornadaWithAggregatesFilter<"Jornada"> | $Enums.EstadoJornada
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    id_orden?: IntFilter<"Venta"> | number
    id_cajero?: IntFilter<"Venta"> | number
    monto?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFilter<"Venta"> | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    cajero?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    fecha?: SortOrder
    orden?: OrdenOrderByWithRelationInput
    cajero?: UsuarioOrderByWithRelationInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_orden?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id_cajero?: IntFilter<"Venta"> | number
    monto?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFilter<"Venta"> | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    cajero?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "id_orden">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    fecha?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    id_orden?: IntWithAggregatesFilter<"Venta"> | number
    id_cajero?: IntWithAggregatesFilter<"Venta"> | number
    monto?: DecimalWithAggregatesFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringWithAggregatesFilter<"Venta"> | string
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
  }

  export type ActividadWhereInput = {
    AND?: ActividadWhereInput | ActividadWhereInput[]
    OR?: ActividadWhereInput[]
    NOT?: ActividadWhereInput | ActividadWhereInput[]
    id?: IntFilter<"Actividad"> | number
    tipo?: StringFilter<"Actividad"> | string
    descripcion?: StringFilter<"Actividad"> | string
    fecha?: DateTimeFilter<"Actividad"> | Date | string
  }

  export type ActividadOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type ActividadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActividadWhereInput | ActividadWhereInput[]
    OR?: ActividadWhereInput[]
    NOT?: ActividadWhereInput | ActividadWhereInput[]
    tipo?: StringFilter<"Actividad"> | string
    descripcion?: StringFilter<"Actividad"> | string
    fecha?: DateTimeFilter<"Actividad"> | Date | string
  }, "id">

  export type ActividadOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    _count?: ActividadCountOrderByAggregateInput
    _avg?: ActividadAvgOrderByAggregateInput
    _max?: ActividadMaxOrderByAggregateInput
    _min?: ActividadMinOrderByAggregateInput
    _sum?: ActividadSumOrderByAggregateInput
  }

  export type ActividadScalarWhereWithAggregatesInput = {
    AND?: ActividadScalarWhereWithAggregatesInput | ActividadScalarWhereWithAggregatesInput[]
    OR?: ActividadScalarWhereWithAggregatesInput[]
    NOT?: ActividadScalarWhereWithAggregatesInput | ActividadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actividad"> | number
    tipo?: StringWithAggregatesFilter<"Actividad"> | string
    descripcion?: StringWithAggregatesFilter<"Actividad"> | string
    fecha?: DateTimeWithAggregatesFilter<"Actividad"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
    Ordenes?: OrdenCreateNestedManyWithoutMeseroInput
    ventas?: VentaCreateNestedManyWithoutCajeroInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
    Ordenes?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    ventas?: VentaUncheckedCreateNestedManyWithoutCajeroInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    Ordenes?: OrdenUpdateManyWithoutMeseroNestedInput
    ventas?: VentaUpdateManyWithoutCajeroNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    Ordenes?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutCajeroNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type CartaCreateInput = {
    nombre: string
    ingredientes?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    orden_items?: OrdenItemCreateNestedManyWithoutPlatoInput
  }

  export type CartaUncheckedCreateInput = {
    id_plato?: number
    nombre: string
    ingredientes?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    orden_items?: OrdenItemUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type CartaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    orden_items?: OrdenItemUpdateManyWithoutPlatoNestedInput
  }

  export type CartaUncheckedUpdateInput = {
    id_plato?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    orden_items?: OrdenItemUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type CartaCreateManyInput = {
    id_plato?: number
    nombre: string
    ingredientes?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
  }

  export type CartaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type CartaUncheckedUpdateManyInput = {
    id_plato?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type MesaCreateInput = {
    id_mesa: number
    estado?: $Enums.EstadoMesa
    ordenes?: OrdenCreateNestedManyWithoutMesaInput
  }

  export type MesaUncheckedCreateInput = {
    id_mesa: number
    estado?: $Enums.EstadoMesa
    ordenes?: OrdenUncheckedCreateNestedManyWithoutMesaInput
  }

  export type MesaUpdateInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
    ordenes?: OrdenUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
    ordenes?: OrdenUncheckedUpdateManyWithoutMesaNestedInput
  }

  export type MesaCreateManyInput = {
    id_mesa: number
    estado?: $Enums.EstadoMesa
  }

  export type MesaUpdateManyMutationInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type MesaUncheckedUpdateManyInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type OrdenCreateInput = {
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    mesero: UsuarioCreateNestedOneWithoutOrdenesInput
    mesa: MesaCreateNestedOneWithoutOrdenesInput
    items?: OrdenItemCreateNestedManyWithoutOrdenInput
    venta?: VentaCreateNestedOneWithoutOrdenInput
  }

  export type OrdenUncheckedCreateInput = {
    id_orden?: number
    id_mesero: number
    id_mesa: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    items?: OrdenItemUncheckedCreateNestedManyWithoutOrdenInput
    venta?: VentaUncheckedCreateNestedOneWithoutOrdenInput
  }

  export type OrdenUpdateInput = {
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    mesero?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    mesa?: MesaUpdateOneRequiredWithoutOrdenesNestedInput
    items?: OrdenItemUpdateManyWithoutOrdenNestedInput
    venta?: VentaUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesero?: IntFieldUpdateOperationsInput | number
    id_mesa?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput
    venta?: VentaUncheckedUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenCreateManyInput = {
    id_orden?: number
    id_mesero: number
    id_mesa: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
  }

  export type OrdenUpdateManyMutationInput = {
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenUncheckedUpdateManyInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesero?: IntFieldUpdateOperationsInput | number
    id_mesa?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenItemCreateInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    orden: OrdenCreateNestedOneWithoutItemsInput
    plato: CartaCreateNestedOneWithoutOrden_itemsInput
  }

  export type OrdenItemUncheckedCreateInput = {
    id?: number
    id_orden: number
    id_plato: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orden?: OrdenUpdateOneRequiredWithoutItemsNestedInput
    plato?: CartaUpdateOneRequiredWithoutOrden_itemsNestedInput
  }

  export type OrdenItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    id_plato?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemCreateManyInput = {
    id?: number
    id_orden: number
    id_plato: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    id_plato?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JornadaCreateInput = {
    fecha_apertura?: Date | string
    fecha_cierre?: Date | string | null
    estado?: $Enums.EstadoJornada
  }

  export type JornadaUncheckedCreateInput = {
    id?: number
    fecha_apertura?: Date | string
    fecha_cierre?: Date | string | null
    estado?: $Enums.EstadoJornada
  }

  export type JornadaUpdateInput = {
    fecha_apertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
  }

  export type JornadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_apertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
  }

  export type JornadaCreateManyInput = {
    id?: number
    fecha_apertura?: Date | string
    fecha_cierre?: Date | string | null
    estado?: $Enums.EstadoJornada
  }

  export type JornadaUpdateManyMutationInput = {
    fecha_apertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
  }

  export type JornadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_apertura?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoJornadaFieldUpdateOperationsInput | $Enums.EstadoJornada
  }

  export type VentaCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
    orden: OrdenCreateNestedOneWithoutVentaInput
    cajero: UsuarioCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    id_orden: number
    id_cajero: number
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
  }

  export type VentaUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    orden?: OrdenUpdateOneRequiredWithoutVentaNestedInput
    cajero?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    id_cajero?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateManyInput = {
    id?: number
    id_orden: number
    id_cajero: number
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
  }

  export type VentaUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    id_cajero?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActividadCreateInput = {
    tipo: string
    descripcion: string
    fecha?: Date | string
  }

  export type ActividadUncheckedCreateInput = {
    id?: number
    tipo: string
    descripcion: string
    fecha?: Date | string
  }

  export type ActividadUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActividadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActividadCreateManyInput = {
    id?: number
    tipo: string
    descripcion: string
    fecha?: Date | string
  }

  export type ActividadUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActividadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type OrdenListRelationFilter = {
    every?: OrdenWhereInput
    some?: OrdenWhereInput
    none?: OrdenWhereInput
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrdenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemListRelationFilter = {
    every?: OrdenItemWhereInput
    some?: OrdenItemWhereInput
    none?: OrdenItemWhereInput
  }

  export type OrdenItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartaCountOrderByAggregateInput = {
    id_plato?: SortOrder
    nombre?: SortOrder
    ingredientes?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type CartaAvgOrderByAggregateInput = {
    id_plato?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type CartaMaxOrderByAggregateInput = {
    id_plato?: SortOrder
    nombre?: SortOrder
    ingredientes?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type CartaMinOrderByAggregateInput = {
    id_plato?: SortOrder
    nombre?: SortOrder
    ingredientes?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type CartaSumOrderByAggregateInput = {
    id_plato?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumEstadoMesaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoMesaFilter<$PrismaModel> | $Enums.EstadoMesa
  }

  export type MesaCountOrderByAggregateInput = {
    id_mesa?: SortOrder
    estado?: SortOrder
  }

  export type MesaAvgOrderByAggregateInput = {
    id_mesa?: SortOrder
  }

  export type MesaMaxOrderByAggregateInput = {
    id_mesa?: SortOrder
    estado?: SortOrder
  }

  export type MesaMinOrderByAggregateInput = {
    id_mesa?: SortOrder
    estado?: SortOrder
  }

  export type MesaSumOrderByAggregateInput = {
    id_mesa?: SortOrder
  }

  export type EnumEstadoMesaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoMesaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoMesa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoMesaFilter<$PrismaModel>
    _max?: NestedEnumEstadoMesaFilter<$PrismaModel>
  }

  export type EnumEstadoOrdenFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenFilter<$PrismaModel> | $Enums.EstadoOrden
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type MesaScalarRelationFilter = {
    is?: MesaWhereInput
    isNot?: MesaWhereInput
  }

  export type VentaNullableScalarRelationFilter = {
    is?: VentaWhereInput | null
    isNot?: VentaWhereInput | null
  }

  export type OrdenCountOrderByAggregateInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
    estado?: SortOrder
    fecha_hora?: SortOrder
  }

  export type OrdenAvgOrderByAggregateInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
  }

  export type OrdenMaxOrderByAggregateInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
    estado?: SortOrder
    fecha_hora?: SortOrder
  }

  export type OrdenMinOrderByAggregateInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
    estado?: SortOrder
    fecha_hora?: SortOrder
  }

  export type OrdenSumOrderByAggregateInput = {
    id_orden?: SortOrder
    id_mesero?: SortOrder
    id_mesa?: SortOrder
    precio_total?: SortOrder
  }

  export type EnumEstadoOrdenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel> | $Enums.EstadoOrden
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoOrdenFilter<$PrismaModel>
    _max?: NestedEnumEstadoOrdenFilter<$PrismaModel>
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

  export type OrdenScalarRelationFilter = {
    is?: OrdenWhereInput
    isNot?: OrdenWhereInput
  }

  export type CartaScalarRelationFilter = {
    is?: CartaWhereInput
    isNot?: CartaWhereInput
  }

  export type OrdenItemCountOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type OrdenItemAvgOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type OrdenItemMaxOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type OrdenItemMinOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type OrdenItemSumOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_plato?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
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

  export type EnumEstadoJornadaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaFilter<$PrismaModel> | $Enums.EstadoJornada
  }

  export type JornadaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrder
    estado?: SortOrder
  }

  export type JornadaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JornadaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrder
    estado?: SortOrder
  }

  export type JornadaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrder
    estado?: SortOrder
  }

  export type JornadaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumEstadoJornadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoJornada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoJornadaFilter<$PrismaModel>
    _max?: NestedEnumEstadoJornadaFilter<$PrismaModel>
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    fecha?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    fecha?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    fecha?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    id_orden?: SortOrder
    id_cajero?: SortOrder
    monto?: SortOrder
  }

  export type ActividadCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type ActividadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActividadMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type ActividadMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type ActividadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdenCreateNestedManyWithoutMeseroInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type VentaCreateNestedManyWithoutCajeroInput = {
    create?: XOR<VentaCreateWithoutCajeroInput, VentaUncheckedCreateWithoutCajeroInput> | VentaCreateWithoutCajeroInput[] | VentaUncheckedCreateWithoutCajeroInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutCajeroInput | VentaCreateOrConnectWithoutCajeroInput[]
    createMany?: VentaCreateManyCajeroInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type OrdenUncheckedCreateNestedManyWithoutMeseroInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutCajeroInput = {
    create?: XOR<VentaCreateWithoutCajeroInput, VentaUncheckedCreateWithoutCajeroInput> | VentaCreateWithoutCajeroInput[] | VentaUncheckedCreateWithoutCajeroInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutCajeroInput | VentaCreateOrConnectWithoutCajeroInput[]
    createMany?: VentaCreateManyCajeroInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrdenUpdateManyWithoutMeseroNestedInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutMeseroInput | OrdenUpsertWithWhereUniqueWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutMeseroInput | OrdenUpdateWithWhereUniqueWithoutMeseroInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutMeseroInput | OrdenUpdateManyWithWhereWithoutMeseroInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type VentaUpdateManyWithoutCajeroNestedInput = {
    create?: XOR<VentaCreateWithoutCajeroInput, VentaUncheckedCreateWithoutCajeroInput> | VentaCreateWithoutCajeroInput[] | VentaUncheckedCreateWithoutCajeroInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutCajeroInput | VentaCreateOrConnectWithoutCajeroInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutCajeroInput | VentaUpsertWithWhereUniqueWithoutCajeroInput[]
    createMany?: VentaCreateManyCajeroInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutCajeroInput | VentaUpdateWithWhereUniqueWithoutCajeroInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutCajeroInput | VentaUpdateManyWithWhereWithoutCajeroInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdenUncheckedUpdateManyWithoutMeseroNestedInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutMeseroInput | OrdenUpsertWithWhereUniqueWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutMeseroInput | OrdenUpdateWithWhereUniqueWithoutMeseroInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutMeseroInput | OrdenUpdateManyWithWhereWithoutMeseroInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutCajeroNestedInput = {
    create?: XOR<VentaCreateWithoutCajeroInput, VentaUncheckedCreateWithoutCajeroInput> | VentaCreateWithoutCajeroInput[] | VentaUncheckedCreateWithoutCajeroInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutCajeroInput | VentaCreateOrConnectWithoutCajeroInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutCajeroInput | VentaUpsertWithWhereUniqueWithoutCajeroInput[]
    createMany?: VentaCreateManyCajeroInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutCajeroInput | VentaUpdateWithWhereUniqueWithoutCajeroInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutCajeroInput | VentaUpdateManyWithWhereWithoutCajeroInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type OrdenItemCreateNestedManyWithoutPlatoInput = {
    create?: XOR<OrdenItemCreateWithoutPlatoInput, OrdenItemUncheckedCreateWithoutPlatoInput> | OrdenItemCreateWithoutPlatoInput[] | OrdenItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutPlatoInput | OrdenItemCreateOrConnectWithoutPlatoInput[]
    createMany?: OrdenItemCreateManyPlatoInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type OrdenItemUncheckedCreateNestedManyWithoutPlatoInput = {
    create?: XOR<OrdenItemCreateWithoutPlatoInput, OrdenItemUncheckedCreateWithoutPlatoInput> | OrdenItemCreateWithoutPlatoInput[] | OrdenItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutPlatoInput | OrdenItemCreateOrConnectWithoutPlatoInput[]
    createMany?: OrdenItemCreateManyPlatoInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<OrdenItemCreateWithoutPlatoInput, OrdenItemUncheckedCreateWithoutPlatoInput> | OrdenItemCreateWithoutPlatoInput[] | OrdenItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutPlatoInput | OrdenItemCreateOrConnectWithoutPlatoInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutPlatoInput | OrdenItemUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: OrdenItemCreateManyPlatoInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutPlatoInput | OrdenItemUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutPlatoInput | OrdenItemUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type OrdenItemUncheckedUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<OrdenItemCreateWithoutPlatoInput, OrdenItemUncheckedCreateWithoutPlatoInput> | OrdenItemCreateWithoutPlatoInput[] | OrdenItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutPlatoInput | OrdenItemCreateOrConnectWithoutPlatoInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutPlatoInput | OrdenItemUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: OrdenItemCreateManyPlatoInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutPlatoInput | OrdenItemUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutPlatoInput | OrdenItemUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type OrdenCreateNestedManyWithoutMesaInput = {
    create?: XOR<OrdenCreateWithoutMesaInput, OrdenUncheckedCreateWithoutMesaInput> | OrdenCreateWithoutMesaInput[] | OrdenUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMesaInput | OrdenCreateOrConnectWithoutMesaInput[]
    createMany?: OrdenCreateManyMesaInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenUncheckedCreateNestedManyWithoutMesaInput = {
    create?: XOR<OrdenCreateWithoutMesaInput, OrdenUncheckedCreateWithoutMesaInput> | OrdenCreateWithoutMesaInput[] | OrdenUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMesaInput | OrdenCreateOrConnectWithoutMesaInput[]
    createMany?: OrdenCreateManyMesaInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type EnumEstadoMesaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoMesa
  }

  export type OrdenUpdateManyWithoutMesaNestedInput = {
    create?: XOR<OrdenCreateWithoutMesaInput, OrdenUncheckedCreateWithoutMesaInput> | OrdenCreateWithoutMesaInput[] | OrdenUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMesaInput | OrdenCreateOrConnectWithoutMesaInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutMesaInput | OrdenUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: OrdenCreateManyMesaInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutMesaInput | OrdenUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutMesaInput | OrdenUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type OrdenUncheckedUpdateManyWithoutMesaNestedInput = {
    create?: XOR<OrdenCreateWithoutMesaInput, OrdenUncheckedCreateWithoutMesaInput> | OrdenCreateWithoutMesaInput[] | OrdenUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMesaInput | OrdenCreateOrConnectWithoutMesaInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutMesaInput | OrdenUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: OrdenCreateManyMesaInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutMesaInput | OrdenUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutMesaInput | OrdenUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MesaCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<MesaCreateWithoutOrdenesInput, MesaUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: MesaCreateOrConnectWithoutOrdenesInput
    connect?: MesaWhereUniqueInput
  }

  export type OrdenItemCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type VentaCreateNestedOneWithoutOrdenInput = {
    create?: XOR<VentaCreateWithoutOrdenInput, VentaUncheckedCreateWithoutOrdenInput>
    connectOrCreate?: VentaCreateOrConnectWithoutOrdenInput
    connect?: VentaWhereUniqueInput
  }

  export type OrdenItemUncheckedCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedOneWithoutOrdenInput = {
    create?: XOR<VentaCreateWithoutOrdenInput, VentaUncheckedCreateWithoutOrdenInput>
    connectOrCreate?: VentaCreateOrConnectWithoutOrdenInput
    connect?: VentaWhereUniqueInput
  }

  export type EnumEstadoOrdenFieldUpdateOperationsInput = {
    set?: $Enums.EstadoOrden
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesInput
    upsert?: UsuarioUpsertWithoutOrdenesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOrdenesInput, UsuarioUpdateWithoutOrdenesInput>, UsuarioUncheckedUpdateWithoutOrdenesInput>
  }

  export type MesaUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<MesaCreateWithoutOrdenesInput, MesaUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: MesaCreateOrConnectWithoutOrdenesInput
    upsert?: MesaUpsertWithoutOrdenesInput
    connect?: MesaWhereUniqueInput
    update?: XOR<XOR<MesaUpdateToOneWithWhereWithoutOrdenesInput, MesaUpdateWithoutOrdenesInput>, MesaUncheckedUpdateWithoutOrdenesInput>
  }

  export type OrdenItemUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutOrdenInput | OrdenItemUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutOrdenInput | OrdenItemUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutOrdenInput | OrdenItemUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type VentaUpdateOneWithoutOrdenNestedInput = {
    create?: XOR<VentaCreateWithoutOrdenInput, VentaUncheckedCreateWithoutOrdenInput>
    connectOrCreate?: VentaCreateOrConnectWithoutOrdenInput
    upsert?: VentaUpsertWithoutOrdenInput
    disconnect?: VentaWhereInput | boolean
    delete?: VentaWhereInput | boolean
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutOrdenInput, VentaUpdateWithoutOrdenInput>, VentaUncheckedUpdateWithoutOrdenInput>
  }

  export type OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutOrdenInput | OrdenItemUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutOrdenInput | OrdenItemUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutOrdenInput | OrdenItemUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type VentaUncheckedUpdateOneWithoutOrdenNestedInput = {
    create?: XOR<VentaCreateWithoutOrdenInput, VentaUncheckedCreateWithoutOrdenInput>
    connectOrCreate?: VentaCreateOrConnectWithoutOrdenInput
    upsert?: VentaUpsertWithoutOrdenInput
    disconnect?: VentaWhereInput | boolean
    delete?: VentaWhereInput | boolean
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutOrdenInput, VentaUpdateWithoutOrdenInput>, VentaUncheckedUpdateWithoutOrdenInput>
  }

  export type OrdenCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutItemsInput
    connect?: OrdenWhereUniqueInput
  }

  export type CartaCreateNestedOneWithoutOrden_itemsInput = {
    create?: XOR<CartaCreateWithoutOrden_itemsInput, CartaUncheckedCreateWithoutOrden_itemsInput>
    connectOrCreate?: CartaCreateOrConnectWithoutOrden_itemsInput
    connect?: CartaWhereUniqueInput
  }

  export type OrdenUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutItemsInput
    upsert?: OrdenUpsertWithoutItemsInput
    connect?: OrdenWhereUniqueInput
    update?: XOR<XOR<OrdenUpdateToOneWithWhereWithoutItemsInput, OrdenUpdateWithoutItemsInput>, OrdenUncheckedUpdateWithoutItemsInput>
  }

  export type CartaUpdateOneRequiredWithoutOrden_itemsNestedInput = {
    create?: XOR<CartaCreateWithoutOrden_itemsInput, CartaUncheckedCreateWithoutOrden_itemsInput>
    connectOrCreate?: CartaCreateOrConnectWithoutOrden_itemsInput
    upsert?: CartaUpsertWithoutOrden_itemsInput
    connect?: CartaWhereUniqueInput
    update?: XOR<XOR<CartaUpdateToOneWithWhereWithoutOrden_itemsInput, CartaUpdateWithoutOrden_itemsInput>, CartaUncheckedUpdateWithoutOrden_itemsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEstadoJornadaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoJornada
  }

  export type OrdenCreateNestedOneWithoutVentaInput = {
    create?: XOR<OrdenCreateWithoutVentaInput, OrdenUncheckedCreateWithoutVentaInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutVentaInput
    connect?: OrdenWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutVentasInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type OrdenUpdateOneRequiredWithoutVentaNestedInput = {
    create?: XOR<OrdenCreateWithoutVentaInput, OrdenUncheckedCreateWithoutVentaInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutVentaInput
    upsert?: OrdenUpsertWithoutVentaInput
    connect?: OrdenWhereUniqueInput
    update?: XOR<XOR<OrdenUpdateToOneWithWhereWithoutVentaInput, OrdenUpdateWithoutVentaInput>, OrdenUncheckedUpdateWithoutVentaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    upsert?: UsuarioUpsertWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVentasInput, UsuarioUpdateWithoutVentasInput>, UsuarioUncheckedUpdateWithoutVentasInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumEstadoMesaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoMesaFilter<$PrismaModel> | $Enums.EstadoMesa
  }

  export type NestedEnumEstadoMesaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoMesa[] | ListEnumEstadoMesaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoMesaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoMesa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoMesaFilter<$PrismaModel>
    _max?: NestedEnumEstadoMesaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoOrdenFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenFilter<$PrismaModel> | $Enums.EstadoOrden
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

  export type NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel> | $Enums.EstadoOrden
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoOrdenFilter<$PrismaModel>
    _max?: NestedEnumEstadoOrdenFilter<$PrismaModel>
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

  export type NestedEnumEstadoJornadaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaFilter<$PrismaModel> | $Enums.EstadoJornada
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

  export type NestedEnumEstadoJornadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoJornada | EnumEstadoJornadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoJornada[] | ListEnumEstadoJornadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoJornadaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoJornada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoJornadaFilter<$PrismaModel>
    _max?: NestedEnumEstadoJornadaFilter<$PrismaModel>
  }

  export type OrdenCreateWithoutMeseroInput = {
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    mesa: MesaCreateNestedOneWithoutOrdenesInput
    items?: OrdenItemCreateNestedManyWithoutOrdenInput
    venta?: VentaCreateNestedOneWithoutOrdenInput
  }

  export type OrdenUncheckedCreateWithoutMeseroInput = {
    id_orden?: number
    id_mesa: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    items?: OrdenItemUncheckedCreateNestedManyWithoutOrdenInput
    venta?: VentaUncheckedCreateNestedOneWithoutOrdenInput
  }

  export type OrdenCreateOrConnectWithoutMeseroInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput>
  }

  export type OrdenCreateManyMeseroInputEnvelope = {
    data: OrdenCreateManyMeseroInput | OrdenCreateManyMeseroInput[]
    skipDuplicates?: boolean
  }

  export type VentaCreateWithoutCajeroInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
    orden: OrdenCreateNestedOneWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutCajeroInput = {
    id?: number
    id_orden: number
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
  }

  export type VentaCreateOrConnectWithoutCajeroInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutCajeroInput, VentaUncheckedCreateWithoutCajeroInput>
  }

  export type VentaCreateManyCajeroInputEnvelope = {
    data: VentaCreateManyCajeroInput | VentaCreateManyCajeroInput[]
    skipDuplicates?: boolean
  }

  export type OrdenUpsertWithWhereUniqueWithoutMeseroInput = {
    where: OrdenWhereUniqueInput
    update: XOR<OrdenUpdateWithoutMeseroInput, OrdenUncheckedUpdateWithoutMeseroInput>
    create: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput>
  }

  export type OrdenUpdateWithWhereUniqueWithoutMeseroInput = {
    where: OrdenWhereUniqueInput
    data: XOR<OrdenUpdateWithoutMeseroInput, OrdenUncheckedUpdateWithoutMeseroInput>
  }

  export type OrdenUpdateManyWithWhereWithoutMeseroInput = {
    where: OrdenScalarWhereInput
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyWithoutMeseroInput>
  }

  export type OrdenScalarWhereInput = {
    AND?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    OR?: OrdenScalarWhereInput[]
    NOT?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    id_orden?: IntFilter<"Orden"> | number
    id_mesero?: IntFilter<"Orden"> | number
    id_mesa?: IntFilter<"Orden"> | number
    precio_total?: DecimalFilter<"Orden"> | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFilter<"Orden"> | $Enums.EstadoOrden
    fecha_hora?: DateTimeFilter<"Orden"> | Date | string
  }

  export type VentaUpsertWithWhereUniqueWithoutCajeroInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutCajeroInput, VentaUncheckedUpdateWithoutCajeroInput>
    create: XOR<VentaCreateWithoutCajeroInput, VentaUncheckedCreateWithoutCajeroInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutCajeroInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutCajeroInput, VentaUncheckedUpdateWithoutCajeroInput>
  }

  export type VentaUpdateManyWithWhereWithoutCajeroInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutCajeroInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    id_orden?: IntFilter<"Venta"> | number
    id_cajero?: IntFilter<"Venta"> | number
    monto?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFilter<"Venta"> | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
  }

  export type OrdenItemCreateWithoutPlatoInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    orden: OrdenCreateNestedOneWithoutItemsInput
  }

  export type OrdenItemUncheckedCreateWithoutPlatoInput = {
    id?: number
    id_orden: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemCreateOrConnectWithoutPlatoInput = {
    where: OrdenItemWhereUniqueInput
    create: XOR<OrdenItemCreateWithoutPlatoInput, OrdenItemUncheckedCreateWithoutPlatoInput>
  }

  export type OrdenItemCreateManyPlatoInputEnvelope = {
    data: OrdenItemCreateManyPlatoInput | OrdenItemCreateManyPlatoInput[]
    skipDuplicates?: boolean
  }

  export type OrdenItemUpsertWithWhereUniqueWithoutPlatoInput = {
    where: OrdenItemWhereUniqueInput
    update: XOR<OrdenItemUpdateWithoutPlatoInput, OrdenItemUncheckedUpdateWithoutPlatoInput>
    create: XOR<OrdenItemCreateWithoutPlatoInput, OrdenItemUncheckedCreateWithoutPlatoInput>
  }

  export type OrdenItemUpdateWithWhereUniqueWithoutPlatoInput = {
    where: OrdenItemWhereUniqueInput
    data: XOR<OrdenItemUpdateWithoutPlatoInput, OrdenItemUncheckedUpdateWithoutPlatoInput>
  }

  export type OrdenItemUpdateManyWithWhereWithoutPlatoInput = {
    where: OrdenItemScalarWhereInput
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyWithoutPlatoInput>
  }

  export type OrdenItemScalarWhereInput = {
    AND?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
    OR?: OrdenItemScalarWhereInput[]
    NOT?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
    id?: IntFilter<"OrdenItem"> | number
    id_orden?: IntFilter<"OrdenItem"> | number
    id_plato?: IntFilter<"OrdenItem"> | number
    cantidad?: IntFilter<"OrdenItem"> | number
    precio_unitario?: DecimalFilter<"OrdenItem"> | Decimal | DecimalJsLike | number | string
  }

  export type OrdenCreateWithoutMesaInput = {
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    mesero: UsuarioCreateNestedOneWithoutOrdenesInput
    items?: OrdenItemCreateNestedManyWithoutOrdenInput
    venta?: VentaCreateNestedOneWithoutOrdenInput
  }

  export type OrdenUncheckedCreateWithoutMesaInput = {
    id_orden?: number
    id_mesero: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    items?: OrdenItemUncheckedCreateNestedManyWithoutOrdenInput
    venta?: VentaUncheckedCreateNestedOneWithoutOrdenInput
  }

  export type OrdenCreateOrConnectWithoutMesaInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutMesaInput, OrdenUncheckedCreateWithoutMesaInput>
  }

  export type OrdenCreateManyMesaInputEnvelope = {
    data: OrdenCreateManyMesaInput | OrdenCreateManyMesaInput[]
    skipDuplicates?: boolean
  }

  export type OrdenUpsertWithWhereUniqueWithoutMesaInput = {
    where: OrdenWhereUniqueInput
    update: XOR<OrdenUpdateWithoutMesaInput, OrdenUncheckedUpdateWithoutMesaInput>
    create: XOR<OrdenCreateWithoutMesaInput, OrdenUncheckedCreateWithoutMesaInput>
  }

  export type OrdenUpdateWithWhereUniqueWithoutMesaInput = {
    where: OrdenWhereUniqueInput
    data: XOR<OrdenUpdateWithoutMesaInput, OrdenUncheckedUpdateWithoutMesaInput>
  }

  export type OrdenUpdateManyWithWhereWithoutMesaInput = {
    where: OrdenScalarWhereInput
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyWithoutMesaInput>
  }

  export type UsuarioCreateWithoutOrdenesInput = {
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
    ventas?: VentaCreateNestedManyWithoutCajeroInput
  }

  export type UsuarioUncheckedCreateWithoutOrdenesInput = {
    id_usuario?: number
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
    ventas?: VentaUncheckedCreateNestedManyWithoutCajeroInput
  }

  export type UsuarioCreateOrConnectWithoutOrdenesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
  }

  export type MesaCreateWithoutOrdenesInput = {
    id_mesa: number
    estado?: $Enums.EstadoMesa
  }

  export type MesaUncheckedCreateWithoutOrdenesInput = {
    id_mesa: number
    estado?: $Enums.EstadoMesa
  }

  export type MesaCreateOrConnectWithoutOrdenesInput = {
    where: MesaWhereUniqueInput
    create: XOR<MesaCreateWithoutOrdenesInput, MesaUncheckedCreateWithoutOrdenesInput>
  }

  export type OrdenItemCreateWithoutOrdenInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    plato: CartaCreateNestedOneWithoutOrden_itemsInput
  }

  export type OrdenItemUncheckedCreateWithoutOrdenInput = {
    id?: number
    id_plato: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemCreateOrConnectWithoutOrdenInput = {
    where: OrdenItemWhereUniqueInput
    create: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenItemCreateManyOrdenInputEnvelope = {
    data: OrdenItemCreateManyOrdenInput | OrdenItemCreateManyOrdenInput[]
    skipDuplicates?: boolean
  }

  export type VentaCreateWithoutOrdenInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
    cajero: UsuarioCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutOrdenInput = {
    id?: number
    id_cajero: number
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
  }

  export type VentaCreateOrConnectWithoutOrdenInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutOrdenInput, VentaUncheckedCreateWithoutOrdenInput>
  }

  export type UsuarioUpsertWithoutOrdenesInput = {
    update: XOR<UsuarioUpdateWithoutOrdenesInput, UsuarioUncheckedUpdateWithoutOrdenesInput>
    create: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOrdenesInput, UsuarioUncheckedUpdateWithoutOrdenesInput>
  }

  export type UsuarioUpdateWithoutOrdenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    ventas?: VentaUpdateManyWithoutCajeroNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOrdenesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    ventas?: VentaUncheckedUpdateManyWithoutCajeroNestedInput
  }

  export type MesaUpsertWithoutOrdenesInput = {
    update: XOR<MesaUpdateWithoutOrdenesInput, MesaUncheckedUpdateWithoutOrdenesInput>
    create: XOR<MesaCreateWithoutOrdenesInput, MesaUncheckedCreateWithoutOrdenesInput>
    where?: MesaWhereInput
  }

  export type MesaUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: MesaWhereInput
    data: XOR<MesaUpdateWithoutOrdenesInput, MesaUncheckedUpdateWithoutOrdenesInput>
  }

  export type MesaUpdateWithoutOrdenesInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type MesaUncheckedUpdateWithoutOrdenesInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type OrdenItemUpsertWithWhereUniqueWithoutOrdenInput = {
    where: OrdenItemWhereUniqueInput
    update: XOR<OrdenItemUpdateWithoutOrdenInput, OrdenItemUncheckedUpdateWithoutOrdenInput>
    create: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenItemUpdateWithWhereUniqueWithoutOrdenInput = {
    where: OrdenItemWhereUniqueInput
    data: XOR<OrdenItemUpdateWithoutOrdenInput, OrdenItemUncheckedUpdateWithoutOrdenInput>
  }

  export type OrdenItemUpdateManyWithWhereWithoutOrdenInput = {
    where: OrdenItemScalarWhereInput
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyWithoutOrdenInput>
  }

  export type VentaUpsertWithoutOrdenInput = {
    update: XOR<VentaUpdateWithoutOrdenInput, VentaUncheckedUpdateWithoutOrdenInput>
    create: XOR<VentaCreateWithoutOrdenInput, VentaUncheckedCreateWithoutOrdenInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutOrdenInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutOrdenInput, VentaUncheckedUpdateWithoutOrdenInput>
  }

  export type VentaUpdateWithoutOrdenInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cajero?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutOrdenInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cajero?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCreateWithoutItemsInput = {
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    mesero: UsuarioCreateNestedOneWithoutOrdenesInput
    mesa: MesaCreateNestedOneWithoutOrdenesInput
    venta?: VentaCreateNestedOneWithoutOrdenInput
  }

  export type OrdenUncheckedCreateWithoutItemsInput = {
    id_orden?: number
    id_mesero: number
    id_mesa: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    venta?: VentaUncheckedCreateNestedOneWithoutOrdenInput
  }

  export type OrdenCreateOrConnectWithoutItemsInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
  }

  export type CartaCreateWithoutOrden_itemsInput = {
    nombre: string
    ingredientes?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
  }

  export type CartaUncheckedCreateWithoutOrden_itemsInput = {
    id_plato?: number
    nombre: string
    ingredientes?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
  }

  export type CartaCreateOrConnectWithoutOrden_itemsInput = {
    where: CartaWhereUniqueInput
    create: XOR<CartaCreateWithoutOrden_itemsInput, CartaUncheckedCreateWithoutOrden_itemsInput>
  }

  export type OrdenUpsertWithoutItemsInput = {
    update: XOR<OrdenUpdateWithoutItemsInput, OrdenUncheckedUpdateWithoutItemsInput>
    create: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
    where?: OrdenWhereInput
  }

  export type OrdenUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrdenWhereInput
    data: XOR<OrdenUpdateWithoutItemsInput, OrdenUncheckedUpdateWithoutItemsInput>
  }

  export type OrdenUpdateWithoutItemsInput = {
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    mesero?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    mesa?: MesaUpdateOneRequiredWithoutOrdenesNestedInput
    venta?: VentaUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateWithoutItemsInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesero?: IntFieldUpdateOperationsInput | number
    id_mesa?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: VentaUncheckedUpdateOneWithoutOrdenNestedInput
  }

  export type CartaUpsertWithoutOrden_itemsInput = {
    update: XOR<CartaUpdateWithoutOrden_itemsInput, CartaUncheckedUpdateWithoutOrden_itemsInput>
    create: XOR<CartaCreateWithoutOrden_itemsInput, CartaUncheckedCreateWithoutOrden_itemsInput>
    where?: CartaWhereInput
  }

  export type CartaUpdateToOneWithWhereWithoutOrden_itemsInput = {
    where?: CartaWhereInput
    data: XOR<CartaUpdateWithoutOrden_itemsInput, CartaUncheckedUpdateWithoutOrden_itemsInput>
  }

  export type CartaUpdateWithoutOrden_itemsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type CartaUncheckedUpdateWithoutOrden_itemsInput = {
    id_plato?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type OrdenCreateWithoutVentaInput = {
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    mesero: UsuarioCreateNestedOneWithoutOrdenesInput
    mesa: MesaCreateNestedOneWithoutOrdenesInput
    items?: OrdenItemCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUncheckedCreateWithoutVentaInput = {
    id_orden?: number
    id_mesero: number
    id_mesa: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
    items?: OrdenItemUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenCreateOrConnectWithoutVentaInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutVentaInput, OrdenUncheckedCreateWithoutVentaInput>
  }

  export type UsuarioCreateWithoutVentasInput = {
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
    Ordenes?: OrdenCreateNestedManyWithoutMeseroInput
  }

  export type UsuarioUncheckedCreateWithoutVentasInput = {
    id_usuario?: number
    nombre: string
    rol: $Enums.Rol
    telefono?: string | null
    correo: string
    contrasena: string
    Ordenes?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
  }

  export type UsuarioCreateOrConnectWithoutVentasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
  }

  export type OrdenUpsertWithoutVentaInput = {
    update: XOR<OrdenUpdateWithoutVentaInput, OrdenUncheckedUpdateWithoutVentaInput>
    create: XOR<OrdenCreateWithoutVentaInput, OrdenUncheckedCreateWithoutVentaInput>
    where?: OrdenWhereInput
  }

  export type OrdenUpdateToOneWithWhereWithoutVentaInput = {
    where?: OrdenWhereInput
    data: XOR<OrdenUpdateWithoutVentaInput, OrdenUncheckedUpdateWithoutVentaInput>
  }

  export type OrdenUpdateWithoutVentaInput = {
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    mesero?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    mesa?: MesaUpdateOneRequiredWithoutOrdenesNestedInput
    items?: OrdenItemUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateWithoutVentaInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesero?: IntFieldUpdateOperationsInput | number
    id_mesa?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type UsuarioUpsertWithoutVentasInput = {
    update: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVentasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateWithoutVentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    Ordenes?: OrdenUpdateManyWithoutMeseroNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVentasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    Ordenes?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
  }

  export type OrdenCreateManyMeseroInput = {
    id_orden?: number
    id_mesa: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
  }

  export type VentaCreateManyCajeroInput = {
    id?: number
    id_orden: number
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    fecha?: Date | string
  }

  export type OrdenUpdateWithoutMeseroInput = {
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    mesa?: MesaUpdateOneRequiredWithoutOrdenesNestedInput
    items?: OrdenItemUpdateManyWithoutOrdenNestedInput
    venta?: VentaUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateWithoutMeseroInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesa?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput
    venta?: VentaUncheckedUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateManyWithoutMeseroInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesa?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUpdateWithoutCajeroInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    orden?: OrdenUpdateOneRequiredWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutCajeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUncheckedUpdateManyWithoutCajeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenItemCreateManyPlatoInput = {
    id?: number
    id_orden: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUpdateWithoutPlatoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orden?: OrdenUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrdenItemUncheckedUpdateWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUncheckedUpdateManyWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenCreateManyMesaInput = {
    id_orden?: number
    id_mesero: number
    precio_total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.EstadoOrden
    fecha_hora?: Date | string
  }

  export type OrdenUpdateWithoutMesaInput = {
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    mesero?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    items?: OrdenItemUpdateManyWithoutOrdenNestedInput
    venta?: VentaUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateWithoutMesaInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesero?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput
    venta?: VentaUncheckedUpdateOneWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateManyWithoutMesaInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_mesero?: IntFieldUpdateOperationsInput | number
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenItemCreateManyOrdenInput = {
    id?: number
    id_plato: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUpdateWithoutOrdenInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plato?: CartaUpdateOneRequiredWithoutOrden_itemsNestedInput
  }

  export type OrdenItemUncheckedUpdateWithoutOrdenInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_plato?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenItemUncheckedUpdateManyWithoutOrdenInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_plato?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
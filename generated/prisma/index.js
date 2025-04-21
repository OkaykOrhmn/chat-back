
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.ChatScalarFieldEnum = {
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

exports.Prisma.ChatMemberScalarFieldEnum = {
  id: 'id',
  chatId: 'chatId',
  userId: 'userId',
  role: 'role',
  isMuted: 'isMuted',
  joinedAt: 'joinedAt'
};

exports.Prisma.MessageScalarFieldEnum = {
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

exports.Prisma.ReactionScalarFieldEnum = {
  id: 'id',
  emoji: 'emoji',
  userId: 'userId',
  messageId: 'messageId'
};

exports.Prisma.SeenMessageScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  messageId: 'messageId',
  seenAt: 'seenAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserStatus = exports.$Enums.UserStatus = {
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

exports.ChatType = exports.$Enums.ChatType = {
  private: 'private',
  group: 'group',
  channel: 'channel'
};

exports.Role = exports.$Enums.Role = {
  owner: 'owner',
  admin: 'admin',
  member: 'member'
};

exports.MessageType = exports.$Enums.MessageType = {
  text: 'text',
  image: 'image',
  video: 'video',
  audio: 'audio',
  file: 'file',
  sticker: 'sticker',
  system: 'system'
};

exports.Prisma.ModelName = {
  User: 'User',
  Chat: 'Chat',
  ChatMember: 'ChatMember',
  Message: 'Message',
  Reaction: 'Reaction',
  SeenMessage: 'SeenMessage'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Kia\\Desktop\\chat-back\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Kia\\Desktop\\chat-back\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "postgresql://postgres:1274@localhost:5432/mydb?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://postgres:1274@localhost:5432/mydb?schema=public\"\n}\n\nmodel User {\n  id           String        @id @default(uuid())\n  username     String        @unique\n  firstName    String?\n  lastName     String?\n  email        String?       @unique\n  phomeNumber  String?       @unique\n  profileImage String?\n  lastActive   DateTime?\n  ghostMode    Boolean       @default(false)\n  bio          String?\n  stars        Int           @default(0)\n  status       String? // Use a string instead of an enum\n  isVerified   Boolean       @default(false)\n  password     String\n  createdAt    DateTime      @default(now())\n  updatedAt    DateTime      @updatedAt\n  chats        Chat[]        @relation(\"ChatUsers\")\n  ownedChats   Chat[]        @relation(\"ChatOwner\")\n  ChatMember   ChatMember[]\n  Message      Message[]\n  Reaction     Reaction[]\n  SeenMessage  SeenMessage[]\n}\n\nenum UserStatus {\n  ON_VACATION\n  AT_WORK\n  IN_MEETING\n  AVAILABLE\n  AWAY\n  BUSY\n  DO_NOT_DISTURB\n  AT_GYM\n  AT_HOME\n  TRAVELING\n  SLEEPING\n  IN_CLASS\n  STUDYING\n  AT_COFFEE_SHOP\n  OUT_FOR_LUNCH\n  OFFLINE\n  AT_DOCTOR\n  ON_CALL\n  IN_CONFERENCE\n  TAKING_BREAK\n  ON_TRIP\n  AT_PARTY\n  IN_TRANSIT\n  ON_HOLIDAY\n  WORKING_REMOTELY\n}\n\nmodel Chat {\n  id              String   @id @default(uuid())\n  type            ChatType\n  title           String? // Optional for private chats\n  description     String? // Bio or info about group/channel\n  chatImage       String? // Group/channel avatar\n  handle          String?  @unique // @handle like @flutter_dev_group\n  ownerId         String?\n  owner           User?    @relation(\"ChatOwner\", fields: [ownerId], references: [id])\n  users           User[]   @relation(\"ChatUsers\")\n  createdAt       DateTime @default(now())\n  updatedAt       DateTime @updatedAt\n  isPublic        Boolean  @default(false) // For public discoverable groups/channels\n  inviteLink      String?  @unique // Optional invite URL\n  pinnedMessageId String?  @unique\n  pinnedMessage   Message? @relation(\"PinnedMessage\", fields: [pinnedMessageId], references: [id])\n\n  messages Message[]    @relation(\"ChatMessages\")\n  members  ChatMember[]\n\n  @@index([type])\n}\n\nenum ChatType {\n  private\n  group\n  channel\n}\n\nmodel ChatMember {\n  id       String   @id @default(uuid())\n  chat     Chat     @relation(fields: [chatId], references: [id])\n  chatId   String\n  user     User     @relation(fields: [userId], references: [id])\n  userId   String\n  role     Role     @default(member)\n  isMuted  Boolean  @default(false)\n  joinedAt DateTime @default(now())\n\n  @@unique([chatId, userId])\n}\n\nenum Role {\n  owner\n  admin\n  member\n}\n\nmodel Message {\n  id             String        @id @default(uuid())\n  chat           Chat          @relation(\"ChatMessages\", fields: [chatId], references: [id])\n  chatId         String\n  sender         User          @relation(fields: [senderId], references: [id])\n  senderId       String\n  content        String? // Optional, especially if it's a media message\n  messageType    MessageType   @default(text) // text, image, video, etc.\n  mediaUrls      String[] // List of media files\n  mediaThumbnail String? // Optional preview for videos\n  repliedToId    String? // For replies\n  repliedTo      Message?      @relation(\"MessageReplies\", fields: [repliedToId], references: [id])\n  replies        Message[]     @relation(\"MessageReplies\")\n  reactions      Reaction[] // Emoji reactions\n  seenBy         SeenMessage[] // Track who has seen it\n  isEdited       Boolean       @default(false)\n  createdAt      DateTime      @default(now())\n  updatedAt      DateTime      @updatedAt\n  pinnedByChat   Chat?         @relation(\"PinnedMessage\") // Opposite relation for pinnedMessage\n}\n\nmodel Reaction {\n  id        String  @id @default(uuid())\n  emoji     String // Like \"❤️\", \"😂\"\n  user      User    @relation(fields: [userId], references: [id])\n  userId    String\n  message   Message @relation(fields: [messageId], references: [id])\n  messageId String\n\n  @@unique([userId, messageId, emoji]) // One user can't react with the same emoji multiple times\n}\n\nmodel SeenMessage {\n  id        String   @id @default(uuid())\n  user      User     @relation(fields: [userId], references: [id])\n  userId    String\n  message   Message  @relation(fields: [messageId], references: [id])\n  messageId String\n  seenAt    DateTime @default(now())\n\n  @@unique([userId, messageId])\n}\n\nenum MessageType {\n  text\n  image\n  video\n  audio\n  file\n  sticker\n  system // for join/leave/pin etc.\n}\n",
  "inlineSchemaHash": "c3122b06f739cd5464c77f9780a88c70b557a584b00d4448898506f2a4134e16",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phomeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ghostMode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stars\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"chats\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chat\",\"nativeType\":null,\"relationName\":\"ChatUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownedChats\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chat\",\"nativeType\":null,\"relationName\":\"ChatOwner\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChatMember\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChatMember\",\"nativeType\":null,\"relationName\":\"ChatMemberToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Message\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reaction\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reaction\",\"nativeType\":null,\"relationName\":\"ReactionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SeenMessage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SeenMessage\",\"nativeType\":null,\"relationName\":\"SeenMessageToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Chat\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChatType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ChatOwner\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ChatUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inviteLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pinnedMessageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pinnedMessage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"PinnedMessage\",\"relationFromFields\":[\"pinnedMessageId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"ChatMessages\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChatMember\",\"nativeType\":null,\"relationName\":\"ChatToChatMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ChatMember\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chat\",\"nativeType\":null,\"relationName\":\"ChatToChatMember\",\"relationFromFields\":[\"chatId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ChatMemberToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"nativeType\":null,\"default\":\"member\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isMuted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chatId\",\"userId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chatId\",\"userId\"]}],\"isGenerated\":false},\"Message\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chat\",\"nativeType\":null,\"relationName\":\"ChatMessages\",\"relationFromFields\":[\"chatId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sender\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"MessageToUser\",\"relationFromFields\":[\"senderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"MessageType\",\"nativeType\":null,\"default\":\"text\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaUrls\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaThumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repliedToId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repliedTo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageReplies\",\"relationFromFields\":[\"repliedToId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageReplies\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reaction\",\"nativeType\":null,\"relationName\":\"MessageToReaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seenBy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SeenMessage\",\"nativeType\":null,\"relationName\":\"MessageToSeenMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEdited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"pinnedByChat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chat\",\"nativeType\":null,\"relationName\":\"PinnedMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reaction\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emoji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ReactionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToReaction\",\"relationFromFields\":[\"messageId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"messageId\",\"emoji\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"messageId\",\"emoji\"]}],\"isGenerated\":false},\"SeenMessage\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SeenMessageToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToSeenMessage\",\"relationFromFields\":[\"messageId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seenAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"messageId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"messageId\"]}],\"isGenerated\":false}},\"enums\":{\"UserStatus\":{\"values\":[{\"name\":\"ON_VACATION\",\"dbName\":null},{\"name\":\"AT_WORK\",\"dbName\":null},{\"name\":\"IN_MEETING\",\"dbName\":null},{\"name\":\"AVAILABLE\",\"dbName\":null},{\"name\":\"AWAY\",\"dbName\":null},{\"name\":\"BUSY\",\"dbName\":null},{\"name\":\"DO_NOT_DISTURB\",\"dbName\":null},{\"name\":\"AT_GYM\",\"dbName\":null},{\"name\":\"AT_HOME\",\"dbName\":null},{\"name\":\"TRAVELING\",\"dbName\":null},{\"name\":\"SLEEPING\",\"dbName\":null},{\"name\":\"IN_CLASS\",\"dbName\":null},{\"name\":\"STUDYING\",\"dbName\":null},{\"name\":\"AT_COFFEE_SHOP\",\"dbName\":null},{\"name\":\"OUT_FOR_LUNCH\",\"dbName\":null},{\"name\":\"OFFLINE\",\"dbName\":null},{\"name\":\"AT_DOCTOR\",\"dbName\":null},{\"name\":\"ON_CALL\",\"dbName\":null},{\"name\":\"IN_CONFERENCE\",\"dbName\":null},{\"name\":\"TAKING_BREAK\",\"dbName\":null},{\"name\":\"ON_TRIP\",\"dbName\":null},{\"name\":\"AT_PARTY\",\"dbName\":null},{\"name\":\"IN_TRANSIT\",\"dbName\":null},{\"name\":\"ON_HOLIDAY\",\"dbName\":null},{\"name\":\"WORKING_REMOTELY\",\"dbName\":null}],\"dbName\":null},\"ChatType\":{\"values\":[{\"name\":\"private\",\"dbName\":null},{\"name\":\"group\",\"dbName\":null},{\"name\":\"channel\",\"dbName\":null}],\"dbName\":null},\"Role\":{\"values\":[{\"name\":\"owner\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"member\",\"dbName\":null}],\"dbName\":null},\"MessageType\":{\"values\":[{\"name\":\"text\",\"dbName\":null},{\"name\":\"image\",\"dbName\":null},{\"name\":\"video\",\"dbName\":null},{\"name\":\"audio\",\"dbName\":null},{\"name\":\"file\",\"dbName\":null},{\"name\":\"sticker\",\"dbName\":null},{\"name\":\"system\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")

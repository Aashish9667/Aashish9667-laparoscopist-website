import { PayloadRequest } from 'payload';

type PayloadAccessCallback = ({ req }: { req: PayloadRequest }) => boolean;

/**
 * Join multiple access control callbacks together, requiring all to return true.
 * @param callbacks - An array of access control callback functions.
 * @returns A new callback function that returns true only if all provided callbacks return true.
 */
export const and = (...callbacks: PayloadAccessCallback[]): PayloadAccessCallback => {
  return (args) => callbacks.every((callback) => callback(args));
};

/**
 * Join multiple access control callbacks together, requiring at least one to return true.
 * @param callbacks - An array of access control callback functions.
 * @returns A new callback function that returns true if at least one provided callback returns true.
 */
export const or = (...callbacks: PayloadAccessCallback[]): PayloadAccessCallback => {
  return (args) => callbacks.some((callback) => callback(args));
};

/**
 * Checks if the user is authenticated (i.e., a user object exists in the request).
 * @param req - The Payload request object containing user information.
 * @returns True if the user is authenticated, false otherwise.
 */
export const authenticated: PayloadAccessCallback = ({ req }) => {
  return Boolean(req.user);
};

/**
 * Checks if the authenticated user is a customer (belongs to the 'customers' collection).
 * @param req - The Payload request object containing user information.
 * @returns True if the user is a customer, false otherwise.
 */
export const customer: PayloadAccessCallback = ({ req }) => {
  return Boolean(req.user && req.user.collection === 'customers');
};

/**
 * Checks if the authenticated user belongs to the 'users' collection.
 * @param req - The Payload request object containing user information.
 * @returns True if the user is from the 'users' collection, false otherwise.
 */
export const user: PayloadAccessCallback = ({ req }) => {
  return Boolean(req.user && req.user.collection === 'users');
};

/**
 * Checks if the authenticated user has admin role.
 * @param req - The Payload request object containing user information.
 * @returns True if the user is an admin, false otherwise.
 */
export const admin: PayloadAccessCallback = ({ req }) => {
  return Boolean(req.user && req.user.collection === 'users' && req.user?.role === 'admin');
};

/**
 * Checks if the authenticated user has editor role.
 * @param req - The Payload request object containing user information.
 * @returns True if the user is an editor, false otherwise.
 */
export const editor: PayloadAccessCallback = ({ req }) => {
  return Boolean(req.user && req.user.collection === 'users' && req.user?.role === 'editor');
};

/**
 * Check if the authenticated user has staff role.
 * @param req - The Payload request object containing user information.
 * @returns True if the user is a staff, false otherwise.
 */
export const staff: PayloadAccessCallback = ({ req }) => {
  return Boolean(req.user && req.user.collection === 'users' && req.user?.role === 'staff');
};

/**
 * Always allows access, regardless of user authentication or role.
 * @returns Always true.
 */
export const anyone: PayloadAccessCallback = () => true;

/**
 * Access control for published content: allows access to published items or if the user is authenticated as a backoffice user.
 * @param req - The Payload request object containing user information.
 * @returns True for backoffice users, or a query object for published content otherwise.
 */
export const published = ({ req }: { req: PayloadRequest }) => {
  if (req.user && req.user.collection === 'users') {
    return true;
  }
  return {
    or: [
      {
        _status: {
          equals: 'published',
        },
      },
      {
        _status: {
          exists: false,
        },
      },
    ],
  };
};

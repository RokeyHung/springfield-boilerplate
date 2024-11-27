import { storage } from '@/App';

export const StorageKeys = {
  AccessToken: 'AccessToken',
  UserInfo: 'UserInfo',
};

const storeDataObject = (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    storage.set(key, jsonValue);
  } catch (error) {
    console.error('Failed to store object data:', error);
    throw error;
  }
};

const getDataObject = <T>(key: string): null | T => {
  try {
    const jsonValue = storage.getString(key);
    return jsonValue ? (JSON.parse(jsonValue) as T) : null;
  } catch (error) {
    console.error('Failed to get object data:', error);
    return null;
  }
};

const deleteKeys = (keys: string[]) => {
  keys.forEach((key) => {
    storage.delete(key);
  });
};

export const useStorage = () => {
  return { deleteKeys, getDataObject, storeDataObject };
};

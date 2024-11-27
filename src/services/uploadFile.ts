import type { IBaseRes } from './base';

import { ApiKeys } from '@/constants/global';

import instance from './instance';

interface IFileUploadResponse {
  acl: string;
  bucket: string;
  contentDisposition: string;
  contentEncoding: string;
  contentType: string;
  encoding: string;
  etag: string;
  fieldname: string;
  key: string;
  link: string;
  location: string;
  mimetype: string;
  originalname: string;
  serverSideEncryption: string;
  size: number;
  storageClass: string;
}

export const uploadSingleService = async (payload: IFileInfoUpload) => {
  const formData = new FormData();
  formData.append('file', payload);

  const response = await instance.post<IBaseRes<IFileUploadResponse>>(
    ApiKeys.UploadSingle,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data.data;
};

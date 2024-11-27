export type IBaseRes<T> = {
  data: T;
  path: string;
  statusCode: number;
  timestamp: Date;
};

export type PaginationResponse<T> = {
  data: T;
  pagination: {
    currentPage: number;
    pageSize: number;
    total: number;
    totalPage: number;
  };
  statusCode: number;
};

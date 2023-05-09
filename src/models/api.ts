export type ApiResponse<T extends object> = {
  items: T[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};

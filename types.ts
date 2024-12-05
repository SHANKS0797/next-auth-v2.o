export interface loginCredentials {
  emailId: string;
  mobNo: string;
  password: string;
  screenSize: string;
  token: string;
  sessionID: string;
}

export interface loginResponse {
  id: number;
  firstName: string;
  lastName: string;
  mobNo: string;
  emailId: string;
  password: any;
  isActive: boolean;
  createdDate: string;
  lastLoginDate: string;
  profilePhoto: any;
  iswholeSaler: boolean;
  token: string;
  screenSize: any;
  sessionID: any;
  isGuest: boolean;
  isPasswordSetOnNewSystem: boolean;
  shippingAddressId: number;
  isBlackList: boolean;
  aliasName: any;
  allowSplitOrders: boolean;
  isRedditor: boolean;
  allowCombineOrder: boolean;
  requiredAuthorized: boolean;
}

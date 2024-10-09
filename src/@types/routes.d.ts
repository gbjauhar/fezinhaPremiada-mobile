export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Dev: undefined;
  WithdrawValue: undefined;
  WithdrawPIX: undefined;
  Home: undefined;
  ShowCart: undefined;
  PayingOptions: undefined;
  Order: undefined;
  QrCode: undefined;
  Balance: undefined;
  DepositValue: undefined;
  DepositPIX: {
    value: number;
  };
  CreditHistory: undefined;
  SelectMethod: undefined;
  Success: {
    title?: string;
    message: string;
  };
  Titles: undefined;
  Menu: undefined;
  UserInfo: undefined;
  UserLink: undefined;
  PersonalData: undefined;
  Address: undefined;
  UpdatePassword: undefined;
  Earnings: undefined;
  ClientList: undefined;
  ClientDetail: {
    client: UserAPI;
  };
  TitleScan: undefined;
  Reports: undefined;
  CommissionsReport: undefined;
  AllSales: undefined;
  SingleSale: {
    sales: SalesAPI;
  };
  ClientSales: undefined;
  RegisterClient: undefined;
  Winners: undefined;
  WithdrawMethod: undefined;
  QuickSale: undefined;
};

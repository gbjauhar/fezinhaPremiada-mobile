import {ParamListBase, RouteProp} from '@react-navigation/native';
import {Balance} from '@screens/Balance';
import {Order} from '@screens/Cart/Order';
import {PayingOptions} from '@screens/Cart/PayingOptions';
import {QrCode} from '@screens/Cart/QrCode';
import {ShowCart} from '@screens/Cart/ShowCart';
import {CreditHistory} from '@screens/CreditHistory';
import {DepositPIX} from '@screens/Deposit/DepositPIX';
import {DepositValue} from '@screens/Deposit/DepositValue';
import {Home} from '@screens/Home';
import {SelectMethod} from '@screens/Reckoning/SelectMethod';
import {WithdrawPIX} from '@screens/Withdraw/WithdrawPIX';
import {WithdrawValue} from '@screens/Withdraw/WithdrawValue';
import {RootStackParamList} from '../@types/routes';
import {Success} from '@screens/Success';
import {Titles} from '@screens/Titles';
import {Menu} from '@screens/Menu';
import {UserInfo} from '@screens/UserInfo';
import {UserLink} from '@screens/UserLink';
import {PersonalData} from '@screens/PersonalData';
import {Address} from '@screens/Address';
import {UpdatePassword} from '@screens/UpdatePassword';
import {Earnings} from '@screens/Earnings';
import {ClientList} from '@screens/Clients/List';
import {ClientDetail} from '@screens/Clients/Detail';
import {TitleScan} from '@screens/FisicalTitle/Scan';
import {ReportsMenu} from '@screens/Reports/Menu';
import {CommissionsReport} from '@screens/Reports/Commissions';
import {AllSales} from '@screens/SaleHistory/AllSales';
import {SingleSale} from '@screens/SaleHistory/SingleSale';
import {ClientSales} from '@screens/Reports/ClientSales';
import RegisterClient from '@screens/RegisterClient';
import {Winners} from '@screens/Reports/Winners';
import {WithdrawMethod} from '@screens/Withdraw/WithdrawMethod';
import {QuickSale} from '@screens/QuickSale';

type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

interface IScreens {
  name: keyof RootStackParamList;
  component: ScreenComponentType<ParamListBase, string>;
  header?: string;
}

export const screens: IScreens[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Balance',
    component: Balance,
    header: 'Saldo',
  },
  {
    name: 'ShowCart',
    component: ShowCart,
  },
  {
    name: 'PayingOptions',
    component: PayingOptions,
    header: 'Carrinho',
  },
  {
    name: 'Order',
    component: Order,
  },
  {
    name: 'QrCode',
    component: QrCode,
  },

  {
    name: 'WithdrawValue',
    component: WithdrawValue,
    header: 'Sacar',
  },
  {
    name: 'WithdrawPIX',
    component: WithdrawPIX,
    header: 'PIX',
  },
  {
    name: 'DepositValue',
    component: DepositValue,
    header: 'Depositar saldo',
  },
  {
    name: 'DepositPIX',
    component: DepositPIX,
    header: 'Pagamento',
  },
  {
    name: 'CreditHistory',
    component: CreditHistory,
    header: 'Pagamento',
  },
  {
    name: 'SelectMethod',
    component: SelectMethod,
    header: 'Selecione',
  },
  {
    name: 'Success',
    component: Success,
  },
  {
    name: 'Titles',
    component: Titles,
  },
  {
    name: 'Menu',
    component: Menu,
    header: 'Perfil',
  },
  {
    name: 'UserInfo',
    component: UserInfo,
    header: 'Meus dados',
  },
  {
    name: 'UserLink',
    component: UserLink,
    header: 'Vincular',
  },
  {
    name: 'PersonalData',
    component: PersonalData,
    header: 'Dados pessoais',
  },
  {
    name: 'Address',
    component: Address,
    header: 'Endereço',
  },
  {
    name: 'UpdatePassword',
    component: UpdatePassword,
    header: 'Atualizar senha',
  },
  {
    name: 'Earnings',
    component: Earnings,
    header: 'Ganhos',
  },
  {
    name: 'ClientList',
    component: ClientList,
    header: 'Clientes',
  },
  {
    name: 'ClientDetail',
    component: ClientDetail,
    header: 'Detalhe do Cliente',
  },
  {
    name: 'TitleScan',
    component: TitleScan,
    header: 'Venda Física',
  },
  {
    name: 'Reports',
    component: ReportsMenu,
    header: 'Relatórios',
  },
  {
    name: 'CommissionsReport',
    component: CommissionsReport,
    header: 'Comissões',
  },
  {
    name: 'AllSales',
    component: AllSales,
  },
  {
    name: 'SingleSale',
    component: SingleSale,
    header: 'Vendas',
  },
  {
    name: 'ClientSales',
    component: ClientSales,
    header: 'Vendas por Cliente',
  },
  {
    name: 'RegisterClient',
    component: RegisterClient,
    header: 'Cadastro de cliente',
  },
  {
    name: 'Winners',
    component: Winners,
    header: 'Ganhadores',
  },
  {
    name: 'WithdrawMethod',
    component: WithdrawMethod,
    header: 'Saque',
  },
  {
    name: 'QuickSale',
    component: QuickSale,
  },
];

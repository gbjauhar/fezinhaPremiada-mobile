enum Status {
  DONE = 'DONE',
  PENDING = 'PENDING',
  CANCEL = 'CANCEL',
}

interface History {
  id: string;
  name: string;
  description: string;
  value: number;
  status: Status;
  deposit_type: string;
  type: 'DEPOSIT' | 'WITHDRAW' | 'COMMISSION' | 'OTHER';
  created_at: Date | string;
  updated_at: Date | string;
}

interface ValueHistory {
  history: {
    title: string;
    data: History[];
  }[];
  commission: number;
}

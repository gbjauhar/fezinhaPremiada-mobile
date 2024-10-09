interface DrawItem {
  id: string;
  name: string;
  value?: number;
  image?: string;
}

interface Edition {
  id: string;
  name: string;
  draw_date: Date | string;
  order: number;
  draw_items: DrawItem[];
  winner: UserAPI;

  created_at: Date | string;
}

interface Title {
  id: string;
  name: string;
  dozens: string[];
  bar_code: string;
  qr_code: string;
  chances: number;
  value: number;
  user_id: string;
  edition: Edition;
}

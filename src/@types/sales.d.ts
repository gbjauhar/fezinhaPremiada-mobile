interface SalesAPI {
  description: string;
  id: string;
  name: string | null;
  payment_form: string | null;
  reference: string | null;
  status: string;
  user: UserAPI;
  user_id: string;
  buyed_title_id: string;
  selled_id: string;
  buyed_titles: {
    description: string;
    fisical_titles: [];
    id: string;
    name: string | null;
    payment_form: string | null;
    reference: string | null;
    status: string;
    user: UserAPI;
    user_id: string;
    total: number;
    created_at: string | Date;
    updated_at: string | Date;

    titles: {
      bar_code: string;
      chances: number;
      created_at: string | Date;
      dozens: [];
      edition: {
        draw_date: string | Date;
        draw_items: [];
        id: string;
        name: string;
        order: number;
        created_at: string | Date;
        updated_at: string | Date;
      };
      edition_id: string;
      id: string;
      name: string;
      qr_code: string;
      update_at: string | Date;
      user_id: string | null;
      value: number;
    };
  };
  created_at: string | Date;
  updated_at: string | Date;
}

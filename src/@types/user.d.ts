interface UserAPI {
  id: string;
  name: string;
  email: string;
  doccument: string;
  code: string;
  cel: string;
  value: number;
  credit: number;
  credit_limit: number;
  associated_to?: string;
  address?: string;
  complement?: string;
  neighborhood?: string;
  residence_number?: string;
  cep?: string;
  uf?: string;
  country?: string;
  city?: string;

  created_at: string | Date;
  updated_at: string | Date;
}

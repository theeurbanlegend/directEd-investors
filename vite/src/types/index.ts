export interface Props {
    children: React.ReactNode;
  }

export interface User {
  name : string
} 
export interface Pool {
  _id: string;
  pool_name: string;
  pool_slug: string;
  pool_desc: string;
  pool_target_amnt: string;
  pool_progress: number;
  pool_token: number;
  pool_token_value: number;
  pool_extra_desc: string;
  pool_link: string;
}

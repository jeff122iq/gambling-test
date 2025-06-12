export class GameDto {
  id: number;
  producer: string;
  title: string;
  category: string;
  theme: string;
  has_freespins: boolean;
  feature_group: string;
  devices: string[];
  licenses: string[];
  jackpot_type: string;
  forbid_bonus_play: boolean;
  lines: number;
  payout: number;
  volatility_rating: string;
  has_jackpot: boolean;
  hd: boolean;
  restrictions: Record<string, any>;
  has_live: boolean;
}

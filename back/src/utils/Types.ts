export type emotionType =
  | "신이 난"
  | "편안한"
  | "감사한"
  | "자신감"
  | "불안"
  | "슬픔"
  | "분노"
  | "상처";

export interface emotion {
  Excited: number;
  Comfort: number;
  Confidence: number;
  thanks: number;
  Sadness: number;
  Anger: number;
  Anxiety: number;
  hurt: number;
}

export type Scope = "all" | "friend" | "off";

export enum friendStatus {
  Waiting,
  Accepted,
  Rejected,
  Cancellation,
}
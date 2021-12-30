import { BaseModel } from "./baseModel";
import { Rule } from "./rule";

export interface Streamer extends BaseModel {
  twitchChannelId: string;
  twitchChannelName: string;
  twitchDisplayName: string;
  rules: Rule[]
}

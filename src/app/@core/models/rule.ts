import { BaseModel } from "./baseModel";
import { RuleAction } from "./ruleAction";

export interface Rule extends BaseModel {
  name: string;
  event: string;
  isActive: boolean;
  isDeleted: boolean;
  associatedViewerName: string;
  associatedRewardId: string;
  actions: RuleAction[]
}

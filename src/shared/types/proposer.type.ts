import { ProposerType } from './proposer-type.enum.js';

export type Proposer = {
  name: string;
  email: string;
  avatarPath?: string;
  password: string;
  proposerType: ProposerType;
 }

import { ProposerType } from './proposer-type.enum.js';

export type Proposer = {
  firstName: string;
  lastName: string;
  email: string;
  avatarPath?: string;
  password: string;
  proposerType: ProposerType;
 }

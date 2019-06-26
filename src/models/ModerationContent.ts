import { Contributors } from './Contributors';
import { ContentState } from './ContentState';

export interface ModerationContent {
	moderator?: Contributors;
	state: ContentState;
	reason?: string;
}

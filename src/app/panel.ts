import { Panelists } from './panelists';
import { Status } from './status';

export class Panel {
  panelNumber!: number;
  panelists: Panelists[] = [];
  isActive!: boolean;
  status: Status = new Status();
}
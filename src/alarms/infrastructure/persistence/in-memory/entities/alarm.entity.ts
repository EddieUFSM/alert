import { Entity } from 'typeorm';
import { AlarmItemEntity } from './alarm-item.entity';

@Entity('alarms')
export class AlarmEntity {
  id: string;
  name: string;
  severity: string;
  triggerAt: Date;
  isAcknowledged: boolean;
  items: Array<AlarmItemEntity>;
}

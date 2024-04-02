import { Column, Entity, PrimaryColumn } from 'typeorm';
import { AlarmItemEntity } from './alarm-item.entity';

@Entity('alarms')
export class AlarmEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  severity: string;

  triggerAt: Date;
  isAcknowledged: boolean;
  items: Array<AlarmItemEntity>;
}

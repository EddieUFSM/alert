import { Injectable } from '@nestjs/common';
import { AlarmRepository } from '../../../../application/ports/alarm.repository';
import { Alarm } from '../../../../domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { AlarmEntity } from '../entities/alarm.entity';

@Injectable()
export class InMemoryAlarmRepository implements AlarmRepository {
  private readonly alarms = new Map<string, AlarmEntity>();

  async findAll(): Promise<Alarm[]> {
    const entities = await Array.from(this.alarms.values());
    return entities.map((item) => AlarmMapper.toDomain(item));
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persistenceModel = AlarmMapper.toPersistence(alarm);
    this.alarms.set(persistenceModel.id, persistenceModel);

    const newEntity = await this.alarms.get(persistenceModel.id);
    return AlarmMapper.toDomain(newEntity);
  }
}
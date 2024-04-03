import { AlarmReadModel } from 'src/alarms/domain/read-models/alarm.read-models';

export abstract class UpsertMaterializedAlarmRepository {
  abstract upsert(
    alarm: Pick<AlarmReadModel, 'id'> & Partial<AlarmReadModel>,
  ): Promise<void>;
}

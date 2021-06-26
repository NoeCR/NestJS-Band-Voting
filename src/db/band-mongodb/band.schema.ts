import { EBandStatus } from '@common/enum/band-status.enum';
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type BandDocument = DbBand & Document;

@Schema()
export class DbBand {
  @Prop({ required: true, unique: true, index: true }) bandId: string;
  @Prop({ default: Date.now }) createdAt: Date;
  @Prop({ required: true, unique: true }) bandName: string;
  @Prop({ required: true }) description: string;
  @Prop({ default: 0 }) votes: number;
  @Prop({ default: EBandStatus.ACTIVE }) status: EBandStatus;

  // static collectionName = (): string => 'band';

  static collectionName(): string {
    return 'band';
  }
}


export const BandSchema = SchemaFactory.createForClass(DbBand);
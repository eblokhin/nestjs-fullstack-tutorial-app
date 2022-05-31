import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type VideoDocument = Video & Document;

@Schema()
class Video {
  @Prop()
  title: string;

  @Prop()
  video: string;

  @Prop()
  coverImage: string;

  @Prop({ default: Date.now() })
  uploadDate: Date;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  createBy: User;
}

export const VideoSchema = SchemaFactory.createForClass(Video);

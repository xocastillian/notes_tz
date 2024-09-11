import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/notes_tz'), UserModule, NoteModule],
})
export class AppModule {}

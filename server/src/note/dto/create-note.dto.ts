import { IsNotEmpty, IsString, IsMongoId, IsOptional } from 'class-validator'

export class CreateNoteDto {
  @IsString()
  @IsOptional()
  title: string

  @IsString()
  @IsNotEmpty()
  content: string
}

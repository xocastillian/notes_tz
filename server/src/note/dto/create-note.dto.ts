import { IsNotEmpty, IsString, IsMongoId } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateNoteDto {
	@IsString()
	@IsNotEmpty()
	content: string

	@IsMongoId()
	@IsNotEmpty()
	@Type(() => String)
	user: string
}

import { NotFoundException } from '@nestjs/common'
import mongoose from 'mongoose'

export const validateObjectId = (id: string, message: string): void => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundException(message)
  }
}

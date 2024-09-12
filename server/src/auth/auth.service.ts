import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'
import { User } from 'src/user/entities/user.entity'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findUserByEmail(email)
    const decryptPassword = await argon2.verify(user.password, password)

    if (user && decryptPassword) return user
    throw new UnauthorizedException('User not found or invalid credentials')
  }

  async login(user: User) {
    const { email, name, notes, _id } = user
    return {
      _id,
      notes,
      email,
      name,
      access_token: this.jwtService.sign({
        email: user.email,
        name: user.name,
      }),
    }
  }

  async getUser(user: User) {
    const { email, name, notes, _id } = user
    return {
      _id,
      notes,
      email,
      name,
      access_token: this.jwtService.sign({
        email: user.email,
        name: user.name,
      }),
    }
  }
}

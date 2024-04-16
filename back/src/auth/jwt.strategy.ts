import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'sfectoria',
    });
  }

  async validate(payload: any) { // payload is the decoding of the JWT payload={id:...}
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });
    return payload;
  }
}

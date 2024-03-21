import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @ApiProperty()
    username: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    pass: string;
}

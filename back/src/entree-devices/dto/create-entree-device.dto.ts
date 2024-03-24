import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';
export class CreateEntreeDeviceDto {
    @ApiProperty()
    @IsString()
    title :string;
    @ApiProperty()
    @IsString()
    rapport :string;
    @ApiProperty()
    @IsString()
    statues :string;
    @ApiProperty()
    @IsString()
   description :string;


}

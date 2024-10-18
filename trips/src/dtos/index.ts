import { IsString, MinLength, MaxLength } from "class-validator";

export class TripCreatedDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  public title: string;

  @IsString()
  @MinLength(10)
  @MaxLength(20)
  public desc: string;
}
